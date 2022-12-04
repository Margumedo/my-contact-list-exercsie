import React, { useState } from "react";


const Form = () => {

    const [contact, setContact] = useState({
        email: "",
        name: "",
        myPhoneNumber: ""
    });

    const [contactList, setContactList] = useState([]);

    const [error, setError] = useState(false);

    const addContact = (e) => {
        console.log(e.target.value)
        setContact(
            { ...contact, [e.target.name]: e.target.value }
        )
    }

    const saveContactList = () => {
        if (contact.email.trim() !== "" &&
            contact.name.trim() !== "" &&
            contact.myPhoneNumber.trim() !== "") {

            setContactList([...contactList, contact])
            setContact({
                email: "",
                name: "",
                myPhoneNumber: ""
            })
            setError(false);
        }
        else {
            setError(true);
        }
    }

    return (
        <>
            <div className="container my-3">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6 border">
                        <form>
                            <div className="form-group">
                                <label>Email:</label>
                                <input
                                    onChange={addContact}
                                    className="form-control"
                                    placeholder="Email"
                                    type="text"
                                    name="email"
                                    value={contact.email} />
                            </div>

                            <div className="form-group">
                                <label>Name:</label>
                                <input
                                    onChange={addContact}
                                    className="form-control"
                                    placeholder="Name"
                                    type="text"
                                    name="name"
                                    value={contact.name} />
                            </div>

                            <div className="form-group">
                                <label>Phone Number:</label>
                                <input
                                    onChange={addContact}
                                    className="form-control"
                                    placeholder="Phone number"
                                    type="text"
                                    name="myPhoneNumber"
                                    value={contact.myPhoneNumber} />
                            </div>
                            <div className="form-group my-3">

                                <button onClick={saveContactList} className="btn btn-primary w-100" type="button">Save Contact</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 border ">
                        {contactList <= 0
                            ? "Usted no tiene contactos registrados"
                            : "Contactos: " + contactList.length}
                    </div>
                    {error == true ? <div className="col-12 col-md-8 alert alert-danger">Todos los campos son necesarios</div> : ""}
                    <div className="container">
                        <div className="row justify-content-center">
                        </div>
                    </div>


                    {contactList.map((item, index) => {
                        return (

                            <div key={index} className="col-12 col-md-8 border">
                                <div className="d-flex m-3">
                                    <div className="mx-3">
                                        <img className="rounded-circle mt-2" src={`https://picsum.photos/100/100?random=${Math.floor(Math.random() * 200)}`} alt="image" />
                                    </div>
                                    <div className="">
                                        <p> <span> <b>Email:</b>  {item.email} </span> </p>
                                        <p> <span> <b>Name:</b> {item.name} </span> </p>
                                        <p> <span> <b>Phone Number:</b> {item.myPhoneNumber}</span> </p>
                                    </div>
                                </div>
                            </div>

                        );
                    })}
                </div>
            </div>

        </>



    );
}

export default Form;