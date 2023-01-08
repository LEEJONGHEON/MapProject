package com.example.demo.user.entity;

import com.example.demo.user.dto.UserRequestDTO;
import com.example.demo.user.dto.UserRequestPwdDTO;
import lombok.*;

import java.util.UUID;

@Setter
@Getter
@ToString
@AllArgsConstructor
public class UserEntity {


    private String id;
    private String username;
    private String email;
    private String address;
    private String password;

    public UserEntity() {
        this.id = UUID.randomUUID().toString();
    }


    //dto를 entity로 변환

    public UserEntity(UserRequestDTO dto) {

        this.id = UUID.randomUUID().toString();

        this.email = dto.getEmail();
        this.username = dto.getUsername();
        this.password = dto.getPassword();
        this.address = dto.getAddress();
    }

}

