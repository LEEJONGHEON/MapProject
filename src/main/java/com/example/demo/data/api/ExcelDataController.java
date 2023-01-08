package com.example.demo.data.api;

import com.example.demo.data.dto.ExcelRequestDTO;
import com.example.demo.data.entity.ExcelDataEntity;
import com.example.demo.data.service.ExcelDataService;
import com.fasterxml.jackson.databind.util.JSONPObject;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.tomcat.util.json.JSONParser;
import org.apache.tomcat.util.json.ParseException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequiredArgsConstructor
@RequestMapping("/excel")
@Slf4j
@CrossOrigin
public class ExcelDataController {
    private final ExcelDataService excelDataService;

    @GetMapping("/db")
    public ResponseEntity<?> excelToDB() {
        // local Excel파일 데이터 db에 업로드
        // 보안설정 필요
        ArrayList<ExcelDataEntity> excelDataEntityArrayList = excelDataService.readData();
        if(excelDataEntityArrayList.size() > 0) {
            // 업로드 성공시 성공여부 반환 true
            return ResponseEntity.ok().body(true);
        } else {
            // 업로드 실패시 실패반환
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/search")
    public ResponseEntity<?> searchData(@RequestBody ExcelRequestDTO dto) {
        // 검색어
        String search = dto.getSearch();
        // 도로명 검색 or 지번 검색 front에서 전송
        String type = dto.getType();
        int count = dto.getCount();
        ArrayList<ExcelDataEntity> excelDataEntityArrayList = excelDataService.searchData(search, type, count);
        if (excelDataEntityArrayList.isEmpty()) {
            // 일치하는 데이터가 없을경우
            return ResponseEntity.notFound().build();
        } else {
            // 일치하는 데이터 일단 전부 반환
            return ResponseEntity.ok().body(excelDataEntityArrayList);
        }
    }
}
