/* eslint-disable no-sequences */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OnlStt from '../OnlStt.js';

export class InforRes2 extends Component {
    render() {
        const { name, description, city, delivery_price, currency, online, tags } = this.props.rtr;

        let onoff = ( this, online === true ) ? "Online" : 'Offline';

        return (
            <div className="info-res2">
                <h3 className="name-res2">{ this, name }</h3>
                <p><strong>Description: </strong>{ this, description }</p>
                <p><strong>City: </strong>{ this, city }</p>
                <p><strong>Delivery price: </strong>{ this, delivery_price }</p>
                <p><strong>Currency: </strong>{ this, currency }</p>
                <p><strong>Status: </strong>{ this, onoff }</p>
                <p className="promo-res2">{ this, tags.map( tag => 
                    {
                        return " #" + tag;
                    } ) }</p>
                <div className="opentime-status">
                    <OnlStt rtr={ this.props.rtr } />
                </div>
            </div>
        )
    }
}

// Prop types
InforRes2.propTypes = {
    rtr: PropTypes.object.isRequired
}

export default InforRes2