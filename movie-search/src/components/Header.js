//呈现应用标题，并接受标题属性
import React from 'react';

// you can add this to the onClick listener of the Header component
const refreshPage = () => {
    window.location.reload();
};

const Header = (props) => {
    return (
        <div className="App-header">
            <h2 onClick={refreshPage}>{props.text}</h2>
        </div>
    );
};

export default Header;