// WorkBox.js
import React, { useState, useEffect, useRef } from 'react';
import './Workbox.css'

const WorkBox = ({ title, body, image, hoverImage, header, skillsUsed, imageHeight, underDevelopment, aspectRatio }) => {

    const [isHovered, setIsHovered] = useState(false);
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [opacity, setOpacity] = useState(0);
    const workBoxRef = useRef(null);

    const calculateVisibility = () => {
        if(!workBoxRef.current) return
        const rect = workBoxRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if the element is within the viewport
        const isVisible = rect.top < windowHeight && rect.bottom > 0;

        // Calculate the visible part of the element
        if (isVisible) {
            const totalHeight = rect.bottom - rect.top;
            const visiblePart = Math.min(totalHeight, (Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top)) * 2);
            const visiblePercentage = visiblePart / totalHeight;
            setOpacity(visiblePercentage);
        } else {
            setOpacity(0);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', calculateVisibility);
        calculateVisibility(); // Initial check

        return () => window.removeEventListener('scroll', calculateVisibility);
    }, []);


    return (
        <div ref={workBoxRef} className='work-box' style={{ opacity: opacity }}>
            {underDevelopment && <div className='ribbon-container'> <div className="development-banner">Under Construction - Coming Soon - Under Construction - Coming Soon</div> </div>}
            <div className='work-box-content-container'>
                <div className='work-title'>
                    <h1 className='work-header'>{title}</h1>
                    <h3 className='work-body'>{body}</h3>
                </div>
                <h1 className='see-more-asterisk'
                        onMouseEnter={() => setIsPopupVisible(true)}
                        onMouseLeave={() => setIsPopupVisible(false)}>
                        *
                    </h1>
                <div className='work-image-container'
                     style = {{
                        aspectRatio: aspectRatio
                     }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}>
                    <img 
                        className='work-image' 
                        src={isHovered ? hoverImage : image}
                        alt=''
                    />
                    {isPopupVisible && (
                        <div className="popup">
                            <div className='popup-text-container '>
                                <h3 className='popup-header'> {header} </h3>
                                <text className='popup-body'> {skillsUsed} </text>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WorkBox;
