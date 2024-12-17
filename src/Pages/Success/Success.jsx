import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Feet from "../../components/Feet/Feet";
import "styled-components";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Metadata from "../../components/Metadata";

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(189, 189, 189, 0.8);
`;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 3rem;
  border-radius: 0.5rem;
  transform: translate(-50%, -50%);
  border: 5px;
  max-width: 70rem;
  background: linear-gradient(135deg, #a4c2f4, #6dd5fa, #b3e0fa);
`;

const Gap = styled.div`
  height: 400px;
  width: 100%;
`;

const Heading = styled.h2`
  text-decoration: underline;
  text-align: center;
  color: teal;
`;

const P = styled.p`
  margin-top: 18px;
  font-size: 15px;
  font-weight: 800px;
  color: #2980b9;
`;

const Img = styled.img`
  background-color: teal;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
`;

const Button = styled.button`
  width: 40%;
  display: block;
  margin: 0 auto;
  justify-content: center;
  padding: 0.6rem;
  margin-top: 1.5rem;
  border: none;
  border-radius: 0.3rem;
  background-color: #0071c2;
  text-decoration: none;
  color: #ebf3ff;
`;

const Success = () => {
  return (
    <>
      <Metadata title="Successfully booked | Booking.com" />
      <Navbar />
      <Gap />
      <Wrapper>
        <Container>
          <Img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" />
          <Heading>Hotel booking Confirmed!</Heading>
          <P>
            Congratulations! Your room has been confirmed. <br></br>Refer to
            your Loved ones and get 5% off on counter.
          </P>

          <Link to="/home">
            <Button className="reserve">Go to HomePage</Button>
          </Link>
        </Container>
      </Wrapper>
      <Feet />
    </>
  );
};

export default Success;
