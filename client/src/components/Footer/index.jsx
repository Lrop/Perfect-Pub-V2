import React from "react";
import "./style-footer.css";
// import bar from "./bar.jpg";

function Footer() {
  return (
    <div className="footer-steeze">
      <footer className="footWrapper">
        <div className="footer-copyright text-center py-3">
          © 2019 Copyright: Perfect Pub
          <a href="#" class="fa fa-facebook"></a>
          <a href="#" class="fa fa-twitter"></a>
          <a href="#" class="fa fa-google"></a>
          <a href="#" class="fa fa-linkedin"></a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
