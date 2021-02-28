import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types'; // Type impt to get PropTypes 

const Header = (props) => {

    //This method/function will be a prop which I pass down to Button.
    const buttonAction = (event) => {
        alert('Button Active')
    }

    return (
        <header>
        <h1 style={{color: 'red'}}>{props.title}</h1>
        <Button colour='green' text='Alert!' onClickFunc={buttonAction}/>
        <Button colour={props.showAdd ? 'red' : 'green'} text={props.showAdd ? 'Close' : 'Add'} onClickFunc={props.onAdd}/>

        </header>
    )
}

//SEE ABOVE FOR INLINE STYLING 
//We can add styling to an element: style={{}}
//Use  double {{}}.

//----------------------------------------------------------------

//ADDING DEFAULTS & PROP TYPES BELOW

//If I dont pass a title from App.js, I can assign a default value to 
//the title.

Header.defaultProp = {
    title: 'Task Tracker',
};

//If I want give a prop a type so that an error pops up when 
//we enter a wrong type of a value. Look at the example below
//for the 'title' we want a string as a type not a number of course!

Header.propTypes = {
    title: PropTypes.string
}

export default Header
