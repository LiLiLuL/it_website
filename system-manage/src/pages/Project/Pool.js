import React, { Component } from 'react';
import MyTag from './MyTag';
import styles from './project.less';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import {List,Button,Pagination,Card,Steps,Avatar,Tooltip} from 'antd';

const { Meta } = Card;
const { Step } = Steps;
const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae', '#686869'];
const status=[{id:11,name:'未完成'},{id:12,name:'已完成'}]
@connect(({ myproject, department,loading }) => ({
    myproject,
    department,
    isLoading: loading.effects['myproject/fetchProjects']
}))
export default class CommentManage extends Component{
    state = {
        current: 1,
        pageSize: 8,
        checkedDep:[],
        checkedStatus:[]
    }
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch({
            type: 'myproject/fetchProjects'
        });
        dispatch({ type: 'department/fetchDepartments' });
    }
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
   
    chooseProject = value => {
        const { dispatch } = this.props;
        dispatch(routerRedux.push({
            pathname: '/project/detail/' + value.id,
            id: value.id
        }))
    }
    checkedDep=item=>{
        console.log(item);
        const {checkedDep,checkedStatus}=this.state;
        if(item.id>10){
            let flag=checkedStatus.indexOf(item);
            if(flag==-1){
                this.setState((prev)=>{
                    checkedStatus:prev.checkedStatus.push(item);
   
                })
           }else{
               this.setState((prev)=>{
                   checkedStatus:prev.checkedStatus.splice(flag,1);
               })
   
           }
            

        }else{
            let flag=checkedDep.indexOf(item);
            if(flag==-1){
                 this.setState((prev)=>{
                     checkedDep:prev.checkedDep.push(item);
    
                 })
            }else{
                this.setState((prev)=>{
                    checkedDep:prev.checkedDep.splice(flag,1);
                })
    
            }

        }
       
    }
    checkedTag=arr=>
       arr.map(item=>{
           return (
            <MyTag  onCheckTag={()=>this.checkedDep(item)}  index={item.id}>{item.name}</MyTag>
           )
       })
    onSearch=()=>{
        console.log(this.state);
    }
    render(){
        const { myproject: { projects } } = this.props;
        const total = projects.length;
        const { current, pageSize } = this.state;
        const {department:{departments}}=this.props;
      
        return (
            <div>
               按条件搜索项目池
               <p>
                 <span>选择部门：</span>
                 {this.checkedTag(departments)}
               </p>
               <p>
                 <span>选择状态：</span>
                 {this.checkedTag(status)}
                 <Button type="default" onClick={this.onSearch}>搜索</Button>
               </p>
               <p className={styles.classfy}>进行中项目</p>
               <List
                    size="large"
                    dataSource={projects.slice((current - 1) * pageSize, current * pageSize)}
                    className={styles.theList}
                    renderItem={item => (
                        <List.Item key={item.id}>
                            <Card
                                title={item.name}
                                onClick={() => this.chooseProject(item)}
                                className={styles.theCard}
                            >
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
                <p className={styles.classfy}>已完成项目</p>
                <List
                    size="large"
                    dataSource={projects.slice((current - 1) * pageSize, current * pageSize)}
                    className={styles.theList}
                    renderItem={item => (
                        <List.Item key={item.id}>
                            <Card
                                title={item.name}
                                onClick={() => this.chooseProject(item)}
                                className={styles.theCard}
                            >
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