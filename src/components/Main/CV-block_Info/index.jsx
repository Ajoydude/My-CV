const Info = () => {
  return (
    <section className="cv-block info">
      <div className="container">
        <div className="work-experience group" id="work-experience">
          <h2 className="text-center">Work Experience</h2>
          <div className="item">
            <div className="row">
              <div className="col-md-6">
                <h3>Software Developer</h3>
                <h4 className="organization">DreamWork Enviroment.</h4>
              </div>
              <div className="col-md-6">
                <time className="period">October 2030 -- Present</time>
              </div>
            </div>
            <p className="text-muted">
            In the realm of Software Development, my role revolves around the creation and maintenance of software applications.
            Picture me as a digital architect, employing various programming languages to construct the essential components, both
            in the user interface and behind the scenes. I engage in diverse projects, crafting everything from user interfaces to
            intricate algorithms.
            </p>
          </div>
          <div className="item">
            <div className="row">
              <div className="col-md-6">
                <h3>Front End Developer</h3>
                <h4 className="organization">DreamWork Enviroment</h4>
              </div>
              <div className="col-md-6">
                <time className="period">May 2025 -- December 2027</time>
              </div>
            </div>
            <p className="text-muted">
              {" "}
              My gig is all about making websites and apps look awesome and work
              smoothly. Im the one crafting the user interface that people
              interact with directly. Using HTML, CSS, and JavaScript, I turn
              design concepts into real, interactive web pages. Its like being
              the artist and the coder at the same time, ensuring everything
              looks great and functions seamlessly.
            </p>
          </div>
          <div className="item">
            <div className="row">
              <div className="col-md-6">
                <h3>Web Developer</h3>
                <h4 className="organization">DreamWork Enviroment</h4>
              </div>
              <div className="col-md-6">
                <time className="period">December 2025 -- Present</time>
              </div>
            </div>
            <p className="text-muted">
              my primary focus is on building the technical foundation and
              functionality of websites. I work on both the front end and back
              end, ensuring that the user interface is not only visually
              appealing but also seamlessly integrates with the server-side
              operations. I use languages like HTML, CSS, JavaScript, and often
              others like Python or PHP for back-end development. My role
              involves creating dynamic and interactive features, managing
              databases, and optimizing website performance.
            </p>
          </div>
        </div>
        <div className="education group" id="education">
          <h2 className="text-center">Education</h2>
          <div className="item">
            <div className="row">
              <div className="col-md-6">
                <h3>High School</h3>
                <h4 className="organization">SMK Eklesia</h4>
              </div>
              <div className="col-md-6">
                <time className="period">August 2018 -- May 2021</time>
              </div>
            </div>
            <p className="text-muted">
              I entered a vocational high school and chose the multimedia
              major, where I learn about design and a bit about filmmaking. This
              has opened the door for me into the world of technology and
              information.
            </p>
          </div>
          <div className="item">
            <div className="row">
              <div className="col-md-6">
                <h3>Information System</h3>
                <h4 className="organization">Universitas Klabat</h4>
              </div>
              <div className="col-md-6">
                <time className="period">August 2021 -- May 2025</time>
              </div>
            </div>
            <p className="text-muted">
              I study at Universitas Klabat with a major in Information
              Systems. During my studies, I learn about both technology and
              business management. I also study the basics of building
              applications using various programming languages and project
              management, whether within an organization or independently.
            </p>
          </div>
        </div>
        <div className="group" id="skills">
          <div className="row">
            <div className="col-md-6">
              <div className="skills info-card">
                <h2>Skills</h2>
                <h3>HTML</h3>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={70}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <h3>PHP</h3>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={70}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "90%" }}
                  ></div>
                </div>
                <h3>JavaScript</h3>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={70}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact-info info-card">
                <h2>Contact Info</h2>
                <div className="row">
                  <div className="col-1">
                    <i className="ion-android-calendar icon" />
                  </div>
                  <div className="col-9">
                    <span>10/10/1990</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-1">
                    <i className="ion-person icon" />
                  </div>
                  <div className="col-9">
                    <span>Joy Wenur</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-1">
                    <i className="ion-ios-telephone icon" />
                  </div>
                  <div className="col-9">
                    <span>(+62)812-4140-2962</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-1">
                    <i className="ion-at icon" />
                  </div>
                  <div className="col-9">
                    <span>reaperdude@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hobbies group" id="hobbies">
          <h2 className="text-center">Hobbies</h2>
          <p className="text-center text-muted">
            I enjoy playing games, whether on consoles or PC, especially RPG
            games like Souls series or rogue-like games. Additionally, I really
            love playing badminton.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Info;
