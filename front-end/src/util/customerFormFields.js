
function customerFormFields() {
    return {
        basicInfo: {
            customerId: '',
            fields: [
                {
                    fieldType: 'input',
                    isRequired: true,
                    fieldName: 'First Name',
                    fieldId: 'firstName',
                    value: '',
                    msg: '',
                }, {
                    fieldType: 'input',
                    isRequired: false,
                    fieldName: 'Middle Name',
                    fieldId: 'middleName',
                    value: '',
                    msg: '',
                }, {
                    fieldType: 'input',
                    isRequired: true,
                    fieldName: 'Last Name',
                    fieldId: 'lastName',
                    value: '',
                    msg: '',
                }, {
                    fieldType: 'input',
                    isRequired: true,
                    fieldName: 'Date Of Birth (YYYY-MM-DD)',
                    fieldId: 'dateOfBirth',
                    value: '',
                    msg: '',
                }, {
                    fieldType: 'input',
                    isRequired: true,
                    fieldName: 'Mobile Number',
                    fieldId: 'mobileNumber',
                    value: '',
                    msg: '',
                }, {
                    fieldType: 'select',
                    isRequired: true,
                    fieldName: 'Gender',
                    options: [
                        {
                            value: 'M',
                            displayName: 'Male'
                        }, {
                            value: 'F',
                            displayName: 'Female'
                        }
                    ],
                    fieldId: 'gender',
                    value: 'M',
                    msg: '',
                }, {
                    fieldType: 'input',
                    isRequired: true,
                    fieldName: 'Customer Number',
                    fieldId: 'customerNumber',
                    value: '',
                    msg: '',
                }, {
                    fieldType: 'input',
                    isRequired: true,
                    fieldName: 'Country Of Birth',
                    fieldId: 'countryOfBirth',
                    value: '',
                    msg: '',
                }, {
                    fieldType: 'input',
                    isRequired: true,
                    fieldName: 'Country Of Residence',
                    fieldId: 'countryOfResidence',
                    value: '',
                    msg: '',
                }, {
                    fieldType: 'input',
                    isRequired: true,
                    fieldName: 'Customer Segment',
                    fieldId: 'customerSegment',
                    value: '',
                    msg: '',
                },
            ],
        },
        customerAddresses: [{
            addressID: '',
            fields: [
                {
                    fieldType: 'select',
                    isRequired: true,
                    fieldName: 'Address Type',
                    fieldId: 'type',
                    value: 'Residence',
                    options: [
                        {
                            value: 'Residence',
                            displayName: 'Residence'
                        }, {
                            value: 'Office',
                            displayName: 'Office'
                        }
                    ],
                    msg: '',
                }, {
                    fieldType: 'input',
                    isRequired: true,
                    fieldName: 'Address Line1',
                    fieldId: 'addrLine1',
                    value: '',
                    msg: '',
                }, {
                    fieldType: 'input',
                    isRequired: false,
                    fieldName: 'Address Line2',
                    fieldId: 'addrLine2',
                    value: '',
                    msg: '',
                }, {
                    fieldType: 'input',
                    isRequired: false,
                    fieldName: 'Address Line3',
                    fieldId: 'addrLine3',
                    value: '',
                    msg: '',
                }, {
                    fieldType: 'input',
                    isRequired: false,
                    fieldName: 'Address Line4',
                    fieldId: 'addrLine4',
                    value: '',
                    msg: '',
                }, {
                    fieldType: 'input',
                    isRequired: true,
                    fieldName: 'Country Code',
                    fieldId: 'countryCode',
                    value: '',
                    msg: '',
                }, {
                    fieldType: 'input',
                    isRequired: true,
                    fieldName: 'Zip Code',
                    fieldId: 'zipcode',
                    value: '',
                    msg: '',
                }, {
                    fieldType: 'input',
                    isRequired: true,
                    fieldName: 'State',
                    fieldId: 'state',
                    value: '',
                    msg: '',
                }, {
                    fieldType: 'input',
                    isRequired: true,
                    fieldName: 'city',
                    fieldId: 'city',
                    value: '',
                    msg: '',
                },

            ]
        }, {
            addressID: '',
            fields: [
                {
                    fieldType: 'select',
                    isRequired: true,
                    fieldName: 'Address Type',
                    fieldId: 'type',
                    value: 'Office',
                    options: [
                        {
                            value: 'Residence',
                            displayName: 'Residence'
                        }, {
                            value: 'Office',
                            displayName: 'Office'
                        }
                    ],
                    msg: '',
                }, {
                    fieldType: 'input',
                    isRequired: false,
                    fieldName: 'Address Line1',
                    fieldId: 'addrLine1',
                    value: '',
                    msg: '',
                }, {
                    fieldType: 'input',
                    isRequired: false,
                    fieldName: 'Address Line2',
                    fieldId: 'addrLine2',
                    value: '',
                    msg: '',
                }, {
                    fieldType: 'input',
                    isRequired: false,
                    fieldName: 'Address Line3',
                    fieldId: 'addrLine3',
                    value: '',
                    msg: '',
                }, {
                    fieldType: 'input',
                    isRequired: false,
                    fieldName: 'Address Line4',
                    fieldId: 'addrLine4',
                    value: '',
                    msg: '',
                }, {
                    fieldType: 'input',
                    isRequired: false,
                    fieldName: 'Country Code',
                    fieldId: 'countryCode',
                    value: '',
                    msg: '',
                }, {
                    fieldType: 'input',
                    isRequired: false,
                    fieldName: 'Zip Code',
                    fieldId: 'zipcode',
                    value: '',
                    msg: '',
                }, {
                    fieldType: 'input',
                    isRequired: false,
                    fieldName: 'State',
                    fieldId: 'state',
                    value: '',
                    msg: '',
                }, {
                    fieldType: 'input',
                    isRequired: false,
                    fieldName: 'city',
                    fieldId: 'city',
                    value: '',
                    msg: '',
                },

            ]
        }
        ]
    };
}

export default customerFormFields;