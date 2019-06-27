
import React, { Component } from 'react';
import { connect } from 'dva';
import { Form, Select, InputNumber, Switch, Radio, Button, Upload, Icon, Row, Col, Input } from 'antd';

const { Option } = Select;
const { TextArea } = Input;

class TalentEdit extends Component {
    state={
        type:'personal'
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    normFile = e => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };
    selectType=e=>{
        this.setState({
            type:e.target.value
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        const {type}=this.state;
        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item label="类型">
                    {getFieldDecorator('type',{
                        initialValue:type
                    })(
                        <Radio.Group onChange={this.selectType} value={type}>
                            <Radio value="personal">个人</Radio>
                            <Radio value="team">团队</Radio>
                        </Radio.Group>,
                    )}
                </Form.Item>

                <Form.Item label="姓名/团队名称">
                    {
                        getFieldDecorator('name', {
                            rules: [
                                { required: true, message: '请输入优秀个人或优秀团队名称' }
                            ],
                        })(
                            <Input />
                        )
                    }
                </Form.Item>
               {
                   type=='team'
                   ?
                   (<Form.Item label="团队成员">
                   {getFieldDecorator('partner', {
                       rules: [
                           { message: 'Please select your favourite colors!', type: 'array' },
                       ],
                   })(
                       <Select mode="multiple" placeholder="Please select team partners">
                           <Option value="red">张三</Option>
                           <Option value="green">李四</Option>
                           <Option value="blue">王五</Option>
                       </Select>,
                   )}
               </Form.Item>)
               :null
     
               }
                <Form.Item label="上传图片">
                    <div className="dropbox">
                        {getFieldDecorator('imgUrl', {
                            valuePropName: 'fileList',
                            getValueFromEvent: this.normFile,
                        })(
                            <Upload.Dragger name="files" action="/upload.do">
                                <p className="ant-upload-drag-icon">
                                    <Icon type="inbox" />
                                </p>
                                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                            </Upload.Dragger>,
                        )}
                    </div>
                </Form.Item>
                <Form.Item label='优秀事迹'>
                    {
                        getFieldDecorator('comment', {
                            message: '请输入优秀事迹'
                        })(
                            <TextArea rows={8} />
                        )
                    }
                </Form.Item>

                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        );
    }
}

const TalentForm = Form.create({ name: 'talent-edit-form' })(TalentEdit);
export default TalentForm;