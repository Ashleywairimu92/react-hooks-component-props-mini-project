import React from 'react';
import PropTypes from 'prop-types';

const About = ({ image, about }) => {
  const defaultImage = "https://via.placeholder.com/215";
  const defaultAbout = "Default about text";

  return (
    <aside>
      <img src={image || defaultImage} alt="blog logo" />
      <p>{about || defaultAbout}</p>
    </aside>
  );
};

About.propTypes = {
  image: PropTypes.string,
  about: PropTypes.string
};

export default About;
