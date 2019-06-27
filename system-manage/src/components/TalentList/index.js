import React, { Component } from 'react';
import { List, Card, Row, Col, Icon, Button, Avatar,Modal,message} from 'antd';
import styles from './index.less';
import { routerRedux } from 'dva/router';
const { confirm } = Modal;
const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);
const  success=()=>{
    message.success('This is a success message');
}
export default class CommentManage extends Component {

    constructor(props) {
        super(props);

    }
    state = {
        data: this.props.data,
        checkedId:null,
    }
    talentOperation=item=>{
        console.log(item);
        this.setState({
            checkedId:item.id
        })
    }
    edit=()=>{
        console.log("编辑");
       
    }
   
    showConfirm=(item)=>{
        confirm({
          title: '确定要删除当前列么',
          content: '当您按下确认键后,会删除当前优秀案例，并且不可恢复',
          okText:"确认",
          cancelText:"取消",
          onOk() {
             console.log(item);
             return new Promise((resolve, reject) => {
                setTimeout(Math.random() > 0.5 ? resolve(success()) : reject, 1000);
               
              }).catch(() => console.log('Oops errors!'));
          },
          onCancel() {},
        });
      }

    render() {
        const { data,onJump,onDelete } = this.props;

        return (
            <div>
                <List
                    itemLayout="vertical"
                    rowKey="id"
                    size="large"
                    grid={{ gutter: 24, xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
                    dataSource={data}
                    className={styles.myList}
                    renderItem={item => (
                        <div className={styles.theList}>
                            <div  className={styles.theListItem}>
                                <List.Item onClick={() => this.talentOperation(item)}
                                    actions={[
                                        <IconText type="like-o" text="156" />,
                                        <IconText type="message" text="2" />,
                                    ]}
                                    extra={
                                        <img
                                            width={200}
                                            alt="logo"
                                            src={item.imgUrl}
                                        />
                                    }
                                >
                                    <List.Item.Meta
                                        avatar={<Avatar src={item.imgUrl} />}
                                        title={<a href="#">{item.name}</a>}
                                        description={item.comment}
                                    />
                                    {item.comment}
                                </List.Item>
                            </div>
                            <div className={this.state.checkedId==item.id? styles.clickButton :styles.hidden}>
                                <Button type="default" size='large' onClick={onJump}>编辑</Button>
                                <Button type="default" size='large' onClick={()=>this.showConfirm(item.id)}>删除</Button>
                            </div>
                        </div>
                    )}
                />

            </div>
        )
    }
}