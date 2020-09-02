import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Filter extends Component {
    render() {
        return (
            <div className="search-filter">
                <div className="nav-filter clearfix">
                    <div className="float-left">
                        <button className="filter-sort" onClick={ this.props.list_list }>List View</button>
                        <button className="filter-sort" onClick={ this.props.list_grid }>Grid View</button>
                    </div>

                    <div className="float-right">
                        <button className="filter-sort" onClick={ this.props.list_new }>Newest</button>
                        <button className="filter-sort" onClick={ this.props.list_asc }>A-Z</button>
                        <button className="filter-sort" onClick={ this.props.list_desc }>Z-A</button>
                    </div>
                </div>
            </div>
        )
    }
}

// Prop types
Filter.propTypes = {
    list_list: PropTypes.func.isRequired,
    list_grid: PropTypes.func.isRequired,
    list_new: PropTypes.func.isRequired,
    list_asc: PropTypes.func.isRequired,
    list_desc: PropTypes.func.isRequired
}


export default Filter
