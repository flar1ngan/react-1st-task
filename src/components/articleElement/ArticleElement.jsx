import React from "react";
import "./articleElement.css"

const ArticleElement = ({image, topic, smallerTopic, text}) => {
  return (
    <div className="countryArticle">
      <div className="articleWrapper">
        <div className="articleImage">
          <img
            src={image}
            alt="articleImage"
          />
        </div>
        <div className="articleDescription">
          <div className="articleText">
            <div className="topic">{topic}</div>
            <div className="smallerTopic">{smallerTopic}</div>
            <div className="text">{text}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleElement;
