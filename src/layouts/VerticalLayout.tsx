import React, { ReactNode } from "react";
import logo from '../assets/images/logo/logo.png';
import '../assets/scss/app.scss';

const VerticalLayout = ({ children }: React.PropsWithChildren<{}>): ReactNode => {
    return (
        <>
            <div id="sidebar" className="sidebar-desktop active mb-5">
                <div className="header-top">
                    <div className="container">
                        <div className="logo">
                            <a href="#">
                                <img src={logo} alt="Logo" srcSet="" />
                            </a>
                        </div>
                        <div className="header-top-right">

                            {/*Burger button responsive*/}
                            <a href="#" className="burger-btn d-block d-xl-none">
                                < i className="bi bi-justify fs-3" />
                            </a>
                        </div>
                    </div>
                </div>
                <nav className="main-navbar">
                    <div className="container">
                        <ul>
                            {/* TODO NavBar Component to integrate*/}
                        </ul>
                    </div>
                </nav>

            </div>
            <div id="main" className="layout-vertical">
                <div className="layout-horizontal">
                    <div className="content-wrapper container">
                        {children}
                    </div>

                    <footer>
                        <div className="container mt-4">
                            <div className="footer clearfix mb-0 text-muted">
                                <div className="float-start">
                                    <p>2021 &copy; Mazer</p>
                                </div>
                                <div className="float-end">
                                    <p>Crafted with <span className="text-danger"><i className="bi bi-heart" /></span> by <a
                                        href="http://ahmadsaugi.com">A. Saugi</a></p>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}

export default VerticalLayout;