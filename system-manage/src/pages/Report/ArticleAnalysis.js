import React, { Component, Suspense } from 'react';
import { getTimeDistance } from '@/utils/utils';
import { Row, Col, Icon, Menu, Dropdown } from 'antd';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import styles from './article.less'
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

const ArticleCard = React.lazy(() => import('./ArticleCard'));



@connect(({ article, loading }) => ({
  article,
  loading: loading.effects['article/fetchArticleNumbers']
}))
export default class ArticleAnalysis extends Component {
  state = {
    salesType: 'all',
    currentTabKey: '',
    rangePickerValue: getTimeDistance('year'),
    data: [],
    activeKey:'articles'
  };
  componentWillMount(){
    const { dispatch } = this.props;
    dispatch({
      type:'article/fetch'
    });
  }
  isActive = type => {
    const { rangePickerValue } = this.state;
    const value = getTimeDistance(type);
    if (!rangePickerValue[0] || !rangePickerValue[1]) {
      return '';
    }
    if (
      rangePickerValue[0].isSame(value[0], 'day') &&
      rangePickerValue[1].isSame(value[1], 'day')
    ) {
      return styles.currentDate;
    }
    return '';
  };
  handleRangePickerChange = rangePickerValue => {
    const { dispatch } = this.props;
    this.setState({
      rangePickerValue,
    });

    dispatch({
      type: 'article/fetchArticleNumbers',
    });
  };
  selectDate = type => {
    const { dispatch } = this.props;
    this.setState({
      rangePickerValue: getTimeDistance(type),
    });

    dispatch({
      type: 'article/fetchArticleNumbers',
    });
  };
  changeTabs = key => {
    const {article,loading}=this.props;
    const{jiagouData,solutionData, safeData,basisData,dataData,articleNumbers}=article;
    let selectData=[];

    switch(key){
      case "jiagou":
        selectData=jiagouData[0].data;
        break;
      case "solution":
        selectData=solutionData[0].data;
        break;
      case "data":
       selectData=dataData[0].data;
        break;
      case "basis":
        selectData=basisData[0].data;
        break;
      case "safe":
        selectData=safeData[0].data;
        break;
      default:
        selectData=articleNumbers;
    }
    this.setState({
      activeKey:key,
      data:selectData
    });  
  }

  render() {
    const { rangePickerValue, salesType, currentTabKey, data,activeKey } = this.state;

    return (
      <div>
        <GridContent>
          <Suspense fallback={<div>数据正在加载中</div>}>
            <ArticleCard
              rangePickerValue={rangePickerValue}
              articleData={data}
              isActive={this.isActive}
              handleRangePickerChange={this.handleRangePickerChange}
              selectDate={this.selectDate}
              changeTabs={this.changeTabs}
              activeKey={activeKey}
            />
          
          }
          </Suspense>
        </GridContent>
      </div>
    )
  }
}