import React, { Component } from 'react';
import {Row, Upload,Form,Modal,Col,List,Card,Icon,Button,Carousel } from 'antd';
import {connect} from 'dva';
import styles from './carousel.less';
import ImgForm from './Imgform'
@connect(({carousel,loading})=>({
    carousel,
    isLoading:loading.effects['carousel/fetchCarousels']
}))
export default class CommentManage extends Component{
    state={
        changeModal:false,
        addModal:false,
        imgArr:[]
      
    }
  componentDidMount(){
      const {dispatch}=this.props;
      dispatch({
          type:'carousel/fetchCarousels'
      })
   }
  
   deleteImg=id=>{
       console.log(id);
   }
   changeImg=item=>{
       this.setState((prevState,props)=>({
        changeModal:! prevState.changeModal,
        imgArr:item
       }))
       console.log(this.props)
        let {dispatch}=this.props;
       dispatch({
        type:'carousel/fetchCheckedItems',
        payload:item
       })
     
   
   }
   addImg=()=>{
      this.setState((prevState,props)=>({
         addModal:! prevState.addModal
       }))
   }
   handleChangeOk=()=>{
    this.setState((prevState,props)=>({
        changeModal:! prevState.changeModal
      }))
   }
   handleChangeCancel=()=>{
    this.setState((prevState,props)=>({
        changeModal:! prevState.changeModal
      }))

    }
    handleAddOk=()=>{
        this.setState((prevState,props)=>({
            addModal:! prevState.addModal
          }))
       }
    handleAddCancel=()=>{
    this.setState((prevState,props)=>({
        addModal:! prevState.addModal
        }))

    }
    render(){
       const {carousel:{images}}=this.props;
       console.log(images);
        return (
            <div >
                <Row gutter={24}>
                <Col xl={12} lg={24} md={24} sm={24} xs={24}>
                  <p>已有的轮播图设置</p>
                  <div className={styles.myCarousel}>
                    <List 
                        rowKey="id"
                        grid={{ gutter: 24, xxl: 3, xl: 2, lg: 2, md: 2, sm: 2, xs: 1 }}
                        dataSource={images}
                        className={styles.listStyle}
                        renderItem={item => (
                        <List.Item>
                            <Card
                            className={styles.carouselCard}
                            hoverable
                            cover={<img alt={item.title} src={item.url} />}
                            actions={[ <Button onClick={()=>this.changeImg(item)}><Icon type="edit" /></Button>,
                                       <Button onClick={()=>this.deleteImg(item.id)}><Icon type="scissor" /></Button>]}
                            >
                            <Card.Meta 
                              title={<a>{item.title}</a>} 
                              description={item.description} />
                            <div >
                                <span>{item.create_by}</span>
                            </div>
                            </Card>
                        </List.Item>
                        )}
                    />
                    <Button onClick={this.addImg}>添加新的轮播图设置</Button>
                    <Modal
                    title="修改轮播图"
                    visible={this.state.changeModal}
                    onOk={this.handleChangeOk}
                    onCancel={this.handleChangeCancel}
                    >
                        <ImgForm data={this.state.imgArr}/>
                    </Modal>
                  </div>
                  <Modal
                    title="增加新的轮播图片"
                    visible={this.state.addModal}
                    onOk={this.handleAddOk}
                    onCancel={this.handleAddCancel}
                    >
                        <ImgForm  data={images}/>
                    </Modal>
                    
                </Col>
                <Col xl={12} lg={24} md={24} sm={24} xs={24}>
                    <p>预览效果</p>
                    <Carousel autoplay className={styles.myCarousel}>
                    {
                        images.map((item,index)=>{
                            return (
                                <Card
                                className={styles.carouselCard}
                                hoverable
                                key={index}
                                cover={<img alt={item.name} src={item.url} />}
                                >
                                <Card.Meta 
                                  title={<a>{item.title}</a>} 
                                  description={item.description} />
                                </Card>
                            )
                        })
                    }
                   
                    </Carousel>
                </Col>
                </Row>
            </div>                                                                                                                  
        )
    }
}

