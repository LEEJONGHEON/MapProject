package com.example.demo.data.repository;

import com.example.demo.data.entity.ExcelDataEntity;
import org.apache.ibatis.annotations.Mapper;

import java.util.ArrayList;

@Mapper
public interface ExcelDataRepository {

    //Excel 데이터 읽어서 DB에 저장
    boolean uploadData(ExcelDataEntity excelDataEntity);

    // 도로명 주소 기반으로 데이터 가져오기
    ArrayList<ExcelDataEntity> searchByRoad(String search);

    // 지번 주소 기반으로 데이터 가져오기
    ArrayList<ExcelDataEntity> searchByJibyeon(String search);
}
