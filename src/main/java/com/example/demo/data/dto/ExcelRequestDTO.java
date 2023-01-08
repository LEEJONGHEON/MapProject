package com.example.demo.data.dto;

import lombok.*;

@Setter
@Getter @ToString
@NoArgsConstructor
@AllArgsConstructor
public class ExcelRequestDTO {

    String search;
    String type;

    int count;
}
