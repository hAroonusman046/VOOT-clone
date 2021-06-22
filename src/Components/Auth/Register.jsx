import React, { useState } from "react";
import { Link } from "react-router-dom";
import firebase from "../../firebase";
import "./Auth.css";
import { toast } from 'react-toastify';
import faker from 'faker/locale/en_IND';
import md5 from 'md5';

const Register = () => {
    let [setUser, setStateUser] = useState({
        username: "",
        email: "",
        password: "",
        confirm_password: "",
        loading: false,
    });

    let { username, email, password, confirm_password, loading } = setUser;

    let handleChange = e => {
        let { name, value } = e.target;
        setStateUser({ ...setUser, [name]: value });
    };

    let handleSubmit = async e => {
        e.preventDefault();

        try {
            if (password === confirm_password) {
                let userData = await firebase.auth().createUserWithEmailAndPassword(email, password);

                let verificationMessage = 'A verification has been sent on ${email}please verifyyour account';
                userData.user.sendEmailVerification();




                setStateUser({ loading: true });
                console.log("user created", userData);
                toast.success('successfully user Registered');


                //update user profile
                await userData.user.updateProfile({
                    displayName: username,
                    photoURL: 'https://gravatar.com/avatar/${md5(email)}?d=identicon'

                });

                //save user information into relative database
                // let{email, photoURL} = userData.user;
                await firebase.database().ref('users').child(userData.user.uid).set({
                    email: userData.user.email,
                    displayName: userData.user.displayName,
                    photoURL: userData.user.photoURL,
                    uid: userData.user.uid,
                    RegistrationDate: new Date().toString(),
                });



            } else {
                // console.log('password is not matched');
                toast.error("Password is not Matched !!!")
            }
        } catch (err) {
            // console.log(err);
            setStateUser({ loading: false });
            toast.error(err.message);
        }
        setStateUser({
            username: "",
            email: "",
            password: "",
            confirm_password: "",
            loading: false,

        })
    };

    return (
        <section id="authBlock">
            <article>
                <div>
                    <h1>Welcome to Voot!</h1>
                    <p>Please Register for a more personalized experience.</p>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="username"
                                id="username"
                                value={username}
                                onChange={handleChange}
                            />
                            <label htmlFor="username">username</label>
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="email"
                                id="email"
                                value={email}
                                onChange={handleChange}
                            />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={password}
                                onChange={handleChange}
                            />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                name="confirm_password"
                                id="confirmpassword"
                                value={confirm_password}
                                onChange={handleChange}
                            />
                            <label htmlFor="confirmpassword">confirm password</label>
                        </div>
                        <div className="form-group register_Block">
                            <span style={{ fontSize: "13px" }}>Already have an account</span>
                            <Link to="/login"> Login</Link>
                        </div>
                        <div className="form-group">
                            <button>{loading === true ? "loading" : "Register"}</button>
                        </div>
                    </form>
                </div>
            </article>
        </section>
    );
};

export default Register;