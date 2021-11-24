import React from 'react';
import {Link} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";
import navItems from "./navItems";

const SiteFooter = () => {
    return (
        <footer className="site-footer footer-default-style bg-black pt-80">
            <div className="footer-widget-area pb-20">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <aside className="widget bt-about-us-widget">
                                <div className="widget-content">
                                    <div className="about-logo">
                                        <Link to="/">
                                            <StaticImage src="../images/griffon-logo-t.png" alt="LeGriffon Logo" height={50} className="align-middle mr-2" />
                                            Centre communautaire Le Griffon
                                        </Link>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="copyright-text">
                                <p>© Copyright 2021</p>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="footer-menu">
                                <ul className="list">
                                    {
                                        navItems.map(navItem => <li key={navItem.key}><Link to={navItem.to}>{navItem.title}</Link></li>)
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default SiteFooter;
