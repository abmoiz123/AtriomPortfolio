import React from 'react'
import Loader from '../../../static/loader.mp4'
import './index2.css'

class Revealer extends React.Component {
    render() {
        return (
            <div className="video_div">
                <video className="loader_video" autoPlay="autoplay" loop="loop" muted>
                    <source src={Loader} type="video/mp4" />
                </video>
            </div>
        )
    }
}

export default Revealer;