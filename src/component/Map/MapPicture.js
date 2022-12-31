import { Map, MapMarker, MarkerClusterer } from "react-kakao-maps-sdk";
const  clusterPositionsData = {
    "positions": [
        {
            "lat": 37.27943075229118,
            "lng": 127.01763998406159
        },]
}
const MapPicture = () => {
    return (
        <Map
            center={{lat: 33.450701, lng: 126.570667}}
            style={{width: "1000px", height: "1000px"}}
            level={7}
        >
            <MarkerClusterer
                averageCenter={true}
                minLevel={10}
            >
                {clusterPositionsData.positions.map((pos) => (
                    <MapMarker
                        key={`${pos.lat}-${pos.lng}`}
                        position={pos}
                    />
                ))}
            </MarkerClusterer>
        </Map>
    )
}

export default MapPicture;