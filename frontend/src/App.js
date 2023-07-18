import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import bg from './assets/bg.jpg'

const sectionStyle = {
  backgroundImage: `url(${bg})`,
  backgroundSize: '100vw'
}

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3" style={sectionStyle}>
        <Container >
          {/* outlet makes space for our route '/' */}
          <Outlet />
        </Container>
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
