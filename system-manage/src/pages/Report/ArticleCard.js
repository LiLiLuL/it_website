import React, { memo } from 'react';
import { Row, Col, Card, Tabs, DatePicker } from 'antd';
import { FormattedMessage, formatMessage } from 'umi/locale';
import styles from './article.less'
import { Donut } from '@/components/Reports';

const { RangePicker } = DatePicker;
const { TabPane } = Tabs;


const ArticleCard = memo(
  ({ rangePickerValue, articleData, isActive, handleRangePickerChange, loading, selectDate }) => (
    <Card loading={loading} bordered={false} bodyStyle={{ padding: 0 }}>
      <div className={styles.articleCard}>
        <Tabs
          tabBarExtraContent={
            <div  className={styles.articleExtraWrap}>
              <div className={styles.articleExtra}>
                <a className={isActive('today')} onClick={() => selectDate('today')}>
                  <FormattedMessage id="report.article.all-day" defaultMessage="All Day" />
                </a>
                <a className={isActive('week')} onClick={() => selectDate('week')}>
                  <FormattedMessage id="report.article.all-week" defaultMessage="All Week" />
                </a>
                <a className={isActive('month')} onClick={() => selectDate('month')}>
                  <FormattedMessage id="report.article.all-month" defaultMessage="All Month" />
                </a>
                <a className={isActive('year')} onClick={() => selectDate('year')}>
                  <FormattedMessage id="report.article.all-year" defaultMessage="All Year" />
                </a>
              </div>
              <RangePicker
                value={rangePickerValue}
                onChange={handleRangePickerChange}
                style={{ width: 256 }}
              />
            </div>
          }
          size="large"
          tabBarStyle={{ marginBottom: 24 }}
        >
          <TabPane
            tab={<FormattedMessage id="report.article.article" defaultMessage="Articles" />}
            key="sales"
          >
            <Row>
              <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                <div >
                  <Donut 
                     height={400}
                     data={articleData}
                  />
                </div>
              </Col>
           
            </Row>
          </TabPane>
        </Tabs>
      </div>
    </Card>
  )
);

export default ArticleCard;
