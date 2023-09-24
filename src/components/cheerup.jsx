import React from "react";
import './cheerup.css';
import { Link } from 'react-router-dom';

const buttonsData = [
  { text: "Mental Health Awareness", link: "https://www.pinerest.org/newsroom/articles/mental-health-awareness-blog/" },
  { text: "The Mighty", link: "https://themighty.com/" },
  { text: "The Mind", link: "https://www.mind.org.uk/" },
  { text: "ReThink", link: "https://www.rethink.org/" },
  { text: "Nami", link: "https://www.nami.org/Blogs" },
  { text: "Power Minds", link: "https://mpowerminds.com/oneonone" },
  { text: "Counsellors", link: "https://www.vogue.in/wellness/content/verified-mental-health-helplines-and-services-pan-india-suicide-helplines-therapists-counsellors" },
  { text: "Depression", link: "https://hyperboleandahalf.blogspot.com/2011/10/adventures-in-depression.html  " },
  { text: "Sectioned", link: "https://sectioneduk.wordpress.com/" },
  { text: " 24x7 Toll-Free Mental Health Rehabilitation Helpline Kiran (1800-599-0019) launched in 13 Languages", link: "" },

];

function CheerUp() {
  const redirectToExternalLink = (link) => {
    // Redirect to the specified external link
    window.location.href = link;
  };

  return (
    <div>
    <br /><br />
      <h1>Here is some positive content for you!</h1>
      <br />
      <div className="button-container">
        {buttonsData.map((button, index) => (
          <button
            key={index}
            className="button-name"
            onClick={() => redirectToExternalLink(button.link)}
          >
            {button.text}
          </button>
        ))}
      </div>
      <Link to="/main">
      <a class="fancy" href="#">
      <span class="top-key"></span>
      <span class="text">Main Page</span>
     <span class="bottom-key-1"></span>
     <span class="bottom-key-2"></span>
      </a>
      </Link>
    </div>
  );
}

export default CheerUp;
