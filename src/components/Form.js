import React from "react";
import { useState } from "react";
import axios from "axios";
import "./Form.css";
const Form = () => {
    const [userData, setUserData] = useState({
        Salutation: "",
        FirstName: "",
        LastName: "",
        Company: "",
        LeadSource: "",
        Status: "",
        ProductInterest__c: ""
    });

    
    const [data, setData] = useState([])

    const handleInput = (e) => {
        const alldata = e.target.name;
        const value = e.target.value;
        console.log(alldata, value);

        setUserData({ ...userData, [alldata]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newData = { ...userData }
        setData([...data, newData]);
        console.log(userData);


        axios.post("https://dentsuworldservices-8b-dev-ed.lightning.force.com/services/data/v54.0/sobjects/Lead",userData)
        .then((resp) => {
          console.log(resp.data)
        })
    }
    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit} >
                    <ul className="form-style-1">
                        <h1 className="form-heading">Form in React js</h1>
                        <li>
                            <label htmlFor="Salutation">Salutation</label>
                            <select name="Salutation" value={userData.Salutation} className="field-select" onChange={handleInput}>
                             <option>Select</option>
                                <option>Mr.</option>
                                <option>Ms.</option>
                                <option>Mrs.</option>
                                <option>Dr.</option>
                                <option>Prof..</option>
                            </select>
                        </li>

                        <li>
                            <label htmlFor="FirstName">First Name <span className="required">*</span></label>
                            <input type="text" name="FirstName" value={userData.FirstName} className="field-long" onChange={handleInput} />
                        </li>

                        <li>
                            <label htmlFor="LastName">Last Name <span className="required">*</span></label>
                            <input type="text" name="LastName" value={userData.LastName} className="field-long" onChange={handleInput} />
                        </li>

                        <li>
                            <label htmlFor="Company">Company Name<span className="required">*</span></label>
                            <input type="text" name="Company" value={userData.Company} className="field-long" onChange={handleInput} />
                        </li>

                        <li>
                            <label htmlFor="LeadSource"> Lead Source</label>
                            <input
                                type="text"
                                name="LeadSource"
                                value={userData.LeadSource="Web-to-lead"}
                                className="field-long restrict-btn"
                                
                                onChange={handleInput}

                            />
                        </li>
                        <li>
                            <label htmlFor="Status"> Lead Status <span className="required">*</span></label>
                            <select name="Status" value={userData.Status} className="field-select" onChange={handleInput}>
                                <option>--None--</option>
                                <option>Open - Not Connected</option>
                                <option>Working - Contacted</option>
                                <option>Closed - Converted</option>
                                <option>Closed - Not Converted</option>
                            </select>
                        </li>
                        <li>
                            <label htmlFor="ProductInterest__c">Product in Test<span className="required">*</span></label>
                            <select name="ProductInterest__c" value={userData.ProductInterest__c} className="field-select" onChange={handleInput}>
                                <option>None</option>
                                <option>Commerce</option>
                              
                            </select>
                        </li>
                        <li>
                            <input type="submit" value="Submit" />
                        </li>
                    </ul>
                </form>
            </div>
        </>
    );
};

export default Form;



// harocoo par deployee
