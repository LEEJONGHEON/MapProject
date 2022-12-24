// 게시판 추가

import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../config/api-config";

const Board = () => {

    return (
        <>
          <button onclick="saveReq()">글작성</button>
          <a href="http://localhost:8090/board/save">글작성(링크)</a>
          <button onclick="listReq()">글목록</button>
          <button onclick="pagingReq()">페이징목록</button>

        </>
    );
} 

export default Board;
