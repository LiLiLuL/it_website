import React, { Component } from 'react';
import { Card,Tabs } from 'antd';
import router from 'umi/router';
import { connect } from 'dva';
const TabPane=Tabs.TabPane;
@connect(({article,loading})=>({
  listLoading:loading.effects['article/fetchArticles'],

}))
export default class ReleaseArticles extends Component{
    componentDidMount() {
      const { dispatch } = this.props;
      dispatch({
        type: 'article/fetchArticles',
      });
    }
  
    callback=key=> {
        console.log(key);
      }
    onTabChange = key => {
    const { match } = this.props;
    switch (key) {
        case 'articles':
        router.push(`${match.url}/list`);
        break;
        case 'operation':
        router.push(`${match.url}/operation`);
        break;
        default:
        break;
    }
    };
    render(){
       const tabList=[
        {
            key: 'articles',
            tab: (
              <span>
                查阅 <span style={{ fontSize: 14 }}></span>
              </span>
            ),
        },
        {
            key: 'operation',
            tab: (
              <span>
                操作 <span style={{ fontSize: 14 }}></span>
              </span>
            ),
        },
       ];
       const {children,location,match,listLoading}=this.props;
        return (
            <div>
             <Card
              bordered={false}
              tabList={tabList}
              onTabChange={this.onTabChange}
              activeTabKey={location.pathname.replace(`${match.path}/`, '')}
              loading={listLoading}
            >
            {children}
            </Card>
             
            </div>                                                                                                                  
        )
    }
}