import qs from 'qs';
import pickBy from 'lodash.pickby';
import { CryptoJS } from 'jsrsasign';
import { key, secret, baseUrl } from './config.js';

const contentType = 'application/x-www-form-urlencoded';

function encrypt(option, method, accept, contentType) {
  var _Headers =
    'X-Ca-Key' + ":" + key + "\n" +
    "X-Ca-Stage" + ":" + "RELEASE" + "\n";
  var paramsData = '';
  var arr = Object.keys(option.data).sort();
  for (var k in arr) {
    if (option.data[arr[k]] || option.data[arr[k]] === 0) {
      paramsData += arr[k] + "=" + option.data[arr[k]] + "&"
    } else {
      paramsData += arr[k] + "&"
    }
  }
  var _Url = '';
  if (paramsData.length) {
    _Url = option.url + "?" + paramsData.substring(0, paramsData.length - 1)
  } else {
    _Url = option.url
  }
  var stringToSign = method.toUpperCase() + "\n" + accept + "\n" + "\n" + (contentType || '') + "\n" + "\n" + _Headers + _Url;
  var hmacSha256 = CryptoJS.HmacSHA256(stringToSign, secret);
  var hashInBase64 = CryptoJS.enc.Base64.stringify(hmacSha256);
  return { hashInBase64 };
}

export default (that, params) => {

  const instance = that.create({
    timeout: 30000,
    headers: {
      'Accept': contentType,
      "X-Ca-Stage": "RELEASE",
      'X-Ca-Key': key,
      'X-Ca-Signature-Headers': 'X-Ca-Key,X-Ca-Stage',
    }
  });
  instance.interceptors.request.use(config => {
    config.baseURL = baseUrl;
    const tempData = config.data || {};
    if (config.method === 'post' || config.method === 'put') {
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
      config.data = qs.stringify(config.data || {});
    }
    const { hashInBase64 } = encrypt({
      url: config.url,
      data: pickBy(Object.assign(tempData, config.params || {}), v => v !== null && v !== undefined),
    }, config.method.toUpperCase(), config.headers.Accept, config.headers['Content-Type']);
    config.headers['X-Ca-Signature'] = hashInBase64;
    config.headers['Authorization'] = '';
    return config;
  });
  

  return instance(params).then(response => {
    if (response.data?.ok === false) {
      return Promise.reject(response.data)
    }
    return response.data;
  }).catch(error => {
    let status = '';
    if (error?.response?.status) {
      status = error.response.status;
    }
    return Promise.reject(error);
  });
};


