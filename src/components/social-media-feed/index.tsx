import React, { useContext, useState } from "react";
import "../../sass/_general.scss";
import UserProfileImg from "@/assets/images/about_user_profile.png";
import Image from "next/image";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { SOCIAL_MEDIA_POSTS } from "@/data/SocialMediaPost";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackwardIcon from "@mui/icons-material/ArrowBack";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { Checkbox } from "@mui/material";
import styled from "@emotion/styled";
import { useMediaQuery } from "@mui/material";
import { ResponsivenessContext } from "@/contexts/breakpoint-context";

export const SocialAboutMeText = () => {
  const isMobile = useMediaQuery("(max-width: 599px)");
  return (
    <div
      className={"text-gray-500 mt-6"}
      style={isMobile ? { width: "100%" } : {}}
    >
      <h2 className={"text-2xl font-bold"}>Helloouu there 👋, </h2>
      <p className={"text-lg mt-4 mb-4"}>
        Well, I guess you already know my name now 👀.<br></br> I like to code
        💻 and build awesome tools.
      </p>
      <p className={"text-lg mt-4 mb-4"}>
        I cannot say I am a great designer 🎨 as this page is based on designs I
        have seen from other talented people. I am focused on efficiency, data
        handling and accessibility of the systems. However, this is what I like
        about software development and the <b>Open-Source</b> community.
        Everything you can see and imagine, can be built with a few lines of
        code.
      </p>
      <p className={"text-lg mt-4 mb-4"}>
        I have studied about Computer Science where I{`'`}ve deepen my knowledge
        in IT Security, AI & Machine Learning 🤖. Now, I am pursuing a doctorate
        degree in AI 🦾. My goal is to make AI more accessible, explainable and
        trustworthy so everyone can use it without concerns about data privacy.
      </p>
      <p className={"text-lg mt-4 mb-4"}>
        I like public speaking, although I am a bit shy. I like team work and I
        can bring many innovative ideas to the table. I have an eye-catching
        about system bugs 🐞. My peers would say that I am too quick with
        providing creative solution before the deadline in a very good quality.
        Unfortunately, I like the perfection and perfectionism usually kills the
        good.
      </p>
      <p className={"text-lg mt-4 mb-4"}>
        I believe an important part of engineering is not the code, but the
        approach you decide to solve the problem. Everyone knows how to code. It
        is so easy to learn programming, online bootcamp, StackOverflow or
        Chat-GPT can teach you to code. However I think a good engineer knows
        the ins and outs to the craft.
      </p>
      <p className={"text-lg mt-4 mb-4"}>
        A great engineer should know the trade offs of the system and should be
        committed to the continuous journey of self-improvement and learning.{" "}
        <br></br>
        <br></br>
        <span className={"italic"}>
          Feedback is always appreciated. <br></br>
          Leave a comment in the <b>&apos;Guestbook&apos;</b> button above.
        </span>
      </p>
      <p className={"text-lg mb-6"}>Do not forget to have fun!! 😜</p>
      <p className={"text-lg text-right w-full"}>Made with ❤️ - Besjon</p>
    </div>
  );
};

const HeartIcon = () => {
  return (
    <div className={"heart-container"}>
      <Checkbox className={"checkbox"} />
      <div className={"svg-container"}>
        <svg
          viewBox={"0 0 24 24"}
          className={"svg-outline"}
          xmlns={"http://www.w3.org/2000/svg"}
        >
          <path
            d={
              "M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"
            }
          ></path>
        </svg>
        <svg
          viewBox={"0 0 24 24"}
          className={"svg-filled"}
          xmlns={"http://www.w3.org/2000/svg"}
        >
          <path
            d={
              "M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"
            }
          ></path>
        </svg>
        <svg
          className={"svg-celebrate"}
          width={"100"}
          height={"100"}
          xmlns={"http://www.w3.org/2000/svg"}
        >
          <polygon points={"10,10 20,20"}></polygon>
          <polygon points={"10,50 20,50"}></polygon>
          <polygon points={"20,80 30,70"}></polygon>
          <polygon points={"90,10 80,20"}></polygon>
          <polygon points={"90,50 80,50"}></polygon>
          <polygon points={"80,80 70,70"}></polygon>
        </svg>
      </div>
    </div>
  );
};

const SocialMediaDetails = (post: any) => {
  return (
    <div className={"flex items-center mb-4"}>
      <Image
        src={UserProfileImg}
        className={"social-profile-image w-12"}
        alt={"besjon-cifliku-profile"}
      />
      <div className={"flex justify-between items-center ml-2 w-full"}>
        <div className={"flex flex-col justify-start"}>
          <h3 className={"font-bold mr-3"}>besjoncifliku 🌟</h3>
          <p className={"text-gray-300 flex items-center"}>
            &#x2022; {post.date}
          </p>
        </div>
        <div className={"bg-gray-400 rounded-3xl p-2 pr-3"}>
          <p dangerouslySetInnerHTML={{ __html: post.badge }}></p>
        </div>
      </div>
    </div>
  );
};

const SocialMediaPost = (post: any) => {
  const [readMore, setReadMore] = useState<boolean>(false);
  const isMobile = useMediaQuery("(max-width: 599px)");
  const { styles } = useContext(ResponsivenessContext);

  const truncateText = (incomingText: string): string => {
    return incomingText.substring(0, 80).concat(`...`);
  };

  const StyledDiv = styled.div<{ isMobile: boolean }>`
    &.social-media-post {
      position: relative;
      z-index: 1;
      padding: 2.2rem 2rem 2rem;
      cursor: pointer;
      width: ${(props) => (props.isMobile ? '135%' : 'auto')};
      margin-left: ${(props) => (props.isMobile ? '-45px' : 'auto')};
      margin-bottom: ${(props) => (props.isMobile ? '25px' : 'auto')};

      > .animated-social-card {
        background: linear-gradient(270deg, #ce68d9, #45c6db, #45db79);
        background-size: 800% 800%;
        -webkit-animation: animatedSocialCard 5s ease infinite;
        -moz-animation: animatedSocialCard 5s ease infinite;
        animation: animatedSocialCard 5s ease infinite;
        transition: 0.6s ease-in-out;
      }

      &:after {
        content: "";
        width: ${(props) => (props.isMobile ? '101%' : '91%')};
        height: ${(props) => (props.isMobile ? '100%' : '86%')};
        position: absolute;
        border-radius: 8px;
        right: 0;
        bottom: ${(props) => (props.isMobile ? '0' : '6rem')};
        transition: 0.3s ease-in-out;
        z-index: -1;
        background-color: #353353;
      }

      &:hover:after {
        width: 101%;
        height: 100%;
        bottom: 0;
      }

      > .social-post-icons {
        margin-top: ${(props) => (props.isMobile ? '1em' : '-1em')};
        opacity: ${(props) => (props.isMobile ? '1' : '0')};
        transition: 0.3s ease-in-out;
      }

      &:hover .social-post-icons {
        opacity: 1;
        margin-top: 1em;
      }
    }
  `;

  return (
    <StyledDiv className="social-media-post" isMobile={isMobile}>
      {post.pinned && (
        <div className={"flex justify-end text-gray-300 mb-2"}>
          <PushPinOutlinedIcon />
          Pinned by <span className={"text-gray-300 font-bold ml-2"}> @</span>
          <span className={"text-gray-300 underline font-bold"}>bcifliku</span>
        </div>
      )}
      <SocialMediaDetails {...post} />
      <div className={"p-8 pl-14 pr-14 animated-social-card rounded-xl"} style={styles?.animatedSocialCard}>
        <h2 className={"text-2xl font-bold mb-3"}>{post.title}</h2>
        <p
          className={"text-lg mb-2"}
          dangerouslySetInnerHTML={{
            __html: readMore
              ? post.description
              : truncateText(post.description),
          }}
        ></p>
        <button
          onClick={() => setReadMore(!readMore)}
          className={"text-gray-800 hover:text-gray-400 btn-arrow ease-in-out"}
        >
          {readMore ? (
            <span>
              Show Less
              <ArrowBackwardIcon className={"icon-arrow"} />{" "}
            </span>
          ) : (
            <span>
              Read More
              <ArrowForwardIcon className={"icon-arrow"} />{" "}
            </span>
          )}
        </button>
        <Image
          className={"w-full h-96 mt-3 mb-1 rounded-lg object-cover"}
          src={post.image}
          alt={"Image"}
        />
        {post.location ? (
          <p className={"flex items-center text-xs text-gray-200"}>
            <LocationOnIcon className={"mr-1"} /> Germany
          </p>
        ) : (
          <p className={"mb-6"}></p>
        )}
      </div>
      <div className={"flex justify-between opacity-0 social-post-icons"}>
        <p>
          <RemoveRedEyeOutlinedIcon className={"mr-2"} />
          1.2K
        </p>
        <div className={"flex justify-ends"}>
          <p className={"mr-4"}>
            <IosShareOutlinedIcon />
          </p>
          <p>
            <FavoriteBorderOutlinedIcon />
          </p>
        </div>
      </div>
    </StyledDiv>
  );
};

export const SocialMediaFeed = () => {
  return (
    <div className={"flex flex-col justify-center mt-3"} style={{ width: "100%" }}>
      {SOCIAL_MEDIA_POSTS.map((post: any) => (
        <SocialMediaPost key={post.id} {...post} />
      ))}
    </div>
  );
};
