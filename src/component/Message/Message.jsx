import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessages } from "../../toolkitRedux/toolkitSlice";

const Message = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.toolkit.message);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  return (
    <div>
      <div>
        {message.map((item) => (
          <div>{item.title}</div>
        ))}
      </div>
    </div>
  );
};

export default Message;
