import React, { Component } from 'react';
import { G2, Chart, Geom, Axis, Tooltip, Coord, Label, Legend, View, Guide, Shape, Facet, Util } from 'bizcharts';
import Debounce from 'lodash-decorators/debounce';
import Bind from 'lodash-decorators/bind';
import DataSet from "@antv/data-set";


class Donut extends Component {


    @Bind()
    @Debounce(400)
    resize() {
        if (!this.node) {
            return;
        }
        const canvasWidth = this.node.parentNode.clientWidth;
        const { data = [], autoLabel = true } = this.props;
        if (!autoLabel) {
            return;
        }
        const minWidth = data.length * 30;
        const { autoHideXLabels } = this.state;
    
        if (canvasWidth <= minWidth) {
          if (!autoHideXLabels) {
            this.setState({
              autoHideXLabels: true,
            });
          }
        } else if (autoHideXLabels) {
          this.setState({
            autoHideXLabels: false,
          });
        }

    }
    total=arr=>{
        let sum=0;
        arr.forEach(item=>{
            sum+=item.num;

        })
        return sum;
    }

    render() {
        const {
            height,
            forceFit = true,
            data,
        } = this.props;
        const { DataView } = DataSet;
        const { Html } = Guide;
        const dv = new DataView();
        dv.source(data).transform({
            type: "percent",
            field: "num",
            dimension: "organization",
            as: "percent"
        });
        const cols = {
            percent: {
                formatter: val => {
                    val = val * 100 + "%";
                    return val;
                }
            }
        }
        const total=this.total(data);

        return (
            <div >
                <Chart
                    height={height}
                    data={dv}
                    scale={cols}
                    padding={[0, 100, 80, 80]}
                >
                    <Coord type={"theta"} radius={0.75} innerRadius={0.6} />
                    <Axis name="percent" />
                    <Legend
                        position="right"
                        offsetY={-height/2 + 200}
                        offsetX={-20}
                    />
                    <Tooltip
                        showTitle={false}
                        itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
                    />
                    <Guide>
                        <Html
                            position={["50%", "50%"]}
                            html={() => (`<div style="color:#8c8c8c;font-size:1.16em;text-align: center;width: 10em;">文章总数<br><span style="color:#262626;font-size:2.5em">${total}</span>篇</div>`)}
                            alignX="middle"
                            alignY="middle"
                        />
                    </Guide>
                    <Geom
                        type="intervalStack"
                        position="percent"
                        color="organization"
                        tooltip={[
                            "organization*percent",
                            (organization, percent) => {
                                percent = Math.round(percent*10000)/100+'%';
                                return {
                                    name: organization,
                                    value: percent
                                };
                            }
                        ]}
                        style={{
                            lineWidth: 1,
                            stroke: "#fff"
                        }}
                    >
                        {/* <Label
                            content="percent"
                            formatter={(val, item) => {
                                return item.point.organization + ": " + val;
                            }}
                        /> */}
                    </Geom>


                </Chart>

            </div>
        );
    }
}

export default Donut;
