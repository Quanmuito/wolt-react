import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemContent from './ItemContent.js';

export class Item extends Component {
    compare = (a, b) => {
        if ( a.name < b.name )
        {
            return -1;
        }
        if ( a.name > b.name )
        {
            return 1;
        }
        return 0;
    }

    comparereverse = (a, b) => {
        if ( a.name > b.name )
        {
            return -1;
        }
        if ( a.name < b.name )
        {
            return 1;
        }
        return 0;
    }

    render() {

        // Use slice to create a new array for sorting
        let resList = this.props.rtrs;
        let resList_default = resList.slice( 0, resList.length );
        let resList_asc = resList.slice( 0, resList.length ).sort( this.compare );
        let resList_desc = resList.slice( 0,resList.length ).sort( this.comparereverse );

        //Return
        if ( this.props.contentSort === 'default' )
        {
            return resList_default.map( (rtr) => (
                <div className="item">
                    <ItemContent
                        key={ resList.indexOf(rtr) }
                        rtr = { rtr }
                    />
                </div>
            ) )
        }

        else if ( this.props.contentSort === 'asc' )
        {
            return resList_asc.map( (rtr) => (
                <div className="item">
                    <ItemContent
                        key={ resList.indexOf(rtr) }
                        rtr = { rtr }
                    />
                </div>
            ) )
        }

        else if ( this.props.contentSort === 'desc' )
        {
            return resList_desc.map( (rtr) => (
                <div className="item">
                    <ItemContent
                        key={ resList.indexOf(rtr) }
                        rtr = { rtr }
                    />
                </div>
            ) )
        }
    }
}

// Prop types
Item.propTypes = {
    rtrs: PropTypes.array.isRequired,
    contentSort: PropTypes.string.isRequired
}

export default Item
