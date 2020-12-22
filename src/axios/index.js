import axios from 'axios';


axios.interceptors.request.use(config =>
// 在发送请求之前做些什么
  config
  , error =>
// 对请求错误做些什么
  Promise.reject(error),
);

// 添加响应拦截器
axios.interceptors.response.use(response =>
// 对响应数据做点什么
  response
  , error =>
// 对响应错误做点什么
  Promise.reject(error),
);

axios.defaults.baseURL = 'http://localhost:8080/#';

export default axios;
