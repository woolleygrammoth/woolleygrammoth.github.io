import React from "react";
import { Link } from 'react-router-dom';
 
class Header extends React.Component {
    render() {
        return (
            <>
            <div className='main-header'>
                <h1>Graham Woolley</h1>
                <div className='contact'>
                    <p>gwoolley@berkeley.edu</p>
                    <p>Alameda, CA</p>
                </div>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/portfolio'>Portfolio</Link>
                    {/* <Link to='/cv'>CV</Link> */}
                </nav>
            
            </div>
            {/* <hr/> */}
            </>
        )
    }
}

export default Header;