// 기본화면:게시판리스트, 

import React, { useEffect, useState } from "react";
// import { API_BASE_URL } from "../../config/api-config";
import Pagination from 'react-bootstrap/Pagination';
import Table from 'react-bootstrap/Table';
import Todo from "./Todo";
import { List, Paper, Container,ListItem, ListItemText, 
  InputBase, Checkbox,ListItemSecondaryAction, IconButton } from '@mui/material';
import BoardWrite from "./BoardWrite";

// export const BASE_URL = 'http://localhost:8181/'; // 임시
const BASE_URL = 'http://localhost:8181/board'; // 임시

const Board = () => {
  
    const [itemList, setItemList] = useState([
  
    ]);
  

    // 추가 처리 함수
    const add = (item) => {
      
        fetch(BASE_URL + `/write`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(item)
        })
        .then(res => res.json())
        .then(json => {
            // console.log(json);
            setItemList(json.boards);
        });
    };
    
    // 삭제요청
    // target: 내가 삭제할 객체, item: 배열에 저장된 객체
    const remove = target => {
        console.log(target);
  
        fetch(BASE_URL + `/${target.id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(json => {
            setItemList(json.boards);
        });
    };
  
    // 수정요청
    const update = (item) => {
      console.log('2:',item);
  
      fetch(BASE_URL, {
          method: 'PUT',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify(item)
      })
      ;
  };
    

    const boardsItems = itemList.map(item => 
    <Todo key={item.id} item={item} remove={remove} update={update} />);
  
    useEffect(() => {
        
      // 게시글 목록 데이터 가져오기
       fetch("http://localhost:8181/board/list")
        .then(res => res.json())
        .then(json => {
            console.log(json.boards);
            setItemList(json.boards);
        });
  
    }, []);
  
  
    return (
   
      <div className="wrapper">
        <Container maxWidth="md">
          <Paper style={{margin: 16}}>
          <Table striped bordered hover size="sm"> 
              <thead>
                <tr>
            
                  {/* <th>글번호</th>  */}
                  <th>제목</th>
                  <th>작성자</th>
                  <th>작성일시</th>
                  <th>선택</th> 
                  <th> 아이콘</th>
                </tr>
              </thead>
              <tbody>
                {
                    itemList.map(item => (
                      <tr>
                       
                        <th>{item.title}</th>
                        <th>{item.writer}</th>
                        <th>{item.createdDate}</th>
                        <Checkbox />
                        <ListItemText>
                      <InputBase
                          // inputProps={{"aria-label" : "naked"}}
                          // type="text"
                          // id={id.toString()}
                          // name={id.toString()}
                          // value={{itemState}}
                          // multiline={true}
                          // fullWidth={true}
                      />
                  </ListItemText>
                        
                    </tr>
                    ))}
                
              </tbody>
          </Table>
         <button>
           <a href="BoardWrite">글작성</a>
         </button>
         
          </Paper>
       </Container>
       
      </div>


    );
} 

export default Board;
