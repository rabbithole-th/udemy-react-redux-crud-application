import React, {Component} from 'react';
import { connect } from 'react-redux';
import _ from 'lodash'
import { Link } from 'react-router-dom'

//ActionCreatorをimport
import { readEvents } from '../actions';

class EventsIndex extends Component {
  //コンポーネントがマウントされたときのイベント
  componentDidMount() {
    console.log('componentDidMount')
    //httpリクエストを投げる
    this.props.readEvents()
  }

  renderEvents() {
    console.log(this.props.events)
    return _.map(this.props.events, event => (
      <tr>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  render() {
    //【reducerの流れ】
    //click時にincrementを実行
    // ⇒countのreducerに定義されているtypeがINCREMENTのactionが実行される
    // ⇒countのpropsであるvalueがインクリメントされる
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {this.renderEvents()}
          </tbody>
        </table>
        <Link to="/events/new">New Events</Link>
      </React.Fragment>
    )
  }
}

//componentに渡すpropsを制御する
//stateをコンポーネントに渡す
const mapStateToProps = state => ({events: state.events})
//reducerを呼び出して、reduxで管理しているstateを更新する
//
const mapDispatchToProps = {readEvents}
//こんな書き方もできる
//const mapDispatchToProps = ({increment, decrement})

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)

