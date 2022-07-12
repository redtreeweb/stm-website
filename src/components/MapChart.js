import React, { memo } from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography
} from "react-simple-maps";

import geoUrl from "../data/world-geo.json";

const MapChart = ({ setTooltipContent }) => {
  return (
    <div data-tip="">
      <ComposableMap projectionConfig={{ scale: 140 }} width={700} height={400}>
        {/* <ZoomableGroup center={[0, 0]} zoom={1}> */}
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map(geo => (
                
                  <Geography
                    tabIndex={-1}
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      if (  geo.properties.STMLabel != null ) {
                        const name = ( geo.properties.name != null ) ? geo.properties.name : geo.properties.NAME;
                        const html = '<h4>' + name + '</h4><p>' + geo.properties.STMLabel + '</p>';
                        setTooltipContent( <div dangerouslySetInnerHTML={{__html: html }} /> );
                      }
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}
                    style={
                      geo.properties.STMLabel != null ? {
                        default: {
                          fill: "#FC9867",
                          outline: "#222222"
                        },
                        hover: {
                          fill: "#D94C00",
                          outline: "222222"
                        },
                        pressed: {
                          fill: "#FC9867",
                          outline: "#222222"
                        }
                    } : {
                        default: {
                          fill: "#e7e7e7",
                          outline: "#222222"
                        },
                        hover: {
                          fill: "#e7e7e7",
                          outline: "#222222"
                        },
                        pressed: {
                          fill: "#e7e7e7",
                          outline: "#222222"
                        }
                    }
                    }
                  />
                ))
              }
            </Geographies>
          {/* </ZoomableGroup> */}
      </ComposableMap>
    </div>
  );
};

export default memo(MapChart);
