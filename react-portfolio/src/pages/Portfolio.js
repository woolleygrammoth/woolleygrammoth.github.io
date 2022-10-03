import React from 'react';
import Card from '../components/Card';

class Portfolio extends React.Component {
    constructor() {
        super();
        this.projects = {
            'Atom Trapping': {
                title: 'Atom Trapping with Laser Cooling'
                , description: "In the Berkeley Experimentation lab, I created a Bose-Einstein condensate (an exotic state of matter) using a technique called Laser Cooling, which can extinguish virtually all atomic motion. We achieved temperatures below 0.001 Kelvin. "
                , img: {
                    src: require('../content/images/atom-trapping.png'),
                    alt: 'Bose-Einstein Condensate in a Vacuum Chamber'
                }
                , links: [
                    {
                        href: 'https://docs.google.com/presentation/d/1YIwdMKrlFrHlg4wGQPc4ENhNiwb39o1MUXTTWBrxR3o/edit#slide=id.p', 
                        text: 'Details'
                    }
                ]
                , skills: [
                    'Advanced optical alignment', 
                    'Feedback and Control', 
                    'Data acquisition (LabVIEW)', 
                    'Signal processing', 
                    'Atomic physics', 
                    'High-current applications (50A)',
                    'Instrumentation',
                    'Advanced temperature measurement techniques', 
                    'Data analysis' 
                ]
            }, 
            'Avatar': {
                title: 'Avatar the Last Airbender Guessing Game'
                , description: "An Avatar-themed phrase guessing game (it's my favorite show). Its logic (written in Javascript) produces a game very similar to Hangman."
                , img: {
                    src: require('../content/images/avatar.png'),
                    alt: 'Avatar: The Last Airbender Title Screen'
                }
                , links: [
                    {
                        href: 'https://woolleygrammoth.github.io/td-project-6/', 
                        text: 'See this project'
                    }, 
                    {
                        href: 'https://github.com/woolleygrammoth/td-project-6',
                        text: 'Source code'
                    }
                ]
                , skills: [
                    'Javascript',
                    'JS DOM Manipulation',
                    'JS Event Listeners', 
                    'HTML', 
                    'CSS Flexbox'
                ]
            }, 
            'Photo Gallery': {
                title: 'Interactive Photo Gallery'
                , description: "A photo gallery which I built using CSS Grid, a Javascript lightbox plugin, and original search filter functionality. You can filter the photos based on their captions in the lightbox. Enjoy these pictures of my dog and family!"
                , img: {
                    src: require('../content/images/bayviewcafe.jpg'),
                    alt: 'San Francisco Bay as seen from the Lawrence Hall of Science'
                }
                , links: [
                    {
                        href: 'https://woolleygrammoth.github.io/td-project-5/', 
                        text: 'See this project'
                    }, 
                    {
                        href: 'https://github.com/woolleygrammoth/td-project-5',
                        text: 'Source code'
                    }
                ]
                , skills: [
                    'Javascript',
                    'CSS Grid',
                    'JS DOM Manipulation'
                ]
            }, 
            'Webapp Dashboard': {
                title: 'Webapp Dashboard'
                , description: "A dashboard for a hypothetical web application. I built it from scratch in HTML & CSS and added interactions in Javascript. I used Chart.js to display fictitious web traffic data, animated SVG icons, and used localStorage to save a user's settings."
                , img: {
                    src: require('../content/images/dashboard.png'),
                    alt: 'Nondescript bar graph'
                }
                , links: [
                    {
                        href: 'https://woolleygrammoth.github.io/td-project-7/', 
                        text: 'See this project'
                    }, 
                    {
                        href: 'https://github.com/woolleygrammoth/td-project-7',
                        text: 'Source code'
                    }
                ]
                , skills: [
                    'Javascript',
                    'Chart.js', 
                    'CSS Grid',
                    'CSS Flexbox', 
                    'JS DOM Manipulation',
                    'HTML', 
                    'SVG', 
                    'JS localStorage'
                ]
            }, 
            'Employee Directory': {
                title: 'Employee Directory using Fetch'
                , description: "Random user data is retrieved from the randomuser.me API using the JS Fetch API. Additional JS search filter functionaility and a popup window are included to display information in a mock employee directory."
                
                , img: {
                    src: require('../content/images/directory.png'),
                    alt: 'Binary Tree'
                }
                , links: [
                    {
                        href: 'https://woolleygrammoth.github.io/td-project-8/', 
                        text: 'See this project'
                    }, 
                    {
                        href: 'https://github.com/woolleygrammoth/td-project-8',
                        text: 'Source code'
                    }
                ]
                , skills: [
                    'Javascript', 
                    'Javascript Fetch API', 
                    'API Interactions', 
                    'CSS Grid', 
                    'HTML', 
                    'CSS Flexbox',
                    'JS DOM Manipulation'
                ]
            }, 
            'Sass': {
                title: 'Sass - Web Style Guide'
                , description: "A web style guide styled using Sass, included here to demonstrate I know how to use Sass and am thus ready for larger development projects that require it."
                
                , img: {
                    src: require('../content/images/sass.png'),
                    alt: 'Command Line Interface'
                }
                , links: [
                    {
                        href: 'https://woolleygrammoth.github.io/td-project-4/', 
                        text: 'See this project'
                    }, 
                    {
                        href: 'https://github.com/woolleygrammoth/td-project-4',
                        text: 'Source code'
                    }
                ]
                , skills: [
                    'Sass', 
                    'HTML'
                ]
            }, 
            'Dark Matter': {
                title: 'Dark Matter Model Constraints'
                , description: "I co-authored this paper with a Postdoc at the Berkeley Center for Theoretical Physics. We used existing astrophysical data to constrain a set of dark matter models in order to motivate future experiments in dark matter detection."
                
                , img: {
                    src: require('../content/images/darkmatter.jpg'),
                    alt: 'Isotropic Universe'
                }
                , links: [
                    {
                        href: 'https://arxiv.org/abs/1905.04319', 
                        text: 'See the paper'
                    }
                ]
                , skills: [
                    'Quantum Field Theory', 
                    'Feynman Diagram Calculations', 
                    'Particle Physics Modeling', 
                    'Theoretical Physics', 
                    'Scientific research', 
                    'Technical writing', 
                    'Data extraction from plots', 
                    'Python data analysis', 
                    'Numpy', 
                    'Scipy', 
                    'Matplotlib',
                    'Symbolic manipulation in Mathematica'
                ]
            }, 
            'Geochron': {
                title: 'Geochronology experiments'
                , description: "This paper establishes an improved method for measuring the age of rock samples containing 40Ar / 39Ar using a D-D fusion neutron generator. My role within the team at Berkeley's High Flux Neutron Generator was to operate the HFNG, monitor the experiment in progress, machine a few parts for the experiment, and analyze data."
                
                , img: {
                    src: require('../content/images/geochron.jpg'),
                    alt: 'Canyon with dense geological features'
                }
                , links: [
                    {
                        href: 'https://www.science.org/doi/10.1126/sciadv.aaw5526', 
                        text: 'See the paper'
                    }
                ]
                , skills: [
                    'Python data analysis', 
                    'Machine shop manufacturing', 
                    'Heavy machinery operation', 
                    'Radiation safety', 
                    'Nuclear physics'
                ]
            }, 
            'Portfolio Website': {
                title: 'Portfolio Website'
                , description: "I originally wrote this website using vanilla JS, but this is an upgraded version written as a React application."
                
                , img: {
                    src: require('../content/images/earth.gif'),
                    alt: 'Gif of rotating Earth'
                }
                , links: [
                    {
                        href: 'https://github.com/woolleygrammoth/woolleygrammoth.github.io', 
                        text: 'Source code'
                    }
                ]
                , skills: [
                    'React', 
                    'Javascript', 
                    'NPM', 
                    'JSX', 
                    'SVG', 
                    'HTML', 
                    'CSS', 
                    'CSS Flexbox', 
                    'CSS Grid'
                ]
            }
        }
    }

    render() {
        return (
            <main className='main-portfolio'>
                <h5>This is a growing list of notable projects I've worked on. Projects span several different fields, including theoretical and experimental physics, front-end web development, data analytics, large data projects for energy modeling, and more. </h5>
                <Card {...this.projects['Portfolio Website']}/>
                <Card {...this.projects['Photo Gallery']}/>
                <Card {...this.projects['Dark Matter']}/>
                <Card {...this.projects['Avatar']}/>
                <Card {...this.projects['Geochron']}/>
                <Card {...this.projects['Employee Directory']}/>
                <Card {...this.projects['Atom Trapping']}/>
                <Card {...this.projects['Webapp Dashboard']}/>
                <Card {...this.projects['Sass']}/>

            </main>
        );
    }
}


export default Portfolio;