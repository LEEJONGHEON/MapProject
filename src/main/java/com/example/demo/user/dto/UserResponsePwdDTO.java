package com.example.demo.user.dto;

import com.example.demo.user.entity.UserPasswordEntity;
import lombok.*;

@Setter
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor

public class UserResponsePwdDTO {

    private String password;

    public UserResponsePwdDTO (UserPasswordEntity pwdEntity) {
        this.password = pwdEntity.getPassword();
    }

}
