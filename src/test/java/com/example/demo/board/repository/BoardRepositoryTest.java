package com.example.demo.board.repository;

import com.example.demo.board.entity.Board;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class BoardRepositoryTest {

    @Autowired
    BoardRepository repository;

    @Test
    @DisplayName("특정 할일 데이터를 수정해야 한다")
    void modifyTest() {
        // given
        Board board = new Board();
        board.setTitle("하하호호 수정하기");
        board.setContents("2번 수정하기");
        board.setWriter("2번 수정하기");
        board.setPasswd("2번 수정하기");
        board.setDeleteYn(true);
        board.setId("da35695c-0832-4100-907d-f8794a395dc3");


        // when
        boolean flag = repository.modify(board);

        // then
        assertTrue(flag);
    }

    @Test
    @DisplayName("저장소에서 목록을 조회했을 때 할 일의 개수가 3개여야 한다.")
    void findAllTest() {
        List<Board> boardList = repository.findAll();
        assertEquals(3, boardList.size());
        assertNotNull(boardList);
    }

    @Test
    @DisplayName("아이디가 2번인 할일 데이터를 조회했을 때 그 작성자 이름이 박영희이어야 한다.")
    void findOneTest() {
        // given
        String id = "bd2eb46d-2d91-41fa-8eec-915b597b1a79";

        // when
        Board Board = repository.findOne(id);

        // then
        assertEquals("작성자1", Board.getWriter());
        assertFalse(Board.isDeleteYn());

    }

    @Test
    @DisplayName("1번 할일을 삭제한 후 다시 조회했을 때 null이 나와야 한다.")
    void removeTest() {
        // given
        String  id = "bd2eb46d-2d91-41fa-8eec-915b597b1a79";

        // when
        boolean flag = repository.remove(id);
        Board board = repository.findOne(id);

        // then
        assertTrue(flag);
        assertNull(board);
        assertEquals(2, repository.findAll().size());
    }

    @Test
    @DisplayName("새로운 4번 할일을 등록했을 때 전체목록의 개수가 3개여야 한다.")
    void saveTest() {
        // given
        Board newBoard = new Board("새로추가4", "추가된4번째", "김김김", "패스워드4");


        // when
        boolean flag = repository.save(newBoard);

        List<Board> toDoList = repository.findAll();

        // then
        assertTrue(flag);
        assertEquals(3, toDoList.size());
    }
}