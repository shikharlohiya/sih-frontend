  /* import React from "react";

import { useState } from "react";
import { ticket } from "../home";
import { Link } from "react-router-dom";
import axios from "axios";
const Ticket=()=> {

const [values , setValues] = useState({
  name: "",
  age: "",
  adhar: "",
  error: "",
  success: false
});
const [allTickets,setAllTickets] = useState([])
const {name, age, adhar, error, success}= values

const handlechange = name => event =>{
  setValues({...values,error:false, [name]:event.target.value})
}
const callback = async ()=>{
    try{
        const res =  await axios.get('http://localhost:8000/api/allTickets');
        setAllTickets(res.data);
    }catch(err){
        console.log(err)
    }
}
const onSubmit = event =>{
  event.preventDefault()
  setValues({...values,error:false})
  ticket({name,age,adhar})
  .then(data=>{
    if(data.error){
      setValues({...values, error: data.error, sucess:false})
    }else{
      setValues({
        ...values,
        name: "",
        age: "",
        adhar: "",
        error: "",
        success: true
      });
      callback();
    }
  })
  .catch(console.log("error in signup"))

}
const ticketForm =() =>{
  return (

    <div className="main">
      <div class="container">
               <div class="row">
          <div class="col-sm-6 ">
            <div className="orange-box form">
              
            </div>
          </div>
          <div class="col-sm-6">
            <form className="form">
              <div class="form-group">
                <label for="name" className="lb">
                  name
                </label>
                <input
                  value={name}
                  type="name"  onChange={handlechange("name")}
                  class="form-control"
                  id="name"
                  placeholder="name"
                />
              </div>
              <div class="form-group">
                <label for="age" className="lb">
                  age
                </label>
                <input
                  type="text" onChange={handlechange("age")}
                  class="form-control"
                  value={age}
                  id="age"
                  placeholder="age"
                />
              </div>
              <div class="form-group">
                <label for="adhar" className="lb">
                  adhar
                </label>
                <input
                value={adhar}
                  type="password"  onChange={handlechange("adhar")}
                  class="form-control"
                  id="adhar"
                  placeholder="adhr"
                />
              </div>
              
              <div class="d-flex justify-content-center">
                <button onClick={onSubmit} type="button" class="btn but">
                  Add
                </button>
              </div>
            </form>
            <div>
                {
                    allTickets.map((item,index)=>{
                        return(
                            <div>
                                {item.name}
                                {item.age}
                                {item.adhar}
                            </div>
                        )
                    })
                }
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}




return(
  <>


  {ticketForm()}
  

  </>
  
)

}
export default Ticket;
 */