package com.example.demo.user.entity;

import com.example.demo.user.dto.UserRequestPwdDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.UUID;

@Setter
@Getter
@ToString
@AllArgsConstructor
public class UserPasswordEntity {

    private String id;
    private String email;
    private String password;

    {
        this.id = UUID.randomUUID().toString();
    }

    public UserPasswordEntity(UserRequestPwdDTO pwdDTO) {


        this.id = UUID.randomUUID().toString();

        this.email = pwdDTO.getEmail();
        this.password = pwdDTO.getPassword();


    }
}