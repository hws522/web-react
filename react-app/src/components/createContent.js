import React, { Component } from "react";

class CreateContent extends Component {
  render() {
    return (
      <article>
        <h2>Create</h2>
        <form
          action="/create_process"
          method="post"
          onSubmit={function (e) {
            e.preventDefault(); // 리액트를 이용하여 페이지전환없이 하고싶기에, onSubmit 이 작동했을 때 페이지가 바뀌지 않도록 함.
            alert("submit!!!");
          }.bind(this)}
        >
          <p>
            <input type="text" name="title" placeholder="title"></input>
          </p>
          <p>
            <textarea name="desc" placeholder="description"></textarea>
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
export default CreateContent;
