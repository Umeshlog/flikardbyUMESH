import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/Home/home";
import Card from "./components/kard/card";
import TampledProvider from "./tamplets/tampledProvider";
import Contextprovider from "./context/contextprovider";
import Contact from "./components/kard/contact";
import DetailView from "./components/product/detailview";
import {Box} from "@material-ui/core";
function App() {
  return (
    <TampledProvider>
      <Contextprovider>
        <BrowserRouter>
          <Header />
          <Box style={{marginTop:54}}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/card" component={Card} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/product/:id" component={DetailView} />
            <Home />
          </Switch>
          </Box>
        </BrowserRouter>
      </Contextprovider>
    </TampledProvider>
  );
}

export default App;
