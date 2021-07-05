import React from 'react';
 
import IndexPage from './pages/index/IndexPage';
import RegisterPage from './pages/user/RegisterPage';
import LoginPage from './pages/user/LoginPage';
import ResetpwPage from './pages/user/ResetpwPage';

function App() {

   // TimeManager.UpdateServerTimeZone();
    ///routing to the right page
    let router_map = {
         index:IndexPage,
         register:RegisterPage,
         login:LoginPage,
         resetpasswd:ResetpwPage
    };

    for (const urlkey in router_map) {
        if (window.location.pathname=="/"+urlkey) {
            const Page = router_map[urlkey];
            return <Page />;
        }
    }

    return <IndexPage />;
}

export default App;