import { combineReducers} from 'redux'
import count from './count'
// combineReducers：複数のReducerを結合

export default combineReducers({ count })
// export default combineReducers({ count , foo, bar})
