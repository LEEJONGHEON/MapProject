package com.example.demo.data.repository;

import com.example.demo.data.entity.ExcelDataEntity;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class ExcelXmlDataRepositoryTest {
    @Autowired
    ExcelDataRepository excelDataRepository;

    @Test
    @DisplayName("테스트")
    void uploadTest() {

        ExcelDataEntity excelDataEntity = new ExcelDataEntity(1, "(유)남도응급환자이송단(구급차 78머6670)",
                "061-434-0129", "전라남도 강진군 강진읍 보은로안길 18 - 1",
                "전라남도 강진군 강진읍 남성리 28번지 21호");

        excelDataRepository.uploadData(excelDataEntity);
    }
}
