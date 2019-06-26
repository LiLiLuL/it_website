import React, { Component } from 'react';
import {connect} from 'dva';
import {Steps,Button,Spin}from 'antd';
import {routerRedux} from 'dva/router';
import styles from './project.less';

const {Step}=Steps;



@connect(({myproject})=>({
    myproject
}))
export default class ProjectDetail extends Component{
    state={
        theId:this.props.location.id,
    }
    componentWillMount(){
        const {dispatch}=this.props;
        const {theId}=this.state;
        const params={
            id:theId
        }
        dispatch({
            type:'myproject/fetchTheProject',
            payload:params
        })
    }
    timedemo=arr=>
        arr.map((item,index)=>{
            return (
                <Step key={index} title={item.status} description={item.date+item.event}></Step>
            )
        })
    edit=id=>{
        const {dispatch}=this.props;
        dispatch(routerRedux.push({
            pathname:'/project/detail/edit/'+id,
            id:id
        }))
        
    }
    delete=id=>{
        console.log(id);
    }
    render(){
        const {myproject:{theProject}}=this.props;
        const {myproject:{projects}}=this.props;
        const project=theProject==[]?undefined:theProject.pop();
        return (
            <div>
                {project===undefined?(<Spin size="large" />):(
                     <div>
                     <p>{project.name}</p>
                     <Steps current={project.current}>
                         {this.timedemo(project.milepost)}
                     </Steps>
                     <p> {project.summary}</p>
                     <p> {project.create_time}&nbsp;&nbsp;{project.owner}</p>
                     <p className={styles.operation}>
                         <Button type="primary" onClick={()=>this.edit(project.id)}>编辑</Button>
                         <Button type="warning" onClick={()=>this.delete(project.id)}>删除</Button>
                     </p>
                 </div>
                )}
               
            </div>
        )
    }
}