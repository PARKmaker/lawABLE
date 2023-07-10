import * as React from "react";
import { Routes, Route, Link, NavLink, useLocation } from "react-router-dom";

import "./Footer.css";

import "../../components/template/main.css";

export default function Footer() {
    const locationNow = useLocation();
    if (locationNow.pathname === "/chat") return null;
    if (locationNow.pathname === "/login") return null;
    if (locationNow.pathname === "/register") return null;

    return (
        <div id="footer" className="footer">
            <div className="footer-content position-relative">
                <div className="container">
                    <div className="row">
                        {/* col-lg-4 col-md-6 */}
                        <div className="footer-info" style={{width:'50%', float:'left'}}>
                            <h3>LawABLE.</h3>
                            <div>
                                <p style={{fontWeight:'350', fontSize:'0.8rem', width:'100%'}}>
                                    대전 서구 문정로48번길 30 KT 탄방타워 <br/> KT AIVLE Team 25 <br/> ktaivle@kt.com
                                </p>
                                {/* <p>
                                    KT AIVLE Team 25
                                </p>
                                <p>
                                    <strong> CONTACT : </strong>
                                    ktaivle@kt.com
                                </p> */}
                            </div>
                            {/* <div className="social-links d-flex mt-3">
                                <a
                                    href="#"
                                    className="d-flex align-items-center justify-content-center"
                                >
                                    <i className="bi bi-twitter"></i>
                                </a>
                                <a
                                    href="#"
                                    className="d-flex align-items-center justify-content-center"
                                >
                                    <i className="bi bi-facebook"></i>
                                </a>
                                <a
                                    href="#"
                                    className="d-flex align-items-center justify-content-center"
                                >
                                    <i className="bi bi-instagram"></i>
                                </a>
                                <a
                                    href="#"
                                    className="d-flex align-items-center justify-content-center"
                                >
                                    <i className="bi bi-linkedin"></i>
                                </a>
                            </div> */}
                        </div>
                        {/* <div className="col-lg-2 col-md-3 footer-links">
                            <h4>Lorem</h4>
                            <ul>
                                <li>
                                    <a href="#">Ipsum</a>
                                </li>
                                <li>
                                    <a href="#get-started">Ipsum</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-3 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li>
                                    <a href="#">Ipsum</a>
                                </li>
                                <li>
                                    <a href="#">Ipsum</a>
                                </li>
                                <li>
                                    <a href="#">Ipsum</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-3 footer-links">
                            <h4>Team</h4>
                            <ul>
                                <li>
                                    <a href="#">Ipsum</a>
                                </li>
                                <li>
                                    <a href="#">Ipsum</a>
                                </li>
                            </ul>
                        </div> */}

                        <div className="footer-links" style={{width:'50%', float:'right'}}>
                            <ul>
                                <li>
                                    <br/>
                                    <br/>
                                    <a href="/personal" style={{color:'white', marginRight:'5px',fontWeight:'350', fontSize:'0.8rem'}}>개인정보 처리방침 </a>
                                     | 
                                    <a href="/use" style={{color:'white', marginLeft:'5px', fontWeight:'350', fontSize:'0.8rem'}}> 이용약관</a>
                                    <br/>
                                    <br/>
                                    <div className="copyright">
                                        &copy; Copyright{" "}
                                        <strong>
                                            <span>LawABLE</span>
                                        </strong>
                                        . All Rights Reserved
                                    </div>
                                    <div className="credits">
                                        Designed by <Link to="/home">LawABLE</Link> Distributed
                                        by <Link to="/home">LawABLE</Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="footer-legal text-center position-relative">
                <div className="container">
                    <div className="copyright">
                        &copy; Copyright{" "}
                        <strong>
                            <span>LawABLE</span>
                        </strong>
                        . All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by <Link to="/home">LawABLE</Link> Distributed
                        by <Link to="/home">LawABLE</Link>
                    </div>
                </div>
            </div> */}
        </div>
    );
}
