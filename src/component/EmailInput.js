import React, {useState} from "react";
import { Container,Box, TextField,Grid,Link,Typography} from "@mui/material";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { API_BASE_URL } from "../config/api-config";

const EmailInput = () => {

        // 회원 입력 정보 상태관리
        const [user, setUser] = useState({
            email: '',

        });
        // 검증 메시지 상태관리
        const [msg, setMsg] = useState({
        email: '',

        });
        // 검증 완료 여부 상태관리
        const [validate, setValidate] = useState({
            email: false,

        });

     // 이메일 중복확인 서버통신
     const checkEmail = (email) => {

        fetch(`${API_BASE_URL}/auth/check?email=${email}`)
            .then(res => res.json())
            .then(flag => {
                let message;
                if (flag) {
                    message = '등록된 이메일입니다.';
                    setValidate({...validate, email: true});
                } else {
                    message = '등록되지 않은 이메일입니다..';
                    setValidate({...validate, email: false});
                }
                setMsg({...msg, email: message});
            });
    };


      // 이메일 입력 검증
    const emailHandler = (e) => {
        const emailRegex = /^[a-z0-9\.\-_]+@([a-z0-9\-]+\.)+[a-z]{2,6}$/;

        let message;
        if (!e.target.value) {
            message = '이메일은 필수값입니다!';
            setValidate({...validate, email: false});
        } else if (!emailRegex.test(e.target.value)) {
            message = '이메일 형식이 아닙니다!';
            setValidate({...validate, email: false});
        } else {
            checkEmail(e.target.value);
        }
        setMsg({...msg, email: message});
        setUser({...user, email: e.target.value})
    };

    // 상태변수 validate내부값이 모두 true인지 확인
    const isValid = () => {
        for (let key in validate) {
            if (!validate[key]) return false;            
        }
        return true;
    };

     // 회원가입 처리 이벤트
    const SuccessHandler = e => {

        e.preventDefault();

        // 회원입력정보를 모두 읽어서 서버에 요청

        if(isValid()) { // validate값이 모두 true일 경우
            fetch(API_BASE_URL+'/auth/mailConfirm', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            }).then(res => {
                if (res.status === 200) {
                    alert('메일이 전송되었습니다!!');
                    window.location.href='/login';
                } else {
                    alert('서버에 문제가 생겼습니다. 다음에 다시 시도하세요!');
                }
            })
        } else {
            alert('입력란을 다시 확인하세요!');
        }
    };


    return(

        <Container component="main" maxWidth="xs" style={{ marginTop: "70px" }}>
        <form noValidate onSubmit={SuccessHandler}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <div style={{display:'flex', justifyContent:'space-between', marginBottom : "10px"}}>
                        <Typography component="h1" variant="h5" fontSize={15}>
                            비밀번호 재발급 
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        autoComplete="fname"
                        name="email"
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="이메일"
                        autoFocus
                        onChange={emailHandler}
                    />
                    <span style={validate.email ? {color:'green'} : {color:'red'}}>{msg.email}</span>
                </Grid>
                <Stack direction="row" spacing={9}>
        <Button type="submit"style={{ marginTop: "10px" }}> 비밀번호 재발급</Button>
    </Stack>
            </Grid>
        </form>
    </Container>
    );
}

export default EmailInput;
