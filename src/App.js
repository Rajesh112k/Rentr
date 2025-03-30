import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/index';
import PropertyDetails from './components/PropertyDetails/PropertyDetails'; // Import the PropertyDetails component
import Login from './components/Login/Login'; // Import the Login component
import Listings from './components/Listings'
import RenterOverview from './components/RenterOverview/RenterOverview';
import OwnerProperties from './components/ownerdetails/OwnerProperties';
import Apt1 from './components/apt1';
import DataForm from './DataForm';
import { MessageProvider } from './components/MessageContext'
import Owner from './components/Owner';
import Client from './components/Client';
import AuthForm from './components/AuthForm';
import ChatApp from './components/ChatApp';
import CardSlider from "./components/cs";
import Buttons from "./components/butt";
import Slider from "./components/slider";
import axios from "axios";
import MyAccount from "./components/MyAccount/MyAccount"
import ChangePassword from "./components/ChangePassword/ChangePassword"
import RenterDocuments from "./components/RenterDocuments/RenterDocuments"
import RequestMaintenance from "./components/RequestMaintenance/RequestMaintenance"
import ContactPropertyOwner from "./components/ContactPropertyOwner/ContactPropertyOwner"
import ccontact from "./components/ccontactrenters/ContactRenters"
import RenterInspections from "./components/RenterInspections/RenterInspections"
import OwnerDocuments from './components/OwnerDocuments/OwnerDocuments';
import OwnerInspections from './components/OwnerInspections/OwnerInspections';
import OwnerMaintenanceRequests from './components/OwnerMaintenanceRequests/OwnerMaintenanceRequests';
// import OwnerProperties from './components/ownerdetails/OwnerProperties';


function App() {
  const [jsonData, setJsonData] = useState([]);
  const [filters, setFilters] = useState({
    bed: null,
    bath: null,
    minRent: null,
    maxRent: null,
    description: "",
    isFurnished: false,
    isPetsAllowed: false,
    iswasher: false,
    isdish: false,
    isbalcony: false,
    isparking: false,
  });

//to fetch a data 
  useEffect(() => {
    // Fetch your JSON data here
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/getData");
        setJsonData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleCheckboxChange = (checkboxName) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [checkboxName]: !prevFilters[checkboxName],
    }));
  };
  const handleButtonClick = (key, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: prevFilters[key] === value ? null : value,
    }));
  };

  const handleSliderChange = (values) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      minRent: values[0],
      maxRent: values[1],
    }));
  };
  const handleTextInput = (description) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      description: description,
    }));
  };
    const [showLogin, setShowLogin] = useState(false);

    const toggleLogin = () => {
        setShowLogin(!showLogin);
    };
    const [authenticatedUser, setAuthenticatedUser] = useState(null);

    const handleLogin = (username) => {
      // You might want to perform actual authentication here
      // For simplicity, this example sets the authenticated user directly
      setAuthenticatedUser(username);
    };
    return (
        <Router>
            <div className="App">
                <Switch>
                <Route path="/home">
                        <Nav />
                        {/* <Apt1 /> */}
                        {/* <Hero /> */}
                        {/* <Listings /> */}
                        <OwnerProperties />
                        {/* <DataForm /> */}
                        
                        {/* <PropertyDetails /> */}

                    </Route>
                    <Route path="/MyAccount" component={MyAccount} />
            <Route path="/RenterOverview" component={RenterOverview} />
            <Route path="/change-password" component={ChangePassword} />
            <Route exact path="/renter-overview" component={RenterOverview} />
            <Route path="/renter-documents" component={RenterDocuments} />
            <Route path="/renter-maintenance-requests" component={RequestMaintenance} />
            <Route path="/contact-owner" component={ContactPropertyOwner} />
            <Route path="/renter-inspections" component={RenterInspections} />
            {/* <Route path="/owner-properties" component={OwnerProperties} /> */}
            <Route path="/owner-documents" component={OwnerDocuments} />
            <Route path="/owner-requests" component={OwnerMaintenanceRequests} />
            <Route path="/owner-inspections" component={OwnerInspections} />
            <Route path="/ccontact-renter" component={ccontact} />

            
               
                    <Route path="/login">

                        <Header />
                        {/* <Hero jsonData={jsonData} filters={filters} onCheckboxChange={handleCheckboxChange} /> */}
                        <Hero  onSliderChange={handleSliderChange}
        sliderValues={[filters.minRent, filters.maxRent]} onButtonClick={handleButtonClick} jsonData={jsonData} filters={filters} onCheckboxChange={handleCheckboxChange}/>
                  
                        {/* <OwnerProperties /> */}
                        {/* Place your Login component here */}
                        {/* <Listings /> */}
                        {/* <Buttons onButtonClick={handleButtonClick}
        onSliderChange={handleSliderChange}
        sliderValues={[filters.minRent, filters.maxRent]}
        handleTextInput={handleTextInput} />
                        <Slider onSliderChange={handleSliderChange} />
      <CardSlider jsonData={jsonData} filters={filters} /> */}

                    </Route>
                    <Route path="/user">
                        <Header />
                        <Hero />
                    </Route>
                    <Route path="/propertydetails/:id" component={PropertyDetails} />
                    
                    <Route path="/">
                        <Nav handleTextInput={handleTextInput}   />
                        <Hero  onSliderChange={handleSliderChange}
        sliderValues={[filters.minRent, filters.maxRent]} onButtonClick={handleButtonClick} jsonData={jsonData} filters={filters} onCheckboxChange={handleCheckboxChange}/>
                        
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;




