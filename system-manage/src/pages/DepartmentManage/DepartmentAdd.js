import React, { Component } from 'react';
import { Row, Col, Menu,Tabs, Divider } from 'antd';
import { connect } from 'dva';
import { validate } from '@babel/types';
import styles from './department.less'
import Display from './display';
import Add from './Add';
import { Switch, Route, routerRedux } from 'dva/router';
const { TabPane } = Tabs;

@connect(() => ({}))

export default class DepartmentManage extends Component {
   
    handleClick = (e) => {
        console.log("click ", e);
        console.log(this.props);
        const { dispatch } = this.props;
        switch (e.key) {
            case "search":
                dispatch(routerRedux.push('/department/search'));
                break;
            case "add":
                dispatch(routerRedux.push('/department/theadd'));
                break;
            default:
                return;
        }
    }
    render() {
        console.log(this.props.match.url);


        return (

            <div>
                 <Tabs 
                     defaultActiveKey="1"
                     tabPosition="left"
                     size="large"
                     type="card"
                     >
                    <TabPane tab="查阅" key="1"  closable="false">
                       <Display/>
                    </TabPane>
                    <TabPane tab="新建部门" key="2"  closable="false">
                       <Add />
                    </TabPane>
                   


                </Tabs>
            </div>
        )
    }
}