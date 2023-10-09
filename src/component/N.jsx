import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../toolkitRedux/toolkitSlice";
import style from "../pages/NPage/NPage.module.scss";

const N = () => {
  const dispatch = useDispatch();
  const tablePerPage = useSelector((state) => state.toolkit.tablePerPage);
  return (
    <div className={style.divNPage}>
      <div>
        <h1 className={style.h1}>{tablePerPage}</h1>
        <div className={style.btnNPage}>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
        </div>
      </div>
    </div>
  );
};

export default N;
