import React, { Component } from 'react';
import {Row,Input, Upload,Form,Modal,Icon,Button } from 'antd';
import {connect} from 'dva';
@connect(({carousel,loading})=>({
    carousel
}))
class ImgForm extends Component{
    state={
        previewVisible: false,
        previewImage: '',
    }
    componentDidMount(){
        const {dispatch}=this.props;
        dispatch({
            type:'carousel/fetchCarousels'
        })
    }
    
    handleCancel = () => this.setState({ previewVisible: false });

    handlePreview = file => {
        this.setState({
        previewImage: file.url || file.thumbUrl,
        previewVisible: true,
        });
    };

    handleChange = ({ fileList }) => {
        let file=fileList.pop();
        let id='';
        const {dispatch}=this.props;
        dispatch({
            type:'carousel/submit',
            payload:{id,...file}
        })
        setTimeout(()=>{
            const {carousel:{images}}=this.props;
            console.log(images)
        },1000)
        

    }
    render(){
        const { getFieldDecorator } = this.props.form;
        const item=this.props.data;
        const flag=item instanceof Array;
        const { previewVisible, previewImage, fileList } = this.state;
        const {carousel:{checkedItem}}=this.props;
        const {carousel:{images}}=this.props;
        const uploadButton = (
            <div>
              <Icon type="plus" />
              <div >Upload IMG</div>
            </div>
          );
        return(
            <div>
                <Form >
                    <Form.Item>
                    {getFieldDecorator('title', {
                        rules: [{ required: true, message: '请输入标题' }],
                    })(
                        <Input
                        prefix={<Icon type="font-size" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder={flag==true?"请输入图片名称":item.name}
                        />,
                    )}
                    </Form.Item>
                    <Form.Item>
                    {getFieldDecorator('summary', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Input
                        prefix={<Icon type="profile" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        rows={4}
                        placeholder={flag==true?"请输入图片描述":item.description}
                        />,
                    )},
                    </Form.Item>
                    <Form.Item>
                        <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        defaultFileList={flag==true?images:checkedItem}
                        fileList={flag==true?images:checkedItem}
                        accept=".png, .jpg, .jpeg"
                        onPreview={this.handlePreview}
                        onChange={this.handleChange}
                        >
                        {flag==true ? uploadButton:null}
                        </Upload>
                        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                        <img alt="example" style={{ width: '100%' }} src={previewImage} />
                        </Modal>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

const WrappedImgForm = Form.create({ name: 'imgform' })(ImgForm);
export default WrappedImgForm;