import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import lifeinsurancedirect from '../asserts/images/Life_Insurance_Direct_Logo.png';
import tedNoffsLogo from '../asserts/images/Ted-noffs-logo.png';
import eWLogo from '../asserts/images/EW-Logo.jpg';
import afixiLogo from '../asserts/images/Afixi_logo.png';

import Card from '../components/Card';

export class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
           items : [
                {
                    id: 0,
                    title: 'Life Insurance Direct',
                    subTitle: 'An Insurance Site',
                    imgSrc: lifeinsurancedirect,
                    link: 'https://www.lifeinsurancedirect.com.au/',
                    selected: true
                },
                {
                    id: 1,
                    title: 'Ted Noffs Foundation',
                    subTitle: 'Non for profit organisation',
                    imgSrc: tedNoffsLogo,
                    link: 'https://noffs.org.au/',
                    selected: true
                },
                {
                    id: 2,
                    title: 'Education World',
                    subTitle: 'Educational Website',
                    imgSrc: eWLogo,
                    link: 'https://www.educationworld.in/',
                    selected: true
                },
                {
                    id: 3,
                    title: 'Afixi Technologies Pvt Ltd',
                    subTitle: 'A website development company',
                    imgSrc: afixiLogo,
                    link: 'http://www.afixi.com/',
                    selected: true
                }

                /*{
                    id: 0,
                    title: 'LinkedIn',
                    subTitle: 'A Professional Networking Site',
                    imgSrc: '',
                    link: 'https://linkedin.com/in/preetip10mishra/',
                    selected: true
                },
                {
                    id: 1,
                    title: 'Github',
                    subTitle: 'Free Code availabe',
                    imgSrc: '',
                    link: 'https://github.com/preetip10',
                    selected: true
                },
                {
                    id: 2,
                    title: 'Twitter',
                    subTitle: 'Social networking site',
                    imgSrc: '',
                    link: '',
                    selected: true
                }*/

            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];
        items[id].selected = !items[id].selected;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
       return items.map(item => {
            return <Card item={item} onClick={(e) => this.handleCardClick(item.id, e)} key={item.id}/>
       });
    }


    render() {
        return (
            <Container fluid>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}

export default Carousel;
