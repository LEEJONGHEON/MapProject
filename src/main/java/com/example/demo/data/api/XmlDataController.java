package com.example.demo.data.api;

import com.example.demo.data.dto.XmlRequestDTO;
import com.example.demo.data.entity.XmlDataEntity;
import com.example.demo.data.service.XmlDataService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.FileUtils;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.w3c.dom.*;

import java.io.*;
import java.net.URL;
import java.net.URLConnection;
import java.util.ArrayList;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import org.w3c.dom.Document;
import org.xml.sax.SAXException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/xml")
@Slf4j
@CrossOrigin
public class XmlDataController {

    private final XmlDataService xmlDataService;


    @GetMapping
    public void getData() throws Exception {
        // api로 부터 데이터받아와서 xml 파일로 저장
        URL url = new URL("http://apis.data.go.kr/1532000/LIFE_SAVING_EQ_POSITION/list_view?serviceKey=QhSXKeRfEm%2Fta1A%2BlRgrKy31QfXPr%2FEaKwLqugrWFUFIaMDIgbQWkfwWkUO%2Fb9cwEhOVYBzv61ufkkt1SSgnwg%3D%3D&rowsCount=854&startPage=1");
        URLConnection connection = url.openConnection();

        try (InputStream inputStream = connection.getInputStream())
        {
            File file = new File("example.xml");
            FileUtils.copyInputStreamToFile(inputStream, file);
        }
    }

    @GetMapping("/db")
    public void xmlToDB() throws ParserConfigurationException, IOException, SAXException {
        // xml 읽어와서 원하는 데이터만 따로출력
        DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
        DocumentBuilder builder = factory.newDocumentBuilder();
        // xml 파일 읽기
        Document document = builder.parse("example.xml");
        NodeList nodeList = document.getElementsByTagName("content");
        for (int index=0; index < nodeList.getLength(); index++) {
            Node node = nodeList.item(index);
            Element element = (Element) node;
            XmlDataEntity xmlDataEntity = xmlDataService.parseAllData(element);
        }
    }

    @PostMapping("/search")
    public ResponseEntity<?> searchData(@RequestBody XmlRequestDTO dto) {
        // type에 따라 service에서 서로 다른 로직으로 검색진행
        String search = dto.getSearch();
        String type = dto.getType();

        ArrayList<XmlDataEntity> xmlDataEntityArrayList =xmlDataService.searchData(search,type);
        if (xmlDataEntityArrayList.size() == 0) {
            System.out.println("1224");
        }
        if (xmlDataEntityArrayList.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok().body(xmlDataEntityArrayList);
        }
    }


}
