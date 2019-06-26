import React, { Component } from 'react';
import { Button, Divider,Timeline,List,Card,Tag} from 'antd';
import {connect} from 'dva';
import styles from './demeanour.less';
@connect(({ demeanour,department,loading }) => ({
    demeanour,
    department,
    isLoading: loading.effects['demeanour/fetchActivities']
}))
export default class Activities extends Component{
    componentDidMount(){
        const { dispatch } = this.props;
        dispatch({
            type: 'demeanour/fetchActivities'
        });
        dispatch({
            type:'department/fetchDepartments'
        })
    }
   render(){
    const { demeanour: { activities } } = this.props;
    const { department: {departments} }=this.props;
    const theDepart=departments.filter(item=>{
        return item.id!=1;
    })
    console.log(theDepart);
    const timedemo=activities.map(item=>{
        return (
                <Timeline.Item>
                <p>{item.theme}&nbsp;&nbsp;{item.date}</p>
                <List 
                   rowKey="id"
                   dataSource={item.information}
                   className={styles.theList}
                   renderItem={images=>(
                    <List.Item>
                      <Card
                        hoverable
                        cover={<img alt="" src={images.type=='img'?images.url:images.poster} />}
                        
                        >
                       </Card>  
                    </List.Item>
                   )}
                >                   
                </List>
                </Timeline.Item>
        )
    })

    return (
        <div>
            {
                theDepart.map(item=>(
                    <Tag visible="true">
                        {item.name}
                    </Tag>
                ))
            }
            <Timeline mode="alternate" className={styles.theTimeline}>
                {timedemo}
            </Timeline>
        </div>
    )
   }
}