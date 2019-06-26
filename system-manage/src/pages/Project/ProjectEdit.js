import React, { Component } from 'react';
import { connect } from 'dva';
import { Spin, Button, Form, Icon, Input, Select, Dropdown, Tag, List, Modal, Popconfirm } from 'antd';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styles from './project.less';
import MilePostForm from './MilePostForm';
const { TextArea } = Input;
const { Option } = Select;
const MilePostContent = ({ data: { date, event, status } }) => (
    <div>
        <p>预计完成时间：{date}</p>
        <p>事项：{event}</p>
        <p>当前状态：{status}</p>
    </div>
);


@connect(({ myproject, department, loading }) => ({
    myproject,
    department,
    departmentLoading: loading.effects['department/fetchDepartments'],
}))
class ProjectEdit extends Component {
    state = {
        id: this.props.location.id,
        isLoading: false,
        project: '',
        partner: [],
        inputVisible: false,
        inputValue: '',
        milepost: [],
        milepostID: '',
        keyDown: false,
        selectMilePost: '',
        visible: false
    }
    componentWillMount() {
        const { dispatch } = this.props;
        const { id } = this.state;
        const params = {
            id: id
        }
        dispatch({ type: 'department/fetchDepartments' });
        dispatch({
            type: 'myproject/fetchTheProject',
            payload: params
        });
    }

    componentWillReceiveProps(nextProps) {
        let { myproject: { theProject } } = nextProps;

        if (theProject.length == 1) {
            let res = theProject.pop();
            this.setState({
                project: res,
                partner: res.partner,
                milepost: res.milepost
            })
        }

    }
    handleClose = (removedTag) => {
        console.log(removedTag);
        const tags = this.state.partner.filter(tag => tag.username !== removedTag.username);
        console.log(tags);
        this.setState({
            partner: tags
        })
    };
    optionComponent = arr =>
        arr.map((item, index) => {
            return (
                <Option key={index} value={item.id}>{item.name}</Option>
            )
        })
    handleChange = value => {
        console.log(`selected ${value}`);
    }

    forMap = tag => {
        const tagElem = (
            <Tag
                closable
                onClose={e => {
                    e.preventDefault();
                    this.handleClose(tag);
                }}
            >
                {tag.username}
            </Tag>
        );
        return (
            <span key={tag.id} style={{ display: 'inline-block' }}>
                {tagElem}
            </span>
        );
    };
    saveInputRef = input => (this.input = input);
    handleInputChange = e => {
        this.setState({ inputValue: e.target.value });
    };

    handleInputConfirm = () => {
        const { inputValue } = this.state;
        let { partner } = this.state;
        let object = {
            username: inputValue,
            id: partner.length + 1,
            avatar: '',
            position: '工程师'

        }
        if (inputValue && partner.indexOf(inputValue) === -1) {
            partner = [...partner, object];
        }

        this.setState({
            partner,
            inputVisible: false,
            inputValue: '',
        });
    };
    showInput = () => {
        this.setState({ inputVisible: true }, () => this.input.focus());
    };
    milePostOperation = item => {
        if (this.state.keyDown == false) {
            this.setState({
                milepostID: item.postId,
                keyDown: true
            })
        } else {
            this.setState({
                keyDown: false,
                milepostID: ''
            })
        }
    }
    editMilePost = (item, event) => {
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
        console.log(item);
        this.setState({
            selectMilePost: item,
            visible: true
        })


    }
    deleteMilePost = (item, e) => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        console.log(item);
        Modal.confirm({
            title: '确定要删除此节点？',
            content: '请注意，若删除后，操作不可逆',
            okText: '确认',
            cancelText: '取消',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }
    saveFormRef = formRef => {
        this.formRef = formRef;
      };
    handleOk = e => {
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
          if (err) {
            return;
          }
    
          console.log('Received values of form: ', values);
          form.resetFields();
          this.setState({ visible: false });
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    addMilePost = () => {
        this.setState({
            addVisible: true,
            selectMilePost:''
        })
    }
    addOk = e => {
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
          if (err) {
            return;
          }
    
          console.log('Received values of form: ', values);
          form.resetFields();
          this.setState({ addVisible: false });
        });
    };

    addCancel = e => {
        this.setState({
            addVisible: false,
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            values.milepost=this.state.milepost;
            values.partner=this.state.partner;
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      };
    render() {
        const { getFieldDecorator, getFieldValue } = this.props.form;
        const { project, partner, inputVisible, inputValue, milepost, milepostID } = this.state;
        console.log(partner);
        const tagChild = partner.map(this.forMap);
        const { department: { departments } } = this.props;
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
            <div>
                <p>编辑项目</p>
                {project === undefined ? (<Spin size="large" />) : (
                    <Form {...formItemLayout}>
                        <Form.Item label="项目名">
                            {getFieldDecorator('name', {
                                rules: [{ required: true, message: 'Please input project name!' }],
                            })(
                                <Input placeholder={project.name} value={project.name} />,
                            )}
                        </Form.Item>
                        <Form.Item label="所属部门">
                            {
                                getFieldDecorator('department', {
                                    rules: [{ required: true, message: 'please choose the department' }]
                                })(
                                    <Select style={{ width: 120 }} onChange={this.handleChange} >
                                        {this.optionComponent(departments)}
                                    </Select>
                                )
                            }

                        </Form.Item>
                        <Form.Item label="项目负责人">
                            {getFieldDecorator('owner', {
                                rules: [{ required: true, message: 'Please input the owner of the department' }]
                            })(
                                <Input placeholder={project.owner} />
                            )

                            }

                        </Form.Item>
                        <Form.Item label="团队成员">
                            {
                                getFieldDecorator('partner', {
                                    rules: [{ message: 'please input the partner' }]
                                })(
                                    <div>
                                        <span>
                                            {tagChild}
                                        </span>
                                        {inputVisible && (
                                            <Input
                                                ref={this.saveInputRef}
                                                type="text"
                                                size="small"
                                                style={{ width: 78 }}
                                                value={inputValue}
                                                onChange={this.handleInputChange}
                                                onBlur={this.handleInputConfirm}
                                                onPressEnter={this.handleInputConfirm}
                                            />
                                        )}
                                        {!inputVisible && (
                                            <Tag onClick={this.showInput} style={{ background: '#fff', borderStyle: 'dashed' }}>
                                                <Icon type="plus" /> New Partner
                                            </Tag>
                                        )}
                                    </div>
                                )
                            }

                        </Form.Item>
                        <Form.Item label="项目简介">
                            {
                                getFieldDecorator('summary', {
                                    rules: [{ required: true, message: 'please input the summary of this project' }]
                                })(
                                    <TextArea
                                        placeholder={project.summary}
                                        autosize={{ minRows: 4, maxRows: 10 }}
                                    />
                                )
                            }

                        </Form.Item>
                        <Form.Item label="项目里程碑">
                            {
                                getFieldDecorator('milepost', {
                                    rules: [{ message: 'please complete the milepost of this project' }]
                                })(

                                    <List
                                        size="large"
                                        rowKey="id"
                                        itemLayout="vertical"
                                        dataSource={milepost}
                                        className={styles.myList}
                                        renderItem={item => (
                                            <List.Item onClick={() => this.milePostOperation(item)}>
                                                <MilePostContent data={item} />
                                                {item.postId == milepostID ? (
                                                    <div className={styles.milePostOperation}>
                                                        <Button type="primary" onClick={(event) => this.editMilePost(item, event)}>编辑</Button>
                                                        <Button type="default" onClick={(event) => this.deleteMilePost(item, event)}>删除</Button>
                                                    </div>

                                                ) : ''}
                                            </List.Item>
                                        )
                                        }
                                    >
                                        <p>
                                            <Button type="default" className={styles.addBtn} onClick={this.addMilePost}><Icon type="plus" />添加</Button>
                                        </p>
                                    </List>
                                )

                            }
                        </Form.Item>
                        <Form.Item {...formItemLayoutWithOutLabel}  className={styles.formOperation}>
                            <Button type="default" htmlType="submit" >重置</Button>
                            <Button type="primary" htmlType="submit" onClick={this.handleSubmit} > 提交</Button>
                        </Form.Item>
                    </Form>


                )}
                <MilePostForm milepost={this.state.selectMilePost} visible={this.state.visible}
                 onCancel={this.handleCancel}  onCreate={this.handleOk} wrappedComponentRef={this.saveFormRef}
                 />
                  <MilePostForm  visible={this.state.addVisible}
                 onCancel={this.addCancel}  onCreate={this.addOk} wrappedComponentRef={this.saveFormRef}
                 />
                 

            </div>


        )
    }


}

const ProjectDetailForm = Form.create({ name: 'project_detail_form' })(ProjectEdit);
export default ProjectDetailForm;