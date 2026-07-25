import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import  {technologies} from '../constants';
import React, { useState } from "react";





const Tech = () => {
  const [hoveredTechnology, setHoveredTechnology] = useState(null);

  const handleMouseEnter = (technologyName) => {
    setHoveredTechnology(technologyName);
  };

  const handleMouseLeave = () => {
    setHoveredTechnology(null);
  };

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div
          className="w-28 h-28"
          key={technology.name}
          onMouseEnter={() => handleMouseEnter(technology.name)}
          onMouseLeave={handleMouseLeave}
        >
          <BallCanvas icon={technology.icon} />
          {hoveredTechnology === technology.name && (
            <div className="w-28 h-28">{technology.name}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech,"");