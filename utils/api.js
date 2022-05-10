import request from "./index.js"

// 获取验证码
export const register = (that, data) => {
  return request(that, {
    url: `/api/phone/register`,
    method: 'post',
    data,
  })
}

// 获取验证码
export const officialWebsite = (that, data) => {
  return request(that, {
    url: `/tools/official_website`,
    method: 'post',
    data,
  })
}