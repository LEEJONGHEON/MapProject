package com.example.demo.board.dto;

import com.example.demo.board.entity.Board;
import lombok.*;

import java.util.Date;

@Setter @Getter @ToString
@NoArgsConstructor
@AllArgsConstructor
public class BoardDto {

    private String id;                  // PK
    private String title;               // 제목
    private String contents;             // 내용
    private String writer;              // 작성자
    private String passwd;              // 패스워드
    private boolean deleteYn;           // 삭제 여부
    private Date createdDate;           // 생성일시
    private Date modifiedDate;          // 최종 수정일시


    public BoardDto(Board boarD) {
        this.id = boarD.getId();
        this.title = boarD.getTitle();
        this.contents = boarD.getContents();
        this.writer = boarD.getWriter();
        this.passwd = boarD.getPasswd();
        this.deleteYn = boarD.isDeleteYn();
        this.createdDate = boarD.getCreatedDate();
        this.modifiedDate = boarD.getModifiedDate();
    }
}
