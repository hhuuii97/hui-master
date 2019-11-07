import React from "react";
import logo from "./../assets/image.jpg";
import "./Card.less";
import { connect } from "react-redux";

class Card extends React.Component {
  render() {
    console.log(this.props.dataList);
    return (
      <div className="card-page">
        <ul>
          {this.props.dataList.map(item => {
            return (
              <li key={item.guid}>
                <div className="left">
                  <img src={logo} alt="" />
                </div>
                <div className="center">
                  <h2>{item.prjName}</h2>
                  <p>项目经理：{item.prjManager}</p>
                  <p>立项日期：{item.prjStartDate.split(" ")[0]}</p>
                  <p>
                    任务：{item.taskCount} 完成：{item.taskDoneCount} 进行：
                    {item.taskDoingCount}
                  </p>
                </div>
                <div className="right">
                  <p>进行中</p>
                  <p>★</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default connect(state => {
  return {
    dataList: state.dataList
  };
})(Card);
