import { instance } from 'api'

export const getFeedInfoAPI = async id => {
  try {
    const res = await instance.get(`/post/${id}`)
    return res
  } catch (e) {
    console.error(e)
    throw e
  }
}

export const getFeedListAPI = async () => {
  try {
    const res = await instance.get('/post')
    return res
  } catch (e) {
    console.error(e)
    throw e
  }
}

export const getNextFeedAPI = async () => {
  try {
    const res = await instance.get('/post/?limit=10&skip=20')
    return res
  } catch (e) {
    console.error(e)
    throw e
  }
}
