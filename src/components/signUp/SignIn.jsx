import React,{ useState } from "react";
import "./SignUp.css";
// import { localUrl } from "../../API/api";
import { Link } from "react-router-dom";
// import vectorLogo from "../../images/Vector-Logo.png";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    
      <div className="signup__content">
        <div className="signup__page">
          <form
            // onSubmit="return myFormValidation()"
            className="signup__inputFields"
            action=""
          >
            <h1 className="signup__title"><i>Welcome!</i></h1>
            {/* <p style={{ color: "red" }}>{fieldErr}</p> */}
           
            <label htmlFor="email" className="signup__label">
            Enter Your Email:
            </label>
            {/* <p style={{ color: "red" }}>{errorsMade}</p> */}
            {/* <p style={{ color: "red" }}>{mailErr}</p> */}
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
           
            <label  className="signup__label lastFeild">
              Password
            </label>
            <input
              value={password}
              placeholder="Password"
              variant="standard"
              type="password"
              onChange={(e)=>setPassword(e.target.value)}
            />
            <button
              className="signup__button"
              value="signUp"
              type="submit"
              // onClick={PostData}
              // disabled={isLoading}
            >
              Sign In
            </button>
            {/* </div> */}
          </form>
          <p className="signup__text">
            Already have an account?{" "}
            <Link to={"/signup"}>
              <span className="signin__link">Sign Up</span>
            </Link>
          </p>
        </div>
      </div>
  );
};
export default SignIn;
