import React from "react";
import "./SignUp.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useHistory } from 'react-router-dom';
const SignUpRes = () => {
const navigate = useHistory();
  const [value, setValue] = React.useState('Restaurant');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
    const sendData = ()=>{
console.log(value)
      if(value==='Volunteer'){
        navigate.push(`/volunteer/signupvol`)
      }
      else{
        navigate.push(`/restaurant/signupres`)
      }
    }
  return (
    <div className="signup__content" style={{marginTop:"10%"}}>
      <div className="signup__page">
        <form
          onSubmit={sendData}
          className="signup__inputFields"
          // action=""
        >
          <h1 className="signup__title">
            <i>Welcome!</i>
          </h1>
          {/* <p style={{ color: "red" }}>{fieldErr}</p> */}
          <label htmlFor="name" className="signup__label">
            You are registering As:
          </label>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="Restaurant"
              control={<Radio />}
              label="Restaurant"
            />
            <FormControlLabel value="Volunteer" control={<Radio />} label="Volunteer" />
           
          </RadioGroup>

          <button
            className="signup__button"
            type="submit"
            style={{marginTop:"3%"}}
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};
export default SignUpRes;
