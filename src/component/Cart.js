import React from "react";
import { useState } from "react";
import { ticket } from "../home";
import axios from "axios";
import "./Cart.css";
import { CartProvider, useCart } from "react-use-cart";


const Ticket=()=> {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } = useCart();

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







  const ticketForm =()=>{
  return (
    <>
      <div className="details">
        <p className="details-name">Add Your Details Here</p>
        <form>
          <input type="text"  placeholder="Name" className="details-input" onChange={handlechange("name")} />
          <input type="number" placeholder="Age" className="details-input" onChange={handlechange("age")}  />
          <input
            type="number"
            placeholder="Aadhar Number"
            className="details-input"
            onChange={handlechange("adhar")}

          />
         
          <button onClick={onSubmit} type="button"className="details-input-add" >
                  Add
                </button>

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
      <div className="container div-amount-cart">
        <div className="amount-cart row">
          <div className="cart-main col-8">
            {items.map((item) => (
              <div className="cart">
                <div className="cart-div">
                  <img src={item.img} className="cart-img"></img>
                </div>
                <div className="cart-div2">
                  <i
                    class="fa-solid fa-trash-can button-delete"
                    onClick={() => removeItem(item.id)}
                  ></i>
                  <p className="cart-name">{item.name}</p>

                  <p className="cart-date2">Date</p>
                  <input type="date" className="cart-date"></input>
                </div>
              </div>
            ))}
          </div>
          <div className="amount col-4 sticky-top">
            <p>amount</p>
          </div>
        </div>
      </div>
    </>
  );
}


return (
  <>
  {ticketForm()}
  </>
)
}
export default Ticket;
