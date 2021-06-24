import React, { Fragment, useState } from 'react'
import DropdownMenu from './DropdownMenu';
import firebase from '../../firebase';


const VootMenu = (props) => {
    let [toggle, setToggle] = useState(false);
    let { displayName, photoURL } = props.users


    return (
        <Fragment>
            <nav id="vootMenuBlock">
                <ul className="leftMenu">
                    <li>
                        <a href="/" className="active">My Voot</a>
                    </li>
                    <li>
                        <a href="/">Premium</a>
                    </li>
                    <li>
                        <a href="/">Shows</a>
                    </li>
                    <li>
                        <a href="/">Movies</a>
                    </li>
                    <li>
                        <a href="/">Channels</a>
                    </li>
                    <li>
                        <a href="/">News</a>
                    </li>
                </ul>


                <ul className="authMenu">
                    <li>
                        <a href="/">
                            <i className="fal fa-search"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={() => { setToggle(!toggle); }}>
                            {firebase.auth().currentUser ? (
                                <img id="prof" src={photoURL} alt="" />) : (
                                    <i className="far fa-user-circle"></i>
                                )}
                        </a>
                    </li>

                </ul>
                <DropdownMenu toggle={toggle} users={props.users} />
            </nav>
        </Fragment>
    );
};

export default VootMenu;
