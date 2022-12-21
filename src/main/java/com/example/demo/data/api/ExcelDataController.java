package com.example.demo.data.api;

import com.example.demo.data.entity.ExcelDataEntity;
import com.example.demo.data.service.ExcelDataService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequiredArgsConstructor
@RequestMapping("/excel")
@Slf4j
@CrossOrigin
public class ExcelDataController {
    private final ExcelDataService excelDataService;

    @GetMapping("/db")
    public void excelToDB() {
        ArrayList<ExcelDataEntity> excelDataEntityArrayList = excelDataService.readData();
    }
}
