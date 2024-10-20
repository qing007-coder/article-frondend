import request from '@/utils/request'

export const getArticleService = () => 
  request.get('/article/getArticle')

export const sendArticleService = ({title, content}) => 
  request.post('/article/sendArticle', {title, content})

export const getArticleAllInfo = (id) => 
  request.post('/article/getArticleAllInfo', {id})

export const getJudgeArticleQueue = () => 
  request.get('/privilege/getArticleInQueue')

export const judgeArticles = (article_id, status) => 
  request.post('/privilege/judgeArticles', {article_id, status})