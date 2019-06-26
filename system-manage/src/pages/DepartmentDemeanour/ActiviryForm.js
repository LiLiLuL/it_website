import React, { Component } from 'react';
import {Modal,Form,Select, Input,InputNumber, Switch,Radio,Slider,Button,Upload,Icon,Rate,Checkbox,Row,Col,DatePicker, TimePicker,} from 'antd';
import styles from './demeanour.less';
import FormItem from 'antd/lib/form/FormItem';

const { Option } = Select;
const { MonthPicker, RangePicker } = DatePicker;
class ActivityForm extends Component {
   constructor(props){
     super(props);
   }
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          };
          this.props.onOk(values);
        });
      };    
      normFile = e => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
          return e;
        }
        return e && e.fileList;
      };
    
      render() {
        const { getFieldDecorator } = this.props.form;
        const{form,visible,onCancel}=this.props;
        const dataForm=form.getFieldsValue();
        // Modal 弹出框确定按钮的状态
        let okButtonStatus = true;
        // 获取输入框的错误信息
        const dataFormError = form.getFieldsError();
        // 输入正确判断
        if(dataForm.name && !dataFormError.name) {
          okButtonStatus = false;
        }
        // 传参 form 数据给父级部门生成组织架构数据
        const handleFormData = () => {
          // 每次打开弹窗时，初始化表单数据
          // form.resetFields();
          
          return dataForm;
        }
        const formItemLayout = {
          labelCol: { span: 6 },
          wrapperCol: { span: 14 },

        };
        const rangeConfig = {
            rules: [{ type: 'array', required: true, message: 'Please select time!' }],
          };
        return (
          <Modal 
              width={690} 
              title="新建活动信息"
              maskClosable={false} 
              visible={visible} 
              destroyOnClose={true} 
              okText="提交"
              cancelText="取消"
              okButtonProps={{disabled: okButtonStatus}}
              onOk={() => this.handleSubmit(event)} 
              onCancel={onCancel}
          >
          <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item label="部门" hasFeedback>
              {getFieldDecorator('select', {
                rules: [{ required: true, message: '请选择部门!' }],
              })(
                <Select placeholder="请选择部门">
                  <Option value="department1">部门一</Option>
                  <Option value="department2">部门二</Option>
                </Select>
              )}
            </Form.Item>
            <Form.Item label="活动名称">
               {
                   getFieldDecorator('name',{
                       rules:[{required:true,message:'输入活动主题'}]
                   })(
                     <Input/>                   
                     )
               }
            </Form.Item>
            <Form.Item label="参与人总数">
              {getFieldDecorator('number', { initialValue: 3 })(<InputNumber min={1} />)}
              {/* <span className="ant-form-text"> machines</span> */}
            </Form.Item>
    
            <Form.Item label="活动时间">
              {getFieldDecorator('time', rangeConfig)(
              <RangePicker showTime format="YYYY-MM-DD" />,
              )}
            </Form.Item>
        

            <Form.Item label="活动影像资料">
              <div >
                {getFieldDecorator('dragger', {
                  valuePropName: 'fileList',
                  getValueFromEvent: this.normFile,
                })(
                  <Upload.Dragger name="files" action="/upload.do">
                    <p >
                      <Icon type="inbox" />
                    </p>
                    <p>Click or drag file to this area to upload</p>
                    <p >Support for a single or bulk upload.</p>
                  </Upload.Dragger>,
                )}
              </div>
            </Form.Item>
          </Form>
          </Modal>
        );
      }
}

const ActivityFormD = Form.create({ name: 'activity_form' })(ActivityForm);
export default ActivityFormD;