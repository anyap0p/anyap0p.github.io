import React from 'react';
import WorkBox from './Workbox';
import AdvPhoto from '../../Icons/diffpure_attack_preview.png'
import AdvGif from '../../Icons/Diffpure_Preview.gif'

function AttackDiffPurePreview ({opacityEffect}) {
    return (
        <WorkBox 
            title="Attacking Diffusion Purified Adversarial Examples"
            body="Adversarial examples that cannot be eliminated by diffusion models."
            image={AdvPhoto}
            hoverImage={AdvGif}
            header="SKILLS"
            skillsUsed="machine learning, adversarial objectives, APGD"
            imageHeight='50vh'
            delayAppearance='2s'
            aspectRatio='1 / 1'
            opacityEffect={opacityEffect}
        />
    )
}

export default AttackDiffPurePreview