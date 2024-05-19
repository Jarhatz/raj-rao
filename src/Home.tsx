import "./Home.css";
import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaCheck } from "react-icons/fa";
import { MdCopyAll } from "react-icons/md";

function Home() {
  const [isEmailCopied, setIsEmailCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("rajath.rao@stonybrook.edu");
    setIsEmailCopied(true);
    setTimeout(() => {
      setIsEmailCopied(false);
    }, 2000);
  };

  return (
    <div className="home-comp">
      <div className="title">
        <div className="my-name">
          <span>Rajath Rao</span>
        </div>
        <div className="contacts">
          <a href="mailto:rajathrao1001@gmail.com">
            <div className="contact-comp">
              <MdEmail style={{ fontSize: "2rem" }} />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/rajath-rao/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-comp">
              <FaLinkedin style={{ fontSize: "2rem" }} />
            </div>
          </a>
          <a
            href="https://github.com/Jarhatz?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-comp">
              <FaGithub style={{ fontSize: "2rem" }} />
            </div>
          </a>
        </div>
      </div>

      <div className="home-card">
        <p className="home-text">
          I am an inquisitive mind who is a strong believer of being a lifelong
          learner.
        </p>
        <p className="quote-text1">
          “The only true wisdom is in knowing you know nothing.”
          <span className="quote-text2"> - Socrates</span>
        </p>
        <p className="home-text">
          Currently, I am a deep learning frameworks researcher in the realm of{" "}
          <span className="emphasize">Brain Computer Interfaces</span>,
          <span className="emphasize"> Computer Vision</span>, and{" "}
          <span className="emphasize">Natural Language Processing</span>. My
          passion for Computer Science and AI/ML 🤖 stems from my personal
          quality of being a lifelong learner. The inner-child in me wants to
          make the sci-fi movies 🍿 I watched growing up a reality...
        </p>
        <p className="home-text">
          I am constantly trying new ideas💡and hunting for new problems to
          solve. Feel free to contact me at
          <span className="emphasize">
            {" "}
            rajath.rao[AT]stonybrook[DOT]edu
          </span>{" "}
          <button className="copy-button" onClick={copyEmail}>
            {isEmailCopied ? <FaCheck color="green" /> : <MdCopyAll />}
          </button>{" "}
          if you are looking to collaborate.
        </p>
      </div>
    </div>
  );
}

export default Home;
