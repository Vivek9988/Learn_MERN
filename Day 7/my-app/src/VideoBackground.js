import React from 'react';

function VideoBackground() {
    return (
        <div className="video-container">
            <video autoPlay muted loop className="background-video">
                <source src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default VideoBackground;
