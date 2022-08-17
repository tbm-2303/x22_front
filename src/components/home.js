import React, {useEffect, useState} from 'react';

import {Container} from "react-bootstrap";
import HomeAdmin from './homeAdmin';

const Home = () => {

    return (
        <Container>
            { localStorage.getItem("userType")=== "admin" &&
                <HomeAdmin/>
            }

        </Container>
    );
};

export default Home;