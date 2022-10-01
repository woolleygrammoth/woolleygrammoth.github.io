import React from 'react'; 
import Section from '../components/Section';

import overview from '../content/overview.js';
import bio from '../content/bio.js';
import mission from '../content/mission.js';
import {physics, climateAndEnergy, education, hobbies} from '../content/interests.js'; 

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          text: 'Overview',
          interestCategory: 'Physics'
        };
      }

    render() {
        return (    
                <main className='main-home'>
                    <img src={require('../content/images/g_j-grad.jpg')} alt='Graham with his dog, Jenga'/>
                    <div className='summary-links' onClick={e => this.handleSummaryClick(e)}>
                        <p id='overview' className={this.state.text === 'Overview' ? 'selected' : ''}>Overview</p>
                        <p id='bio' className={this.state.text === 'Bio' ? 'selected' : ''}>Bio</p>
                        <p id='mission' className={this.state.text === 'Mission' ? 'selected' : ''}>Mission</p>
                        <p id='interests' className={this.state.text === 'Interests' ? 'selected' : ''}>Interests</p>

                    </div>
                    {this.state.text === 'Overview' && <Section content={overview} />}
                    {this.state.text === 'Bio' && <Section content={bio}/>}
                    {this.state.text === 'Mission' && <Section content={mission} />}
                    {this.state.text === 'Interests' && 
                        <>
                            <div className='interests-links' onClick={e => this.handleInterestClick(e)}>
                                <p id='physics' className={this.state.interestCategory === 'Physics' ? 'selected' : ''}>Physics</p>
                                <p id='climate-and-energy' className={this.state.interestCategory === 'Climate and Energy' ? 'selected' : ''}>Climate and Energy</p>
                                <p id='education' className={this.state.interestCategory === 'Education' ? 'selected' : ''}>Education</p>
                                <p id='hobbies' className={this.state.interestCategory === 'Hobbies' ? 'selected' : ''}>Hobbies</p>
                            </div>
                            {this.state.interestCategory === 'Physics' && <Section content={physics} />}
                            {this.state.interestCategory === 'Climate and Energy' && <Section content={climateAndEnergy} />}
                            {this.state.interestCategory === 'Education' && <Section content={education} />}
                            {this.state.interestCategory === 'Hobbies' && <Section content={hobbies} />}
                        </>
                    }
                </main>
        );
    }

    handleSummaryClick(e) {
        if (e.target.tagName === 'P') {
            this.setState({text: e.target.textContent});
        }
    }
    
    handleInterestClick(e) {
        if (e.target.tagName === 'P') {
            this.setState({interestCategory: e.target.textContent});
        }
    }

}

export default Home