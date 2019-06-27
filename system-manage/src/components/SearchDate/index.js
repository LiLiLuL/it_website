import React, { Component } from 'react';
import {DatePicker} from 'antd';
const { RangePicker } = DatePicker;
export default class CommentManage extends Component{
    state={
        dateRange:null
    }
    constructor(props){
        super(props);

    }
    onChange = (date, dateString) => {
        this.setState({
            dateRange:dateString
        })
        this.props.range(dateString);
    }
    render(){
       
        return (
            <div>
                请选择日期范围： <RangePicker onChange={this.onChange} /> 
             
            </div>                                                                                                                  
        )
    }
}