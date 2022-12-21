import { useState } from "react";
import SearchMap from "./SearchMap";

const Aed = () => {
    const [query, setQuery] = useState('제세동기');
    
    return (
        <div>
            <SearchMap query={query} setQuery={setQuery} type="제세동기"/>
        </div>
    );
}

export default Aed;