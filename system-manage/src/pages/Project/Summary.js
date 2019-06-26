import React, { Component } from 'react';
import { Col, Row, Form, Button, Input, DatePicker, List, Card, Steps, Pagination, Avatar, Tooltip } from 'antd';
import styles from './project.less';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
const { RangePicker } = DatePicker;
const { Meta } = Card;
const { Step } = Steps;
const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae', '#686869'];
@connect(({ myproject, loading }) => ({
    myproject,
    isLoading: loading.effects['myproject/fetchProjects']
}))
export default class CommentManage extends Component {
    state = {
        current: 1,
        pageSize: 5,
    }
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch({
            type: 'myproject/fetchProjects'
        });
    }

    onChange = (date, dateString) => {
        console.log(date, dateString);
    }
    timedemo = arr =>
        arr.map((item, index) => {
            return (
                <Step key={index} title={item.status} description={item.date + item.event}></Step>
            )
        })
    userList = arr =>
        arr.map((item, index) => {
            let color = colorList[Math.floor(Math.random() * colorList.length)];
            let str = item.username +'\/' + item.position;
            return (
                <Tooltip title={str}>
                    <Avatar style={{ backgroundColor: color, verticalAlign: 'middle', marginLeft: '-8px' }} size="large">
                        {item.username}
                    </Avatar>
                </Tooltip>
            )
        })
    //根据数组的某一属性排序
    compare = property => {
        return function (a, b) {
            var value1 = a[property];
            var value2 = b[property];
            if (property == 'date') {
                return new Date(value1.replace(/-/, '/')) - new Date(value2.replace(/-/, '/'));
            } else {
                return value1 - value2;
            }

        }
    }
    onPageChange = page => {
        this.setState({
            current: page
        })
    }
    chooseProject = value => {
        const { dispatch } = this.props;
        dispatch(routerRedux.push({
            pathname: '/project/detail/' + value.id,
            id: value.id
        }))
    }
    createProject=()=>{
        const { dispatch } = this.props;
        dispatch(routerRedux.push({
            pathname: '/project/create'
        }))
    }
    render() {
        const { myproject: { projects } } = this.props;
        const arrProjects = projects.map(item => {
            item.milepost.sort(this.compare("date"))
            return item;

        })
        const { current, pageSize } = this.state;
        const total = projects.length;
        return (
            <div>
                <Button type="primary" className={styles.createBotton} onClick={this.createProject}>创建项目</Button>
                <p style={{ clear: 'both' }}></p>
                <p>
                    请选择日期范围： <RangePicker onChange={this.onChange} />      <Button>搜索</Button>
                </p>
                <List
                    size="large"
                    dataSource={projects.slice((current - 1) * pageSize, current * pageSize)}
                    renderItem={item => (
                        <List.Item key={item.id}>
                            <Card
                                title={item.name}
                                onClick={() => this.chooseProject(item)}
                                className={styles.theCard}
                            >
                                <Steps current={item.current}>
                                    {this.timedemo(item.milepost)}
                                </Steps>
                                <Meta title={item.department} description={item.summary} />
                                <p className={styles.projectInformation}>负责人：{item.owner} &nbsp;&nbsp;创建日期：{item.create_time}
                                </p>
                                <p className={styles.avatarSetting}>
                                    团队成员：{this.userList(item.partner)}
                                </p>
                            </Card>
                        </List.Item>
                    )}
                />
                <Pagination
                    className={styles.pagination}
                    current={this.state.current}
                    pageSize={pageSize}
                    onChange={this.onPageChange}
                    total={total} />
            </div>
        )
    }
}