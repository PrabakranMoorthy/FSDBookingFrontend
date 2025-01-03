import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";
import styled from "styled-components";
import MetaData from "../../Components/MetaData";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/styledNav/Nav";
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

const Error = styled.span`
  color: red;
`;

const Login = () => {
  // const [credentials, setCredentials] = useState({
  //   email: undefined,
  //   password: undefined,
  // });

  // // const { loading, error, dispatch } = useContext(AuthContext);

  // const navigate = useNavigate()

  // const handleChange = (e) => {
  //   setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  // };

  // const handleClick = async (e) => {
  //   e.preventDefault();
  //  // dispatch({ type: "LOGIN_START" });
  //   try {
  //     const res = await axios.post("/auth/login", credentials);
  //     console.log(res.data);

  //     navigate("/login")
  //     alert("Account has been created Successfully. Now, simply login!");
  //   } catch (err) {
  //     console.error(err);

  //     // Dispatch a "LOGIN_FAILURE" action with the error message
  //     alert("An error occurred during registration"); }
  // };

  const [formData, setFormData] = useState({
    username: "",
    Password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(() => {
        alert("Logged In succesfully");
        window.location.replace("/home");
      })
      .then((data) => {
        // Handle the successful login response here
        console.log(data);
      })
      .catch((error) => {
        // Handle error if the login API call fails
        setError("Invalid email or password. Please try again.");
        console.error("Error:", error);
      });
  };

  return (
    // <div className="login">
    //   <div className="lContainer">
    //     <input
    //       type="text"
    //       placeholder="email"
    //
    //       className="lInput"
    //     />
    //     <input
    //       type="password"
    //       placeholder="password"
    //       id="password"
    //       onChange={handleChange}
    //       className="lInput"
    //     />
    //     <button disabled={loading} onClick={handleClick} className="lButton">
    //       Login
    //     </button>

    //   </div>
    //</div> */
    <>
      <MetaData title="Login | Booking.com" />
      <Navbar />
      <Ok />
      <Container>
        <Wrapper>
          <Title>Sign in or create an account</Title>
          <Form onSubmit={handleSubmit}>
            {/* <Input type="email" name="email" id="email" placeholder="Email"  onChange={handleChange} />
          <Input type="password" name="Password"  id="password" placeholder="Password" onChange={handleChange} /> */}

            <Input
              type="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
            />
            <Input
              type="password"
              name="Password"
              value={formData.Password}
              onChange={handleChange}
              placeholder="Password"
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
            <Button type="submit">Sign In</Button>
            {error && <Error>Something went wrong...</Error>}
            <Linking>
              <Link to="/register">DON'T HAVE AN ACCOUNT? {"  "}SIGNUP</Link>
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

export default Login;
