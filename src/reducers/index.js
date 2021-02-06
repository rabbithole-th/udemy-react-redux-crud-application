import { combineReducers} from 'redux'
// カウントに関するstateをimport（stateとしてvalueを持っている）
import count from './count'
// combineReducers：複数のReducerを結合

export default combineReducers({ count })
// export default combineReducers({ count , foo, bar})
