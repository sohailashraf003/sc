import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './header';
import Router from '../../router';
import Footer from './footer';

class Layout extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <div className="container-fluid">
                        <Router />
                    </div>
                    <Footer/>
                </div>

            </BrowserRouter>


        );


    }
}

export default Layout;