import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./NasaEonetMap.css";

const NasaEonetMap = () => {
  const [loading, setLoading] = useState(false);
  const markersLayer = L.layerGroup();

  const fetchAndFilterEvents = async (categoryId = "") => {
    const url = categoryId
      ? `https://eonet.gsfc.nasa.gov/api/v2.1/events?category=${categoryId}`
      : "https://eonet.gsfc.nasa.gov/api/v2.1/events";

    setLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      plotEonetEvents(data.events);
    } catch (error) {
      console.error("Failed to fetch events:", error);
      alert("Error fetching event data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const plotEonetEvents = (events) => {
    markersLayer.clearLayers();

    events.forEach((event) => {
      if (event.geometries && event.geometries.length > 0) {
        const coords = event.geometries[0].coordinates;
        const category = event.categories[0].title;
        const color = getCategoryColor(category);

        const marker = L.circleMarker([coords[1], coords[0]], {
          radius: 10,
          fillColor: color,
          color: color,
          weight: 1,
          fillOpacity: 0.8,
        }).addTo(markersLayer);

        marker.bindPopup(`
          <strong>${event.title}</strong><br>
          <em>${category}</em><br>
          <a href="${event.link}" target="_blank">More Info</a>
        `);
      }
    });
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "Wildfires":
        return "red";
      case "Severe Storms":
        return "blue";
      case "Volcanoes":
        return "orange";
      case "Floods":
        return "green";
      case "Droughts":
        return "yellow";
      default:
        return "gray";
    }
  };

  useEffect(() => {
    const map = L.map("map").setView([0, 0], 2);

    L.tileLayer(
      `https://api.maptiler.com/maps/satellite/{z}/{x}/{y}.jpg?key=KLgMWcuAyw4LimVIMxUB`,
      {
        tileSize: 512,
        zoomOffset: -1,
        minZoom: 1,
        attribution:
          '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
        crossOrigin: true,
      }
    ).addTo(map);

    L.control.scale().addTo(map); // Add scale control to the map
    markersLayer.addTo(map);

    fetchAndFilterEvents();

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="nasa-eonet-map">
      <div id="map"></div>
      <div className="">
        {/* <h3>NASA EONET Events</h3>
        <p>Select a category to filter events:</p> */}
        {/* <select
          id="category-select"
          onChange={(e) => fetchAndFilterEvents(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="8">Wildfires</option>
          <option value="10">Severe Storms</option>
          <option value="12">Volcanoes</option>
          <option value="15">Floods</option>
          <option value="16">Droughts</option>
        </select> */}
      </div>
      {loading && <div className="loading">Loading data...</div>}
      <div className="legend">
        <strong>Event Categories</strong>
        <div>
          <span style={{ background: "red" }}></span>Wildfires
        </div>
        <div>
          <span style={{ background: "blue" }}></span>Severe Storms
        </div>
        <div>
          <span style={{ background: "orange" }}></span>Volcanoes
        </div>
        <div>
          <span style={{ background: "green" }}></span>Floods
        </div>
        <div>
          <span style={{ background: "yellow" }}></span>Droughts
        </div>
      </div>
    </div>
  );
};

export default NasaEonetMap;
