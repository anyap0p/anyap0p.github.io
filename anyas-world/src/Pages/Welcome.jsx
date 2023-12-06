import React from 'react';
import NavigationBar from '../Components/NavigationBar'
import QuickAboutMe from '../Components/QuickAboutMe'
import WorkExamples from '../Components/Work';
import SocialsBar from '../Components/Socials'

function Welcome () {
    return (
        <div id="welcome-page">
            <NavigationBar
                jumpAnimation={true}
                moveInAnimation={true}
            />
            <SocialsBar animate={true}></SocialsBar>
            <QuickAboutMe></QuickAboutMe>
            <WorkExamples></WorkExamples>
        </div>
    )
}

export default Welcome