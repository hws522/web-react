import React, { Component } from "react";
import "./App.css";
import Nav from "./components/nav";
import Article from "./components/article";
import Subject from "./components/subject";
// 유사 자바스크립트이다. 자바스크립트가 아니기 때문에 콘솔창에서는 에러가 뜸. 규칙이 잘 지켜지지 않은 상태다.
// jsx 인데 이렇게 만든 소스코드를 create-react-app 이 javascript 로 컨버팅해준다고 생각하면 된다.
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "read",
      subject: { title: "WEB", sub: "World Wide Web!" },
      welcome: { title: "Welcome", desc: "Hello, React!!!" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is HyperText ..." },
        { id: 2, title: "CSS", desc: "CSS is for design ..." },
        { id: 3, title: "JavaScript", desc: "JavaScript is for interactive ..." },
      ],
    };
  }
  // state 값을 초기화시키기 위한 과정.
  // component 가 실행될 때, constructor 가 있다면 가장 먼저 실행되어 초기화를 담당한다.
  // react 에서는 props 에서 "this.state.subject.title" 로 묶어주면 문자가 된다.
  // 자바스크립트의 코드로서 실행되게 하고싶으면 {} 를 써주면 된다.

  render() {
    // console.log("app render");
    var _title,
      _desc = null;

    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === "read") {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }

    return (
      <div className="App">
        {/* <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject> */}
        {/* <Subject title="React" sub="For UI"></Subject> */}

        <header>
          <h1>
            <a
              href="/"
              onClick={function (e) {
                console.log(e);
                e.preventDefault();
                this.state.mode = "welcome";
                this.setState({
                  mode: "welcome",
                });
              }.bind(this)}
            >
              {this.state.subject.title}
            </a>
          </h1>
          {this.state.subject.sub}
        </header>

        <Nav data={this.state.contents}></Nav>
        <Article title={_title} desc={_desc}></Article>
      </div>
    );
  }
}

// props 를 이용하면, <Subject></Subject> 처럼 사용자정의 태그 같은 것을 만들 수 있다.
// 리팩토링 과정의 하나이다.

export default App;
