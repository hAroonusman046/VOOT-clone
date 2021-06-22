// import React from 'react';
// import "./Headers.css";
// import VootMenu from './VootMenu';


// const Navbar = (props) => {
//     return (
//         <div>
//             <section id="vootHeaders">
//                 <article>
//                     <div className="vootLogo " >
//                         <a href="/">
//                             <img src="Voot-logo.svg" alt="logo" />

//                         </a>
//                         <div className="lg"></div>
//                         <button className="upgrade" > Upgrade</button>
//                     </div>
//                     <div className="vootMenu">
//                         <VootMenu users={props.users} /></div>
//                 </article>
//             </section>

//         </div>
//     )
// }

// export default Navbar

import React from "react";
import "./Headers.css";
import VootMenu from "./VootMenu";
const Navbar = (props) => {
    return (
        <div>
            <section id="vootHeaders">
                <article>

                    <div className="vootLogo " >
                        <a href="/">
                            <img src="Voot-logo.svg" alt="logo" />

                        </a>
                        <div className="lg"></div>
                        <button className="upgrade" > Upgrade</button>
                    </div>

                    <div className="vootMenu">
                        <VootMenu users={props.users} />
                    </div>
                </article>
            </section>
        </div>
    );
};

export default Navbar;
