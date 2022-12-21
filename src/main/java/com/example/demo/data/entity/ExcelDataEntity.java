package com.example.demo.data.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;

@Getter @Setter @ToString
@AllArgsConstructor
public class ExcelDataEntity {
    /*
    no
    설치장소 place
    전화번호 phoneNumber
    도로명주소 roadAddr
    지번주소 jibyeonAddr
     */
    private int no;
    private String place;
    private String phoneNumber;
    private String roadAddr;
    private String jibyeonAddr;

    public ExcelDataEntity(ArrayList<String> list) {
        this.no = Integer.parseInt(list.get(0));
        this.place = list.get(1);
        this.phoneNumber = list.get(2);
        this.roadAddr = list.get(3);
        this.jibyeonAddr = list.get(4);
    }
}
