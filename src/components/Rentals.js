import React, {useEffect, useState} from 'react';
import {Button, Container, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import rentalFacade from "../rentalFacade"
import userFacade from "../userFacade"


const Rentals = () => {
    const[rentals,setRentals] = useState();
    const[tenants, setTenants] = useState();

    useEffect(()=>{
        rentalFacade.getAllRentals().then(rentals => setRentals(rentals))
    },[])

    const handleRemove = (e) => {
        // i need to remove tenants from the rental. i have all methods just need to access tenantID from each tenant but i dont have time.
        
      const tmp = userFacade.getTenantsByRentalID(e.target.value)
        //use rentalfacade.removetenant(rentalID, tenantID)


        const rentalID = e.target.value;
        rentalFacade.deleteRental(rentalID)
        if(rentals) {
            const newRentals = rentals.filter((rental) => rental.id != rentalID);
            setRentals(newRentals)
        }
    };
    return (
        <div>
            <Container className="">
                <div className={""}>
                    <h1>All rental agreements</h1>

                    {rentals &&

                        <Table  className="">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Annual price</th>
                                <th>Deposit</th>
                                <th>Contact Person</th>
                                <th></th>
                                <th></th>
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
                                        <Link to={"/rentalInfo/"+rental.id}
                                              key={rental.id} >Change
                                        </Link>
                                        </td>
                                        <td>
                                            <Button type="button" onClick={handleRemove} key={rental.id} value={rental.id} className="btn-danger">remove</Button>
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

export default Rentals;