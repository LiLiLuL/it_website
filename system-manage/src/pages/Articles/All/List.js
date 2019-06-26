import React, { Component } from 'react';
import {connect} from 'dva';
import {List} from 'antd';
import MyArticleListContent from '@/components/ArticleListContent/MyArticleListContent';
//取article模块

@connect(({article})=>({
    article
}))

export default class ListManage extends Component{  
    render(){
        const {article:{articles}}=this.props;
        const dataSource=[...articles];
        console.log(articles);
       
        return (           
            <List
            size="large"
            rowKey="id"
            itemLayout="vertical"
            dataSource={articles}
            renderItem={item => (
            <List.Item>
                <MyArticleListContent data={item}/>
            </List.Item>
            )}
        />                                                                                                                  
        )
    }
}