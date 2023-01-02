import React, { useState } from 'react';
const initialState = {
    fname:'',
    lname:'',
    pname:'',
    phone:'',
    email:'',
    pin:'',
    aadhar:'',
    state:'',
    address:'',
    account:'',
    bank:'',
    holdername:'',
    ifsc:'',
    errors:{}
}

const Login=()=>{
    const [data, setData] = useState(initialState)
    const { fname, lname, pname, phone, email, pin, aadhar, state, address, account, bank, holdername, ifsc, errors } =data

   
    const handleChnage = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }
   
    console.log('111',data)
   

    let handleAddValidation = () => {
        let error = {};
        let formIsValid = true;
        
        if (!email?.trim()) {
          error.emailIdError = " * Email id can't be empty";
          formIsValid = false;
        } else {
          if (!/^.+?@.+?\..+$/.test(email)) {
            error.emailIdError = " * Email format is not valid";
            formIsValid = false;
          }
        }
        if (!fname?.trim()) {
          error.nameError = " * Name can't be empty";
          formIsValid = false;
        } else {
          if (!/^[A-Za-z ]+$/.test(fname)) {
            error.nameError = " * Only Alphabets are allowed ";
            formIsValid = false;
          }
        }

        if (!lname?.trim()) {
            error.lnameError = " * Name can't be empty";
            formIsValid = false;
          } else {
            if (!/^[A-Za-z ]+$/.test(lname)) {
              error.lnameError = " * Only Alphabets are allowed ";
              formIsValid = false;
            }
          }

          if (!pname?.trim()) {
            error.pnameError = " * Name can't be empty";
            formIsValid = false;
          } else {
            if (!/^[A-Za-z ]+$/.test(pname)) {
              error.pnameError = " * Only Alphabets are allowed ";
              formIsValid = false;
            }
          }  


    
        if (!phone?.trim()) {
          error.phoneError = " * Phone No. can't be empty";
          formIsValid = false;
        } else {
          if (phone) {
            if (!/^[1-9][0-9]{9}$/.test(phone)) {
              error.phoneError = " * Only 10 digits no are allowed";
              formIsValid = false;
            }
            if (isNaN(phone)) {
              error.phoneError = " * Only Numeric Value are allowed";
            }
          }
        }
       
      
        if (!pin) {
          error.pinError = " * Please enter the pin";
          formIsValid = false;
        }

        if(!aadhar){
            error.aadharError="* Please enter aadhar number"
        }

        if(!state){
            error.stateError="* Please enter the state"
        }

        if(!address){
            error.addressError="* Please enter the address"
        }

        if(!account){
            error.accountError="* Please enter the account"
        }

        if(!bank){
            error.bankError="* Please enter the bank"
        }

        if(!holdername){
            error.holdernameError="* Please enter the holder"
        }

        if(!ifsc){
            error.ifscError="* please enter the ifsc"
        }
    
        setData({
            ...data,
            errors:error,
        });
        return formIsValid;
      };

    const handleSubmit=(e)=>{
        e.preventDefault();
        // alert('jasnjsnj')
         let formIsValid = handleAddValidation();
         alert('form submit')
         setData(initialState)
        
       
    }
    return(
        <>
       <h1>KYC  <span style={{color:"red"}}>Update</span></h1>

<div style={{background:"#fff9e7"}} >
   <form onSubmit={handleSubmit}>
     {/* <p>Personal  <span style={{color:"red"}}>Details</span></p> */}
     
       <input type='text' placeholder='First Name' name='fname' value={fname} onChange={handleChnage} />
       <span style={{ color: "red", fontSize: "14px" }}>{errors?.nameError}</span>
       <br /> <br />

       <input type='text' placeholder='Last Name' name='lname' value={lname} onChange={handleChnage} /> 
       <span style={{ color: "red", fontSize: "14px" }}>{errors?.lnameError}</span>
       <br /> <br />
       
           
       <input type='text' placeholder='Father"s Name' name='pname' value={pname} onChange={handleChnage} /> 
       <span style={{ color: "red", fontSize: "14px" }}>{errors?.pnameError}</span>
       
       <br /> <br />
       <div>
           
       <input type='text' placeholder='Mobile No' name='phone' value={phone} onChange={handleChnage} /> 
       <span style={{ color: "red", fontSize: "14px" }}>{errors?.phoneError}</span>
       <br /> <br />
       </div>
     
       <input type='text' placeholder='Email Address' name='email' value={email} onChange={handleChnage}/>
       <span style={{ color: "red", fontSize: "14px" }}>{errors?.emailIdError}</span>
      
        <br /> <br />
       <input type='text' placeholder='Pin Code' name='pin' value={pin} onChange={handleChnage} /> 
       <span style={{ color: "red", fontSize: "14px" }}>{errors?.pinError}</span>
       
       <br /> <br />
       <input type='text' placeholder='Aadhar Number' name='aadhar' value={aadhar} onChange={handleChnage} />
       <span style={{ color: "red", fontSize: "14px" }}>{errors?.aadharError}</span>
       
        <br /> <br />
       <input type='text' placeholder='State' name='state' value={state} onChange={handleChnage} /> 
       <span style={{ color: "red", fontSize: "14px" }}>{errors?.stateError}</span>
       
       <br /> <br />
       {/* <input type='text' rows='5' placeholder='Addrees' name='address' value={address} onChange={handleChnage}/> <br/> <br/> <br/> <br/> */}
       <textarea class="form-control" rows="5" name="address" value={address} onChange={handleChnage} > Register Address</textarea>
       <span style={{ color: "red", fontSize: "14px" }}>{errors?.addressError}</span>
       <p>Bank  <span style={{color:"red"}}>Details</span></p>
       {/* <p>Bank Details</p> */}
       <input type='text' placeholder='Account Number' name='account' value={account} onChange={handleChnage} /> 
       <span style={{ color: "red", fontSize: "14px" }}>{errors?.accountError}</span>
       
       <br /> <br />
       <input type='text' placeholder='Bank Name' name='bank' value={bank} onChange={handleChnage} /> 
       <span style={{ color: "red", fontSize: "14px" }}>{errors?.bankError}</span>
       
       <br /> <br />
       <input type='text' placeholder='Account Holder Name' name='holdername' value={holdername} onChange={handleChnage} /> 
       <span style={{ color: "red", fontSize: "14px" }}>{errors?.holdernameError}</span>
       
       <br /> <br />
       <input type='text' placeholder='IFSC Code' name='ifsc' value={ifsc} onChange={handleChnage} /> 
       <span style={{ color: "red", fontSize: "14px" }}>{errors?.ifscError}</span>
       
       <br /> <br />

      

       <button type="submit">Submit</button>





   </form>
   </div>
        </>
    )
}
export default Login;