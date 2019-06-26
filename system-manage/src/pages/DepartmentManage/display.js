import React, { Component } from 'react';
import {Row,Col,Tree,Table} from 'antd';
import {connect} from 'dva';
import { validate } from '@babel/types';
import styles from './department.less'

const {TreeNode}=Tree;

@connect(({ department,loading }) => ({
    department,
    isLoading: loading.effects['department/fetchDepartments']
}))

export default class DepartmentDisplay extends Component{
    state = {
        expandedKeys: ['流程与信息管理中心'],
        autoExpandParent: true,
        selectedKeys: [],
      };
    componentDidMount(){
        const {dispatch}=this.props;
        dispatch({
            type:'department/fetchDepartments'
        })
        dispatch({
            type:'department/fetchEmployees'
        })
    }
    onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
        console.log(info.node);
        console.log(info.node.props.dataRef);
        

      };
    onExpand = expandedKeys => {
    console.log('onExpand', expandedKeys);
    this.setState({
        expandedKeys,
        autoExpandParent: false,
    });
    };
    
 
  

    constructTree=(arr)=>{
        let result = []
        if(!Array.isArray(arr)) {
            return result
        }
        arr.forEach(item => {
            delete item.children;
        });
        let map = {};
        arr.forEach(item => {
            map[item.id] = item;
        });
        arr.forEach(item => {
            let parent = map[item.parent_id];
            if(parent) {
                (parent.children || (parent.children = [])).push(item);
            } else {
                result.push(item);
            }
        });
        let theArr=[];
        for(let key in map){
            if(map[key].children==undefined||map[key].parent_id!=0){
                delete map[key];
            }else{
                theArr.push(map[key]);
            }
        }
        return theArr;
    }
    renderTreeNodes = data =>
        data.map(item => {
        if (item.children) {
            return (
            <TreeNode title={item.name} key={item.id} dataRef={item}>
                {this.renderTreeNodes(item.children)}
            </TreeNode>
            );
        }
        return  (
            <TreeNode title={item.name} key={item.id} dataRef={item} />
            );
        });
    
    render(){
        const { department: {departments},department:{employees} }=this.props;
        const  departmentTree=this.constructTree(departments);
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
               <Col xl={8} lg={12} md={12} sm={8} xs={24}>
               <Tree
                    onExpand={this.onExpand}
                    expandedKeys={this.state.expandedKeys}
                    autoExpandParent={this.state.autoExpandParent}
                    onSelect={this.onSelect}
                    selectedKeys={this.state.selectedKeys}
                    onSelect={this.onSelect}
                    className={styles.theTree}
                    
                >
                   {this.renderTreeNodes(departmentTree)}
                </Tree>
                
                </Col>
                <Col xl={16} lg={12} md={12} sm={16} xs={24}>
                  <Table 
                      className={styles.theTable} 
                      dataSource={employees} 
                      bordered
                      columns={columns} />;
                
                </Col>
            </div>                                                                                                                  
        )
    }
}