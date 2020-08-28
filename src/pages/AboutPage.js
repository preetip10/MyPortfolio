import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {
    return(
        <div>
            <Hero title={props.title} />
            <Content>
                <p>I'm a fun-loving, tech-savvy person, passionate for learning new technical skills every day. Over 3 years of Web Design/Development experience including Planning, Delivery and Testing of complex web implementation and Support engagements. End to End Web development Lifecycle Implementation and Support.  Currently, I’m seeking an opportunity post maternity break
                <p>Specialized in front-end development such as HTML5, CSS4, JavaScript, Angular, jQuery, AJAX, JSON, XML, Bootstrap4, Angular Material, and Sass/Scss. In-depth understanding of JS Frameworks, ES5/6, jQuery, Angular 2/9, NodeJS, Express,  React, Typescript. I'm a self-motivated and dedicated team player, my greatest strength is work well under pressure. My hubby is painting.</p>
                <p>I'm the mother of a 4-year-old girl, love to play with her, guide her and teach her. Thank you, Lord, for your blessings on me, the best gift ever, my daughter.</p></p>
            </Content>
        </div>
    );
}

export default AboutPage; 