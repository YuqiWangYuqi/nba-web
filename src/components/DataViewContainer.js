import React, {Component} from 'react';
import _ from 'lodash';
import {Radio, Row, Col, Switch} from "antd";

import ShotChart from './ShotChart';
import CounterSlider from './CounterSlider'

class DataViewContainer extends Component {
    state = {
        minCount: 2,
        chartType: 'hexbin',
        displayTooltip: true,
    }

    onCountSliderChange = (count) => {
        this.setState({ minCount: count });
    }

    onChartTypeChange = (e) => {
        this.setState({chartType: e.target.value});
    }

    onToolTipChange = (displayToolTip) => {
        this.setState({displayToolTip});
    }

    render() {
        return (
            <div className="data-view">
                <ShotChart playerId={this.props.playerId}
                           minCount={this.state.minCount}
                           chartType={this.state.chartType}
                           displayTooltip={this.state.displayTooltip}
                />

                <div className="filters">
                    <CounterSlider value={this.state.minCount}
                                   onCountSliderChange={_.debounce(this.onCountSliderChange, 500)}/>
                </div>
            </div>
        );
    }
}

export default DataViewContainer;