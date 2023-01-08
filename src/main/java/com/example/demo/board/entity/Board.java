package com.example.demo.board.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Setter @Getter @ToString
@AllArgsConstructor

public class Board {

    private int count;           // 게시글 목록의 개수
    private String id;                  // PK
    private String title;               // 제목
    private String contents;             // 내용
    private String writer;              // 작성자(식별자)
    private String passwd;              // 패스워드
    private boolean deleteYn;           // 삭제 여부 (기본값 false)
    private Date createdDate;           // 생성일시 (기본값 0000-00-00 00:00:00)
    private Date modifiedDate;          // 최종 수정일시 (기본값 0000-00-00 00:00:00)


    // 일련번호
    private static long seq;


    public Board() {
        this.id = UUID.randomUUID().toString();
    }

    public Board(String title, String content, String writer, String passwd) {
        this();
        this.title = title;
        this.contents = content;
        this.writer = writer;
        this.passwd = passwd;
    }
}
