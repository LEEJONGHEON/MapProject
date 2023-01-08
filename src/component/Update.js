import React, { useEffect, useState } from "react";
import {Button, Container, Grid, TextField, Typography,} from "@mui/material";
import { isValidDateValue } from "@testing-library/user-event/dist/utils";
import { API_BASE_URL } from "../config/api-config";

const Update = () => { 


 // 회원 입력 정보 상태관리
const [user, setUser] = useState({
    id: localStorage.getItem("LOGIN_USERID"),
    username: localStorage.getItem("LOGIN_USERNAME"),
    
    address: localStorage.getItem("LOGIN_USER_ADDRESS"),
    password: ''
});
// 검증 메시지 상태관리
const [msg, setMsg] = useState({
    username: '',
    address:'',
});
// 검증 완료 여부 상태관리
const [validate, setValidate] = useState({
    username: false,
    address: false,
});



// 회원이름을 입력처리 하는 이벤트 핸들러
const nameHandler = e => {
    // console.log(e.target.value);

    const nameRegex = /^[가-힣]{2,8}$/;

    // 이름이 정확히 쓰여진 이름인가? - 검증
    let message; // 입력 상황 메시지
    if (!e.target.value) { // 유저네임을 
        message = '유저이름을 입력해주세요';
        setValidate({...validate, username: false})
    } else if (!nameRegex.test(e.target.value)) { // 이름은 2~8글자사이 한글로만
        message = '2글자에서 8글자 사이의 한글로 입력해주세요.';
        setValidate({...validate, username: false})
    } else {
        message = '사용 가능한 이름입니다.';
        setValidate({...validate, username: true})
    }

    // console.log(message);
    setMsg({...msg, username: message});

    setUser({ ...user, username: e.target.value })
};

// 주소 입력 검증


const addressHandler = (e) => {
    //console.log(e.target.id);

    const KoreanRegex = /^[가-힣\s]+$/  ;

    let message;
    if(!e.target.value) {
        message = '주소를 입력하세요!';
        
        setValidate({...validate, address: false});
    }else if(!KoreanRegex.test(e.target.value)){
        message = '한글로 입력하세요!';
        setValidate({...validate, address: false});
    }else{
        message='사용가능한 주소입니다!';
        setValidate({...validate, address: true});
    }
    setMsg({...msg, address: message});
    setUser({...user, address: e.target.value})

}


// 상태변수 validate내부값이 모두 true인지 확인
const isValid = () => {
    for (let key in validate) {
        if (validate[key]) return true;            
    }

    return true;
};

// 회원가입 처리 이벤트
const joinHandler = e => {

    e.preventDefault();

    // 회원입력정보를 모두 읽어서 서버에 요청
    console.log('수정 시작!:', user);

    if(isValid()) { // validate값이 모두 true일 경우
        fetch(API_BASE_URL+'/auth/updateUser', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        }).then(res => {
            if (res.status === 200) {
                alert('회원정보가 수정되었습니다!!');
                // 나중에
                //window.location.href='/나의정보보기';
            } else {
                alert('서버에 문제가 생겼습니다. 다음에 다시 시도하세요');
            }
        })
    } else {
        alert('입력란을 다시 확인하세요!');
    }
};

useEffect(() => {

    fetch(API_BASE_URL + '/auth/find?email=' + localStorage.getItem('LOGIN_USER_EMAIL'))
        .then(res => res.json())
        .then(findUser => {
            console.log('findUser:', findUser);
            setUser(findUser);
        });
}, []);

return (
    <Container component="main" maxWidth="xs" style={{ marginTop: "60px" }}>
        <form noValidate onSubmit={joinHandler}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                        <Typography component="h1" variant="h5" fontSize={20}>
                            나의 정보 수정
                        </Typography>                       
                        <Button size="small" href="/pwdUpdate" style={{color : "#818589"}}>비밀번호 변경</Button>                    
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        autoComplete="fname"
                        name="username"
                        variant="outlined"
                        required
                        fullWidth
                        id="username"
                        label="유저 이름"
                        autoFocus
                        onChange={nameHandler}
                        value={user.username}
                    />
                    <span style={validate.username ? {color:'green'} : {color:'red'}}>{msg.username}</span>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="address"
                        //label="주소"
                        type="text"
                        id="address"
                        autoComplete="current-address"
                        onChange={addressHandler}
                        value={user.address}
                    />
                    <span style={validate.address ? {color:'green'} : {color:'red'}}>{msg.address}</span>
                </Grid>
                <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            disabled
                            fullWidth
                            id="email"
                            //label="이메일 주소"
                            name="email"
                            autoComplete="email"
                            value={user.email}
                            helperText="이메일주소는 변경할 수 없습니다"
                        />
                        </Grid>
                <Grid item xs={12}>
                    <Button type="submit" fullWidth variant="outlined" style={{color:'black', marginTop:'20px'}}>
                        회원정보 수정
                    </Button>
                </Grid>
            </Grid>
        </form>
    </Container>
);
};

export default Update;