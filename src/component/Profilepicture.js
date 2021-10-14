import React from 'react'

const Profilepicture = (props) => {
    return (
        <div className="pic">
            <img src={props.img} class="img-fluid" alt="Responsive image"></img>
        </div>
    )
}

export default Profilepicture
