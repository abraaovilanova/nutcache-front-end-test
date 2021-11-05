import React from 'react'
import './ConfPopup.css'

export default (props) => {
    return (props.trigger ? (
        <div className='popup'>
            <div className="popup-inner">
                <button className="close-btn">Close</button>
                {props.children}
            </div>
        </div>
    ): ''
    )
}