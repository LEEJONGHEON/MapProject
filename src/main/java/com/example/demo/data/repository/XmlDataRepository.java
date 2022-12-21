package com.example.demo.data.repository;

import com.example.demo.data.entity.XmlDataEntity;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface XmlDataRepository {

    //DB에 데이터 넣기
     boolean uploadData(XmlDataEntity xmlDataEntity);
}
