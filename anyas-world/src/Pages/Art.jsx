import React from 'react';
import NavigationBar from '../Components/NavigationBar'
import UnderConstruction from '../Components/UnderConstruction'
import WorkExamples from '../Components/Work';
import SocialsBar from '../Components/Socials'

function Art () {
    return (
        <div id="art-page">
            <NavigationBar
                jumpAnimation={false}
                moveInAnimation={false}
            />
            <SocialsBar animate={false}></SocialsBar>
            <UnderConstruction></UnderConstruction>
        </div>
    )
}

export default Art