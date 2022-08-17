import settings from "./settings";

function rentalFacade() {
    const URL = settings.getUrl();

//yessir
    const getRentalsByUserID = (userID) => {
        const options = makeOptions("GET",false,true); //True add's the token
        return fetch(URL + "api/rental/getAllRentals/"+userID, options).then(r => r.json());
    }
// yessir
    const getHouseByRentalID = (rentalID) => {
        const options = makeOptions("GET",false,true); //True add's the token
        return fetch(URL + "api/rental/getHouse/"+rentalID, options).then(r => r.json());
    }

    const removeTenant = (rentalID,tenantID) => {
        const options = makeOptions("PUT",null,true); //True add's the token
        return fetch(URL + "api/rental/removetenant/"+rentalID+"/"+tenantID, options).then(r => r.json());
    }

    const getCurrentTenantByHouseID = (houseID) => {
        const options = makeOptions("GET",false,true); //True add's the token
        return fetch(URL + "api/rental/currenttenants/"+houseID, options).then(r => r.json());
    }


    const getAllRentals = () => {
        const options = makeOptions("GET",false,true); //True add's the token
        return fetch(URL + "api/rental/getAll", options).then(r => r.json());
    }

    const deleteRental = (rentalID) => {
        const options = makeOptions("DELETE",null,true); //True add's the token
        return fetch(URL + "api/rental/delete/"+rentalID, options).then(r => r.json());
    }



    const makeOptions = (method, body, addToken) => {
        var opts = {
            method: method,
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        }
        if (addToken) {
            opts.headers["x-access-token"] = localStorage.getItem("jwtToken");
        }
        if (body) {
            opts.body = JSON.stringify(body);
        }
        return opts;
    }

    return{
        getRentalsByUserID,
        getHouseByRentalID,
        getCurrentTenantByHouseID,
        getAllRentals,
        deleteRental,
        removeTenant,
        
    }
}



const facade = rentalFacade();
export default facade;