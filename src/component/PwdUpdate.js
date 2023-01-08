import React, { isValidElement, useState,useEffect } from "react";
import { Container,Box, TextField,Grid,Link,Typography} from "@mui/material";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { API_BASE_URL } from "../config/api-config";
import { fontSize } from "@mui/system";

const PwdUpdate = () => {

const submitHandler = e => {

e.preventDefault();

if(isValid()){           
fetch(API_BASE_URL+'/auth/pwd', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
}).then(res => {
    if (res.status === 200) {
        alert('비밀번호가 수정되었습니다!!');
        window.location.href='/mainpage';
    } else {
        alert('서버에 문제가 생겼습니다. 다음에 다시 시도하세요');
    }
})        
}else{
    alert('비밀번호를 확인해주세요');
}


}

const [user, setUser] = useState({
password: '',
id : localStorage.getItem('LOGIN_USERID'),
username: localStorage.getItem("LOGIN_USERNAME"),
address: localStorage.getItem("LOGIN_USER_ADDRESS"),
email: localStorage.getItem("LOGIN_USER_EMAIL")
});


// 검증 메시지 상태관리
const [msg, setMsg] = useState({
password: '',
pwCheck: ''
});
// 검증 완료 여부 상태관리
const [validate, setValidate] = useState({
password: false,
pwCheck: false
});



// 패스워드 입력값 검증
const passwordHandler = (e) => {

setUser({...user, password: e.target.value})

const pwRegex =  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

let message;
if (!e.target.value) {
    message = '비밀번호는 필수값입니다!';
    setValidate({...validate, password: false});
} else if (!pwRegex.test(e.target.value)) {
    message = '8자리 이상의 영문, 특수문자, 숫자를 포함해주세요!';
    setValidate({...validate, password: false});
} else {
    message = '사용할 수 있는 비밀번호입니다!';
    setValidate({...validate, password: true});
}
setMsg({...msg, password: message});

};

// 비밀번호 확인 입력값 검증
const nowPasswordHandler = (e) => {
console.log(e.target.value);
let message;
if (!e.target.value) {
    message = '새 비밀번호를 확인해주세요!';
    setValidate({...validate, pwCheck: false});
    // setUser({...user, pwCheck: e.target.value});
} else if(e.target.value != user.password) {
    console.log(user.password);
    message = '비밀번호가 다릅니다!';
    setValidate({...validate, pwCheck: false});
    console.log(validate);
} else {
    message = '사용할 수 있는 비밀번호입니다!';
    setValidate({...validate, pwCheck: true});
}
setMsg({...msg, pwCheck: message});
};

useEffect(() => {

fetch(API_BASE_URL + '/auth/pwd')
    .then(res => res.json())
    .then(findUser => {
        console.log('findUser:', findUser);
        setUser(findUser);
    });
}, []);

// 상태변수 validate내부값이 모두 true인지 확인
const isValid = () => {
for (let key in validate) {
if (!validate[key]) return false;            
}

return true;
};

return(
<Container component="main" maxWidth="xs" style={{ marginTop: "60px" }}>
    <form noValidate autoComplete="off" onSubmit={submitHandler} >
        <Box sx={{'& > :not(style)': { m: 1, width: '45ch' }, }}>   
            <Grid container spacing={1}>
                <Grid item xs={12}>                
                    <Typography component="h1" variant="subtitle1" style = {{marginBottom:'15px'}}>
                        비밀번호 변경
                    </Typography>
                </Grid>    
                <TextField id="password" name = "password" type = "password" label="새 비밀번호" variant="outlined" onChange={passwordHandler}style = {{ m: 1, width: '45ch'}} />
                <span style={validate.password ? {color:'green', fontSize:'13px',marginTop:'10px'} : {color:'red', fontSize:'13px', marginTop:'10px'}}>
                    {msg.password}
                </span>
            </Grid>
            <TextField id="nowPassword" name = "nowPassword "type = "password" label="새 비밀번호 확인" variant="filled" onChange={nowPasswordHandler} />
            <div>
                <span style={validate.pwCheck ? {color:'green', fontSize:'13px'} : {color:'red', fontSize:'13px'}}>
                    {msg.pwCheck}
                </span>
            </div>
            <Stack direction="row" spacing={9}>
                <Button type="submit"  fullWidth variant="outlined" style={{color:'black', marginTop:'20px'}}> 
                    변경하기 
                </Button>
                <Button type="reset"  fullWidth variant="outlined" style={{color:'black', marginTop:'20px'}}> 
                    초기화 
                </Button>
            </Stack>
        </Box>
    </form>
</Container>);

}

export default PwdUpdate;