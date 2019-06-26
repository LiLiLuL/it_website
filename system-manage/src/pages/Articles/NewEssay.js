import React, { Component } from 'react';
import {Editor} from 'react-draft-wysiwyg';
import {Input,Upload,Form,Button} from 'antd';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import  styles from './newessay.less';
class NewEssay extends Component{
  
    state = {
        editorState: EditorState.createEmpty()
      }
    
    onEditorStateChange=(editorState) => {
        this.setState({
            editorState,
        });
    };
    
      render() {
        const { editorState } = this.state;
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 4 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 18 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
              xs: {
                span: 24,
                offset: 0,
              },
              sm: {
                span: 14,
                offset: 10,
              },
            },
          };
        return (
          <div>
            <Form  {...formItemLayout}  className={styles.theForm}>
                <Form.Item label="文章标题">
                    {getFieldDecorator('topic', {
                        rules: [
                        {
                            required: true,
                            message: '请输入文章标题',
                        },
                        ],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="内容简介">
                    {getFieldDecorator('summary', {
                        rules: [
                        {
                            required: true,
                            message: '请输入文章内容简介',
                        },
                        ],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="文章内容">
                    {getFieldDecorator('content', {
                        rules: [
                        {
                            required: true,
                            message: '请输入文章内容',
                        },
                        ],
                    })(
                        <Editor
                        editorState={editorState}
                        wrapperClassName={styles.editWrapper}
                        editorClassName={styles.editEditor}
                        onEditorStateChange={this.onEditorStateChange}
                        localization={{ locale: 'zh' }}
                      />

                    )}
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button>
                        重置
                    </Button>
                    <Button type="dashed">
                        暂存
                    </Button>
                    <Button type="primary" htmlType="submit">
                        提交
                    </Button>

                </Form.Item>
            </Form>
            <div>
            {draftToHtml(convertToRaw(editorState.getCurrentContent()))}
            </div>
          </div>
        );
      }
}

const theArticleForm=Form.create()(NewEssay);
export default  theArticleForm;