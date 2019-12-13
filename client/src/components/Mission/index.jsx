import React from "react";
import "./style-mission.css";
import mission1 from "../Mission/IMG/mission1.png";
import mission2 from "../Mission/IMG/mission2.png";
import mission3 from "../Mission/IMG/mission3.png";

function Mission() {
  return (
    <>
      <h2
        className="mission-header"
        data-aos="zoom-in-down"
        data-aos-duration="2000"
      >
        <p className="paragraph">~ What is Perfect Pub? ~</p>
      </h2>
      <div className="container">
        <div
          className="card-one"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="card-body-one">
            <img
              alt=""
              width={150}
              height={150}
              src={mission1}
              className="img-mission"
            ></img>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              deserunt, rerum, esse architecto necessitatibus vero laboriosam
              vitae ullam corporis nemo officia, rem distinctio ad. Libero
              consectetur facere quam possimus illo!
            </p>
          </div>
        </div>
        <div className="card-one" data-aos="fade-up" data-aos-duration="1000">
          <div className="card-body-one">
            <img
              alt=""
              width={150}
              height={150}
              src={mission2}
              className="img-mission"
            ></img>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              assumenda dignissimos aperiam doloremque! Odit, rem enim ipsam
              distinctio odio recusandae nesciunt rerum, cumque molestiae
              quidem, dolor voluptatibus officia natus esse.
            </p>
          </div>
        </div>
        <div className="card-one" data-aos="fade-left" data-aos-duration="1000">
          <div className="card-body-one">
            <img
              alt=""
              width={150}
              height={150}
              src={mission3}
              className="img-mission"
            ></img>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
              accusamus fugiat accusantium dolorem. Cupiditate tempora ducimus
              in non, odit voluptatibus, possimus illum veniam laudantium eum et
              voluptates architecto quia pariatur?
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mission;
