import React, { Component } from "react";

class Control extends Component {
  render() {
    // console.log("app render");
    return (
      <ui>
        <li>
          <a
            href="/create"
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangeMode("create");
            }.bind(this)}
          >
            Create
          </a>
        </li>
        <li>
          <a
            href="/update"
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangeMode("update");
            }.bind(this)}
          >
            Update
          </a>
        </li>
        <li>
          <input
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangeMode("delete");
            }.bind(this)}
            type="button"
            value="delete"
          ></input>
        </li>
      </ui>
    );
  }
}

export default Control;
