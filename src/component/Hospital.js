import { useState } from "react";
import SearchMap from "./SearchMap";

const Hospital = () => {
    const [query, setQuery] = useState('강남 병원');
    
    return (
        <div>
            <SearchMap query={query} setQuery={setQuery} type="병원"/>
        </div>
    );
}

export default Hospital;