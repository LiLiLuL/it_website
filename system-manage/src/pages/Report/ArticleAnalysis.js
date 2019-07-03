import React, { Component,Suspense } from 'react';
import { getTimeDistance } from '@/utils/utils';
import { Row, Col, Icon, Menu, Dropdown } from 'antd';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import styles from './article.less'
import { connect } from 'dva';
const ArticleCard = React.lazy(() => import('./ArticleCard'));

@connect(({article,loading})=>({
  article,
  loading:loading.effects['article/fetchArticleNumbers']
}))
export default class ArticleAnalysis extends Component {
    state = {
        salesType: 'all',
        currentTabKey: '',
        rangePickerValue: getTimeDistance('year'),
      };
    componentDidMount(){
      const {dispatch}=this.props;
      dispatch({
        type:'article/fetchArticleNumbers'
      })
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
    render() {
        const { rangePickerValue, salesType, currentTabKey } = this.state;
        const {article:{articleNumbers}}=this.props;
        console.log(articleNumbers);
        return (
            <div>
                <GridContent>
                    <Suspense fallback={null}>
                        <ArticleCard
                            rangePickerValue={rangePickerValue}
                            articleData={articleNumbers}
                            isActive={this.isActive}
                            handleRangePickerChange={this.handleRangePickerChange}
                            selectDate={this.selectDate}
                        />
                    </Suspense>
                </GridContent>
            </div>
                )
            }
}