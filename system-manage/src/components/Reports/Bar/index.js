import React, { Component } from 'react';
import { G2, Chart, Geom, Axis, Tooltip, Coord, Label, Legend, View, Guide, Shape, Facet, Util } from 'bizcharts';
import Debounce from 'lodash-decorators/debounce';
import Bind from 'lodash-decorators/bind';
import DataSet from "@antv/data-set";


class Bar extends Component {


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
    getTrend = arr =>
        arr.map(item => {
            return item.organization;
        })
    getData = arr => {
        if (arr instanceof Array) {
            let result = arr.map(item => {
                let arr2 = item.articleNum;
                arr2.forEach(value => {
                    value.org = item.organization;
                })
                return arr2;
            })
            result = [].concat(...result);
            return result;
        }
    }
    getName = arr =>
        arr.map(item => {
            return item.username
        })

    render() {
        const {
            height,
            forceFit = true,
            data,
        } = this.props;
        const { DataView } = DataSet;
        const { Html } = Guide;
        const cols = {
            trend: {
                values: this.getTrend(data)
            },
            tickInterval: 20
        };
        const dataArr = this.getData(data);
        const nameArr = this.getName(dataArr);
        const dv = new DataView();
        dv.source(dataArr).transform({
            type: "article",
            field: nameArr,
            dimension: "username",
            as: "article"
        });

        return (
            <div >
                <Chart height={400} data={dv} scale={cols} forceFit  padding={[20, 100, 80, 80]}>
                    <Axis name="username" />
                    <Axis name="article" />
                    <Legend />
                    <Tooltip
                        crosshairs={{
                            type: "y"
                        }}
                    />
                    <Geom
                        type="interval"
                        position="username*article"
                        color={"org"}
                        style={{
                            lineWidth: 1,
                            stroke: "#fff"
                        }}
                    ></Geom>

                </Chart>

            </div>
        );
    }
}

export default Bar;
