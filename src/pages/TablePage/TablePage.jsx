import React, { useState, useEffect } from "react";
import Message from "../../component/Message/Message";
import style from "../TablePage/TablePage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import TableFooter from "../../component/TableFooter/TableFooter";
// import { fetchMessages } from "../../toolkitRedux/toolkitSlice";

const TablePage = () => {
  //const message = useSelector((state) => state.toolkit.message);
  const dispatch = useDispatch();
  // const [text, setText] = useState([]);

  // const handleAction = () => {
  //   if (text.trim().length) {
  //     dispatch(add)
  //   }
  // }
  // useEffect(() => {
  //   dispatch(fetchMessages());
  //   setText(messages);
  //   console.log(text);
  // }, []);

  return (
    <div>
      <Message />
    </div>
  );
};

export default TablePage;
