import { combineReducers} from 'redux'
// redux-formに関するreducerをインポート（分かりやすくするため、as formで名称を変える）
import { reducer as form } from 'redux-form'
// イベント一覧に関するreducerをimport（stateとしてvalueを持っている）
import events from './events'

// combineReducers：複数のReducerを結合
export default combineReducers({ events, form })
// export default combineReducers({ count , foo, bar})
