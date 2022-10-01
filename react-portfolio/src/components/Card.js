import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div class='card'>
                <h2>Project title</h2>
                <img src={require('../content/images/earth.gif')} />
                <p>DescriptionDescriptionDescriptionDescriptionDescription</p>
                <ul>
                    <h4>Skills used</h4>
                    <li>skill1</li>
                    <li>skill2</li>
                    <li>skill3</li>
                    <li>skill4</li>
                    <li>skill5</li>
                    <li>skill6</li>
                    <li>skill7</li>


                </ul>
            </div>
        )
    }
}
export default Card;