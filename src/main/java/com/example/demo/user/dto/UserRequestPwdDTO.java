package com.example.demo.user.dto;

import lombok.*;

@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class UserRequestPwdDTO {

    private String id;
    private String email;
    private String password;
    private String username;
    private String address;
}