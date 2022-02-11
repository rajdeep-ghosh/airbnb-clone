import { useState } from "react";
import { getCenter } from "geolib";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { LocationMarkerIcon } from "@heroicons/react/solid";

function Map({ searchData }) {
  // Transform searchData into desired format
  const coords = searchData.map((data) => ({
    latitude: data.coordinate.lat,
    longitude: data.coordinate.lon,
  }));

  // Get center coordinate
  const center = getCenter(coords);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  const [selectedLocation, setSelectedLocation] = useState({});

  return (
    <section className="hidden lg:block flex-1 max-w-[600px]">
      <ReactMapGL
        mapStyle="mapbox://styles/rajdeepghosh/ckyvahwvx002u15ph3jhx5l86"
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        {searchData.map((data) => (
          <div key={data.id}>
            <Marker longitude={data.coordinate.lon} latitude={data.coordinate.lat}>
              <LocationMarkerIcon
                onClick={() =>
                  setSelectedLocation({
                    lat: data.coordinate.lat,
                    long: data.coordinate.lon,
                    title: data.name,
                  })
                }
                className="h-7 animate-bounce cursor-pointer text-airbnb_red"
                aria-label="click-pin"
              />
            </Marker>
            
            {selectedLocation.lat === data.coordinate.lat && (
              <Popup
                closeOnClick={true}
                onClose={() => setSelectedLocation({})}
                latitude={selectedLocation.lat}
                longitude={selectedLocation.long}
              >
                {selectedLocation.title}
              </Popup>
            )}
          </div>
        ))}
      </ReactMapGL>
    </section>
  );
}

export default Map;
