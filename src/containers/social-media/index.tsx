import React, { useEffect, useRef, useState } from "react";
import { SocialMediaHeader } from "@/components/social-media-header";
import SocialMediaTabs from "@/components/social-media-tabs";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { MouseEvent } from "react";

import "../../sass/_general.scss";
import { useMediaQuery } from "@mui/material";

export const SocialMediaSection = () => {
  // Thanks to: https://jhey.dev/ for the amazing work to the open source community

  const [showDetail, setShowDetails] = useState<boolean>(false);
  const socialMediaRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 599px)");

  const handleShowDetails = (e: MouseEvent) => {
    e.preventDefault();
    setShowDetails(!showDetail);
    const socialMediaAnchor = socialMediaRef.current;
    if (!socialMediaAnchor) {
      return;
    }
    socialMediaAnchor.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="work social-media-container"
      style={
        isMobile
          ? { display: "flex", flexDirection: "column", padding: "10px 15px" }
          : {}
      }
    >
      <h2 className={"header-title"}>
        Social Media<span>.</span>
      </h2>
      <div ref={socialMediaRef}></div>
      <div
        className={`social-media-section overflow-hidden ease-in-out ${
          showDetail ? "max-height" : "min-height"
        }`}
        style={isMobile ? { padding: "0" } : {}}
      >
        <SocialMediaHeader />
        <div
          className={"social-container"}
          style={
            isMobile
              ? {
                  display: "flex",
                  flexDirection: "column",
                  padding: "10px 15px",
                }
              : {}
          }
        >
          <SocialMediaTabs />
        </div>
      </div>
      <div
        className={`${
          !showDetail
            ? "hidden-details-gradient bottom-14"
            : "w-full hidden-container"
        } flex justify-center items-center absolute text-center`}
        style={
          isMobile ? { width: "92.5%", margin: "90px auto -32px -78px", borderRadius: 0 } : {}
        }
      >
        <a
          className={`${
            showDetail ? "text-gray-800" : "text-gray-200 mt-14"
          } text-xl font-bold cursor-pointer btn-arrow`}
          onClick={(e) => handleShowDetails(e)}
        >
          {showDetail ? "Hide Details 😭" : "Stalk Me 👀"}{" "}
          <ArrowForwardIcon className={"icon-arrow"} />
        </a>
      </div>
    </div>
  );
};
