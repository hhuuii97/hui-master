import React from "react";
import { Table } from "antd";
import { connect } from "react-redux";

class List extends React.Component {
  columns = [
    { title: "所属品类", dataIndex: "productCategory" },
    { title: "项目类别", dataIndex: "IT测试" },
    { title: "项目编号", dataIndex: "" },
    { title: "项目名称", dataIndex: "prjName" },
    { title: "项目状态", dataIndex: "projectStatus" },
    { title: "项目经理", dataIndex: "prjManager" },
    { title: "所属部门", dataIndex: "department" },
    { title: "项目计划时间", dataIndex: "prjStartDate" }
  ];
  render() {
    return (
      <Table
        rowKey
        columns={this.columns}
        dataSource={this.props.dataList}
      ></Table>
    );
  }
}
export default connect(state => {
  return {
    dataList: state.dataList
  };
})(List);
