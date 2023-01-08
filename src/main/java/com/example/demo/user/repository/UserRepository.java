package com.example.demo.user.repository;

import com.example.demo.user.entity.UserEntity;
import com.example.demo.user.entity.UserPasswordEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.apache.catalina.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.UUID;

@Mapper
public interface UserRepository {

    // 이메일주소를 통해 회원정보 조회하기
    UserEntity findUserByEmail(String email);

    // 이메일 주소가 중복인지 조회하기
    boolean existsByEmail(String email);

    // 회원 가입하기
    boolean register(UserEntity entity);

    // 회원정보 수정하기
    boolean updateUser(UserEntity entity);

    // 비밀번호 수정하기
    boolean updatePwd(UserPasswordEntity pwdEntity);

}
