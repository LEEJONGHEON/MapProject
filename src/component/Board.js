import React from "react";
import { Router } from "react-router-dom";


const Board = () => {

    return (
       <>
          <a href="BoardWrite">글작성</a>
          {/* <a href="http://localhost:8090/board/save">글작성(링크)</a> */}
     
          <a href="BoardList">글목록</a>
          <a href="BoardPage">페이지목록</a>
      </>
    );
} 

export default Board;

