import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InforRes from './InforRes.js';

export class ItemContent extends Component {
    render() {
        return (
            <div className="item-content">
                <div className="img-res">
                    <img src={ this.props.rtr.image } alt="res img" />
                </div>
                <InforRes rtr={ this.props.rtr }/>
            </div>
        )
    }
}

// Prop types
ItemContent.propTypes = {
    rtr: PropTypes.object.isRequired
}

export default ItemContent
