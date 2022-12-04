import React, { useState } from "react";

import Menu from "../component/Menu.jsx";
import Title from "../component/Title.jsx";
import Form from "../component/Form.jsx"



const Home = () => {    

    return (
        <>
            <Menu />

            <Title title="My Contact List" />

            <Form/>
        </>
    );
}

export default Home;