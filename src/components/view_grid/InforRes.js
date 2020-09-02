/* eslint-disable no-sequences */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OnlStt from '../OnlStt.js';

export class InforRes extends Component {
    render() {
        const { city, name, tags } = this.props.rtr;

        return (
            <div className="info-res">
                <div className="info-res-basic">
                    <h4 className="name-res">{ this, name }</h4>
                    <div className="address-res">{ this, city }</div>
                </div>
                <p className="promo-res">{ this, tags.map( tag => " #" + tag) }
                </p>
                <div className="opentime-status">
                        <OnlStt rtr={ this.props.rtr } />
                </div>
            </div>
        )
    }
}

// Prop types
InforRes.propTypes = {
    rtr: PropTypes.object.isRequired
}

export default InforRes
