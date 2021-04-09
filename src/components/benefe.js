import React, { useState } from 'react';
import { Link } from "react-router-dom";
const otpnum= 1234;

function Benefe(){
    const [phno, setPhoneno] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        console.log(phno);
        setPhoneno("");}

        function validateotp(e){
            e.preventDefault();
            if(phno == otpnum){
                alert("Succesful");
            }
            else{
                alert("Not Succesful");
            }
        }
        return (
            <form>
              <input
                type="number"
                value={phno}
                onChange={(e) => setPhoneno(e.target.value)}
              />
              <button><Link to="/beneForm">Register</Link></button>
              <button type="submit" onClick={handleSubmit}>        Verify for otp      </button> 
            <button type="submit" onClick={validateotp}>        Validate      </button>    </form>
          );
}
export default Benefe;