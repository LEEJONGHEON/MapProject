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
        // local Excel 데이터 db에 업로드
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
        // 도로명주소로 검색하기
        // 검색어 search값 Post로 전달
        String search = dto.getRoadAddr();
        ArrayList<ExcelDataEntity> excelDataEntityArrayList = excelDataService.searchData(search);
        System.out.println(excelDataEntityArrayList);
        if (excelDataEntityArrayList.isEmpty()) {
            // 일치하는 데이터가 없을경우
            return ResponseEntity.notFound().build();
        } else {
            // 일치하는 데이터 일단 전부 반환
            return ResponseEntity.ok().body(excelDataEntityArrayList);
        }
    }
}
