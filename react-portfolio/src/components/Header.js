import React from "react";
 
class Header extends React.Component {
    render() {
        return (
            <div className='main-header'>
                <h1>Graham Woolley</h1>
                <div className='contact'>
                    <p>gwoolley@berkeley.edu</p>
                    <p>Alameda, CA</p>
                    <div className='icons'>
                    <a href='https://github.com/woolleygrammoth/' target='_blank' rel="noopener noreferrer"><img id='github.svg' src={require('../images/github.svg')} alt='Github Logo' /></a>
                    <a href='https://www.linkedin.com/in/graham-woolley-18b63818b/' target='_blank' rel="noopener noreferrer"><img id='linkedin' src={require('../images/linkedin.svg')} alt='LinkedIn Logo' /></a>
                    <a href='https://twitter.com/woolleygrammoth/' target='_blank' rel="noopener noreferrer"><img id='twitter' src={require('../images/twitter.svg')} alt='Twitter Logo' /></a>
                    </div>
                </div>
                <nav>
                    <a href='/'>Home</a>
                    <a href='/portfolio'>Porftolio</a>
                    <a href='/CV'>CV</a>
                </nav>
            </div>
        )
    }
}

export default Header;