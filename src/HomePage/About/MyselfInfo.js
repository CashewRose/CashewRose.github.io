import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './MyselfInfo.css'
import image from './Photo.jpg'
import { FontAwesomeIcon }from '@fortawesome/react-fontawesome'
import { faGithubAlt, faLinkedin, } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import About from './AboutMe';

class SelfCard extends Component {
    render(){
        return(
            <div className='Contain'>
                <div className='AboutCard'>
                    <ReactCSSTransitionGroup
                        transitionName="example"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}>

                    <img className="me" src={image}></img>
                    </ReactCSSTransitionGroup>
                    <a className="contact" href="https://github.com/CashewRose/">
                        <FontAwesomeIcon icon={faGithubAlt} /> Github</a>
                    <a className="contact" href="https://www.linkedin.com/in/cashew-agnoletti">
                        <FontAwesomeIcon icon={faLinkedin} /> Linkedin</a>
                    <a className="contact" href="mailto:danieagnolett@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} /> Email</a>
                </div>    
                <About />
            </div>
        )
    }
}

export default SelfCard;