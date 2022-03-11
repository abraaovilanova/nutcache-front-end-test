import React from 'react'
import './Popup.css'

const Popup = (props) => {
    return (props.trigger ? (
        <div className='Popup'>
            <div className="Popup-inner">
                <h3><i className={props.icon} aria-hidden="true" /> {props.title}</h3>
                {/* <button className="close-btn">Close</button> */}
                {props.children}
            </div>
        </div>
    ): ''
    )
}

export default Popup