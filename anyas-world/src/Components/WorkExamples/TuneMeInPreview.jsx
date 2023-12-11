import React from 'react';
import WorkBox from './Workbox';
import './Work.css';
import TuneMeInPhoto from '../../Icons/tune_me_in_sample.png'
import TuneMeInGif from '../../Icons/tune_me_in.gif'

function TuneMeInPreview ({opacityEffect}) {
    return (
        <WorkBox 
            title="TuneMeIn"
            body="Social media for music lovers, by music lovers."
            image={TuneMeInPhoto}
            hoverImage={TuneMeInGif}
            header="TECH STACK"
            skillsUsed="Flask, React, Redis, Celery, MySQL, MongoDB"
            imageHeight='75vh'
            aspectRatio='3 / 4'
            delayAppearance='1s'
            opacityEffect={opacityEffect}
            underDevelopment={true}
        />
    )
}

export default TuneMeInPreview