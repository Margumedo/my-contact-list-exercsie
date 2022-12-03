import React, {useState} from "react";

import Menu from "../component/Menu.jsx";




const Home = () => {
    
    //Vamos a crear los Hooks
    const [contact, setContact] = useState({
        email: "",
        name: "",
        myPhoneNumber: ""
    }); 

    const [contactList, setContactList] = useState([]);
    
    const [error, setError] = useState(false);

    const addContact = (e)=>{
        console.log(e.target.value)
        setContact(
            {...contact, [e.target.name]: e.target.value}
            )
    }
    

    const saveContactList = ()=>{
        if(contact.email.trim() !=="" &&
           contact.name.trim() !=="" &&
           contact.myPhoneNumber.trim() !==""){
           
            setContactList([...contactList,contact])
            setContact({
            email: "",
            name: "",
            myPhoneNumber: ""})
            setError(false);
           }
        else{
            setError(true);
        }
    }

    return (
        <>
            <Menu />

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center">My Contact List</h1>
                    </div>
                </div>
            </div>

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
                                value={contact.email}/>
                            </div>

                            <div className="form-group">
                                <label>Name:</label>
                                <input
                                onChange={addContact}  
                                className="form-control" 
                                placeholder="Name" 
                                type="text" 
                                name="name"
                                value={contact.name}/>
                            </div>

                            <div className="form-group">
                                <label>Phone Number:</label>
                                <input 
                                onChange={addContact} 
                                className="form-control" 
                                placeholder="Phone number" 
                                type="text" 
                                name="myPhoneNumber"
                                value={contact.myPhoneNumber}/>
                            </div>
                            <div className="form-group my-3">

                                <button onClick={saveContactList} className="btn btn-primary w-100" type="button">Save Contact</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-8">
                        Contactos: {contactList.length}
                    </div>
                    { error == true ?<div className="col-8 alert alert-danger">Todos los campos son necesarios</div>:""}
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    
                    {contactList.map((item,index)=>{
                        return(
                    
                    <div key="index" className="col-12 col-md-8 border">
                        <div className="d-flex border border-danger m-3">
                            <div className="border border-primary mx-3">
                                <img className="rounded-circle mt-2" src={`https://picsum.photos/100/100?random=${Math.floor(Math.random()*200)}`} alt="image" />
                            </div>
                            <div className="border border-success">
                                <p> <span>Email: {item.email} </span> </p>
                                <p> <span>Name: {item.name} </span> </p>
                                <p> <span>Phone Number: {item.myPhoneNumber}</span> </p>
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

export default Home;