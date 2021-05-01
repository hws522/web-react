# Start React with Egoing

<br><br>

### - reactjs.org 에서 community -> Debugging 을 들어가면 React Developer Tools 가 있다. Chrome 확장 기능이다.

<br>

### **JSX**

---

```js
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
```

유사 자바스크립트이다. 자바스크립트가 아니기 때문에 콘솔창에서는 에러가 뜬다. 규칙이 잘 지켜지지 않은 상태다.

jsx 인데 이렇게 만든 소스코드를 create-react-app 이 javascript 로 컨버팅해준다고 생각하면 된다.

### **Props**

---

props 를 이용하면, <Subject></Subject> 처럼 사용자정의 태그 같은 것을 만들 수 있다.

리팩토링 과정의 하나이다.

<br>

### **State**

---

props 의 값에 따라 내부구현에 필요한 데이터들이라고 생각할 수 있다.

state 는 컴포넌트를 좀 더 다양하고, 복잡한 일을 하려고 할 때 필수적인 요소다.

state 를 알아보는 과정에서 props 또한 좀 더 잘 알 수 있게 된다.

<br>

### **Props vs State**

---

```js
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: { title: "WEB", sub: "World Wide Web!" },
    };
  }
```

state 값을 초기화시키기 위한 과정.

component 가 실행될 때, constructor 가 있다면 가장 먼저 실행되어 초기화를 담당한다.

react 에서는 props 에서 `"this.state.subject.title"` 로 묶어주면 문자가 된다.

자바스크립트의 코드로서 실행되게 하고싶으면 `{}` 를 써주면 된다.
