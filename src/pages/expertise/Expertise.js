import React, { useState } from 'react';
import './Expertise.css';

const Expertise = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <div className="expertise-section" style={{ marginTop: '100px' }}>
        <div className="container">
          <div className="expertise-text p-2" style={{ width: '60%' }}>
            <h2 className="exp-text exp-heading">Our areas of expertise</h2>
            <p className="exp-text exp-para">
              The supply/distribution of aircraft spare parts, marine spare parts, repair/upgrade/modification services,
              petroleum, oil, lubricants, paints, ground handling/ground support spares, aviation/marine standard raw materials,
              batteries, solar systems.
            </p>

            {showMore ? (
              <>
                <p className="exp-text exp-para">
                  We provide turn-key solutions to ou customers in the commerical and defense industry. Fathoms Maritime
                  International is actively present across the globe with dedicated team members specific to each continent and
                  expertise. With the proven performance and successful execution of projects, we have secured several distribution
                  agreements of all well-recognized OEM's MRO's in Aviation, Marine and Energy Sector.
                </p>

                <p className="exp-text exp-para">
                  Our areas of expertise include the supply/distribution of aircraft spare parts, marine spare parts,
                  repair/upgrade/modification services, petroleum, oil, lubricants, pair ground handling/ground support spares,
                  aviation/marine standard raw materials, batteries, solar systems. Apart from supply chain/distribution, we have
                  agreements with several manufacturers to provide turn-key solutions to commercial and defense customers. We
                  provide custom-made solution based on the customer's requirements.
                </p>
                <button className="exp-btn" onClick={handleToggle}>
                  Read Less
                </button>
              </>
            ) : (
              <button className="exp-btn" onClick={handleToggle}>
                Read More
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
