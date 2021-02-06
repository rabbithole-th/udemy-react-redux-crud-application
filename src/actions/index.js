export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
//Action：typeをキーに持つオブジェクト
//ActionCreator：actionを実行する関数
export const increment = () => ({
    type: INCREMENT
})
//ActionCreator
export const decrement = () => ({
    type: DECREMENT
})
