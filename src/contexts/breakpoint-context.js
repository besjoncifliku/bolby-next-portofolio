import React, { useState, useEffect, createContext } from "react";
import { useMediaQuery } from "@mui/material";

export const ResponsivenessContext = createContext();

const mobileStyles = {
  aboutText: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  paragraph: {
    width: "100%",
  },
  aboutSkills: {
    width: "100%",
    marginTop: "20px",
    marginLeft: "0px",
  },
  generalContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "10px 15px",
  },
  aboutSection: {
    flexDirection: "column",
    width: "100%",
    margin: "0 0",
  },
  aboutProfile: {
    margin: "auto auto",
  },
  blogElementContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  elementStyle: {
    width: "100%",
    marginBottom: "25px",
  },
  contactForm: {
    width: "90%",
    marginRight: "0",
  },
  interestElement: {
    width: "90%",
    marginBottom: "15px",
    marginTop: "0",
  },
  projectElement: {
    width: "90%",
    margin: "15px auto",
  },
  animatedSocialCard: {
    width: "100%",
    padding: "15px 7px",
  },
  socialMediaHardCover: {
    width: "90%",
    margin: "auto auto",
  },
  socialProfileImage: {
    top: "13%",
    left: "4.5rem",
  },
  guestbook: {
    position: "relative",
    margin: "85px auto 0 auto",
  },
  socialContainer: {
    width: "100%",
  },
  socialProfileDetails: {
    width: "120%",
    marginLeft: "-10px",
  },
  socialMediaIcons: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  spotifyBadgeCard: {
    right: "7.5%",
  },
  headerProfile: {
    left: "10%",
  },
  animatedContainer: {
    marginLeft: "0px",
    marginTop: "-150px",
    width: "100%",
  },
  socialMediaSection: {
    padding: "0",
  },
  hiddenContainer: {
    width: "92.5%",
    margin: "90px auto -32px -78px",
    borderRadius: 0,
  },
  workFilter: {
    flexWrap: "wrap",
  },
  searchBar: {
    position: "relative", 
    marginTop: "15px"
  }
};

const iPadStyles = {
  aboutText: {},
  paragraph: {},
  aboutSkills: {},
  generalContainer: {},
  aboutSection: {},
  aboutProfile: {},
  blogElementContainer: {},
  elementStyle: {},
  contactForm: {},
  interestElement: {},
  projectElement: {},
  animatedSocialCard: {},
  socialMediaHardCover: {},
  socialProfileImage: {},
  guestbook: {},
  socialContainer: {},
  socialProfileDetails: {},
  socialMediaIcons: {},
  spotifyBadgeCard: {},
  headerProfile: {},
  animatedContainer: {},
  socialMediaSection: {},
  hiddenContainer: {},
  workFilter: {},
  searchBar: {
    position: "relative", marginTop: "15px"
  }
};
const smallLaptopStyles = {
  aboutText: {},
  paragraph: {},
  aboutSkills: {},
  generalContainer: {},
  aboutSection: {},
  aboutProfile: {},
  blogElementContainer: {},
  elementStyle: {},
  contactForm: {},
  interestElement: {},
  projectElement: {},
  animatedSocialCard: {},
  socialMediaHardCover: {},
  socialProfileImage: {},
  guestbook: {},
  socialContainer: {},
  socialProfileDetails: {},
  socialMediaIcons: {},
  spotifyBadgeCard: {},
  headerProfile: {},
  animatedContainer: {},
  socialMediaSection: {},
  hiddenContainer: {},
  workFilter: {},
  searchBar: {
    position: "relative", marginTop: "15px"
  }
};

const laptopStyles = {
  aboutText: {},
  paragraph: {},
  aboutSkills: {},
  generalContainer: {},
  aboutSection: {},
  aboutProfile: {},
  blogElementContainer: {},
  elementStyle: {},
  contactForm: {},
  interestElement: {},
  projectElement: {},
  animatedSocialCard: {},
  socialMediaHardCover: {},
  socialProfileImage: {},
  guestbook: {},
  socialContainer: {},
  socialProfileDetails: {},
  socialMediaIcons: {},
  spotifyBadgeCard: {},
  headerProfile: {},
  socialMediaSection: {},
  animatedContainer: {},
  hiddenContainer: {},
  workFilter: {},
  searchBar: {
    position: "relative", marginTop: "15px"
  }
};

const largeScreenStyles = {
  aboutText: {},
  paragraph: {},
  aboutSkills: {},
  generalContainer: {},
  aboutSection: {},
  aboutProfile: {},
  blogElementContainer: {},
  elementStyle: {},
  contactForm: {},
  interestElement: {},
  projectElement: {},
  animatedSocialCard: {},
  socialMediaHardCover: {},
  socialProfileImage: {},
  guestbook: {},
  socialContainer: {},
  socialProfileDetails: {},
  socialMediaIcons: {},
  spotifyBadgeCard: {},
  headerProfile: {},
  animatedContainer: {},
  socialMediaSection: {},
  hiddenContainer: {},
  workFilter: {},
  searchBar: {
    position: "relative", marginTop: "15px"
  }
};

const determineStyle = (
  isMobile,
  isIPad,
  isSmallLaptop,
  isLaptop,
  isLargeScreen
) => {
  if (isMobile) return mobileStyles;
  if (isIPad) return iPadStyles;
  if (isSmallLaptop) return smallLaptopStyles;
  if (isLaptop) return laptopStyles;
  if (isLargeScreen) return largeScreenStyles;
};

export const ResponsivenessProvider = ({ children }) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const isIPad = useMediaQuery("(min-width:601px) and (max-width:801px)");
  const isSmallLaptop = useMediaQuery(
    "(min-width:802px) and (max-width:1080px)"
  );
  const isLaptop = useMediaQuery("(min-width: 1081px) and (max-width: 1440px)");
  const isLargeScreen = useMediaQuery("(min-width: 1441px)");
  const [styles, setStyles] = useState({});

  useEffect(() => {
    setStyles(
      determineStyle(isMobile, isIPad, isSmallLaptop, isLaptop, isLargeScreen)
    );
  }, [isMobile, isIPad, isSmallLaptop, isLaptop, isLargeScreen]);

  return (
    <ResponsivenessContext.Provider value={{ styles, setStyles }}>
      {children}
    </ResponsivenessContext.Provider>
  );
};
