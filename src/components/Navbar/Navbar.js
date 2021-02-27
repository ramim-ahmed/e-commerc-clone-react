import React from 'react';

const Navbar = ({setKeyword}) => {
    const handlInput = (e) => {
           setKeyword(e.target.value)
    }
    return (
        <div className="nav-bar">
            <span>My Shop</span>
            <input onChange = {handlInput} type="text" placeholder='search'/>
        </div>
    );
};

export default Navbar;