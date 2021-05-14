import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'
import { Link } from 'react-router-dom'

//Material-ui
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

//ActionCreatorをimport
import { readEvents } from '../actions'

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
      <TableRow key={event.id}>
        <TableRowColumn>{event.id}</TableRowColumn>
        <TableRowColumn>
          <Link to={`/events/${event.id}`}>
            {event.title}
          </Link>
        </TableRowColumn>
        <TableRowColumn>{event.body}</TableRowColumn>
      </TableRow>
    ))
  }

  render() {
    const style = {
      position: "fixed",
      right: 12,
      bottom: 12
    }
    //【reducerの流れ】
    //click時にincrementを実行
    // ⇒countのreducerに定義されているtypeがINCREMENTのactionが実行される
    // ⇒countのpropsであるvalueがインクリメントされる
    return (
      <React.Fragment>
        <FloatingActionButton style={style} containerElement={<Link to="/events/new" />}>
          <ContentAdd />
        </FloatingActionButton>
        <Table>
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
          >
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Body</TableHeaderColumn>
            </TableRow>
          </TableHeader>

          <TableBody displayRowCheckbox={false}>
            {this.renderEvents()}
          </TableBody>
        </Table>

        
      </React.Fragment>
    )
  }
}

//componentに渡すpropsを制御する
//stateをコンポーネントに渡す
const mapStateToProps = state => ({ events: state.events })
//reducerを呼び出して、reduxで管理しているstateを更新する
//
const mapDispatchToProps = ({ readEvents })
//こんな書き方もできる
//const mapDispatchToProps = ({increment, decrement})

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)