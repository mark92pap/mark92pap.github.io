import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      {/* Header */}
      <section className="home-head bg-primary pt-1">
        <div className="container">
          <div>
            <h1>Not just another .NET developer</h1>
            <p>
              <i>Short, but can probably beat you at basketball.</i>
            </p>
          </div>
        </div>
      </section>
      {/* Languages */}
      <section className="languages bg-light py-3">
        <h2 className="md text-center my-2">I'm comfortable with</h2>
        <div className="container flex">
          <div className="card">
            <h4>C#</h4>
            <img src="icons/csharp.png" alt="" />
          </div>
          <div className="card">
            <h4>Node.js</h4>
            <img src="icons/node.png" alt="" />
          </div>
          <div className="card">
            <h4>React (+RN)</h4>
            <img src="icons/react.png" alt="" />
          </div>
          <div className="card">
            <h4>Python</h4>
            <img src="icons/python.png" alt="" />
          </div>
        </div>
        <h2 className="md text-center my-2">And a little less with</h2>
        <div className="container flex">
          <div className="card">
            <h4>Express.js</h4>
            <img height="80" src="icons/express.png" alt="" />
          </div>
          <div className="card">
            <h4>MongoDB</h4>
            <img src="icons/mongo.png" alt="" />
          </div>
          <div className="card">
            <h4>Docker</h4>
            <img src="icons/docker.png" alt="" />
          </div>
        </div>
      </section>
      {/* Background */}
      <section className="home-sub-head pt-1 pad-bottom-fix">
        <div className="container">
          <h1 className="md">A little background...</h1>
          <div>
            <p className="py-1">
              Oh, you're still here! Well, then there might be some things
              you'll be interested in!
            </p>
            <h2>
              Here's a brief summary of my <b>educational</b> and{" "}
              <b>professional</b> background.
            </h2>
            <ul className="home-background-list">
              <li>
                <i>2010-2018:</i> Studied{" "}
                <b>Electrical and Computer Engineering</b> at the{" "}
                <b>Aristotle University of Thessaloniki</b>. Picked the
                specialization of <i>Electronic and Computer Engineering</i>.
              </li>
              <li>
                <i>2020-2022:</i> <b>.NET Developer</b> of machine vision
                applications and office productivity tools at{" "}
                <a
                  href="https://robovision.gr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Robovision GR
                </a>
                .
              </li>
              <li>
                <i>2022-Now:</i> <b>.NET Software Engineer</b> at{" "}
                <a
                  href="https://www.prodyna.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Prodyna
                </a>
                .
              </li>
            </ul>
            <p>
              A more in-depth list can be found on my{" "}
              <a
                href="https://www.linkedin.com/in/markos-papanikoloudis-09522b174/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>{" "}
              profile.
            </p>
            <h2>Other interests include:</h2>
            <ul className="home-background-list blist-small">
              <li>Hiking</li>
              <li>Basketball</li>
              <li>Reading (Fantasy, Politics and more)</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
