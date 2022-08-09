import React from "react";
import { useState } from "react";
import "./Form.css";
const Form = () => {
    const [userData, setUserData] = useState({
        salutation: "",
        fname: "",
        lname: "",
        cname: "",
        lsource: "",
        lstatus: "",
        ptest: ""
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
    }
    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <ul className="form-style-1">
                        <h1 className="form-heading">Form in React js</h1>
                        <li>
                            <label htmlFor="salutation">Salutation</label>
                            <select name="salutation" value={userData.salutation} className="field-select" onChange={handleInput}>
                                <option>Mr.</option>
                                <option>Ms.</option>
                                <option>Mrs.</option>
                                <option>Dr.</option>
                                <option>Prof..</option>
                            </select>
                        </li>

                        <li>
                            <label htmlFor="fname">First Name <span className="required">*</span></label>
                            <input type="text" name="fname" value={userData.fname} className="field-long" onChange={handleInput} />
                        </li>

                        <li>
                            <label htmlFor="lname">Last Name <span className="required">*</span></label>
                            <input type="text" name="lname" value={userData.lname} className="field-long" onChange={handleInput} />
                        </li>

                        <li>
                            <label htmlFor="cname">Company Name<span className="required">*</span></label>
                            <input type="text" name="cname" value={userData.cname} className="field-long" onChange={handleInput} />
                        </li>

                        <li>
                            <label htmlFor="lsource"> Lead Source</label>
                            <input
                                type="text"
                                name="lsource"
                                value={userData.lsource}
                                className="field-long"
                                placeholder="Web to lead"
                                onChange={handleInput}

                            />
                        </li>
                        <li>
                            <label htmlFor="lstatus"> Lead Status <span className="required">*</span></label>
                            <select name="lstatus" value={userData.lstatus} className="field-select" onChange={handleInput}>
                                <option>--None--</option>
                                <option>Open - Not Connected</option>
                                <option>Working - Contacted</option>
                                <option>Closed - Converted</option>
                                <option>Closed - Not Converted</option>
                            </select>
                        </li>
                        <li>
                            <label htmlFor="ptest">Product in Test<span className="required">*</span></label>
                            <select name="ptest" value={userData.ptest} className="field-select" onChange={handleInput}>
                                <option>Option1</option>
                                <option>Option2</option>
                                <option>Option3</option>
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
