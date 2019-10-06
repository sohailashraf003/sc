import React from 'react';
import { Switch, Route } from 'react-router-dom'

import ListCustomer from '../page/ListCustomer';
import AddCustomer from '../page/AddCustomer';
import ViewCustomerDetails from '../page/ViewCustomerDetails';

function Router() {
    return (
        <Switch>
            <Route path="/" exact component={ListCustomer} />
            <Route path="/add-customer" exact component={AddCustomer} />
            <Route path="/add-customer/:id" exact component={AddCustomer} />
            <Route path="/customer-details/:id" exact component={ViewCustomerDetails} />
        </Switch>
    );

}

export default Router;