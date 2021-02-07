import React, {Component} from 'react';
import { connect } from 'react-redux';

//ActionCreatorをimport
import { readEvents } from '../actions';

class EventsIndex extends Component {
  //コンポーネントがマウントされたときのイベント
  componentDidMount() {
    console.log('hihi!')
    //httpリクエストを投げる
    this.props.readEvents()
  }
  render() {
    const props = this.props

    //【reducerの流れ】
    //click時にincrementを実行
    // ⇒countのreducerに定義されているtypeがINCREMENTのactionが実行される
    // ⇒countのpropsであるvalueがインクリメントされる
    return (
      <React.Fragment>
        <div>value: { props.value }</div>
      </React.Fragment>
    )
  }
}

//componentに渡すpropsを制御する
//stateをAppに渡す
const mapStateToProps = state => ({})
//reducerを呼び出して、reduxで管理しているstateを更新する
//
const mapDispatchToProps = dispatch => ({readEvents})
//こんな書き方もできる
//const mapDispatchToProps = ({increment, decrement})

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)

