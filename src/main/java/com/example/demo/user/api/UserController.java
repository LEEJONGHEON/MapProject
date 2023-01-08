package com.example.demo.user.api;

import com.example.demo.error.ErrorDTO;
import com.example.demo.security.TokenProvider;
import com.example.demo.user.dto.UserRequestDTO;
import com.example.demo.user.dto.UserRequestPwdDTO;
import com.example.demo.user.dto.UserResponseDTO;
import com.example.demo.user.entity.UserEntity;
import com.example.demo.user.entity.UserPasswordEntity;
import com.example.demo.user.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
@Slf4j
@CrossOrigin


public class UserController {

    private final UserService userService;
    private final TokenProvider provider;



    @PostMapping("/signup")
    public ResponseEntity<?> register(@RequestBody UserRequestDTO reqDto) {
        //UserReqDto 서비스에 전송하고 userEntity로 변환

        log.info("/auth/signup POST ! - {}", reqDto);
        try {

            log.info("엔터티 변환!!");
            //userReqDto를 서비스에 전송하고 userEntity로 변환
            UserEntity entity = new UserEntity(reqDto);

            log.info("entity: -- {}", entity);
            UserEntity user = userService.createServe(entity);

            log.info("user: -- {}", user);

            return ResponseEntity.ok().body(new UserResponseDTO(user));

        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }

    }

    // 로그인 요청 처리
    @PostMapping("/signin")
    public ResponseEntity<?> signin(@RequestBody UserRequestDTO dto) {
        log.info("auth/signin POST! - login info : {}", dto);

        try {
            UserEntity user = userService.validateLogin(dto.getEmail(), dto.getPassword());

            // 토큰 생성
            final String token = provider.create(user);

            UserResponseDTO responseDTO = new UserResponseDTO(user);
            responseDTO.setToken(token);

            return ResponseEntity.ok().body(responseDTO);

        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorDTO(e.getMessage()));
        }

    }

    // /auth/check?email=aaa@naver.com
    @GetMapping("/check")
    public ResponseEntity<?> checkEmail(String email) {
        boolean flag = userService.isDuplicate(email);
        log.info("{} 중복 여부 ? - {}, email, flag");
        return ResponseEntity.ok().body(flag);
    }

    // 회원정보 수정 페이지
    @RequestMapping("/userUpdatePage")
    public String userUpdate() {
        return "userUpdate";
    }

    // 회원정보 수정
    @PutMapping("/updateUser")
    public ResponseEntity<?> updateUser(@RequestBody UserRequestDTO dto) {

        log.info("회원정보 수정!! - {}", dto);

        UserEntity entity = new UserEntity(dto);
        entity.setId(dto.getId());
        entity.setPassword("");

        try {
            boolean flag = userService.updateUser(entity);
            log.info("{} 수정 여부 ? - {}", dto.getEmail(), flag);
            return ResponseEntity.ok().body(flag);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }

    }

    @GetMapping("/find")
    public ResponseEntity<?> findUser(String email) {
        UserEntity user = userService.getByCredential(email);
        return ResponseEntity.ok().body(new UserResponseDTO(user));
    }


    @PutMapping("/pwd")
    public ResponseEntity<?> updatePwd(@RequestBody UserRequestPwdDTO pwdDTO) {

        log.info("비밀번호 수정!! - {}", pwdDTO);

        UserPasswordEntity pwdEntity = new UserPasswordEntity(pwdDTO);

        try {
            boolean flag = userService.updatePwd(pwdEntity);
            log.info("{} 수정 여부 ? - {}", pwdEntity.getEmail(), flag);
            return ResponseEntity.ok().body(flag);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @RequestMapping(value = "/logout", method = RequestMethod.GET)
    public ResponseEntity<?> logout(HttpServletRequest request, HttpServletResponse response) throws Exception {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null) {
            new SecurityContextLogoutHandler().logout(request, response, auth);
        }
        return ResponseEntity.ok().body(true);
    }
}

