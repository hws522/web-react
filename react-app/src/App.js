import React, { Component } from "react";
import "./App.css";

class Article extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}
class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <a href="1.html">HTML</a>
          </li>
          <li>
            <a href="2.html">CSS</a>
          </li>
          <li>
            <a href="3.html">JavaScript</a>
          </li>
        </ul>
      </nav>
    );
  }
}
class Subject extends Component {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
} // 유사 자바스크립트이다. 자바스크립트가 아니기 때문에 콘솔창에서는 에러가 뜸. 규칙이 잘 지켜지지 않은 상태다.
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
