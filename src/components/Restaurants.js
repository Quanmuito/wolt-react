import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './view_grid/Item.js';
import Item2 from './view_list/Item2.js';

export class Restaurants extends Component {
    render() {
        if ( this.props.contentView === "gridView" )
        {
            return (
                <div className="list-restaurants">
                    <Item 
                        rtrs={ this.props.rtrs } 
                        contentSort = { this.props.contentSort }
                    />
                </div>
            )
        }
        else
        {
            return (
                <div className="list-restaurants2">
                    <Item2 
                        rtrs={ this.props.rtrs }
                        contentSort = { this.props.contentSort }
                    />
                </div>
            )
        }
        
    }
}

// Prop types
Restaurants.propTypes = {
    rtrs: PropTypes.array.isRequired,
    contentView: PropTypes.string.isRequired,
    contentSort: PropTypes.string.isRequired
}
export default Restaurants
