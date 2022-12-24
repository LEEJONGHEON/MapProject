package com.example.demo.data.repository;

import com.example.demo.data.entity.ExcelDataEntity;
import org.apache.ibatis.annotations.Mapper;

import java.util.ArrayList;

@Mapper
public interface ExcelDataRepository {

    //Excel 데이터 읽어서 DB에 저장
    boolean uploadData(ExcelDataEntity excelDataEntity);

    //DB에서 데이터 검색해서 가져오기(count 개수로 가져올 개수정하기)
    ArrayList<ExcelDataEntity> searchData(String search);
}
