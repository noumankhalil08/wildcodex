
import React from 'react';
import Logo1 from './img/part1.png';
import Logo2 from './img/part2.png';
import Logo3 from './img/part3.png';
import Logo4 from './img/part4.png';
import Logo5 from './img/part5.png';

const Partners = () => {
  return (
    <>
    <div className=" container-fluid mt-5 py-5">
    <div className=" mt-5 py-5 background-image4 p-0">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-6 col-sm-4 col-md-2 my-3 partner-item partner-item-1">
            <img src={Logo1} alt="header" className="img-fluid" />
          </div>
          <div className="col-6 col-sm-4 col-md-2 my-3 partner-item partner-item-2">
            <img src={Logo2} alt="header" className="img-fluid" />
          </div>
          <div className="col-6 col-sm-4 col-md-2 my-3 partner-item partner-item-3">
            <img src={Logo3} alt="header" className="img-fluid" />
          </div>
          <div className="col-6 col-sm-4 col-md-2 my-3 partner-item partner-item-4">
            <img src={Logo4} alt="header" className="img-fluid" />
          </div>
          <div className="col-6 col-sm-4 col-md-2 my-3 partner-item partner-item-5">
            <img src={Logo5} alt="header" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Partners;
