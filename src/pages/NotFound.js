import React from 'react';

class NotFound extends React.Component {
    render() {
        return (
            <main>
                <h1>This page doesn't exist, but here's my dog helping me with physics!</h1>
                <img 
                    src={require('../content/images/jenga-smort.jpg')} 
                    alt="Graham's dog, Jenga, wearing a hat and yellow shirt"
                    style={{
                        'width': '100%'
                    }}
                    />
            </main>
        );
    }
}

export default NotFound;