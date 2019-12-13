import React from "react";
import "./style-mission2.css";
import bar from "../Mission2/img/bar1.jpg";

function Mission2() {
  return (
    <>
      <div className="paragraph-heading">
        <p className="p-1">Check out our Featured Pubs!</p>
      </div>
      <div className="wrapper3">
        <div class="card">
          <div class="card-image waves-effect waves-block waves-light">
            {/* <img class="activator" src="images/office.jpg"></img> */}
            <img class="activator" src={bar}></img>
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">
              {/* Card Title<i class="material-icons right">more_vert</i> */}
            </span>
            <p>
              <a>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
                deserunt impedit eius aspernatur inventore, recusandae ducimus
                quas nobis perspiciatis praesentium officiis sed minima
                repellat, suscipit similique nihil ipsum. Odit, ad.
              </a>
              <br />
              <hr />
              <a href="#">This is a link</a>
            </p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">
              Card Title<i class="exit right">X</i>
            </span>
            <p>
              Here is some more information about this product that is only
              revealed once clicked on.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">
              {/* Card Title<i class="material-icons right">more_vert</i> */}
            </span>
            <p>
              <a href="#">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam a
                minima neque odit dolorem, distinctio eligendi cum, nulla animi
              </a>
            </p>
          </div>
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src={bar}></img>
          </div>
          {/* <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">
              Card Title<i class="material-icons right">more_vert</i>
            </span>
            <p>
              <a href="#">This is a link</a>
            </p>
          </div> */}
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">
              Card Title<i class="exit right">Close</i>
            </span>
            <p>
              Here is some more information about this product that is only
              revealed once clicked on.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-image waves-effect waves-block waves-light">
            {/* <img class="activator" src="images/office.jpg"></img> */}
            <img class="activator" src={bar}></img>
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">
              {/* Card Title<i class="material-icons right">more_vert</i> */}
            </span>
            <p>
              {/* <a href="#">This is a link</a> */}
              <a>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
                deserunt impedit eius aspernatur inventore, recusandae ducimus
                quas nobis perspiciatis praesentium officiis sed minima
                repellat, suscipit similique nihil ipsum. Odit, ad.
              </a>
              <br />
              <hr />
              <a href="#">This is a link</a>
            </p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">
              Card Title<i class="material-icons right">close</i>
            </span>
            <p>
              Here is some more information about this product that is only
              revealed once clicked on.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mission2;
