import { useState } from "react";
import React from "react";

export const Contact = (props) => {
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Event Venue</h2>
                <p>
                  AFF 2024 will be held at the beautiful and luxurious Lewisville Lake Park 600 Sandy Beach Rd, Lewisville, TX 75077.
                </p>
              </div>

            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  {/* <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2024 African Food Festival. 
          </p>
        </div>
      </div>
    </div>
  );
};
