# Start React with Egoing

<br><br>

### - reactjs.org 에서 community -> Debugging 을 들어가면 React Developer Tools 가 있다. Chrome 확장 기능이다.

<br>

### **JSX**

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

props 를 이용하면, <Subject></Subject> 처럼 사용자정의 태그 같은 것을 만들 수 있다.

리팩토링 과정의 하나이다.
