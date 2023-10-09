import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchMessages,
  onNavigateNext,
  onNavigatePrev,
} from "../toolkitRedux/toolkitSlice";
import style from "../pages/TablePage/TablePage.module.scss";

const Pagination = ({ currentPage, pages, totalPage }) => {
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
    <div className={style.pagination}>
      <button onClick={navigatePrev} className={style.btnPagination}>
        {"<"}
      </button>
      <span className={style.pagination__number}>
        {pages.map((item) => (
          <span
            className={style.pagination__number__item}
            style={item === currentPage ? { color: "blue" } : {}}
            key={item}
          >
            {item}
          </span>
        ))}
      </span>
      <button onClick={navigateNext} className={style.btnPagination}>
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
