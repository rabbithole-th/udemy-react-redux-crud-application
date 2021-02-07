import { combineReducers} from 'redux'
// イベント一覧に関するreducerをimport（stateとしてvalueを持っている）
import events from './events'

// combineReducers：複数のReducerを結合
export default combineReducers({ events })
// export default combineReducers({ count , foo, bar})
