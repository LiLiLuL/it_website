import React,{Component} from 'react';
import {Form,DatePicker,Button,Input,Radio,Modal} from 'antd';

const MilePostForm=Form.create({name:'mile-post-form'})(
    class extends Component{
        constructor(props){
            super(props);
          }
         state={
             milepost:this.props.milepost
         }
         chooseDate=(date, dateString)=>{
            console.log(date, dateString);
          }
         render(){
            const { visible, onCancel, onCreate, form } = this.props;
            const { getFieldDecorator } = form;

            const {milepost}=this.state;
             return(
                <Modal
                visible={visible}
                title={milepost==undefined?"新建里程碑节点":"修改里程碑节点"}
                okText="确认"
                onCancel={onCancel}
                onOk={onCreate}
                >
                <Form>
                <Form.Item label="预计完成时间">
                    {getFieldDecorator('date',{
                        rules:[{required:true,message:'请选择预计完成时间'}]
                    })(
                        <DatePicker onChange={this.chooseDate} />
                    )
                    }
                </Form.Item>
                <Form.Item label="事项">
                    {getFieldDecorator('event',{
                        rules:[{required:true,message:'请输入此节点事项'}],
                    })(
                        <Input placeholder={milepost==undefined?"输入节点事项":milepost.event} />,
                    )}

                </Form.Item>
                <Form.Item label="状态">
                    {getFieldDecorator('status',{
                        rules:[{required:true,message:'请选择当前节点状态'}]
                    })(
                        <Radio.Group>
                            <Radio value="已完成">已完成</Radio>
                            <Radio value="进行中">进行中</Radio>
                            <Radio value="未完成">未完成</Radio>
                         </Radio.Group>,
                    )}
                </Form.Item>
               </Form>
              </Modal>           
             )
         }
    }
)

export default MilePostForm;