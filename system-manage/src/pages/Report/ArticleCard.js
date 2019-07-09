import React, { memo } from 'react';
import { Row, Col, Card, Tabs, DatePicker,Table } from 'antd';
import { FormattedMessage, formatMessage } from 'umi/locale';
import styles from './article.less'
import { Donut, Bar } from '@/components/Reports';
import Trend from '@/components/Trend';
const { RangePicker } = DatePicker;
const { TabPane } = Tabs;
const columns = [
  {
    title: '排序',
    key:'index',
    render:(text,record,index)=>`${index+1}`
  },
  {
    title: '名称',
    dataIndex: 'organization',
    key: 'organization',
    render: text => <a href="/">{text}</a>,
  },
  {
    title: '文章数',
    dataIndex: 'num',
    key: 'num',
    sorter: (a, b) => a.num - b.num,
  },
  {
    title: '周涨幅',
    dataIndex: 'range',
    key: 'range',
    sorter: (a, b) => a.range - b.range,
    render: (text, record) => (
      <Trend flag={record.status === 1 ? 'down' : 'up'}>
        <span style={{ marginRight: 4 }}>{text}%</span>
      </Trend>
    ),
    align: 'right',
  },
];


const ArticleCard = memo(
  ({ rangePickerValue, articleData, isActive, handleRangePickerChange, loading, selectDate, changeTabs, activeKey }) => (
    <Card loading={loading} bordered={false} bodyStyle={{ padding: 0 }}>
      <div className={styles.articleCard}>
        <Tabs
          onChange={changeTabs}
          activeKey={activeKey}
          tabBarExtraContent={
            <div className={styles.articleExtraWrap}>
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
            key="articles"
          >
            {activeKey == "articles" ?
            <Row>
              <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                <div >
                  <Donut
                    height={400}
                    data={articleData}
                  />
                </div>
              </Col>
              <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                <Table
                  rowKey={record => record.index}
                  size="small"
                  columns={columns}
                  dataSource={articleData}
                />
              </Col>

            </Row>
            :<div></div>
            }
          </TabPane>
          <TabPane tab="架构与流程管理部" key="jiagou">
            {activeKey == "jiagou" ?
              <Row>
                <Col xl={8} lg={12} md={12} sm={24} xs={24}>
                  <div >
                    <Donut
                      height={400}
                      data={articleData}
                    />
                  </div>
                </Col>
                <Col xl={16} lg={12} md={12} sm={24} xs={24}>
                  <div >
                    <Bar
                      height={400}
                      data={articleData}
                    />
                  </div>
                </Col>


              </Row> : <div></div>
            }



          </TabPane>
          <TabPane tab="业务解决方案部" key="solution">
            {activeKey == "solution" ?
              <Row>
                <Col xl={8} lg={12} md={12} sm={24} xs={24}>
                  <div >
                    <Donut
                      height={400}
                      data={articleData}
                    />
                  </div>
                </Col>
                <Col xl={16} lg={12} md={12} sm={24} xs={24}>
                  <div >
                    <Bar
                      height={400}
                      data={articleData}
                    />
                  </div>
                </Col>


              </Row> : <div></div>
            }

          </TabPane>
          <TabPane tab="数据与技术部" key="data">
            {activeKey == "data" ?
              <Row>
                <Col xl={8} lg={12} md={12} sm={24} xs={24}>
                  <div >
                    <Donut
                      height={400}
                      data={articleData}
                    />
                  </div>
                </Col>
                <Col xl={16} lg={12} md={12} sm={24} xs={24}>
                  <div >
                    <Bar
                      height={400}
                      data={articleData}
                    />
                  </div>
                </Col>


              </Row> : <div></div>
            }
          </TabPane>
          <TabPane tab="基础架构运维部" key="basis">
            {activeKey == "basis" ?
              <Row>
                <Col xl={8} lg={12} md={12} sm={24} xs={24}>
                  <div >
                    <Donut
                      height={400}
                      data={articleData}
                    />
                  </div>
                </Col>
                <Col xl={16} lg={12} md={12} sm={24} xs={24}>
                  <div >
                    <Bar
                      height={400}
                      data={articleData}
                    />
                  </div>
                </Col>


              </Row> : <div></div>
            }
          </TabPane>
          <TabPane tab="信息安全部" key="safe">
            {activeKey == "safe" ?
              <Row>
                <Col xl={8} lg={12} md={12} sm={24} xs={24}>
                  <div >
                    <Donut
                      height={400}
                      data={articleData}
                    />
                  </div>
                </Col>
                <Col xl={16} lg={12} md={12} sm={24} xs={24}>
                  <div >
                    <Bar
                      height={400}
                      data={articleData}
                    />
                  </div>
                </Col>


              </Row> : <div></div>
            }
          </TabPane>
        </Tabs>
      </div>
    </Card>
  )
);

export default ArticleCard;
