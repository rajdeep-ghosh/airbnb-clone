import { useState } from "react";
import { getCenter } from "geolib";
import ReactMapGL from "react-map-gl";

function Map({ searchData }) {
  // Transform searchData into desired format
  const coords = searchData.map((data) => ({
    latitude: data.lat,
    longitude: data.long,
  }));

  // Get center coordinate
  const center = getCenter(coords);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 12,
  });

  return (
    <section className="hidden lg:block flex-1 max-w-[600px]">
      <ReactMapGL
        mapStyle="mapbox://styles/rajdeepghosh/ckyvahwvx002u15ph3jhx5l86"
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      ></ReactMapGL>
    </section>
  );
}

export default Map;
