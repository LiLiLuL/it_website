import React, { Component } from 'react';
import{Table,Divider} from 'antd';
import { connect } from 'dva';

@connect(({article,loading})=>({
    article,
    isLoading:loading.effects['article/fetchDrafts'],    
}))
export default class Draft extends Component{
   componentDidMount(){
    const { dispatch } = this.props;
    dispatch({
      type: 'article/fetchDrafts',
    });
   }
    render(){
        const {article:{drafts}}=this.props;
        const columns = [
            {
              title: '标题',
              dataIndex: 'title',
              key: 'title',
            },
            {
              title: '作者',
              dataIndex: 'author',
              key: 'author',
  
            },  
            {
              title: '摘要',
              dataIndex: 'summary',
              key: 'summary',
            },
            {
              title:'时间',
              dataIndex:'create_by',
              key:'create_by'
            },
            {
              title:'操作',
              key:'opration',
              render:(text,recoder)=>{
                    return(
                        <p>
                            <span>查看</span><Divider/><span>删除</span>
                        </p>
                    )
               }
              
            }
        ]
       
        return (
            <div>
                <Table
                bordered
                dataSource={drafts}
                columns={columns}
                />
        
             
            </div>                                                                                                                  
        )
    }
}