import React from 'react';
require('./Slider.scss');

class Slider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: 0
        };
    }

    handleComponent(index) {
        this.setState({selected: index});
        if (this.props.onChange)
            this.props.onChange(index);
    }

    render() {
        let style = {
            'left': `${22 + (this.state.selected * 50)}px`
        };
        let items = this.props.items;
        return (
            <div className="slider">
                <ul>
                    {items.map(function(item, index) {
                        return <SliderItemWrapper onClick={this.handleComponent.bind(this, index)} selected={this.state.selected} key={index} id={index} label={item} />
                    }, this)}
                </ul>
                <div style={style} className="slider-status"><div className="arrow-triangle"></div></div>
            </div>
        );
    }
}

var SliderItemWrapper = React.createClass({
    render: function() {
        let classSelected = (this.props.selected == this.props.id) ? 'active' : '';
        return <li className={classSelected}><span onClick={this.props.onClick.bind(this, this.props.id)}>{this.props.label}</span></li>;
    }
});

export default Slider;
