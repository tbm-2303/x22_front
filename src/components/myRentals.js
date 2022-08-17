import React, {useEffect, useState} from 'react';
import {Container, Table} from "react-bootstrap";
import rentalFacade from "../rentalFacade";
import {Link} from "react-router-dom";

const MyRentals = () => {
    const userID = localStorage.getItem("userID");
    const[rentals,setRentals] = useState();

    useEffect(()=>{
        rentalFacade.getRentalsByUserID(userID).then(rentals => setRentals(rentals));
    },[])


    return (
        <div>
            <Container className="">
                <div className={""}>
                    <h1>My Rentals</h1>

                    {rentals &&

                    <Table bordered hover className="">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Annual price</th>
                            <th>Deposit</th>
                            <th>Contact</th>
                            <th>Info</th>
                        </tr>
                        </thead>
                        <tbody>
                        {rentals &&
                            rentals.map((rental) =>
                                <tr key={rental.id}>
                                    <td>{rental.id}</td>
                                    <td>{rental.startDate}</td>
                                    <td>{rental.endDate}</td>
                                    <td>{rental.priceAnnual}</td>
                                    <td>{rental.deposit}</td>
                                    <td>{rental.contactPerson}</td>
                                    <td>
                                    <Link to={"/houseInfo/"+rental.id}
                                          key={rental.id}
                                    >Info</Link>
                                    </td>

                                </tr>
                            )
                        }
                        </tbody>
                    </Table>
                    }
                </div>
            </Container>
        </div>
    );
};

export default MyRentals;