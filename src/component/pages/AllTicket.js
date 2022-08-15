import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTicket } from "../../store/API";

function AllTicket() {
  const { data } = useSelector((state) => state.ticket);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTicket());
  }, [dispatch]);
  console.log(data);
  return (
    <div>
      {data?.map((item) => {
        return <div>{item.price}</div>;
      })}
    </div>
  );
}

export default AllTicket;
