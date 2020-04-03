import React, { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';


const Team = () => {
  const [isCreatorProfiles] = useState([
    {
      name: 'Brian Chiang',
      github: 'https://github.com/ch-brian',
      // linkedin: 'https://www.linkedin.com/in/darrenDzhu'
    },
    {
      name: 'Saejin Kang',
      github: 'https://github.com/skang1004',
      // linkedin: 'https://www.linkedin.com/in/kendall-lu'
    },
    {
      name: 'Joseph R',
      github: 'https://github.com/jodaisu',
      // linkedin: 'https://www.linkedin.com/in/rqreyes'
    },
    {
      name: 'Sean Arseneault',
      github: 'https://github.com/itsmesean',
      // linkedin: 'https://www.linkedin.com/in/kcrystalchen'
    },
    {
      name: 'Noah King',
      github: 'https://github.com/code-ark',
      // linkedin: 'https://www.linkedin.com/in/kcrystalchen'
    }
  ]);
  const creatorProfileArray = isCreatorProfiles.map(profile => {
    return (
      <Profiles
        key={`profile${profile.name}`}
        src={profile.src}
        name={profile.name}
        linkedin={profile.linkedin}
        github={profile.github}
      />
    );
  });
  return (
    <section id="team">
      <h2>Meet the Team</h2>
      <div id="profile-group">{creatorProfileArray}</div>
    </section>
  );
};

const Profiles = ({ src, name, linkedin, github }) => {
  return (
    <React.Fragment>
      <div className="profile">
        <ScrollAnimation animateIn="flipInY">
          <figure>
            <div className="profile-frame">
              <div className="profile-photo"></div>
            </div>
            <figcaption>{name}</figcaption>
          </figure>
        </ScrollAnimation>
        <div className="profile-link">
          <a href={linkedin} target="_blank">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href={github} target="_blank">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
      <i className="fas fa-exchange-alt"></i>
    </React.Fragment>
  );
};

export default Team;
