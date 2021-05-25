import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import ContactPage from './pages/ContactPage';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';



export const App = () => (
  
    <BrowserRouter>
    <ChakraProvider>
      <Header/>
      <Switch>
        <Route path="/" exact render={() => <HomePage />} />
        <Route path="/about" render={() => <AboutPage />} />
        <Route path="/resume" render={() => <ResumePage />} />
        <Route path="/contact" render={() => <ContactPage />} />
      </Switch>
      <Footer />
      </ChakraProvider>
    </BrowserRouter>
)
