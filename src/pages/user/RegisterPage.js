import React from "react";
import DashboardLayout from '../../layout/DashboardLayout';

class RegisterPage extends React.Component {

    constructor(props) {
        super(props);

        this.state=
        {
            
        }      
    }
  
    render() {
                    return ( <DashboardLayout>
                                <div className="px-3"  >

                                    <div className="imgwrapper">
                                        <img src="/assets/images/hotcatlogo.png" width="80" style={{borderRadius:'100px',boxShadow:'3px 3px 3px #000000'}} />
                                        <div style={{margin:'10px',marginBottom:'40px',color:'#627484'}}>SIGN UP</div>
                                    </div>

                                    <div className=" ">
                                         
                                            <form name="form">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="User Name"   />
                                                </div>
                                                <div className="form-group">
                                                    <input type="email" className="form-control" placeholder="Email"  />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" className="form-control" placeholder="Password" />
                                                </div>

                                                <div className="form-group">
                                                    <input type="password" className="form-control" placeholder="Password Confirm" />
                                                </div>

                                                <div className="mb-3 text-sm">
                                                    <span className="text-muted">By clicking Sign Up, I agree to the </span>
                                                    <a href="#" data-toggle="popover" data-placement="top" data-content="xxxx xxx xxx">Terms of service and Policy Privacy.</a>
                                                </div>
                                                <button type="submit" className="btn primary">Sign Up</button>
                                            </form>
                                            <div className="py-4 ">
                                                <div>Already have an account?
                                                    <a href="login" className="text-primary _600">Sign in</a>
                                                </div>
                                            </div>
                                         
                                    </div>
                                </div>
                            </DashboardLayout>               
                    )
    }
};


export default RegisterPage;
