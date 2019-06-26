import React, { Component } from 'react';
import { Modal, Button ,Row,Col,Form} from 'antd';
import styles from './demeanour.less';
import ActivityForm from './ActiviryForm';
import Activities from './Activities';
import { async } from 'q';
export default class Demeanour extends Component {
    state={
        modalVisible:false,
        activities:'none',
        addClass:false,
        addClass2:false,
    }
    showActivity=()=>{
        this.setState({
            activities:'block',
            addClass:true,
            addClass2:false
        })
    }
    handleOk=()=>{
        this.setState({
            modalVisible:true,
            activities:'none',
            addClass2:true,
            addClass:false
        })
    }
    //modal提交的方法
    handleModalOk=async (formData)=>{
        this.setState({
            modalVisible:false,
        })
    }
    handleModalCancel=()=>{
        this.setState({
            modalVisible:false,
        })
    }
    render() {
       
        return (
            <div>
                <div className={styles.myButton}>
                    <Row gutter={24}>
                        <Col xl={12} lg={24} md={24} sm={24} xs={24}>

                            <Button  type="dashed"  onClick={this.handleOk} className={this.state.addClass2==false?styles.newActivity:styles.activeButton}  block>新建活动</Button>
                        </Col>
                        <Col xl={12} lg={24} md={24} sm={24} xs={24}>

                            <Button type="dashed"  onClick={this.showActivity} className={this.state.addClass==false?styles.oldActivity:styles.activeButton} block>往日活动</Button>
                        </Col>
                    </Row>
                </div>
                <ActivityForm 
                      visible={this.state.modalVisible} 
                      onOk={this.handleModalOk} 
                      onCancel={this.handleModalCancel}>
                 ></ActivityForm>
                <div style={{display:this.state.activities}}>
                   <Activities />
                </div>
            
            </div>
        )
    }
}