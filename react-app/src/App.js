import React, { Component } from "react";
import "./App.css";
import Nav from "./components/nav";
import ReadContent from "./components/readContent";
import CreateContent from "./components/createContent";
import UpdateContent from "./components/updateContent";
import Subject from "./components/subject";
import Control from "./components/control";

// 유사 자바스크립트이다. 자바스크립트가 아니기 때문에 콘솔창에서는 에러가 뜸. 규칙이 잘 지켜지지 않은 상태다.
// jsx 인데 이렇게 만든 소스코드를 create-react-app 이 javascript 로 컨버팅해준다고 생각하면 된다.
class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3; // ui 에 영향을 줄 이유가 하등없으므로, state 값으로 지정하지 않는다. 해도 되지만 불필요한 렌더링 발생.
    this.state = {
      mode: "create",
      selected_content_id: 2,
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
  getReadContent() {
    var i = 0;
    while (i < this.state.contents.length) {
      var data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        return data;
        break;
      }
      i++;
    }
  }
  getContent() {
    var _title,
      _desc,
      _article = null;

    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === "read") {
      var _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>; //mode 의 값이 read, welcome 일 때, article 은 초기의 ReadContent.
    } else if (this.state.mode === "create") {
      _article = (
        <CreateContent
          onSubmit={function (_title, _desc) {
            // setState 를 통하여 새로운 content 값 추가.
            this.max_content_id++;
            // this.state.contents.push({ id: this.max_content_id, title: _title, desc: _desc }); 이방식은 이후에 퍼포먼스 개선에 불편함을 준다. 직접 원본 데이터에 추가하는것이기 때문.
            var _contents = Array.from(this.state.contents);
            _contents.push({ id: this.max_content_id, title: _title, desc: _desc });
            this.setState({
              contents: _contents,
              mode: "read",
              selected_content_id: this.max_content_id,
            });
          }.bind(this)}
        ></CreateContent>
      );
    } else if (this.state.mode === "update") {
      _content = this.getReadContent();
      _article = (
        <UpdateContent
          data={_content}
          onSubmit={function (_id, _title, _desc) {
            var _contents = Array.from(this.state.contents);
            var i = 0;
            while (i < _contents.length) {
              if (_contents[i].id === _id) {
                _contents[i] = { id: _id, title: _title, desc: _desc };
                break;
              }
              i++;
            }
            this.setState({
              contents: _contents,
              mode: "read",
            });
          }.bind(this)}
        ></UpdateContent>
      );
    }

    return _article;
  }

  render() {
    // console.log("app render");

    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: "welcome" });
          }.bind(this)}
        ></Subject>

        <Nav
          onChangePage={function (id) {
            this.setState({ mode: "read", selected_content_id: Number(id) }); // 여기서 받아오는 id 는 문자. 그래서 숫자로 바꿔준다.
          }.bind(this)}
          data={this.state.contents}
        ></Nav>

        <Control
          onChangeMode={function (_mode) {
            this.setState({
              mode: _mode,
            });
          }.bind(this)}
        ></Control>

        {this.getContent()}
      </div>
    );
  }
}

// props 를 이용하면, <Subject></Subject> 처럼 사용자정의 태그 같은 것을 만들 수 있다.
// 리팩토링 과정의 하나이다.

export default App;
