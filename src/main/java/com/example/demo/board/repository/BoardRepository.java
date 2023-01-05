package com.example.demo.board.repository;

import com.example.demo.board.entity.Board;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
// 역할: 할 일 데이터를 CRUD한다(생성, 조회, 수정, 삭제)
public interface BoardRepository {

    // 할일 생성 기능
    boolean save(Board boarD);

    // 할일 목록조회 기능
    List<Board> findAll();

    // 할일 개별조회 기능
    Board findOne(String id);

    // 할일 삭제 기능
    boolean remove(String id);

    // 할 일 수정 기능 (체크기능, 제목수정기능)
    boolean modify(Board toDo);

}
