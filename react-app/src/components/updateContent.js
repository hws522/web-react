import React, { Component } from "react";

class UpdateContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.data.id,
      title: this.props.data.title,
      desc: this.props.data.desc,
    };
    this.inputFormHandler = this.inputFormHandler.bind(this);
  }

  inputFormHandler(e) {
    this.setState({ [e.target.name]: e.target.value }); // [] 은 최신 문법 중 하나.
  }

  render() {
    return (
      <article>
        <h2>Update</h2>
        <form
          action="/create_process"
          method="post"
          onSubmit={function (e) {
            e.preventDefault(); // 리액트를 이용하여 페이지전환없이 하고싶기에, onSubmit 이 작동했을 때 페이지가 바뀌지 않도록 함.
            this.props.onSubmit(this.state.id, this.state.title, this.state.desc);
          }.bind(this)}
        >
          <input type="hidden" name="id" value={this.state.id}></input>
          <p>
            <input type="text" name="title" placeholder="title" value={this.state.title} onChange={this.inputFormHandler}></input>
          </p>
          <p>
            <textarea onChange={this.inputFormHandler} name="desc" placeholder="description" value={this.state.desc}></textarea>
          </p>
          <p>
            <input type="submit"></input>
          </p>
        </form>
      </article>
    );
  }
}

// onSubmit 은 form 태그 내부에서 submit 버튼을 눌렀을 때 실행되도록하는 이벤트
// value={this.props.data.title} 로 하면 props 는 읽기전용이기 때문에 수정할 수가 없다.
// props 를 state 화 시켜줘야 한다.
// input 의 값을 바꿨을 때, state 값이 바뀌어야만 읽지전용이 아니게 된다.
export default UpdateContent;
