import React, { Component } from 'react';

import Table from '../component/ui/table';
import customerService from '../service/customerService';

class ListCustomer extends Component {

    constructor(props) {
        super(props);
        this.fetchCustomerData = this.fetchCustomerData.bind(this);
        this.deleteBtnHandler = this.deleteBtnHandler.bind(this);
        this.state = {
            customerData: null
        }
    }


    componentDidMount() {
        this.fetchCustomerData();
    }

    async fetchCustomerData() {
        let response = await customerService.getAllCustomers();
        if (response.status === 200) {
            let customerData = [];
            response.data.forEach(customer => {
                let row = [];
                let btn = (
                    <div className="btn-group">
                        <button className="btn btn-danger"  onClick={this.deleteBtnHandler.bind(this, customer.id)}>Delete</button>
                        <button className="btn btn-success" onClick={ () => this.props.history.push("/customer-details/" + customer.id)}>Info</button>
                        <button className="btn btn-warning" onClick={ () => this.props.history.push("/add-customer/" + customer.id)}>Edit</button>
                    </div>

                );
                row.push(customer.id);
                row.push(customer.firstName);
                row.push(customer.lastName);
                row.push(customer.dateOfBirth);
                row.push(customer.mobileNumber);
                row.push(customer.gender === 'M' ? 'Male' : 'Female');
                row.push(customer.customerNumber);
                row.push(customer.countryOfBirth);
                row.push(customer.countryOfResidence);
                row.push(customer.customerSegment);
                row.push(btn);
                customerData.push(row);

                return customer;
            });
            this.setState((preState, props) => {
                return {
                    customerData
                }
            });
        }
    }

    async deleteBtnHandler(id) {
        let confirm = window.confirm('Are you really want to delete this customer? ');
        if (confirm && id) {
            try {
                let response = await customerService.deleteCustomerById(id);
                if (response && response.status === 200) {
                    alert("Customer has been deleted successfully");
                    let customerData = this.state.customerData.filter(customer => customer[0] !== id);
                    this.setState((preState, props) => {
                        return {
                            customerData
                        }
                    });
                }
            } catch (ex) {
                if (ex && ex.response && ex.response.data && ex.response.data.message)
                    alert(ex.response.data.message);
            }
        }
    }

    render() {
        let thead = [
            'ID',
            'First Name',
            'Last Name',
            'Date Of Birth',
            'Mobile Number',
            'Gender',
            'Customer Number',
            'Country Of Birth',
            'Country Of Residence',
            'Customer Segment',
            'Action',
        ];
        let tbody = this.state.customerData;
        return (
            <div>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active">Home</li>
                </ol>
                {this.state.customerData ? <Table head={thead} body={tbody} /> : 'No Data Found'}

            </div>
        );
    }
}

export default ListCustomer;