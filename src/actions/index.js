import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'
export const CREATE_EVENT = 'CREATEA_EVENT'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

//Action：typeをキーに持つオブジェクト
//ActionCreator：actionを実行する関数
//export const readEvents = async () => {
//    const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
//    console.log(response)
//    return ({ type: READ_EVENTS, response })
//}
export const readEvents = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
  dispatch({ type: READ_EVENTS, response })
}

export const postEvent = values => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`, values)
    dispatch({ type: CREATE_EVENT, response })
  }
  