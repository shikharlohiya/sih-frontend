import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTicket } from "../../store/API";
import "./Alltickket.css";
function AllTicket() {
  const { data } = useSelector((state) => state.ticket);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getTicket());
  }, [dispatch]);
  console.log(data);
  return (
    <>
      <div className="header-img">
        <div className="img-pay">
          <img src="./imagess/Group.png"></img>
        </div>
        <p className="thnak">Thank You!</p>
        <p className="enjoy"> We hope you enjoy your journey.</p>
      </div>
      <div className="div-ticket">
        {data?.map((item) => {
          return (
            <div className="cart123 row">
              <div className="cart-div123 col-3">
                <img
                  src={`https://sih11.herokuapp.com${item.monumentId.img}`}
                  className="cart-img123"
                ></img>
              </div>
              <div className="details-centre col-6">
                <p className="suc-det">
                  {item.monumentId.name},{item.monumentId.stateUT}
                </p>
              </div>
              <div className="col-3">
                <button
                  className="suc-but"
                  onClick={() => {
                    navigate("/get-ticket/", {
                      state: {
                        data: item,
                      },
                    });
                  }}
                >
                  View Ticket
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default AllTicket;
