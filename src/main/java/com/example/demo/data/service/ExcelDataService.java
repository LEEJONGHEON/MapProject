package com.example.demo.data.service;

import com.example.demo.data.entity.ExcelDataEntity;
import com.example.demo.data.repository.ExcelDataRepository;
import jxl.Cell;
import jxl.Sheet;
import jxl.Workbook;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.io.File;
import java.util.ArrayList;

@Service
@Slf4j
@RequiredArgsConstructor
public class ExcelDataService {

    private final ExcelDataRepository excelDataRepository;

    public ArrayList<ExcelDataEntity> readData() {
        File f = new File("data.xls"); // java.io.File
        Workbook wb = null;   // jxl.Workbook

        ArrayList<ExcelDataEntity> excelDataEntityArrayList = new ArrayList<ExcelDataEntity>();
        // a = 17 , b = 5
        try {
            wb = Workbook.getWorkbook(f);
            for (int sheetNum = 0; sheetNum < 17; sheetNum++) {
                Sheet s = wb.getSheet(sheetNum);                            // jxl.Sheet
                for (int rowNum =1; rowNum<9999;rowNum++) {
                    try {
                        ArrayList<String> dataList = new ArrayList<>();
                        for (int cellNum = 1; cellNum < 5; cellNum++) {
                            Cell c = s.getCell(cellNum, rowNum);        // jxl.Cell
                            dataList.add(c.getContents());
                        }
                        ExcelDataEntity excelDataEntity = new ExcelDataEntity(dataList);
                        excelDataRepository.uploadData(excelDataEntity); // 데이터저장
                        excelDataEntityArrayList.add(excelDataEntity);
                    } catch (Exception e) {
                        break; // 읽을 데이터가 더이상 없다면 while문 중지
                    }
                }
            }

        } catch (Exception e) {
            System.out.println("엑셀 파일 읽기 실패 ERR : " + e.getMessage());
        }
        return excelDataEntityArrayList;
    }

    public ArrayList<ExcelDataEntity> searchData(String search) {
        ArrayList<ExcelDataEntity> data =excelDataRepository.searchData(search);
        System.out.println(data);
        return data;
    }
}
