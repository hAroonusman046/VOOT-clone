// import React, { useEffect } from 'react'

// const UseEffectsHook = () => {
//     // useEffect(() => {
//     //     // call api's
//     //     // interact with DOM
//     //     // many more
//     //     let h1 = document.getElementById("h1");
//     //     h1.style.color = "red";
//     //     h1.innerHTML = "i am usman";
//     //     window
//     //         .fetch("http://api.github.com/users")
//     //         .then(data => {
//     //             data
//     //                 .json()
//     //                 .then(users => {
//     //                     console.log(users);

//     //                 }).catch(err => console.log(err));
//     //         })
//     //         .catch(err => console.log(err));

//     // }, []);






//     // for (let i = 0; i <= 10; i++) {
//     //     useEffect(() => {
//     //         let h1 = document.getElementById("h1");
//     //         h1.style.color = "red";


//     //     }, []);




//     // async and await inside a function

//     useEffect(() => {
//         let fetchData = async () => {
//             let users = await window.fetch("http://api.github.com/users");
//             let finalUsers = await users.json();
//             console.log(finalUsers);
//         };
//         fetchData();
//     }, []);

//     return (
//         <div>
//             <h1 id="h1">Hello</h1>

//         </div>
//     )
// }

// export default UseEffectsHook
