import { useState } from "react";
import ReactMapGL from "react-map-gl";

function Map() {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
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
