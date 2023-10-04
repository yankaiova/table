import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessages } from "../../toolkitRedux/toolkitSlice";
import TableFooter from "../TableFooter/TableFooter";

const Message = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.toolkit.message);
  const tablePerPage = useSelector((state) => state.toolkit.tablePerPage);
  const currentPage = useSelector((state) => state.toolkit.currentPage);

  const totalPage = 10;
  const pages = [...Array(totalPage + 1).keys()].slice(1);
  const indexOfLastPage = currentPage * tablePerPage;
  const indexOfFirstPage = indexOfLastPage - tablePerPage;

  const visibleTable = message.slice(indexOfFirstPage, indexOfLastPage);
  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  return (
    <div>
      <div>
        {visibleTable.map((item) => (
          <div>
            <span>{item.title}</span>
          </div>
        ))}
      </div>
      <TableFooter
        currentPage={currentPage}
        pages={pages}
        totalPage={totalPage}
      />
    </div>
  );
};

export default Message;
