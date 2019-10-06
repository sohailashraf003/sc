import React, { Component } from 'react';

import customerFormFields from '../util/customerFormFields'
import Input, { Select } from '../component/ui/form-elements/Input';
import customerService from '../service/customerService';

class AddCustomer extends Component {

    constructor(props) {
        super(props);
        let formFields = customerFormFields();
        this.state = {
            formInvalid: false,
            formData: formFields.basicInfo,
            customerAddress: formFields.customerAddresses,
        }
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        this.submitBtnHandler = this.submitBtnHandler.bind(this);
        this.inputResidenceChangeHandler = this.inputResidenceChangeHandler.bind(this);
        this.inputOfficeChangeHandler = this.inputOfficeChangeHandler.bind(this);
        this.fetchCustomerDataByID = this.fetchCustomerDataByID.bind(this);
        this.mapJsonToFormfields = this.mapJsonToFormfields.bind(this);
    }

    componentDidMount() {
        this.fetchCustomerDataByID();
    }

    async fetchCustomerDataByID() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            try {
                let response = await customerService.getCustomerByID(this.props.match.params.id);
                if (response.status === 200) {
                    this.mapJsonToFormfields(response.data);
                }
            } catch (ex) {

            }

        }
        customerService.getCustomerByID();
    }

    mapJsonToFormfields(data) {
        console.log(data);

        this.setState((preState, props) => {

            //Basic info mapping
            let formData = {};
            formData.fields = [...preState.formData.fields];
            formData.customerId = data.id;
            formData.fields.forEach(element => {
                element.value = data[element.fieldId] ? data[element.fieldId] : '';
            });

            //Customer Address
            let address = [];
            let address1 = {};
            let address2 = {};

            address1.fields = [...preState.customerAddress[0].fields];
            address1.addressID = data.customerAddresses[0].id;
            address1.fields.forEach(element => {
                element.value = data.customerAddresses[0][element.fieldId] ? data.customerAddresses[0][element.fieldId] : '';
            });

            address2.fields = [...preState.customerAddress[1].fields];
            address2.addressID = data.customerAddresses[1].id;
            address2.fields.forEach(element => {
                element.value = data.customerAddresses[1][element.fieldId] ? data.customerAddresses[1][element.fieldId] : '';
            });

            address.push(address1);
            address.push(address2);

            return { formData, customerAddress: address }
        });
    }



    async submitBtnHandler() {
        let payload = {};
        let isInvalid = false;
        this.state.formData.fields.forEach(item => {
            payload[item.fieldId] = item.value;
            if (item.isRequired && item.value === '') {
                isInvalid = true;
                item.msg = "This field is required";
            }
        });
        if (this.state.formData.customerId) {
            payload.id = this.state.formData.customerId;
        }

        let customerAddresses = [];
        this.state.customerAddress.forEach(item => {
            let address = {};
            address.id = item.addressID
            item.fields.forEach(item => {
                address[item.fieldId] = item.value;
                if (item.isRequired && item.value === '') {
                    isInvalid = true;
                    item.msg = "This field is required";
                }
            });
            customerAddresses.push(address);
        });
        payload.customerAddresses = customerAddresses;
        if (isInvalid) {
            this.setState({
                formInvalid: true
            });
        } else {
            try {
                const response = await customerService.save(payload);
                if (response.status === 201) {
                    alert("Record succesfully added");
                    const state = customerFormFields();
                    if(payload.id) {
                        this.setState({
                            formInvalid: false,
                        });
                    } else {
                        this.setState({
                            formData: state.basicInfo,
                            customerAddress: state.customerAddresses,
                            formInvalid: false,
                        });
                    }
                    
                }
            } catch (ex) {
                this.setState({
                    formInvalid: true
                });
            }

        }

    }

    inputChangeHandler(event) {
        const currentInput = event.target;
        let fields = [...this.state.formData.fields];
        fields.forEach(element => {
            if (currentInput.id === element.fieldId) {
                element.value = currentInput.value;
                element.msg = '';
            }
        });


        this.setState((preState, props) => {
            let formData = {};
            formData.customerId = preState.formData.customerId
            formData.fields = fields;
            return { formData }
        });
    }

    inputResidenceChangeHandler(event) {
        const currentInput = event.target;
        let fields = [...this.state.customerAddress[0].fields];
        fields.forEach(element => {
            if (currentInput.id === element.fieldId) {
                element.value = currentInput.value;
                element.msg = '';
            }
        });


        this.setState((preState, props) => {
            let customerAddress = {};
            customerAddress.addressID = preState.customerAddress[0].addressID;
            customerAddress.fields = fields;
            customerAddress = [{ ...customerAddress }, { ...this.state.customerAddress[1] }];
            return {
                customerAddress: customerAddress
            }
        });
    }


    inputOfficeChangeHandler(event) {
        const currentInput = event.target;
        let fields = [...this.state.customerAddress[1].fields];
        fields.forEach(element => {
            if (currentInput.id === element.fieldId) {
                element.value = currentInput.value;
                element.msg = '';
            }
        });


        this.setState((preState, props) => {
            let customerAddress = {};
            customerAddress.addressID = preState.customerAddress[1].addressID;
            customerAddress.fields = fields;
            customerAddress = [{ ...this.state.customerAddress[0] }, { ...customerAddress }];
            return {
                customerAddress: customerAddress
            }
        });
    }



    render() {
        let alert = null;
        if (this.state.formInvalid) {
            alert = (<div className="alert alert-danger" role="alert">
                Please fill in all the required fields
                    </div>);
        }
        return (
            <div style={{ width: "90%", margin: "auto" }}>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active">Add new Customer</li>
                </ol>
                <div className="row">
                    <div className="col-md-12">
                        {alert}
                    </div>
                    <div className="col-md-12">
                        <fieldset>
                            <legend>Basic Details</legend>
                            <div className="form-content-box">
                                {this.state.formData.fields.map((item, index) => {
                                    if (index < 6) {
                                        return (

                                            (item.fieldType === 'select')
                                                ? <Select key={item.fieldId} value={item.value} label={item.fieldName} id={item.fieldId} required={item.isRequired} options={item.options} onChange={this.inputChangeHandler} error={item.msg} />
                                                : <Input key={item.fieldId} value={item.value} type={item.fieldType} label={item.fieldName} id={item.fieldId} required={item.isRequired} onChange={this.inputChangeHandler} error={item.msg} />
                                        );
                                    } else return null;

                                })}
                            </div>

                            <div className="form-content-box">
                                {this.state.formData.fields.map((item, index) => {
                                    if (index > 5) {
                                        return (

                                            (item.fieldType === 'select')
                                                ? <Select value={item.value} label={item.fieldName} id={item.fieldId} required={item.isRequired} options={item.options} onChange={this.inputChangeHandler} error={item.msg} />
                                                : <Input key={item.fieldId} value={item.value} type={item.fieldType} label={item.fieldName} id={item.fieldId} required={item.isRequired} onChange={this.inputChangeHandler} error={item.msg} />
                                        );
                                    } else return null;

                                })}
                            </div>


                        </fieldset>
                    </div>
                    <div className="col-md-12">

                        <fieldset>
                            <legend>Adress Details</legend>
                            <div className="form-content-box">
                                <h5>Residence</h5>
                                {this.state.customerAddress[0]['fields'].map(item => {
                                    return (
                                        (item.fieldType === 'select')
                                            ? <Select disabled key={item.fieldId} value={item.value} label={item.fieldName} id={item.fieldId} required={item.isRequired} options={item.options} onChange={this.inputResidenceChangeHandler} error={item.msg} />
                                            : <Input key={item.fieldId} value={item.value} type={item.fieldType} label={item.fieldName} id={item.fieldId} required={item.isRequired} onChange={this.inputResidenceChangeHandler} error={item.msg} />
                                    );
                                })}
                            </div>
                            <div className="form-content-box">
                                <h5>Office</h5>
                                {this.state.customerAddress[1]['fields'].map(item => {
                                    return (
                                        (item.fieldType === 'select')
                                            ? <Select disabled key={item.fieldId} value={item.value} label={item.fieldName} id={item.fieldId} required={item.isRequired} options={item.options} onChange={this.inputOfficeChangeHandler} error={item.msg} />
                                            : <Input key={item.fieldId} value={item.value} type={item.fieldType} label={item.fieldName} id={item.fieldId} required={item.isRequired} onChange={this.inputOfficeChangeHandler} error={item.msg} />
                                    );
                                })}
                            </div>
                        </fieldset>
                    </div>
                </div>
                <button type="button" className="btn btn-primary" onClick={this.submitBtnHandler}>Submit</button>
            </div>
        );
    }
}

export default AddCustomer;