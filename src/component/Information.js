import React, { useEffect, useState } from 'react';
import {Button, Container, Grid, TextField, Typography,} from "@mui/material";
import { API_BASE_URL } from "../config/api-config";

const Information = () => {

// 회원 입력 정보 상태관리
const [user, setUser] = useState({
    id: localStorage.getItem("LOGIN_USERID"),
    username: localStorage.getItem("LOGIN_USERNAME"),
    address: localStorage.getItem("LOGIN_USER_ADDRESS"),
});

useEffect(() => {

    fetch(API_BASE_URL + '/auth/find?email=' + localStorage.getItem('LOGIN_USER_EMAIL'))
        .then(res => res.json())
        .then(findUser => {
            console.log('findUser:', findUser);
            setUser(findUser);
        });
}, []);

return (
    <Container component="main" maxWidth="xs" style={{ marginTop: "70px" }}>
        <form noValidate>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                        <Typography component="h1" variant="h5" fontSize={18}>
                            나의 정보
                        </Typography>
                        <div>
                        <Button size="small" style={{bottom :"6px",color : "#818589"}} href="/Mainpage">메인 페이지로</Button>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        autoComplete="fname"
                        name="username"
                        variant="outlined"
                        ReadOnly
                        fullWidth
                        id="username"
                        //label="유저 이름"
                        autoFocus
                        //onChange={nameHandler}
                        value={user.username}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        ReadOnly
                        fullWidth
                        name="address"
                        //label="주소"
                        type="text"
                        id="address"
                        autoComplete="current-address"
                        value={user.address}
                    />
                </Grid>
                <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            ReadOnly
                            fullWidth
                            id="email"
                            //label="이메일 주소"
                            name="email"
                            autoComplete="email"
                            value={user.email}
                        />
                        </Grid>
                <Grid item xs={12}>
                    <Button fullWidth variant="outlined" style={{color : "black", marginTop:'20px'}} a href='/Update'>
                    나의정보 수정하러 가기 
                    </Button>
                </Grid>
            </Grid>
        </form>
    </Container>
)
}
    


export default Information;