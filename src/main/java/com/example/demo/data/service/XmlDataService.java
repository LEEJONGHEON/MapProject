package com.example.demo.data.service;

import com.example.demo.data.entity.XmlDataEntity;
import com.example.demo.data.repository.XmlDataRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.w3c.dom.Element;

import java.util.ArrayList;
import java.util.Arrays;

@Service
@Slf4j
@RequiredArgsConstructor
public class XmlDataService {
    private final XmlDataRepository xmlDataRepository;

    public XmlDataEntity parseAllData(Element element) {
        ArrayList<String> tagList = new ArrayList<String>(
                Arrays.asList("c_YeonBeon", "c_SiDo", "c_SiKunKu", "c_EubMyeonDong"
                        , "c_DongRi", "c_KyeongDo", "c_WiDo", "c_KuYeokKuBun", "c_JangSo"));

        ArrayList<String> dataList = new ArrayList<String>();
        for (String tag : tagList) {
            dataList.add(element.getElementsByTagName(tag).item(0).getTextContent());
        }
        xmlDataRepository.uploadData(new XmlDataEntity(dataList));
        return new XmlDataEntity(dataList);
    }

}
