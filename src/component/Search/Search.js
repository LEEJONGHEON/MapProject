import { useEffect, useState } from "react";
import { API_BASE_URL } from "../../config/api-config";
import ResultTable from "./ResultTable";
const Search = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState([{}]);
    const [type, setType] = useState('시도');
    useEffect(() => {
      fetch(`${API_BASE_URL}/xml/search`, {
        method : 'POST',
        headers: {
          'Content-type' : 'application/json',
        },
        body: JSON.stringify({ search : input,
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
        setResult(json);
      })
      
      
    }, [input]);
    const enterEvent = (e) => {
      if (e.key === 'Enter') {
        setInput(e.target.value);
      }
    }

    const selectType = (e) => {
        setType(e.target.value);
    }
    return (
        <>  검색 옵션 :
            <select onChange={selectType}>
                <option key="시도" value="시도">시도</option>
                <option key="시군구" value="시군구">시군구</option>
                <option key="읍면동" value="읍면동">읍면동</option>
                <option key="구역" value="구역">구역</option>
                <option key="장소" value="장소">장소</option>
            </select>
            장소 검색 : <input placeholder="검색어 입력" onKeyUp={enterEvent}/>
            <ResultTable result={result}/>
        </>
    );
}

export default Search;