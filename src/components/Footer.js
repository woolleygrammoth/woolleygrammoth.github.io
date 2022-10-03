import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div className='footer-nav'>
                <div className='icons'>
                    <a href='https://github.com/woolleygrammoth/' target='_blank' rel="noopener noreferrer"><img id='github.svg' src={require('../content/images/github.svg')} alt='Github Logo' /></a>
                    <a href='https://www.linkedin.com/in/graham-woolley-18b63818b/' target='_blank' rel="noopener noreferrer"><img id='linkedin' src={require('../content/images/linkedin.svg')} alt='LinkedIn Logo' /></a>
                    <a href='https://twitter.com/woolleygrammoth/' target='_blank' rel="noopener noreferrer"><img id='twitter' src={require('../content/images/twitter.svg')} alt='Twitter Logo' /></a>
                </div>
            </div>
        )
    }

}

export default Footer;