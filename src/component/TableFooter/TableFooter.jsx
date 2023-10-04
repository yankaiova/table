import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMessages,
  onNavigateNext,
  onNavigatePrev,
} from "../../toolkitRedux/toolkitSlice";
import style from "../TableFooter/TableFooter.module.scss";

const TableFooter = ({ currentPage, pages, totalPage }) => {
  const dispatch = useDispatch();

  const navigatePrev = () => {
    if (currentPage !== 1) {
      dispatch(onNavigatePrev());
    }
  };
  const navigateNext = () => {
    if (currentPage !== totalPage) {
      dispatch(onNavigateNext());
    }
  };
  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  return (
    <div>
      <button onClick={navigatePrev}>Prev</button>
      <p>
        {pages.map((item) => (
          <span className={item === currentPage ? style.blue : style.red}>
            {item}
          </span>
        ))}
      </p>
      <button onClick={navigateNext}>Next</button>
    </div>
  );
};

export default TableFooter;
