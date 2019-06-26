import React, { Component } from 'react';
import { Form, Button, Input, Icon, Select } from 'antd';
import { connect } from 'dva';
import { validate } from '@babel/types';
import styles from './department.less'
import { get } from 'http';
const { Option } = Select;




class DepartmentManage extends Component {

    render() {
        const { getFieldDecorator, getFieldValue } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 20 },
            },
        };
        const formItemLayoutWithOutLabel = {
            wrapperCol: {
                xs: { span: 24, offset: 0 },
                sm: { span: 20, offset: 4 },
            },
        };
        return (
            <Form >
                <Form.Item label="name">
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Please input the name' }],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="上级部门" hasFeedback>
                    {getFieldDecorator('parentdepartment', {
                        rules: [{ required: true, message: 'Please select the parent department!' }],
                    })(
                        <Select placeholder="Please select the department">
                            
                            <Option value="rmb">RMB</Option>
                            <Option value="dollar">Dollar</Option>
                        </Select>
                    )}
                </Form.Item>
                <Form.Item {...formItemLayoutWithOutLabel}>
                    <Button type="dashed" style={{ width: '60%' }}>
                        <Icon type="plus" /> Add field
                    </Button>
                </Form.Item>
                <Form.Item {...formItemLayoutWithOutLabel}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}

const AddForm = Form.create()(DepartmentManage);
export default AddForm;