import React from 'react';
import SideBar from "../components/SideBar";;


class DashboardLayout extends React.Component {
    render() {
                    return (
                                <div className="app" id="app" >                            
                                            <SideBar />
                                            <div id="content" className="app-content box-shadow-0" role="main">
                                                
                                                <div className="content-header white box-shadow-0" id="content-header">
                                                    <div className="navbar navbar-expand-lg">
                                                    
                                                        <a className="d-lg-none mx-2" data-toggle="modal" data-target="#aside">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
                                                                <path d="M80 304h352v16H80zM80 248h352v16H80zM80 192h352v16H80z" />
                                                            </svg>
                                                        </a>
                                                        
                                                        <div className="navbar-text nav-title flex" id="pageTitle"> </div>
                                                        <ul className="nav flex-row order-lg-2">
                                                            
                                                            <li className="dropdown d-flex align-items-center">
                                                                <a href="#" data-toggle="dropdown" className="d-flex align-items-center">
                                                                    <span className="avatar w-32" style={{background:'white'}}>
                                                                        <img src="../assets/images/hotcat.png" alt="..." />
                                                                    </span>
                                                                </a>
                                                                <div className="dropdown-menu dropdown-menu-right w pt-0 mt-2 animate fadeIn">
                                                                    <div className="row no-gutters b-b mb-2"></div>
                                                                    <a className="dropdown-item" href="profile.html">
                                                                        <span>Profile</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="setting.html">
                                                                        <span>Settings</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="app.inbox.html">
                                                                        <span className="float-right"><span className="badge info">6</span></span>
                                                                        <span>Inbox</span>
                                                                    </a>
                                                                    <a className="dropdown-item" href="app.message.html">
                                                                        <span>Message</span>
                                                                    </a>
                                                                    <div className="dropdown-divider"></div>
                                                                    <a className="dropdown-item" href="docs.html">
                                                                        Need help?
                                                                    </a>
                                                                    <a className="dropdown-item" href="signin.html">Sign out</a>
                                                                </div>
                                                            </li>
                                                        
                                                            <li className="d-lg-none d-flex align-items-center">
                                                                <a href="#" className="mx-2" data-toggle="collapse" data-target="#navbarToggler">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 512 512">
                                                                        <path d="M64 144h384v32H64zM64 240h384v32H64zM64 336h384v32H64z" />
                                                                    </svg>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                
                                                <div className="content-main" id="content-main">
                                                    <div className="padding">{this.props.children}</div>
                                                </div>
                                            
                                                <div className="content-footer white" id="content-footer">
                                                    <div className="d-flex p-3">
                                                        <span className="text-sm text-muted flex"></span>
                                                        <div className="text-sm text-muted">  COPYRIGHT &copy; HOTCAT.LIVE</div>
                                                    </div>
                                                </div>
                                            </div> 
                                </div>
                    );
            }
}

export  default  DashboardLayout;