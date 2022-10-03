import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div className='card'>
                <h3>{this.props.title}</h3>
                <img 
                    src={this.props.img.src} 
                    alt={this.props.img.alt}
                
                />
                <p>{this.props.description}</p>   
                <div className='project-links'>
                    {this.makeLinks(this.props.links)}
                </div>             
                <ul className='skills'>
                    <h4>skills involved</h4>
                    {this.makeSkills(this.props.skills)}
                </ul>
            </div>
        )
    }

    makeLinks(links) {
        return links.map((link) => 
            <a 
                key={link.text} 
                href={link.href} 
                target='_blank' 
                rel="noopener noreferrer"
            >
                    {link.text}
            </a>
        )
    }

    makeSkills(skills) {
        return skills.map((skill) => 
            <li key={skill}>
                {skill}
            </li>
        )
    }
}
export default Card;