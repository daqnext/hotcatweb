import React from "react";
import {withAlert} from "react-alert";
import DashboardLayout from '../../layout/DashboardLayout';
import ViewList from './ViewList'

class IndexPage extends React.Component {
    constructor(props) {
      super(props);

      this.state=
      {
             
      }      
    }

    render() {return (<DashboardLayout>
                         <ViewList />
                      </DashboardLayout>);         
        }
}

export default withAlert()(IndexPage);


 