import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InforRes2 from './InforRes2.js';

export class ItemContent2 extends Component {
    render() {
        return (
            <div className="item-content2">
                <div className="img-res2">
                    <img src={ this.props.rtr.image } alt="res img" />
                </div>
                <InforRes2 rtr={ this.props.rtr }/>
            </div>
        )
    }
}

// Prop types
ItemContent2.propTypes = {
    rtr: PropTypes.object.isRequired
}

export default ItemContent2
