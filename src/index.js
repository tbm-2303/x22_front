import {render} from "react-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./app"
import Home from "./components/home"
import MyRentals from "./components/myRentals";
import Houseinfo from "./components/HouseInfo"
import CreateTenant from "./components/CreateTenant";
import Rentals from "./components/Rentals";
import Houses from "./components/Houses";

const rootElement = document.getElementById("root");

render(
    <BrowserRouter>
        <Routes>
            <Route exact="true" path="/" element={<App/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/myRentals" element={<MyRentals/>}/>
                <Route path="houseInfo/:rentalID" element={<Houseinfo/>}/>
                <Route path="createTenant" element={<CreateTenant/>}/>
                <Route path="rentals" element={<Rentals/>}/>
                <Route path="/houses" element={<Houses/>}/>

          
            </Route>
            <Route
                path="*"
                element={
                    <main style={{padding: "1rem"}}>
                        <p>There's nothing here!</p>
                    </main>
                }
            />
        </Routes>
    </BrowserRouter>,
    rootElement
);