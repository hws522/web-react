import React, { Component } from "react";
import "./App.css";
import Nav from "./components/nav";
import Article from "./components/article";
import Subject from "./components/subject";
// 유사 자바스크립트이다. 자바스크립트가 아니기 때문에 콘솔창에서는 에러가 뜸. 규칙이 잘 지켜지지 않은 상태다.
// jsx 인데 이렇게 만든 소스코드를 create-react-app 이 javascript 로 컨버팅해준다고 생각하면 된다.
class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="WEB" sub="word wide web!"></Subject>
        <Subject title="React" sub="For UI"></Subject>
        <Nav></Nav>
        <Article title="HTML" desc="HTML is HyperText Markup Language."></Article>
      </div>
    );
  }
}

// props 를 이용하면, <Subject></Subject> 처럼 사용자정의 태그 같은 것을 만들 수 있다.
// 리팩토링 과정의 하나이다.

export default App;
