package com.example.demo.data.repository;

import com.example.demo.data.entity.XmlDataEntity;
import org.apache.ibatis.annotations.Mapper;

import java.util.ArrayList;

@Mapper
public interface XmlDataRepository {

    //XML파일 읽어서 DB에 데이터 넣기
     boolean uploadData(XmlDataEntity xmlDataEntity);

     // 시도 기반 검색
     ArrayList<XmlDataEntity> searchBySido(String search);

    // 시군구 기반 검색
    ArrayList<XmlDataEntity> searchBySiKunKu(String search);

    // 읍면동 기반 검색
    ArrayList<XmlDataEntity> searchByEubMyeonDong(String search);

    // 장소 기반 검색
    ArrayList<XmlDataEntity> searchByJangSo(String search);

}
