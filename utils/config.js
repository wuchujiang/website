//阿里云api网关使用的key，secret
export const key = process.env.NODE_ENV === 'development' ? "203810450" : '203810451';

export const secret = process.env.NODE_ENV === 'development' ? "6qvbhkluygnkm58b49pcphdomh1q5d9o":  "fa70o4nrgiqrz7tk2f20gksluh7qyg3s";

export const baseUrl = process.env.NODE_ENV === 'development' ? "https://api-stag.xiangshuheika.com" : "https://api.xiangshuheika.com"
