import React from "react";
import Card from "./Card";
import List from "./List";
import "./index.less";
import { Tabs, Layout } from "antd";
import { connect } from "react-redux";
import axios from "axios";

const { TabPane } = Tabs;
const { Content } = Layout;

class Home extends React.Component {
  render() {
    this.props.getAllList();
    return (
      <div className="home-page">
        <Layout>
          <Content style={{ margin: "24px 16px 0" }}>
            <Tabs defaultActiveKey="1" tabBarGutter={0} type="card">
              <TabPane tab="卡片" key="1">
                <Card></Card>
              </TabPane>
              <TabPane tab="列表" key="2">
                <List></List>
              </TabPane>
            </Tabs>
          </Content>
        </Layout>
      </div>
    );
  }
}
export default connect(
  null,
  dispatch => ({
    getAllList() {
      axios.get("http://localhost:3000/post").then(response => {
        let result = response;
        dispatch({
          type: "DATA_LIST",
          dataList: result.data
        });
      });
    }
  })
)(Home);
