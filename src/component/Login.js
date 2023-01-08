import { Container,Box, TextField,Grid,Link,Typography} from "@mui/material";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { API_BASE_URL } from "../config/api-config";
import React from "react";
import { style } from "@mui/system";


    const Login = () => {

    // 로그인 서브밋 이벤트 핸들러
    const submitHandler = e => {

    // html태그가 가진 기본 기능 없애기
    e.preventDefault();


    

    // 1. 이메일 입력란, 패스워드 입력란에 있는 데이터를 얻어온다.

    // 이메일 입력값
    const $email = document.getElementById('email');
    // console.log($email.value);

    // 패스워드 입력값
    const $password = document.getElementById('password');
    // console.log($password.value);

    if ($email.value === '') {
        alert('이메일은 필수야!!');
        return;
    }

        // 서버에 로그인 요청
        fetch(`${API_BASE_URL}/auth/signin`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                email : $email.value,
                password: $password.value
            })
        })
        .then(res => {
            // console.log('res code:', res.status);
            return res.json();
        })
        .then(loginUserData => {
            // console.log(loginUserData);
            if (loginUserData.message) {
                // console.log('로그인 실패');
                alert(loginUserData.message);
            } else {
                //console.log('로그인 성공');

                //로그인 성공시 받은 토큰을 로컬 스토리지에 저장

                localStorage.setItem('ACCESS_TOKEN',loginUserData.token);
                localStorage.setItem('LOGIN_USERNAME',loginUserData.username);
                localStorage.setItem('LOGIN_USERID',loginUserData.id);
                localStorage.setItem('LOGIN_USER_EMAIL',loginUserData.email);
                

               // console.log(loginUserData);


                //수정페이지로 이동
                window.location.href = '/mainpage';

            }
        })
        // 서버가 200번이아닌 오류코드를 보낼경우 실행할 코드
        .catch(err => {
            console.log('err:', err.message);
        })
};



    return(
    <div  style={{ marginTop: "100px" }}>
        <form noValidate autoComplete="off" onSubmit={submitHandler}>
            {/* <Box sx={{'& > :not(style)': { m: 1, width: '45ch' }, }}>    */}
                <Grid container spacing={4}>
                    <Grid item xs = {1}></Grid>
                    <Grid item xs={4} style = {{border : "1px solid black"}}>
                        <Typography component="h1" variant="subtitle1">
                            로그인
                        </Typography>                        
                        <Grid item xs={12} style={{marginBottom:"15px" }}>
                            <TextField id="email" name = "email" label="이메일" variant="outlined" style={{width: "300px"}}/>
                        </Grid>
                        <TextField id="password" name = "password "type = "password" label="비밀번호" variant="filled" style={{width: "300px"}}/>
                        <Stack direction="row" spacing={7} style={{marginTop : "20px" , marginBottom : "20px"}}>
                            <Button type="submit" variant="outlined" style={{color : "black"}} > 로그인 </Button>
                            <Button Link href="/" variant="outlined" size="small" style={{color : "black"}}> 회원가입 </Button>
                            <Button href="/emailInput" variant="outlined" size="small" style={{color : "black"}} >비밀번호 재발급</Button>
                        </Stack>
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={5} style = {{border: "1px solid black"}} >
                    <p>
                    대한심폐소생협회의 다양한 컨텐츠를 즐겨보세요. 
                    <br/>
                    ※ 수료증(회비)발급 및 환불신청은 로그인 후 이용하실 수 있습니다.
                    </p>
                        <Grid  container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="space-around"
                            item xs={12}
                            style = {{marginTop :"40px"}}>                          
                                <img className="heart" alt="heart" src={require('../image/love.png')} style = {{width : "100px"}}/>
                                <img className="movie" alt="movie" src={require('../image/movie.png')} style = {{width : "100px"}}/>
                                <img className="news" alt="news" src={require('../image/news.png')} style = {{width : "100px", marginRight:"20px"}}/>                            
                        </Grid>
                        </Grid>

                </Grid>

            {/* </Box> */}
        </form>
    </div>
    ); 
    };


    export default Login;