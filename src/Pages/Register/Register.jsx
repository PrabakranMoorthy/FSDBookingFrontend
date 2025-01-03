import styled from "styled-components";
import MetaData from "../../Components/MetaData";
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Components/StyledNav/Nav";
import axios from "axios";
import { host } from "../../Hooks/Config";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  margin-top: 100px;
  width: 25%;
`;

const Ok = styled.div`
  margin-bottom: -100px;
`;

const Title = styled.h1`
  font-size: 20px;
  color: rgb(39, 104, 179);
  text-align: left;
  font-weight: bold;
  margin-top: -60px;
`;

const Form = styled.form`
  display: grid;
`;

const Linking = styled.div`
  margin-top: 10px;
  text-align: center;
  font-size: 13px;
  text-decoration: underline;
  cursor: pointer;
  font-color: #033a80;
`;

const Divider = styled.div`
  margin: 20px 0;
  text-align: center;
  position: relative;
  margin-bottom: 30px;
`;

const Line = styled.hr`
  border: none;
  border-top: 1px solid #ccc;
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
`;

const Copyright = styled.span`
  padding: 0 10px;
  font-size: 12.5px;
  text-align: center;
  justify-content: center;
  margin-top: 25px;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  border: 2px solid #3498db;
  border-radius: 4px;
  padding: 10px;
  transition: border-color 0.3s ease; /* Add transition for smooth effect */

  &:hover,
  &:focus {
    border-color: #3498db; /* Change border color on hover and focus */
  }
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: rgb(39, 104, 179);
  color: white;
  text-align: center;
  cursor: pointer;

  &:hover,
  &:focus {
    border-color: #3498db; /* Change border color on hover and focus */
  }
`;

const Register = () => {
  // Get dispatch function from context

  // const navigate = useNavigate()

  // const [formData, setFormData] = useState({
  //   username: '',
  //   email: '',
  //   password: '',
  //   phone: ''
  // });

  // const handleChange = event => {
  //   const { name, value } = event.target;
  //   setFormData(prevFormData => ({
  //     ...prevFormData,
  //     [name]: value
  //   }));
  // };

  // const handleSubmit = async event => {
  //   event.preventDefault();

  //   try {
  //     const response = await axios.post(`${host}/api/auth/register`, formData);
  //     console.log(response.data);

  //     // Dispatch a "LOGIN_SUCCESS" action with the user dat
  //     navigate("/login")
  //     alert("Account has been created Successfully. Now, simply login!");
  //     // Perform additional actions after successful registration
  //   } catch (error) {
  //     console.error(error);

  //     // Dispatch a "LOGIN_FAILURE" action with the error message
  //     alert("An error occurred during registration");
  //     // Handle error scenarios
  //   }
  // };

  const [formData, setFormData] = useState({
    Name: "",
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
    fetch(host + "/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(() => {
        alert("Account has created succesfully");
        window.location.replace("/");
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
      <MetaData title="Register | ShopVista" />
      <Navbar />
      <Ok />
      <Container>
        <Wrapper>
          <Title>Sign in or create an account</Title>
          <Form onSubmit={handleSubmit}>
            <Input
              type="name"
              name="Name"
              placeholder="Name"
              value={formData.Name}
              onChange={handleChange}
            />
            <Input
              type="name"
              name="username"
              placeholder="username"
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
              By signing in or creating an account, you agree with our{" "}
              <a href="https://www.booking.com/content/terms.en-gb.html?aid=304142">
                Terms & conditions
              </a>{" "}
              and{" "}
              <a href="https://www.booking.com/content/privacy.en-gb.html?aid=304142">
                Privacy statement
              </a>
              .
            </Agreement>
            <Button type="submit">Create my account</Button>
            <Linking>
              <Link to="/login">ALREADY HAVE AN ACCOUNT? SIGNIN</Link>
            </Linking>
          </Form>

          <Divider>
            <Line />
          </Divider>

          <Copyright>
            Copyright © 2024 Booking.com™. All rights reserved.
          </Copyright>
        </Wrapper>
      </Container>
    </>
  );
};

export default Register;
