
import React, { Component } from 'react';
import {connect} from 'dva';
import {List, Table,Divider,Checkbox,Button} from 'antd';
import styles from './operation.less'

//取article模块

@connect(({article})=>({
    article
}))

export default class Operation extends Component{  
    state={
        currentPage:1,
        pageSize:16,
        checkedDeleteList:[],
        checkedTopList:[],
        checked:false

    }
    //页码跳转的回调函数
    onCurrentChange=(current,pageSize)=>{
        
        const {currentPage}=this.state;
        setTimeout(()=>{this.setState({currentPage:current});},0);
               
    }
    //pageSize改变的回调
    onShowSizeChange=(current,size)=>{
        const {currentPage,pageSize}=this.state;
        setTimeout(()=>{this.setState({currentPage:current,pageSize:size});},0);
    }
    
    //选择删除的多选框选择
    checkDelete=(text,recoder)=>{
      this.setState((prevState,props)=>({
            checked:! prevState.checked
          }))
       
      console.log(recoder)
      console.log(this.state.checked);

      // let flag=e.target.checked;
      // if(flag==true){
      //   this.setState((prevState,props)=>({
      //     checkedDeleteList:prevState.checkedDeleteList.push(e)
      //   }))
      // }
      
    }
     

    
    render(){
        const {article:{articles}}=this.props;
        const dataSource=[...articles];
        const {currentPage,pageSize}=this.state;
        const columns = [
            {
                title: '#',
                key:'index',
                // render:(text,record,index)=>`${index+1}`,
                render(text,record,index){
                  return(
                    <div>
                    <span>{(currentPage-1)*pageSize+index+1}</span>
                    </div>
                  )
                 }
               
            }, 
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
              children:[
                  {
                      title:'删除',
                      dataIndex:'delete',
                      key:'delete',
                      align: 'right',
                      render: (text,recoder)=>{
                          return(
                              <Checkbox  onChange={()=>this.checkDelete(text,recoder)}/>
                          )
                      }
                  },
                  {
                      title:'是否置顶',
                      dataIndex:'top',
                      key:'top',
                      align: 'right',
                      render: (text,recoder)=>{
                         return(
                            <Checkbox />
                         )
                      }
                  }
              ]
              
            }
        ];
        const pagination={
            pageSize:this.state.pageSize,
            total:articles.length,
            showSizeChanger:true,
            pageSizeOptions:['8','10','16','32','48'],
            onChange:this.onCurrentChange,
            onShowSizeChange:this.onShowSizeChange,
            showTotal:(total,range)=>`共 ${total} 条`

        }
        return ( 
         <div>       
            <Table 
            bordered
            dataSource={articles}
            columns={columns}
            size="small"
            pagination={pagination}
            />
            <div>
              <Checkbox >全部删除</Checkbox>
              <Checkbox >全选置顶</Checkbox>
              <p className={styles.submit}><Button>提交修改</Button></p>
            </div>     
          </div>  

        )
    }
}