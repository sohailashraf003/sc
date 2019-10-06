import React, { Component } from 'react';
import customerService from '../service/customerService';

class ViewCustomerDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customerData: ''
        }
        this.fetchCustomerDataByID = this.fetchCustomerDataByID.bind(this);
    }

    componentDidMount() {
        this.fetchCustomerDataByID();
    }

    async fetchCustomerDataByID() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            try {
                let response = await customerService.getCustomerByID(this.props.match.params.id);
                if (response.status === 200) {
                    this.setState((preState, props) => {
                        return {
                            customerData: response.data
                        }
                    });
                }
            } catch (ex) {

            }
        }
        // customerService.getCustomerByID();
    }

    render() {

        let data = [];
        let tbodyAddress = [];
        if (this.state.customerData) {
            for (let key in this.state.customerData) {
                if (!Array.isArray(this.state.customerData[key])) {
                    let keyValue = (
                        <div key={key} className="col-md-12">
                            
                            <div className="grid-item grid-key">{key}</div> :
                            <div className="grid-item grid-value">{this.state.customerData[key]}</div>
                        </div>
                    );
                    data.push(keyValue);
                }

            }


            const address = this.state.customerData.customerAddresses;
            // address.forEach( item => {
            // });
            let uniqueKey = 0;
            address.forEach(item => {
                for(let key in item) {
                    let keyValue = (
                        <div key={key + uniqueKey++} className="col-md-12">
                            {uniqueKey === 11 ? <hr/> : null}
                            <div className="grid-item grid-key">{key}</div> :
                            <div className="grid-item grid-value">{item[key]}</div>
                        </div>
                    );
                    tbodyAddress.push(keyValue);
                }
                
            });
        }


        return (
            <div>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active">Customer Detail</li>
                </ol>

                    <h5>Customer Detail</h5>
                    <hr/>
                    <div className="form-content-box">
                        {data.map(item => item)}
                    </div>
                    <hr/>
                    <div className="col-md-12">
                        <h4>Address</h4>
                        <hr/>
                        {tbodyAddress.map(item => item)}
                    </div>

            </div>

        );
    }

}

export default ViewCustomerDetails;