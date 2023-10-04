import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../toolkitRedux/toolkitSlice";
import style from "../NPage/NPage.module.scss";

const NPage = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.toolkit.count);
  return (
    <div className={style.divNPage}>
      <div>
        <h1 className={style.h1}>{count}</h1>
        <button className={style.btn} onClick={() => dispatch(increment())}>
          +
        </button>
        <button className={style.btn} onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
    </div>
  );
};

export default NPage;
