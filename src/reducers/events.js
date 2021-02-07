//アプリケーションのカウントのstateを持つファイル=reducer
//reducer：変化させるもの=関数※
//※純粋関数である必要がある（入力値不変、外部の値不変、関数内部の値不変）

import { READ_EVENTS } from '../actions';

//state：状態（valueというpropsを持っている）
//action：アクションの種類
//stateの変化をactionの種類毎に定義する＝reducerの役割
export default (state = {}, action) => {
    switch (action.type) {
        case READ_EVENTS:
            return state
        default:
            // デフォルト時は何もしない
            return state
    }
}