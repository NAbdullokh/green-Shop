import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Details from "../components/Details";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NotFound from "../pages/NotFound";
import { NavbarItems } from "../utils/navbarItems";
import { Container, Wrapper } from "./style";

const Root = () => {
  return (
    <Wrapper>
      <Container>
        <Routes>
          <Route path="/" element={<Navigate to={"/home"} />} />
          <Route element={<Navbar data={NavbarItems} />}>
            <Route element={<Footer />}>
              {NavbarItems.map((value) => {
                return (
                  <Route
                    key={value.id}
                    path={value.path}
                    element={value.element}
                  />
                );
              })}
              <Route path="*" element={<NotFound />} />
              <Route path="/shop/:id" element={<Details />} />
            </Route>
          </Route>
        </Routes>
      </Container>
    </Wrapper>
  );
};

export default Root;
