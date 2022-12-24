import { useEffect, useState } from "react";
import { API_BASE_URL } from "../config/api-config";

const Aedsearch = () => {
    const [search,setSearch] = useState('');
    const [type, setType] = useState('');
    const [result, setResult] = useState([{}]);
    useEffect(() => {
        fetch(`${API_BASE_URL}/excel/search`, {
            method : 'POST',
            headers: {
            'Content-type' : 'application/json',
            },
            body: JSON.stringify({ search : search,
            type: type})
        })
        .then(res => {
            if (res.status === 200) {
                return res.json()
            } else {
                setResult([{}]);
            }
        })
        .then(json => {
            console.log(json);
            setResult(json);
        })



    }, [search])
    return (
        
        <input placeholder="검색어를 입력해주세요"/>
    );
}

export default Aedsearch;