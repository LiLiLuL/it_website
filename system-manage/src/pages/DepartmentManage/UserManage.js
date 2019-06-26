import React, { Component } from 'react';
import { Form, Button, Input, Icon, Select, Radio, Tabs,Table } from 'antd';
import { connect } from 'dva';
import { validate } from '@babel/types';
import styles from './department.less'
import { get } from 'http';
const { Option } = Select;
const { TabPane } = Tabs;


const UserAddForm = Form.create({ name: 'user_add_form' })(
    class extends React.Component {
        render() {
            const { getFieldDecorator, getFieldValue } = this.props.form;
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
            return (
                <Form {...formItemLayout}>
                    <Form.Item label="职员姓名">
                        {getFieldDecorator('name', {
                            rules: [{ required: true, message: 'Please input the name' }],
                        })(<Input />)}
                    </Form.Item>、
                <Form.Item label="性别">
                        {getFieldDecorator('sex')(
                            <Radio.Group>
                                <Radio value="man">男</Radio>
                                <Radio value="women">女</Radio>
                            </Radio.Group>,
                        )}
                    </Form.Item>


                    <Form.Item label="所属组织部门" hasFeedback>
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
                        <Button type="default" htmlType="submit">
                            重置
                    </Button>
                        <Button type="primary" htmlType="submit">
                            提交
                   </Button>
                    </Form.Item>
                </Form>
            )
        }
    }
)


@connect(({ department, loading }) => ({
    department,
    isLoading: loading.effects['department/fetchEmployees']
}))
export default class UserManage extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch({
            type: 'department/fetchEmployees'
        })
    }
    render() {
        const { department: { employees } } = this.props;
        const columns = [
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '职位',
                dataIndex: 'position',
                key: 'position',
            },
        ];
        return (
            <div>
                <Tabs
                    defaultActiveKey="1"
                    tabPosition="left"
                    size="large"
                    type="card"
                >
                    <TabPane tab="查阅" key="1" closable="false">
                        <Table dataSource={employees} columns={columns} />;
                    </TabPane>
                    <TabPane tab="新增用户" key="2" closable="false">
                        <UserAddForm />
                    </TabPane>
                </Tabs>

            </div>

        )
    }
}