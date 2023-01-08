package com.example.demo.board.repository;

import com.example.demo.board.entity.Board;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper

public interface BoardRepository {

    // 생성 기능
    boolean save(Board boarD);

    // 목록조회 기능
    List<Board> findAll();

    // 개별조회 기능
    Board findOne(String id);

    //삭제 기능
    boolean remove(String id);

    // 수정 기능 (체크기능, 제목수정기능)
    boolean modify(Board toDo);

}
