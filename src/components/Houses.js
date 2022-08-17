import React, {useEffect, useState} from 'react';
import {Card, Container} from "react-bootstrap";

import {Link} from "react-router-dom";
import houseFacade from "../houseFacade";
import {Table} from "react-bootstrap";

const Houses = () => {
    const [houses,sethouses] = useState();
    useEffect(()=>{
        houseFacade.getAllHouses().then(houses => sethouses(houses))
    },[])


    return (
        <div> <Container className="">
        <div className={""}>
            <h1>All Houses</h1>

            {houses &&

                <Table  className="">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Address</th>
                        <th>city</th>
                        <th>Amount of rooms:</th>
                        <th></th>
                        
                    </tr>
                    </thead>
                    <tbody>
                    {houses &&
                        houses.map((house) =>
                            <tr key={house.id}>
                                 <td>{house.id}</td>
                                <td>{house.address}</td>
                                <td>{house.city}</td>
                                <td>{house.rooms}</td>

                                <td>
                                <Link to={"/getTenants"+house.id}
                                      key={house.id} >view all tenant of this house
                                </Link>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </Table>
            }


        </div>
    </Container>
            <Container className="">
                <div className={""}>
                    <h1>All houses</h1>

                    <div className="">
                        {
                            houses &&
                                houses.map((house)=>
                            <Card  >
                                <Card.Body>
                                    <Card.Title>{house.id}</Card.Title>
                                    <Card.Text>
                                        Address: {house.address} <br/>
                                        City: {house.city} <br/>
                                        Amount of rooms: {house.rooms}
                                    </Card.Text>
                                    <Link to={"/houseInfoAdmin/"+house.id}
                                          key={house.id}
                                    >Se and update info</Link>

                                </Card.Body>
                            </Card>)}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Houses;