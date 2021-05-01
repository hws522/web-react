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

```js
lists.push(
  <li>
    <a href={"/content/" + data[i].id}>{data[i].title}</a>
  </li>
);
```

앨리먼트 여러개를 자동으로 생성하는 위와 같은 소스는 콘솔에서 아래와 같은 에러가 나타난다.

`Warning: Each child in a list should have a unique "key" prop.`

각각의 리스트항목들은 키라고 하는 prop 를 가지고 있어야 한다는 뜻이다.

```js
while (i < data.length) {
  lists.push(
    <li key={data[i].id}>
      <a href={"/content/" + data[i].id}>{data[i].title}</a>
    </li>
  );
  i++;
}
```

우리가 만드는 애플리케이션에서 사용하려고 한다보다는, 리액트가 내부적으로 필요해서 우리에게 요청하는 사항이기 때문에 그냥 넣으면 된다.

이렇게 App 에서는 state 라고하는 내부정보를 사용했고, 그것을 자식한테 전달할 때는 props 를 통해서 전달하고 있다.

App 의 입장에서는 토픽이 내부적으로 돌아가는지 알 필요가 없다.

어떤 형태의 정보를 전달하면 되는지에 대한, 사용자의 입장에서 알아야하는것만 알면 되는 것이다.

<br>
