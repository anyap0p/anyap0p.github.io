import React from 'react';
import './Arrow.css';

function Arrow () {
    return (
    <div>
        <svg width="30" height="190" xmlns="http://www.w3.org/2000/svg">
            <path id="arrowLine" stroke="grey" strokeWidth="2" fill="none" d="M 10 10 v 30 C 10 51 10 53 11 54 C 27 83 30 35 11 60 C 10 62 10 62 10 66 v 40"/>
            <line id="arrowHead1" x1="5" y1="95" x2="10" y2="105" stroke="grey" strokeWidth="2"/>
            <line id="arrowHead2" x1="15" y1="95" x2="10" y2="105" stroke="grey" strokeWidth="2"/>
        </svg>
    </div>
    
    )
}

export default Arrow