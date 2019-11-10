/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react"; /* hooks de react */

function Playlist(props) {
    //PROPS
    const [title,setTitle] = useState(props.title);//Parametro por default
    //PROPS
    
    return (
        <a href="#" className="navigation__list__item">
            <i className="ion-ios-musical-notes"></i>
            <span>{title}</span>
        </a>
    );
}


export default Playlist;


