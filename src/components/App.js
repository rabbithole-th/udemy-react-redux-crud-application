import React, {Component} from 'react';
import { connect } from 'react-redux';

//ActionCreatorをimport
import { increment, decrement } from '../actions';


class App extends Component {
  render() {
    const props = this.props

    //【reducerの流れ】
    //click時にincrementを実行
    // ⇒countのreducerに定義されているtypeがINCREMENTのactionが実行される
    // ⇒countのpropsであるvalueがインクリメントされる
    return (
      <React.Fragment>
        <div>value: { props.value }</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}

//componentに渡すpropsを制御する
//stateをAppに渡す
const mapStateToProps = state => ({value: state.count.value})
//reducerを呼び出して、reduxで管理しているstateを更新する
//
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})
//こんな書き方もできる
//const mapDispatchToProps = ({increment, decrement})

export default connect(mapStateToProps, mapDispatchToProps)(App)

