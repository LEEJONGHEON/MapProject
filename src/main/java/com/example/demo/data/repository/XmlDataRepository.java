package com.example.demo.data.repository;

import com.example.demo.data.entity.XmlDataEntity;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface XmlDataRepository {

    //XML파일 읽어서 DB에 데이터 넣기
     boolean uploadData(XmlDataEntity xmlDataEntity);
}
