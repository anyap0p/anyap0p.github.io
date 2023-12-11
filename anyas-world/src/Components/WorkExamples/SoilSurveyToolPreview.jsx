import React from 'react';
import WorkBox from './Workbox';
import SoilSurveyPhoto from '../../Icons/Soil Survey Tool Preview.png'
import SoilSurveyGif from '../../Icons/soil_survey_gif.gif'

function SoilSurveyToolPreview ({opacityEffect}) {
    return (
        <WorkBox 
            title="Soil Survey Tool"
            body="Instantly analyze soil data for a potential solar farm site."
            image={SoilSurveyPhoto}
            hoverImage={SoilSurveyGif}
            header="TECH STACK"
            skillsUsed="Salesforce API, Google Maps SDK, USDA Soil Survey API"
            imageHeight='60vh'
            delayAppearance='5s'
            underDevelopment={false}
            opacityEffect={opacityEffect}
            aspectRatio='4 / 3'
        />
    )
}

export default SoilSurveyToolPreview