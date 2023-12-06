import React , { useState } from 'react';
import Arrow from '../Components/Arrow'
import WorkBox from './Workbox';
import './Work.css';

import TuneMeInPreview from '../Icons/tune_me_in_sample.png'
import TuneMeInGif from '../Icons/tune_me_in.gif'
import AdvPreview from '../Icons/diffpure_attack_preview.png'
import AdvGif from '../Icons/Diffpure_Preview.gif'
import HawkEyeGif from '../Icons/hawkeye_preview.gif'
import HawkEyePreview from '../Icons/hawkeye_preview.jpg'
import Connect4Gif from '../Icons/connect4_preview.gif'
import Connect4Preview from '../Icons/connect4_preview.png'
import NotifBotPreview from '../Icons/Untitled design.png'

import SAWCover from '../Icons/saw.jpg'

function WorkExamples () {

    const [isPopupVisible, setIsPopupVisible] = useState(false);

    // Function to toggle popup visibility
    const togglePopup = () => {
        setIsPopupVisible(!isPopupVisible);
    };

    return (
        <div style={{width: '100%', height: 'fit-content', backgroundColor: '#CCE8E8ff'}}>
            <text className='see-my-work' style={{'animationDuration': '0.5s'}}> view my work </text>
            <Arrow></Arrow>
            <sticky-grid>
                <div id='work-examples' className='work-column-left'>
                    <WorkBox 
                        title="TuneMeIn"
                        body="Social media for music lovers, by music lovers."
                        image={TuneMeInPreview}
                        hoverImage={TuneMeInGif}
                        header="TECH STACK"
                        skillsUsed="Flask, React, Redis, Celery, MySQL, MongoDB"
                        imageHeight='75vh'
                        aspectRatio='3 / 4'
                        delayAppearance='1s'
                        underDevelopment={true}
                    />
                    <WorkBox 
                        title="Hawk Eye"
                        body="Computer vision for unmanned aerial vehicles."
                        image={HawkEyePreview}
                        hoverImage={HawkEyeGif}
                        header="TECH STACK"
                        skillsUsed="Python, Pytorch, Tensorboard, Bazel"
                        imageHeight='35vh'
                        delayAppearance='3s'
                        aspectRatio='20 / 11'
                    />
                    <WorkBox 
                        title="MusicNotifBot"
                        body="Your friendly neighorhood discord bot, here to compile your favorite artist's recent releases."
                        image={NotifBotPreview}
                        hoverImage={NotifBotPreview}
                        header="TECH STACK"
                        skillsUsed="discord.py, last.fm API, Spotify API"
                        imageHeight='60vh'
                        delayAppearance='5s'
                        underDevelopment={true}
                        aspectRatio='6 / 7'
                    />
                </div>
                <div className='work-column-right'>
                    <p className='selected-works' onClick={togglePopup}>
                        Selected <text style={{textDecoration: 'line-through'}}>Ambient</text> Technical Works 20-23
                    </p>
                    <WorkBox 
                        title="Attacking Diffusion Purified Adversarial Examples"
                        body="Adversarial examples that cannot be eliminated by diffusion models."
                        image={AdvPreview}
                        hoverImage={AdvGif}
                        header="SKILLS"
                        skillsUsed="machine learning, adversarial objectives, APGD"
                        imageHeight='50vh'
                        delayAppearance='2s'
                        aspectRatio='1 / 1'
                    />
                    <WorkBox 
                        title="Connect4!"
                        body="Embedded Connect4 on a TM4C123 microcontroller."
                        image={Connect4Preview}
                        hoverImage={Connect4Gif}
                        header="TECH STACK"
                        skillsUsed="Assembly, C++, Arm Cortex-M4F based MCU"
                        imageHeight='70vh'
                        delayAppearance='3s'
                        aspectRatio='3 / 4'
                    />
                    <a href='/#/work' className='see-more-work'>
                        see more work
                    </a>
                </div>
            </sticky-grid>
            {isPopupVisible && (
                <div className="selected-works-popup">
                    <img className='album-cover-container' src={SAWCover}></img>
                    <text className='music-text'>BOO! Music player soon...</text>
                </div>
            )}
        </div>
    )
}

export default WorkExamples