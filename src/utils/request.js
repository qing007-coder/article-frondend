import axios from 'axios'
import { useUserStore } from '@/stores/index';
import { ElMessage } from 'element-plus'
import router from '@/router'

const baseURL = 'http://127.0.0.1:8080'

const instance = axios.create({
  baseURL,
  timeout: 10000
})

instance.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  const user = useUserStore()
  if (user.token) {
    config.headers.Authorization = user.token
  }
  return config
}, error => {
  console.log(error);
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(response => {
  const user = useUserStore()
  if (response.data.status === 200) {
    return response
  }
  if (response.data.status === 401) {
    router.push('/login')
    user.removeToken()
  }
  ElMessage.error(response.data.message || '服务异常')
  return Promise.reject(response.data);
}, error => {
  
  console.log(error);
  return Promise.reject(error);
});

export default instance

export { baseURL }