import React from 'react'
import PropTypes from 'prop-types';

//I can either use props inthe function Button to access the props from
//Header.js OR I can disteructure the the props by adding the names of 
//the props inside ({ colour, text })

function Button({ colour, text, onClickFunc}) {

    return (
        
        <button 
        onClick={onClickFunc}
        style={{ backgroundColor: colour}} 
        className="btn">{text}
        </button>
        
    )
}

//----------------------------------------------------------------

//ADDING DEFAULTS & PROP TYPES BELOW

Button.defaultProps = {
    colour: 'red',
    text: 'Name a button!'

}

Button.propTypes = { 
    text: PropTypes.string,
    onClickFunc: PropTypes.func.isRequired
}

export default Button
