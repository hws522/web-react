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

### **Event**

---

event, props, state 이들이 서로 상호작용하면서 애플리케이션의 역동성을 만들기때문에 같이 생각해보아야 한다.

react 에서는 props 값이나 state 값이 바뀌면, 해당되는 컴포넌트의 render 함수가 호출되도록 약속되어있다.
화면이 다시 그려진다는 뜻이다.

<br>

### **Event 설치**

---

javascript 에서는 클릭 시 실행되는 event 는 `onclick` 이다.

react 에는 react 만의 규칙이 있다.

`onClick={}` 으로 정의 한다.

```js
<a href="/"
    onClick={function () {
        alert("hi");
        }}
>
```

이렇게 정의할 수 있으나, 경고창이 떴을 때 확인 버튼을 누르면 페이지가 새로고침된다.

react 의 장점을 살릴 수 없는 형태이다.

```js
<a
    href="/"
    onClick={function (e) {
        console.log(e);
        e.preventDefault();
        }}
>
```

이렇게 하면 새로고침하지 않는다.

preventDefault() 때문에 가능한 것이다. 우리는 태그들에 대해서 이벤트를 걸 때, 태그들의 기본적인 동작을 못하게 해야할 때가 있다.

그 때 사용하면 된다.

<br>

### **Event에서 state 변경**

---

WEB 을 클릭했을 때, mode 를 'welcome' 으로 바꿔 자동으로 'welcome' 모드에 맞는 `<Article>` 로 출력해주려면 어떻게 해야 할까.

```js
<a
    href="/"
    onClick={function (e) {
        // console.log(e);
        e.preventDefault();
        // this.state.mode = "welcome";
        this.setState({
            mode: "welcome",
            });
            }.bind(this)}
            >

```

클릭을 했을 때 실행되는 function 안에서 this.state.mode = 'welcome' 이라고만 입력하면 에러가 난다.

저 함수 안에서 this 는 텅 비어있기 때문에 state 를 찾을 수 없기 때문이다.

이때에는 위의 코드처럼 `.bind(this)` 를 입력해주면 this 를 찾을 수 있다.

하지만 이것만으로는 실행되지 않는다. react 에서는 요구하는 규칙이 있다.

`setState` 를 사용하고 그안에 state 내용을 넣어주면 된다.
