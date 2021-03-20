import React, {Component} from 'react';
import _ from 'lodash';

import ShotChart from './ShotChart';
import CounterSlider from './CounterSlider'

class DataViewContainer extends Component {
    state = {
        minCount: 2
    }

    onCountSliderChange = (count) => {
        this.setState({ minCount: count });
    }

    render() {
        return (
            <div className="data-view">
                <ShotChart playerId={this.props.playerId}
                           minCount={this.state.minCount}
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