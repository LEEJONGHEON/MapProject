package com.example.demo.board.dto;

import com.example.demo.board.entity.Board;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Setter @Getter @ToString
@NoArgsConstructor
@AllArgsConstructor
public class FindAllDTO {

    private int count; // 게시글 목록의 개수
    private List<BoardDto> boards; // 게시글 목록

    public FindAllDTO(List<Board> boardList) {
        this.count = boardList.size();
        this.convertDtoList(boardList);
    }

    public void convertDtoList(List<Board> boardList) {
        List<BoardDto> dtos = new ArrayList<>();

        for (Board BoaRd : boardList) {
            dtos.add(new BoardDto(BoaRd));
        }
        this.boards = dtos;
    }
}
