import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../assets/images/batch-1/logo.svg';
import message from '../assets/images/batch-1/message.svg';
import gmes_logo from '../assets/images/batch-1/gmes-logo.svg';

const Header = (props) => {

    const openModal = (event) => {
        document.body.classList.add('sidebar-open');
    }

    return (
        <div className="header-wrapper">
            <div className="header-block">
                <div className="logo-block">
                    <Link to="/">
                        <img src={Logo} alt="logo" />
                    </Link>
                </div>
                <div className="header-content-row">
                    <div className="header-left-block">
                        <div className="header-title-block">
                            <h3>GEMS Modern Academy Dubai</h3>
                        </div>
                    </div>
                    <div className="header-right-block">
                        <div className="header-dropdown-ul">
                            <ul>
                                {
                                    props.fullpagep  && <li>
                                    <div className="common-trainee-dropdown">
                                        <div className="mail-dropdown">
                                            <a href="#0">
                                                <img src={message} alt="mail icon" />
                                            </a>
                                            <span className="mail-highlight">14</span>
                                        </div>
                                    </div>
                                </li>
                                }
                                
                                {
                                    props.fullpagep  &&  <li className="cm-d-none">
                                        <div className="common-trainee-dropdown">
                                        <div className="beginner-label-drop">
                                            <h3>6,286</h3>
                                            <p>
                                                <span className="green-label">BEGINNER</span>
                                                PLE CREDITS
                                            </p>
                                        </div>
                                        </div>
                                    </li>
                                }
                                {
                                    props.fullpagep  && <li className="cm-d-none">
                                        <div className="common-trainee-dropdown">
                                            <div className="cm-dropdown-label">
                                                <h3>Edutech - Trainee</h3>
                                                <p>2021 - 2022</p>
                                            </div>
                                        </div>
                                    </li>
                                }
                                
                                <li className="cm-d-none">
                                    <div className="common-trainee-dropdown">
                                        <a href="#0">
                                            <img src={gmes_logo} alt="Gmes logo" />
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    
                        <div className="mobile-menu-trigger" onClick={openModal}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
export default Header;
  