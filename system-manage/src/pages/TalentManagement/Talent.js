import React, { Component } from 'react';
import SearchDate from '@/components/SearchDate';
import TalentList from '@/components/TalentList';
import { Button,Row,Col} from 'antd';
import {connect} from 'dva';
import { routerRedux } from 'dva/router';

@connect(({talent,loading})=>(
    {
    talent,
    isLoading:loading.effects['talent/fetchTalent'],
}))
export default class Talent extends Component {
    state={
        startDate:null,
        endDate:null
    }
    componentDidMount(){
        const {dispatch}=this.props;
        dispatch({
            type:'talent/fetchTalent'
        })
    }
    dateRange=range=>{
        this.setState({
            startDate:range[0],
            endDate:range[1]
        })
    }
    routerJump=()=>{
        console.log("路由跳转")
        const { dispatch } = this.props;
        dispatch(routerRedux.push({
            pathname: '/talent/edit'
        }))
    }
   
    render() {
       const {talent:{talents}}=this.props;
       const { dispatch } = this.props;
        return (
            <div>
                <Row gutter={24}>
                    <Col xl={10} lg={24} md={24} sm={24} xs={24}> <SearchDate range={this.dateRange.bind(this)} /> </Col>
                    <Col xl={14} lg={24} md={24} sm={24} xs={24}> <Button onClick={this.routerJump}>搜索</Button></Col>
                </Row>
                <TalentList data={talents} onJump={this.routerJump}  />
            </div>
        )
    }

}
