import React, { Component } from "react";

class Nav extends Component {
  render() {
    // console.log("app render");
    var lists = [];
    var data = this.props.data;

    var i = 0;

    while (i < data.length) {
      lists.push(
        <li key={data[i].id}>
          <a
            href={"/content/" + data[i].id}
            data-id={data[i].id} //data-'' 형식으로 넣으면 리액트상에서 dataset.'' 형식으로 들어간다.
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id); // data-aaa 로 저장했다면, dataset-aaa 인 것이다.
            }.bind(this)}
            // 속성을 이용하지 않는 방법도 있다.
            // .bind(this, data[i].id) 로 넣으면 function(id, e) 로 되고, onChangePage(id) 라고 적용 가능하다.
          >
            {data[i].title}
          </a>
        </li>
      );
      i++;
    }

    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}

export default Nav;
