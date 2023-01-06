package com.example.demo.board.service;


import com.example.demo.board.dto.FindAllDTO;
import com.example.demo.board.dto.BoardDto;
import com.example.demo.board.entity.Board;
import com.example.demo.board.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class BoardService {

    private final BoardRepository repository;

    public FindAllDTO findAllServ() {
        return new FindAllDTO(repository.findAll());
    }

    public FindAllDTO createServ(final Board newBaord) {

        if (newBaord == null) {
            log.warn("newBaord cannot be null!");
            throw new RuntimeException("newBaord cannot be null!");
        }

        boolean flag = repository.save(newBaord);
        if (flag) log.info("새로운 게시글 [Id: {}]이 저장되었습니다.", newBaord.getId());

        return flag ? findAllServ() : null;
    }

    public FindAllDTO deleteServ(String id) {

        int x = 10, y = 20;
//        System.out.println(false & y++ == 21);


        boolean flag = repository.remove(id);

        // 삭제 실패한 경우
        if (!flag) {
            log.warn("delete fail!! not found id [{}]", id);
            throw new RuntimeException("delete fail!");
        }
        return findAllServ();
    }



    public BoardDto findOneServ(String id) {

        Board BoaRd = repository.findOne(id);
        log.info("findOneServ return data - {}", BoaRd);


        return BoaRd != null ? new BoardDto(BoaRd) : null;
    }

    public FindAllDTO update(Board BoaRd) {

        boolean flag = repository.modify(BoaRd);

        return flag ? findAllServ() : new FindAllDTO();
    }

}
