import React, { Component } from 'react';
import {connect} from 'dva';
import {Table} from 'antd';




//取对应的模块
@connect(({geographic , loading }) => (
  {
   geographic ,
   isLoading:loading.effects['geographic/fetchComment'],
 }
))

export default class CommentManage extends Component{
  constructor(props){
    super(props);
    this.state={
      pagination:{
        current:1,
        pageSize:12,
      },
     test:'test',
     currentPage:1
    }
  }
    componentDidMount(){
        const {dispatch}=this.props;
        //触发dispatch方法来触发action从而更改状态
        dispatch({
            type:'geographic/fetchComment'
        })
    }
    handleChange=(current,pageSize)=>{
      console.log(current)
      console.log(this.state.pagination)
      
      this.setState((preState,props)=>({
        currentPage:current
      }))
      console.log(this.state)
    }
    render(){
       let pagination=this.state.pagination;

        const columns = [
          {
            title: '序号',
            key:'index',
            // render:(text,record,index)=>`${index+1}`,
            render(text,record,index){
              return(
                <div>
                <span>{(pagination.current-1)*12+index+1}</span>
                </div>
              )
             }
           
          }, 
          {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: '所评文章ID',
            dataIndex: 'article_id',
            key: 'article_id',

          },

          {
            title: '评论内容',
            dataIndex: 'content',
            key: 'content',
          },{
            title:'时间',
            dataIndex:'create_by',
            key:'create_by'
          }];
        const { isLoading } = this.props;
        const {geographic:{comment}}=this.props;
        const dataSource=[...comment];
        
        // console.log(dataSource)
        return (
            <div>
                <Table
                   bordered
                   dataSource={dataSource}
                   columns={columns}
                   size="small" />
             
            </div>                                                                                                                  
        )
    }
}