import styled from "styled-components";
import Metadata from "../../Components/Metadata";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://img.freepik.com/free-photo/room-with-plants-wall-that-says-zen-it_1340-25517.jpg?t=st=1691144082~exp=1691147682~hmac=e564e2fd5d507c26997f9990b328bd310716542be8aa8f7cb92a127aecb9d69b&w=740")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #cbe7ee;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #033a80;
  text-align: center;
  font-weight: 500;
  text-decoration: underline;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Linking = styled.a`
  margin-top: 10px;
  text-align: center;
  font-size: 13px;
  text-decoration: underline;
  cursor: pointer;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  text-align: center;
  cursor: pointer;
`;

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    Password: "",
    phone: "",
    // Other form fields as needed
  });

  function validateEmail(email) {
    let regex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    return typeof email != "string" || regex.test(email) ? true : false;
  }

  function validPassword(password) {
    let regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;
    return typeof password != "string" || regex.test(password) ? true : false;
  }

  function isValidMobile(phone) {
    let regex = /^[6-9][0-9]{9}$/;
    return typeof phone != "string" || regex.test(phone) ? true : false;
  }

  // Handler to update the form data as the user types
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      String(formData.phone).length !== 10 ||
      !isValidMobile(formData.phone)
    ) {
      return alert(
        "Please provide a valid 10-digit phone number starting with a digit between 6 and 9."
      );
    }
    if (!validateEmail(formData.email)) {
      return alert("Please enter valid Email !");
    }
    if (!validPassword(formData.Password)) {
      return alert(
        "Please enter valid Password that must contain 8 char with upercase, lowercase, special char and number!"
      );
    }
    // Perform API call here
    // Example using fetch:
    fetch("https://fsdbookingbackend-2.onrender.com/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(() => {
        alert("Account has created succesfully");
        //   window.location.replace("/")
      })
      .then((data) => {
        // Handle the API response here, such as showing success message or error
        console.log(data);
      })
      .catch((error) => {
        // Handle error if the API call fails
        console.error("Error:", error);
        alert(error);
      });
  };

  return (
    <>
      <Metadata title="Register | ShopVista" />
      <Container>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form onSubmit={handleSubmit}>
            <Input
              type="username"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              type="phone"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <Input
              type="password"
              name="Password"
              placeholder="Password"
              value={formData.Password}
              onChange={handleChange}
            />
            <Agreement>
              By creating an account, I consent of my personal data in
              accordance with the <b>PRIVACY POLICY.</b>
            </Agreement>
            <Button type="submit">CREATE</Button>
            <Linking>
              <Link to="/">ALREADY HAVE AN ACCOUNT? SIGNIN</Link>
            </Linking>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Register;
