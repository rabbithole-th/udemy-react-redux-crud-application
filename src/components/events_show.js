import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm} from 'redux-form'
import { Link } from 'react-router-dom'

// submitのpostに関するイベント
import { getEvent, deleteEvent, putEvent } from '../actions';

class EventsShow extends Component {
  // コンストラクタ
  constructor(props) {
    super(props)
    // submitイベントをバインド
    this.onSubmit = this.onSubmit.bind(this)
    this.onDeleteClick = this.onDeleteClick.bind(this)
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

  //非同期処理としてSubmitを実装
  //values：入力値
  async onSubmit(values) {
    await this.props.postEvent(values)
    this.props.history.push("/")
  }

  async onDeleteClick() {
    const { id } = this.props.match.params
    await this.props.deleteEvent(id)
    this.props.history.push("/")
  }

  render() {
    // pristine：何も入力されていない状態
    // submitting：submitボタンが押された状態
    const { handleSubmit, pristine, submitting } = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div><Field label="Title" name="title" type="text" component={this.renderField}></Field></div>
        <div><Field label ="Body" name="body" type="text" component={this.renderField}></Field></div>
        <div>
          <input type="submit" value="Submit" disabled={pristine || submitting} />
          <Link to="/" >Cancel</Link>
          <Link to="/" onClick={this.onDeleteClick}>Delete</Link>
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
const mapDispatchToProps = {deleteEvent}

export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventShowForm'})(EventsShow)
)
