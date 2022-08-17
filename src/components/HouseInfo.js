import React, {useEffect, useState} from 'react';
import {Container} from "react-bootstrap";
import {useParams} from "react-router-dom";
import rentalFacade from "../rentalFacade"

const HouseInfo= () => {
    const params = useParams();
    const [house, setHouse] = useState();

    useEffect(() => {
        rentalFacade.getHouseByRentalID(params.rentalID).then(house => setHouse(house))
    }, [])

    return (
        <div>
            <Container className="">
                <div className={""}>
                    <h1>House details for rental nr: {params.rentalID}</h1>
                    {house &&
                        <div>
                                    <h4>Address:</h4>
                                    <p>{house.address}</p>
                                    <h4>City:</h4>
                                    <p>{house.city}</p>
                                    <h4>Amount of rooms:</h4>
                                    <p>{house.rooms}</p>
                        </div>
                    }
                </div>
            </Container>
        </div>
    );
};

export default HouseInfo;