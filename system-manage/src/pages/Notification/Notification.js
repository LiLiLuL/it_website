

import React, { Component } from 'react';
import {connect} from 'dva';
import {Form,Button,Input,DatePicker,Card}from 'antd';
import styles from './notice.less';

const TheForm=Form.create()(
    class extends React.Component {
        state={
            startTime:null,
            endTime:null,
            endOpen:false
        }
        disabledStartDate=startTime=>{
            const {endTime} =this.state;
            if(!startTime||!endTime){
                return false;
            }
            return startTime.valueOf()>endTime.valueOf();
        }
        disabledEndDate=endTime=>{
            const {startTime} =this.state;
            if(!endTime||!startTime){
                return false;
            }
            return endTime.valueOf()>startTime.valueOf();
        }
        onchange=(field,value)=>{
            this.setState({
                [field]:value
            })
        }
        onStartChange=value=>{
            this.onchange('startTime',value);
        }
        onEndChange=value=>{
            this.onchange('endTime',value);
        }
        handleStartOpenChange = open => {
            if (!open) {
              this.setState({ endOpen: true });
            }
          };
        
        handleEndOpenChange = open => {
            this.setState({ endOpen: open });
        };
        render(){
            const formItemLayout = {
                labelCol: { span: 4 },
                wrapperCol: { span: 16 },
            };
            const formItemLayoutWithOutLabel = {
                wrapperCol: {
                    xs: { span: 24, offset: 4 },
                    sm: { span: 20, offset: 8 },
                },
            };
            const { getFieldDecorator, getFieldValue } = this.props.form;
            const {endOpen,endTime,startTime}=this.state;
            return(
                <Form  {...formItemLayout}>
                    <Form.Item label="时间范围">
                        {getFieldDecorator('date', {
                            rules: [{ required: true, message: '请选择公告播放的时间范围' }],
                        })(
                        <div>
                            <DatePicker
                                disabledDate={this.disabledStartDate}
                                showTime
                                format="YYYY-MM-DD HH:mm:ss"
                                value={startTime}
                                placeholder="Start"
                                onChange={this.onStartChange}
                                onOpenChange={this.handleStartOpenChange}
                            />
                            <DatePicker
                                disabledDate={this.disabledEndDate}
                                showTime
                                format="YYYY-MM-DD HH:mm:ss"
                                value={endTime}
                                placeholder="End"
                                onChange={this.onEndChange}
                                open={endOpen}
                                onOpenChange={this.handleEndOpenChange}
                            />
                        </div>
                        )}
                    </Form.Item>
                    <Form.Item label="公告内容">
                        {getFieldDecorator('message', {
                            rules: [{ required: true, message: '请填写公告内容，不超过50字' }],
                        })(
                        <Input />
                        )}
                    </Form.Item>
                    <Form.Item {...formItemLayoutWithOutLabel}>
                        <Button type="danger" className={styles.theButton}>重置</Button>
                        <Button type="success" className={styles.theButton}>提交</Button>
                        
                    </Form.Item>
            </Form>

            )
        }
    }
   

)
@connect(({notice,loading})=>({
    notice,
    isLoading:loading.effects['notice/fetchNotice']
}))
export default class NotificationManage extends Component{
   componentDidMount(){
        const {dispatch}=this.props;
        dispatch({
            type:'notice/fetchNotice'
        })
   }
   noticeList=arr=>
       arr.map((notice,index)=>{
           console.log(notice);
        return (
          <Card title={index+1}>
              <p> <b>{notice.message}</b>&nbsp;&nbsp;<span>{notice.start_time}——{notice.end_time}</span></p>
              <p> {notice.author}&nbsp;&nbsp;{notice.create_time}</p>
          </Card>
        )
        })
   
    render(){
        const {notice:{notices}}=this.props;
        console.log(notices);
        return (
            <div>
                <TheForm />
                <hr/>
                <div>
                    {this.noticeList(notices)}
                </div>
             
            </div>                                                                                                                  
        )
    }
}