import React, { Component } from 'react';
import {Tag} from 'antd';
import styles from './project.less';
import { thisTypeAnnotation } from '@babel/types';
const { CheckableTag } = Tag;


export default class MyTag extends React.Component {
    state = { 
        checked: false
     };

    handleChange = checked => {
      this.setState({ checked });
      const {onCheckTag,index}=this.props;
      onCheckTag(index,checked);
    };
  
    render() {
    
      return (
        <CheckableTag {...this.props} checked={this.state.checked}  onChange={this.handleChange}  />
      );
    }
  }