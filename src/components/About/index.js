import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
  return (
    <section className="my-5">
      <div className="splash-container">
        <div className="splash">
          <h1 className="splash-head">ABOUT ME</h1>
          <p className="splash-subhead">
            High energy and outgoing with an exceptional work ethic and
            dedication. My work experience has taught me to communicate clearly,
            be efficient, and maintain great relationships with clients.
            <br />
            Currently attending a full stack web development program at UNCC; In
            which I have acquired knowledge of HTML, CSS, javascript, node.js,
            express. Currently working with MongoDB and Mongoose.
          </p>
        </div>
      </div>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "50%" }}
        alt="cover"
      />
    </section>
  );
}

export default About;
