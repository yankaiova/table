import React from "react";
import Message from "../../component/Message";
import style from "../TablePage/TablePage.module.scss";

const TablePage = () => {
  return (
    <div className={style.divTablePage}>
      <Message />
    </div>
  );
};

export default TablePage;
