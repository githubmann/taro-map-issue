import React, { Component } from "react";
import { CoverView, Map, View } from "@tarojs/components";
import "./index.scss";

const normalCallout = {
  id: 1,
  latitude: 23.098994,
  longitude: 113.32252,
  callout: {
    content: "文本内容",
    color: "#ff0000",
    fontSize: 14,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#000000",
    bgColor: "#fff",
    padding: 5,
    display: "BYCLICK",
    textAlign: "center",
  },
  // label: {
  //   content: 'label 文本',
  //   fontSize: 24,
  //   textAlign: 'center',
  //   borderWidth: 1,
  //   borderRadius: 5,
  //   bgColor: '#fff',
  //   padding: 5
  // }
};

const customCallout1 = {
  id: 2,
  latitude: 23.097994,
  longitude: 113.32352,
  customCallout: {
    anchorY: 0,
    anchorX: 0,
    display: "BYCLICK",
  },
};

const customCallout2 = {
  id: 3,
  latitude: 23.096994,
  longitude: 113.32452,
  customCallout: {
    anchorY: 0,
    anchorX: 0,
    display: "BYCLICK",
  },
};

const customCallout3 = {
  id: 4,
  latitude: 23.095994,
  longitude: 113.32552,
  customCallout: {
    anchorY: 0,
    anchorX: 0,
    display: "BYCLICK",
  },
};

const mapMarkers = [
  normalCallout,
  customCallout1,
  customCallout2,
  customCallout3,
];
const location = {
  latitude: 23.096994,
  longitude: 113.32452,
};

export default function Index() {
  return (
    <Map
      // setting={defaultMapSetting}
      setting={{}}
      // scale={0}
      // includePoints={points}
      markers={mapMarkers}
      latitude={location.latitude}
      longitude={location.longitude}
      showLocation
      style={{ height: "100%", width: "100%" }}
    >
      {mapMarkers.map((item) => (
        <View
          marker-id={item.id}
          className="customCallout"
          key={item.id}
          onClick={() => {}}
        >
          <View className="">导航{item.id}</View>
        </View>
      ))}
    </Map>
  );
}
