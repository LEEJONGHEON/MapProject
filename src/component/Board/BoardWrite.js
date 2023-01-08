import React, { useState, useRef } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Alert } from "@mui/material";


const BoardWrite = ({add}) => {


    const [item, setItem] = useState({
        title : '',
        contents : '',
        writer : '',
        passwd : ''
    });

    // 입력버튼 클릭 이벤트핸들러
    const TchangeHandler = e => {
        setItem({
            title: e.target.value});
    };
    const CchangeHandler = e => {
        setItem({
            contents: e.target.value});
    };
    const WchangeHandler = e => {
        setItem({
            twriter: e.target.value});
    };

    const PchangeHandler = e => {
        setItem({
            passwd: e.target.value});
    };

    const homeHandler = e => {
        window.location.href='/Board';
    };
    
    // 전송이벤트
    const submitHandler = e => {

        e.preventDefault(); 

        const $writer = document.getElementById('writer');
        const $passwd = document.getElementById('passwd');
        const $title = document.getElementById('title');
        const $contents = document.getElementById('contents');
        // console.log($password.value);

        fetch('http://localhost:8181/board/write', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify ({
                writer : $writer.value,
                passwd: $passwd.value,
                title: $title.value,
                contents: $contents.value
             })
        })
        .then(res => res.json())
        .then(json => {
            console.log(json);
            // setItemList(json.todos);
            window.location.href='/Board';
        });
    };


    return(
      <>
       <Form className="boardWrite">
            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>제목</Form.Label>
                <Form.Control 
                 id="title"
                 placeholder="제목입력" 
                 onChange={TchangeHandler}
                 value={item.title} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>내용</Form.Label>
                <Form.Control 
                    id="contents"
                    placeholder="내용입력"
                    as="textarea"
                    onChange={CchangeHandler}
                    value={item.contents} 
                    style={{ height: '200px' }}/>
                <FloatingLabel controlId="floatingTextarea2" >
                </FloatingLabel>            
            </Form.Group>
 
            {/* 파일업로드 */}
            {/* <Form.Group controlId="formFile" className="mb-3">
              <div className="thumbnail-box" onClick={fileClickHandler}>
                <img 
                    src={imgFile ? imgFile : require("../../assets/img/image-add.png")} 
                    alt="프로필 썸네일" 
                />
                </div> */}
                   {/* lavel로 input연결하기 / for로 아이디 입력 */}
                    {/* <label className="singup-img-label" htmlFor="profileImg">프로필 이미지 추가</label>
                    <input 
                        id="profileImg"
                        type="file" 
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={showImageHandler}
                         ref={$fileInput}
                    />
                <Form.Label>사진첨부(*선택)</Form.Label>
                <Form.Control type="file" />
            </Form.Group> */}
 
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>작성자</Form.Label>
                <Form.Control 
                id = "writer"
                type="text" 
                placeholder="작성자" 
                onChange={WchangeHandler}
                value={item.writer} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>비밀번호</Form.Label>
                <Form.Control 
                id="passwd"
                type="password" 
                placeholder="4자리 이상 입력" 
                onChange={PchangeHandler}
                value={item.passwd} />
                </Form.Group>
            </Row>
          
            <Button variant="primary" type="submit"  onClick={submitHandler} >
                등록
            </Button>{' '}
            <Button variant="primary" type="submit" onClick={homeHandler}>
                취소
            </Button>

        </Form>
    </>

    );
}

export default BoardWrite;