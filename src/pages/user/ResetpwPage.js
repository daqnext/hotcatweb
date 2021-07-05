import React from "react";
import DashboardLayout from '../../layout/DashboardLayout';

class ResetpwPage extends React.Component {

    constructor(props) {
        super(props);

        this.state=
        {
            
        }      
    }
 

    render() {
                    return ( <DashboardLayout>
                                <div className="px-3">

                                    <div className="imgwrapper">
                                        <img src="/assets/images/hotcatlogo.png" width="80" style={{borderRadius:'100px',boxShadow:'3px 3px 3px #000000'}} />
                                        <div style={{margin:'10px',marginBottom:'40px',color:'#627484'}}>Reset Password</div>
                                    </div>

                                    <form name="form">
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email"   />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" placeholder="new password" />
                                        </div> 
                                        <div className="form-group">
                                            <input type="password" className="form-control" placeholder="new password confirm" />
                                        </div>  
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="input vcode" />
                                        </div>   
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-outline b-primary text-primary">Send Vcode to me</button>
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-fw success">Reset Password</button>
                                        </div>                           
                                         
                                    </form>
                                    <div className="my-4">
                                       
                                    </div>
                                    <div>
                                        Do not have an account?
                                        <a href="/register" className="text-primary _600">Sign up</a>
                                    </div>
                                </div>
                            </DashboardLayout>               
                    )
    }
};


export default ResetpwPage;
