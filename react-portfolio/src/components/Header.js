import React from "react";
 
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
                    <a href='/'>Home</a>
                    <a href='/portfolio'>Portfolio</a>
                    <a href='/CV'>CV</a>
                </nav>
            
            </div>
            {/* <hr/> */}
            </>
        )
    }
}

export default Header;