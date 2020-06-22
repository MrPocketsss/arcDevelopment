import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from "./Theme";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LandingPage from "../LandingPage/LandingPage";
import Services from "../Services/Services";
import CustomSoftware from "../CustomSoftware/CustomSoftware";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0); // create state and manage which menu item is currently selected
  const [value, setValue] = useState(0); //create state to manage which tab is selected

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <LandingPage
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path="/services"
            render={(props) => (
              <Services
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path="/customsoftware"
            render={(props) => (
              <CustomSoftware
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path="/mobileapps"
            component={() => <div style={{ height: "500px" }}>Mobile Apps</div>}
          />
          <Route
            exact
            path="/websites"
            component={() => <div style={{ height: "500px" }}>Websites</div>}
          />
          <Route
            exact
            path="/revolution"
            component={() => (
              <div style={{ height: "500px" }}>The Revolution</div>
            )}
          />
          <Route
            exact
            path="/about"
            component={() => <div style={{ height: "500px" }}>About Us</div>}
          />
          <Route
            exact
            path="/contact"
            component={() => <div style={{ height: "500px" }}>Contact Us</div>}
          />
          <Route
            exact
            path="/estimate"
            component={() => <div style={{ height: "500px" }}>Estimate</div>}
          />
        </Switch>
        <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
