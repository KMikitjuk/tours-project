import React from 'react';
import { SocialNetworks } from '../../components/SocialNetworks';
import './AboutUs.css';

const AboutUsPage = () => {
  return (
    <div className="content">
      <div className="contentCover">
        <div className="projectIdea">
          <h1>UNIQUE. MAGNIFIQUE. BONIFIQUE.</h1>
          <p>
            BONIFIQUE LIFE - this is your assistant in creating unique trips to
            different parts of our beautiful world. The opportunity to take part
            in amazing group adventures, give loved ones a dream trip and
            organize an unforgettable individual holiday based on your tastes
            and preferences.
          </p>
        </div>
        <div>
          <SocialNetworks isRow={false}></SocialNetworks>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
