import request from '@/utils/request'

export const getVerifyCode = ({email}) => 
  request.post('/api/sendEmail', {email})

// 注册接口
export const userRegisterService = ({email, account, password, verifyCode}) => 
  request.post('/api/reg', {email, account, password, verifyCode})

// 登录接口
export const userLoginService = ({account, password}) => 
  request.post('/api/login', {account, password})

export const userInfoService = () => 
  request.get('/api/getUserInfo')

export const userAllInfoService = () => 
  request.get('/user/getUserInfo')

export const modifyPasswordService = ({oldPassword, newPassword}) => 
  request.post('/user/modifyPassword', {oldPassword, newPassword})