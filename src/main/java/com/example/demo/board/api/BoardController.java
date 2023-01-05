package com.example.demo.board.api;

import com.example.demo.board.dto.FindAllDTO;
import com.example.demo.board.dto.BoardDto;
import com.example.demo.board.entity.Board;
import com.example.demo.board.service.BoardService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@Slf4j
@RequestMapping("/board")
@RequiredArgsConstructor
@CrossOrigin
public class BoardController {

    private final BoardService service;

    // 할 일 목록 전체조회 요청
    @GetMapping("/list")
    public ResponseEntity<?> boards() {
        log.info("/board GET request!");
        return ResponseEntity.ok().body(service.findAllServ());
    }

    // 할 일 목록 등록 요청
    // title, contents, writer, passwd
    @PostMapping("/write")
    public ResponseEntity<?> create(@RequestBody Board newBoard) {

        newBoard.setWriter(newBoard.getWriter());
        log.info("/board POST request! - {}", newBoard);

        try {
            FindAllDTO dto = service.createServ(newBoard);

            if (dto == null) {
                return ResponseEntity.notFound().build();
            }
            return ResponseEntity.ok().body(dto);

        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }

    }

    // 할 일 개별 조회 요청
    // URI : /api/todos/3 : GET  => 3번 할 일만 조회해서 클라이언트에게 리턴
    @GetMapping("/{id}")
    public ResponseEntity<?> findOne(@PathVariable String id) {
        log.info("board/{} GET request!", id);

        if (id == null) return ResponseEntity.badRequest().build();

        BoardDto dto = service.findOneServ(id);

        if (dto == null) return ResponseEntity.notFound().build();

        return ResponseEntity.ok().body(dto);
    }


    // 할 일 삭제 요청
    // URI : /board/id값 : DELETE
    // => 3번 할 일을 삭제 후 삭제된 이후 갱신된 할일 목록 리턴
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable String id) {

        log.info("/board/{} DELETE request!", id);

        try {
            FindAllDTO dtos = service.deleteServ(id);
            return ResponseEntity.ok().body(dtos);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }

    }

    // 할일 수정 요청
    @PutMapping
    public ResponseEntity<?> update(@RequestBody Board toDo) {

        log.info("/board PUT request! - {}", toDo);

        try {
            FindAllDTO dtos = service.update(toDo);
            return ResponseEntity.ok().body(dtos);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }

    }
}
