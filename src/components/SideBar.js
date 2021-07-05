import React from "react";

class SideBar extends React.Component {

    constructor(props) {
      super(props);

      this.state=
      {
        
      }      
    }

    render() {return (
                    <div id="aside" className="app-aside fade box-shadow-x nav-expand white" aria-hidden="true">
                            <div className="sidenav modal-dialog dk white">
                                
                                    <div className="navbar lt">
                                        <a href="index.html" className="navbar-brand">   
                                            <img src="/logo.png" alt="."   />
                                        </a>
                                    </div>
                                
                                    <div className="flex hide-scroll">
                                        <div className="scroll">
                                            <div className="nav-border b-primary" data-nav>
                                                <ul className="nav bg">
                                                    <li>
                                                        <a href="index">
                                                            <span className="nav-icon"><i className="fa fa-fire"></i></span>
                                                            <span className="nav-text">HOT</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="golive">
                                                            <span className="nav-icon"><i className="fa fa-fire"></i></span>
                                                            <span className="nav-text">GO LIVE</span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a>
                                                            <span className="nav-caret"><i className="fa fa-caret-down"></i></span>
                                                            <span className="nav-icon"><i className="fa fa-user"></i></span>
                                                            <span className="nav-text">USER</span>
                                                        </a>
                                                        <ul className="nav-sub">
                                                            <li>
                                                                <a href="register"  >
                                                                    <span className="nav-icon"><i className="fa fa-user-plus"></i></span>
                                                                    <span className="nav-text">Sign Up</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="login">
                                                                    <span className="nav-icon"><i className="fa fa-key"></i></span>
                                                                    <span className="nav-text">Sign In</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    
                                                    <li className="pb-2 hidden-folded"></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                    </div>
            );         
        }
}

export default SideBar;


 



 