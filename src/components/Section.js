import React from 'react';
import DOMPurify from 'dompurify';

class Section extends React.Component {
    render() {
        //content contains a js template string with html in it
        let innerHTML = this.props.content;
        return (
                <div className='section' 
                        dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(innerHTML)}}
                    >
                </div>
        )
    }
}

export default Section;