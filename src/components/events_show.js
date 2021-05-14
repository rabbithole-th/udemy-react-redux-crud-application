import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

// submitのpostに関するイベント
import { getEvent, deleteEvent, putEvent } from '../actions'

class EventsShow extends Component {
  // コンストラクタ
  constructor(props) {
    super(props)
    // submitイベントをバインド
    this.onSubmit = this.onSubmit.bind(this)
    this.onDeleteClick = this.onDeleteClick.bind(this)
  }

  // 
  componentDidMount() {
    const { id } = this.props.match.params
    if (id) this.props.getEvent(id)
  }

  //Fieldコンポーネントのレンダラー
  renderField(field) {
    //touched：フィールドを操作したかどうか
    const { input, label, type, meta: { touched, error } } = field

    return (
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    )
  }

  async onDeleteClick() {
    const { id } = this.props.match.params
    await this.props.deleteEvent(id)
    this.props.history.push('/')
  }

  //非同期処理としてSubmitを実装
  //values：入力値
  async onSubmit(values) {
    await this.props.putEvent(values)
    this.props.history.push('/')
  }

  render() {
    // pristine：何も入力されていない状態
    // submitting：submitボタンが押された状態
    // invalid：バリデーションエラーが発生した状態
    const { handleSubmit, pristine, submitting, invalid } = this.props

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div><Field label="Title" name="title" type="text" component={this.renderField} /></div>
        <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>

        <div>
          <input type="submit" value="Submit" disabled={pristine || submitting || invalid} />
          <Link to="/" >Cancel</Link>
          <Link to="/" onClick={this.onDeleteClick} >Delete</Link>
        </div>
      </form>
    )
  }
}

const validate = values => {
  const errors = {}
  
  // 未入力チェック
  if (!values.title) errors.title = "Enter a title, please."
  if (!values.body) errors.body = "Enter a body, please."
  
  return errors
}

//reducerを呼び出して、reduxで管理しているstateを更新する
//
const mapStateToProps = (state, ownProps) => {
  const event = state.events[ownProps.match.params.id]
  return { initialValues: event, event }
}

const mapDispatchToProps = ({ deleteEvent, getEvent, putEvent })

//enableReinitialize：initialValuesが変わるたびにフォームを初期化するかどうか（reduxFormの予約語）
export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventShowForm', enableReinitialize: true })(EventsShow)
)
