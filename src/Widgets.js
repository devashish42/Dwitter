import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1305507879441575937"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="devp"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={
            "http://images.daznservices.com/di/library/GOAL/b8/f1/cristiano-ronaldo-portugal-2019_whjgq33zotuc11co8jkpl4nom.jpg?t=1845591838"
          }
          options={{ text: "#reactjs is awesome", via: "devp" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
