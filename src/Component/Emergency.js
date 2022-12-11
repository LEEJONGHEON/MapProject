import { useState } from "react";
import SearchMap from "./SearchMap";
const Emergency = () => {
    const [query, setQuery] = useState('강남 응급실');
    
    return (
        <div>
            <SearchMap query={query} setQuery={setQuery} type="응급실"/>
        </div>
    );
}

export default Emergency;