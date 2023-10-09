import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessages } from "../toolkitRedux/toolkitSlice";
import Pagination from "./Pagination";
import style from "../pages/TablePage/TablePage.module.scss";

const Message = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.toolkit.message);
  const tablePerPage = useSelector((state) => state.toolkit.tablePerPage);
  const currentPage = useSelector((state) => state.toolkit.currentPage);

  const totalPage = Math.ceil(message.length / tablePerPage);
  const pages = [...Array(totalPage + 1).keys()].slice(1);
  const indexOfLastPage = currentPage * tablePerPage;
  const indexOfFirstPage = indexOfLastPage - tablePerPage;

  const visibleTable = message.slice(indexOfFirstPage, indexOfLastPage);
  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  return (
    <div className={style.tableWithPagination}>
      <table className={style.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {visibleTable.map((item) => (
            <tr className={style.table__tr} key={item.id}>
              <td>{item.name}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        pages={pages}
        totalPage={totalPage}
      />
    </div>
  );
};

export default Message;
