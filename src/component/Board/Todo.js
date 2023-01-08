import React, { useState, useEffect } from 'react';

//https://mui.com/material-ui/getting-started/learn/
import {ListItem, ListItemText, 
    InputBase, Checkbox, 
    ListItemSecondaryAction, IconButton} from "@mui/material";
import { DeleteOutline } from '@mui/icons-material';



const Todo = ({ item, remove, update }) => {

    // console.log(item);

    const [itemState, setItemState] = useState(item);

    //    const {id, title, done} = itemState;
    const {count, id, title, contents, writer, passwd, deleteYn} = itemState;
    console.log('itemState:', itemState);

    // 삭제 이벤트 핸들러
    const removeHandler = e => {
        // console.log(item);
        remove(item);
    };

    

    // 체크박스 체인지 이벤트 핸들러
    const checkHandler = e => {
        console.log('삭제버튼 누름');
        setItemState({...itemState, deleteYn: !itemState.deleteYn});
    };

    useEffect(() => {
        update(itemState);
    }, [itemState])

    return (
        <ListItem>
            <Checkbox checked={deleteYn} onChange={checkHandler} />
            <ListItemText>
                <InputBase
                    inputProps={{"aria-label" : "naked"}}
                    type="text"
                    id={id.toString()}
                    name={id.toString()}
                    value={{itemState}}
                    multiline={true}
                    fullWidth={true}
                />
            </ListItemText>


            {/* 삭제 버튼 */}
            <ListItemSecondaryAction>
                <IconButton 
                aria-label="Delete Todo" 
                onClick={removeHandler}>
                    <DeleteOutline/>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>

    );
}

export default Todo;