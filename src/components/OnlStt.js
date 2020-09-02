import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class OnlStt extends Component {
    render() {
        if ( this.props.rtr.online === true )
        {
            return (
                <span className="stt"
                    title="online"
                    style={ {color: 'rgb(35, 152, 57)', backgroundColor: 'rgb(35, 152, 57)'} }>
                </span>
            )
        }
        else 
        {
            return (
                <span className="stt" 
                    title="offline"
                    style={ {color: 'rgb(94, 89, 89)', backgroundColor: 'rgb(94, 89, 90)'} }>
                </span>
            )
        }
        
    }
}

// Prop types
OnlStt.propTypes = {
    rtr: PropTypes.object.isRequired
}

export default OnlStt
