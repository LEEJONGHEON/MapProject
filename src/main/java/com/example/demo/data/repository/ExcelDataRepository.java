package com.example.demo.data.repository;

import com.example.demo.data.entity.ExcelDataEntity;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ExcelDataRepository {

    boolean uploadData(ExcelDataEntity excelDataEntity);
}
