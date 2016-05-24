/*
 * Copyright (c) 2011-2016 Pivotal Software Inc, All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React from 'react';
import Nvd3 from './../../core/chart/Nvd3';

require('./Buffer.scss');

class Buffer extends React.Component {
    render() {
        return (

            <div className="buffer">
                <div className="buffer-container">
                    <div className="buffer-head">
                        <span className="label">MessageMetadataDico</span>
                        <div className="progress">
                            <span className="label">MessageMetadataDico</span>
                        </div>
                        <span className="percent">30%</span>
                    </div>
                    <div className="buffer-content">
                        <div className="left">
                            <div className="donut-chart">
                                {
                                    React.createElement(Nvd3, {
                                        id: "toto2",
                                        type:'pieChart',
                                        datum: this.getDummy2(),
                                        showLegend: false,
                                        showLabels: false,
                                        margin: {top:0,left:10,right:0,bottom:0},
                                        duration: 1,
                                        x:"key",
                                        y:"y",
                                        donut: true,
                                        donutRatio: 0.6,
                                        height: 100
                                    })
                                }
                            </div>
                        </div>
                        <div className="right">
                            <div className="chart">
                                {
                                    React.createElement(Nvd3, {
                                        type:'lineChart',
                                        id: "toto1",
                                        datum: this.getDummy(),
                                        margin: {left: 20, bottom: 10, right: 10, top:10},
                                        useInteractiveGuideline: true,
                                        showYAxis: false,
                                        showXAxis: false,
                                        showLegend: false,
                                        forceY: [0,100],
                                        duration: 1,
                                        height: 120
                                    })
                                }
                            </div>
                            <ul className="metrics">
                                <li><strong>Host:</strong> <span>4,231.3/s</span></li>
                                <li><strong>Cluster:</strong> <span>3,234,231.3/s</span></li>
                                <li><strong>Stream:</strong> <span>OK</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    getDummy() {
        var c1 = [];
        for (var i = 0; i < 30; i++) {
            c1.push({x: i, y: Math.round(Math.random() * 0.9 * 100)});
        }
        return [
            { values: c1, key: 'CPU', color: '#CCC' },
        ];
    }

    getDummy2() {
        return [
            {key: "One", y: 80, color: "#60b124"},
            {key: "Two", y: 20, color: "#e5e5e5"},
        ];
    }

}

export default Buffer;
