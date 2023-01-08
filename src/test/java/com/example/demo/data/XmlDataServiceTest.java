package com.example.demo.data;

import com.example.demo.data.service.ExcelDataService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class XmlDataServiceTest {

    ExcelDataService excelDataService;

    @Test
    @DisplayName("엑셀 파일읽기 테스트")
    void readExcel() {
        excelDataService.readData();
    }
}
