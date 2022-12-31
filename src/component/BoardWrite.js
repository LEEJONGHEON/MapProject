import React from "react";
import {Grid, Button, Container, Typography, TextField} from "@mui/material";
import { PostAdd } from "@mui/icons-material";



const BoardWrite = () => {


    const submitHandler = e => {

        e.preventDefault(); 

        const $writer = document.getElementById('email');
        const $password = document.getElementById('password');
        const $title = document.getElementById('title');
        const $contents = document.getElementById('contents');
        console.log($password.value);

        fetch('http://localhost:8181', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify ({
                writer : $writer.value,
                password: $password.value,
                title: $title.value,
                contents: $contents.value
             })
        })
        .then(res => res.json())
        .then(json => {
            console.log(json);
            // setItemList(json.todos);
        });
    };

    return(
      <>
        <div className="Board" >
            writer: <input type="text" className="boardWrite" />
            password: <input type="text" className="boardPass" />
            title: <input type="text" className="boardTitle" />
            contents: <textarea className="boardContents" cols="30" rows="10"></textarea> 
            file: <input type="file" className="boardFile"/> 
            <input type="submit" value="글작성"/>
        </div>
    </>

    );
}

export default BoardWrite;