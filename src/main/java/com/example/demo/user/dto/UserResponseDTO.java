package com.example.demo.user.dto;

import com.example.demo.user.entity.UserEntity;
import lombok.*;

@Setter@Getter@ToString
@AllArgsConstructor
@NoArgsConstructor
public class UserResponseDTO {

    private String id;
    private String email;
    private String username;
    private String address;
    private String token; //인증토큰

    public UserResponseDTO(UserEntity entity) {
        this.id = entity.getId();
        this.email = entity.getEmail();
        this.username = entity.getUsername();
        this.address = entity.getAddress();
    }
}

