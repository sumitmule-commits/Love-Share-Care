import React, { useEffect } from "react";
import "./AboutUs.css";

const AboutUs = () => {
  useEffect(() => {
    // When page loads, check if there's a #hash in the URL and scroll to it smoothly
    const hash = window.location.hash.substring(1);
    if (hash) {
      const section = document.getElementById(hash);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      }
    }
  }, []);

  return (
    <div className="container about-container">
      {/* Our Story Section */}
      <div className="row" id="ourStory">
        <div className="box">
          <div className="col-lg-12">
            <hr />
            <h2 className="intro-text text-center">
              <strong>Our Story</strong>
            </h2>
            <hr />
            <p>
              A regular get together of school friends gave rise to a noble
              thought of devoting time for the welfare of society. In 2016, a
              group of 7 friends started LOVE CARE SHARE with a sheer
              willingness to serve for uplifting the underprivileged. They felt
              that something needed to be done to improve the situation of the
              underprivileged.
            </p>
            <p>
              Uncharacteristically, given their backgrounds and motivations,
              they chose to start a grassroots-level organisation working
              directly with and for underprivileged people. They opted to bridge
              the gap between the millions of Indians who could provide
              resources and the underprivileged with the help of thousands of
              dedicated people and organisations. We had a belief that “When
              like-minded people come together with common aspirations, great
              results can be achieved.” We encourage and invite volunteers to be
              an active part of our organization and share the same vision and
              purpose as us. In LOVE CARE SHARE, we believe that each individual
              can contribute and support in building a better and secure
              society.
            </p>
            <hr />
          </div>
        </div>
      </div>

      {/* Genesis Section */}
      <div className="row" id="gen">
        <div className="box">
          <div className="col-lg-12">
            <hr />
            <h2 className="intro-text text-center">
              <strong>Genesis</strong>
            </h2>
            <hr />
            <p>
              <i>
                People are not as beautiful as they look, as they walk, or as
                they talk. They are only as beautiful as they{" "}
                <b>
                  <u>Love</u>
                </b>
                , as they{" "}
                <b>
                  <u>Care</u>
                </b>{" "}
                and as they{" "}
                <b>
                  <u>Share</u>
                </b>
                .
              </i>
            </p>
            <p>
              Inspired by this philosophy, a group of young, like-minded, and
              enthusiastic students established Love Care Share Foundation in
              2016 to work with grassroots initiatives to effect positive
              changes in the lives of the underprivileged. Love Care Share
              strives to transpire the mellowness of humanity. We work with
              philanthropists and foundations providing them with a platform to
              donate for the society.
            </p>
            <hr />
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="row" id="Mission">
        <div className="box">
          <div className="col-lg-12">
            <hr />
            <h2 className="intro-text text-center">
              <strong>Mission</strong>
            </h2>
            <hr />
            <p>
              The mission of the Love Care Share Foundation is to help deserving
              and economically challenged women and children by partnering with
              communities, philanthropists, and local charitable organizations.
              LOVE CARE SHARE Foundation supports underprivileged children and
              empowers youth and women through education initiatives, healthcare
              and livelihood programs. We aim to enable people’s collectives and
              movements encompassing diverse segments to pledge their strengths
              and work in partnership to secure, protect, and honour their
              rights.
            </p>
            <hr />
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="row" id="Vision">
        <div className="box">
          <div className="col-lg-12">
            <hr />
            <h2 className="intro-text text-center">
              <strong>Vision</strong>
            </h2>
            <hr />
            <p>
              Our Vision is to build a world of hope, compassion, tolerance, and
              social justice, where poverty has been overcome and people live in
              dignity. We believe that the world is interconnected and it is our
              social responsibility to help one another, particularly those at
              the bottom of the ladder.
            </p>
            <ul>
              <li>
                <p>
                  <b>Work as a catalyst in bringing sustainable change </b> in
                  the lives of underprivileged children, youth, and women, with
                  a life-cycle approach of development.
                </p>
              </li>
              <li>
                <p>
                  Enable the civil society to{" "}
                  <b>engage proactively in the change process.</b>
                </p>
              </li>
              <li>
                <p>
                  To emerge as a leading knowledge and technology-driven,
                  innovative and scalable social organisation.
                </p>
              </li>
            </ul>
            <hr />
          </div>
        </div>
      </div>

      {/* Belief Section */}
      <div className="row" id="Belief">
        <div className="box">
          <div className="col-lg-12">
            <hr />
            <h2 className="intro-text text-center">
              <strong>Belief</strong>
            </h2>
            <hr />
            <p>
              LOVE CARE SHARE Foundation believes that unless members of civil
              society are involved proactively in the process of development,
              sustainable change will not take place. Believing in this
              principle of change, LOVE CARE SHARE Foundation sensitises society
              to make them partners in our mission.
            </p>
            <hr />
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="row" id="CoreValues">
        <div className="box">
          <div className="col-lg-12">
            <hr />
            <h2 className="intro-text text-center">
              <strong>Core Values</strong>
            </h2>
            <hr />
            <p>
              Our commitment towards a better society drives us. LOVE CARE SHARE
              's core values inform all of our work. They shape what we do and
              how we do it. They bind us to a collective vision and purpose.
            </p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
