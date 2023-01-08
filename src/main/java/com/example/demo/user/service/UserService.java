package com.example.demo.user.service;

import com.example.demo.user.dto.UserRequestDTO;
import com.example.demo.user.entity.UserEntity;
import com.example.demo.user.entity.UserPasswordEntity;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.example.demo.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.mail.MessagingException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletResponse;
import java.io.UnsupportedEncodingException;
import java.util.Random;


@Service
@Slf4j
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder encoder;


    // 회원가입 기능

    public UserEntity createServe(final UserEntity userEntity) throws RuntimeException {
        if (userEntity == null || userEntity.getEmail() == null) {
            throw new RuntimeException("Invalid args !");
        }

        //패스워드 인코딩
        String rawPw = userEntity.getPassword();
        userEntity.setPassword(encoder.encode(rawPw));


        boolean flag = userRepository.register(userEntity);

        return flag ? getByCredential(userEntity.getEmail()) : null;
    }

    public UserEntity getByCredential(String email) {
        return userRepository.findUserByEmail(email);
    }

    // 로그인 검증 메서드
    public UserEntity validateLogin(final String email, String password) {

        // 회원가입 여부
        UserEntity user = getByCredential(email);

        if (user == null) throw new RuntimeException("가입된 회원이 아닙니다");

        // 패스워드 일치 여부
        if (!encoder.matches(password, user.getPassword())) {
            throw new RuntimeException("비밀번호가 틀렸습니다");
        }
        return user; // 로그인 성공 시 회원정보 리턴
    }

    // 이메일 중복 체크
    public boolean isDuplicate(String email) {
        return userRepository.existsByEmail(email);
    }

    // 회원정보 수정
    public boolean updateUser(UserEntity entity) {

        log.info("userservice에 전달된 값: --- {}", entity);

        //패스워드 인코딩
        String rawPw = entity.getPassword();
        entity.setPassword(encoder.encode(rawPw));
        boolean flag = userRepository.updateUser(entity);
        log.info("service flag - {}", flag);

        return flag;

    }


    // 패스워드 수정
    public boolean updatePwd(UserPasswordEntity pwdEntity) {
        //패스워드 인코딩
        String rawPw = pwdEntity.getPassword();
        pwdEntity.setPassword(encoder.encode(rawPw));

        boolean flag = userRepository.updatePwd(pwdEntity);
        log.info("service flag - {}, flag");

        return flag;

    }


}
