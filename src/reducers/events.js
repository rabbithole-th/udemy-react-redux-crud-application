//アプリケーションのカウントのstateを持つファイル=reducer
//reducer：変化させるもの=関数※
//※純粋関数である必要がある（入力値不変、外部の値不変、関数内部の値不変）

import _ from 'lodash'
import {
  CREATE_EVENT,
  READ_EVENTS,
  READ_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
} from '../actions'

//state：状態（valueというpropsを持っている）
//action：アクションの種類
//stateの変化をactionの種類毎に定義する＝reducerの役割
export default (events = {}, action) => {
  switch (action.type) {
    case CREATE_EVENT:
    case READ_EVENT:
      console.log(action.response.data)
      //{id: 9, token: "token123", title: "Let's have an event 9!", body: "This is the body for event 9.", created_at: "2021-05-14T01:01:08.882Z", …}
    case UPDATE_EVENT:
      const data = action.response.data
      return { ...events, [data.id]: data }
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id')
    case DELETE_EVENT:
      delete events[action.id]
      //「...」：スプレッド演算子
      return { ...events }
    default:
      return events
  }
}