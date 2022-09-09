import React from 'react'; 

class Home extends React.Component {
    render() {
        return (    
                <main className='main-home'>
                    <img src={require('../images/g_j-grad.jpg')} alt='Graham with his dog, Jenga'/>
                    <div className='overview'>
                        <p>Summary</p>
                        <p>Bio</p>
                        <p>Interests</p>
                    </div>
                </main>
        );
    }

}

export default Home