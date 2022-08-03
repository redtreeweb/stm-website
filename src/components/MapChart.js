import React, { memo, useState } from "react";
import { useInView } from 'react-intersection-observer';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography
} from "react-simple-maps";

import geoUrl from "../data/world-geo.json";

const MapChart = ({ setTooltipContent }) => {
  const [geographyColor, setGeographyColor] = useState('#ffffff');
  const [geographyTransition, setGeographyTransition] = useState('fill 1s');

  const [mapRef] = useInView({
    threshold: .50,
    onChange: (inView) => {
      if (inView) {
        setGeographyColor("#EAA583");
        setTimeout(function(){
          setGeographyTransition('fill, .4s');
        }, 1000);
      }
    }
  });

  return (
    <div data-tip="" ref={mapRef}>
      <ComposableMap projectionConfig={{ scale: 140 }} width={700} height={400}> 
            <Geographies geography={geoUrl}>
              { ({ geographies }) =>
                geographies.map((geo) =>

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
                          fill: geographyColor,
                          outline: "#222222",
                          transition: geographyTransition
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
                          fill: "#ffffff",
                          outline: "#222222"
                        },
                        hover: {
                          fill: "#ffffff",
                          outline: "#222222"
                        },
                        pressed: {
                          fill: "#ffffff",
                          outline: "#222222"
                        }
                    }
                    }
                  />
                )
              }
            </Geographies>
      </ComposableMap>
    </div>
  );
};

export default memo(MapChart);
