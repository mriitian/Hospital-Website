import React, { useState } from "react";
import "./featured.css";

const FeaturedSection = () => {
  const [activeTab, setActiveTab] = useState("articles");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const articles = [
    {
      id: 1,
      title: "The Importance of Prenatal Nutrition",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      category: "Prenatal Care",
    },
    {
      id: 2,
      title: "10 Tips for a Healthy Pregnancy",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      category: "Prenatal Care",
    },
    {
      id: 3,
      title: "Child Vaccination Schedule",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      category: "Child Care",
    },
  ];

  const videos = [
    {
      id: 1,
      title: "Breastfeeding Basics",
      url: "https://www.youtube.com/watch?v=12345",
      category: "Prenatal Care",
    },
    {
      id: 2,
      title: "Managing Toddler Tantrums",
      url: "https://www.youtube.com/watch?v=67890",
      category: "Child Care",
    },
  ];

  const infographics = [
    {
      id: 1,
      title: "Child Development Milestones",
      imageUrl: "https://example.com/child-development-milestones.jpg",
      category: "Child Care",
    },
    {
      id: 2,
      title: "Prenatal Nutrition Guide",
      imageUrl: "https://example.com/prenatal-nutrition-guide.jpg",
      category: "Prenatal Care",
    },
  ];

  return (
    <div style={{ padding: "30px" }} id="featuredSection">
      <div>
        {" "}
        <h3 style={{ textAlign: "center" }}>Educational Resources</h3>
      </div>
      <div className="featured-section">
        <div className="nav nav-tabs" id="featuredNav" role="tablist">
          <button
            className={`nav-item nav-link ${
              activeTab === "articles" ? "active" : ""
            }`}
            id="articles-tab"
            onClick={() => handleTabChange("articles")}
          >
            Articles
          </button>
          <button
            className={`nav-item nav-link ${
              activeTab === "videos" ? "active" : ""
            }`}
            id="videos-tab"
            onClick={() => handleTabChange("videos")}
          >
            Videos
          </button>
          <button
            className={`nav-item nav-link ${
              activeTab === "infographics" ? "active" : ""
            }`}
            id="infographics-tab"
            onClick={() => handleTabChange("infographics")}
          >
            Infographics
          </button>
        </div>
        <div className="tab-content" id="featuredContent">
          <div
            className={`tab-pane fade ${
              activeTab === "articles" ? "show active" : ""
            }`}
            id="articles"
            role="tabpanel"
            aria-labelledby="articles-tab"
          >
            {/* Render articles content */}

            {articles.map((article) => (
              <div key={article.id} className="article">
                <h5>{article.title}</h5>
                <p>{article.content}</p>
              </div>
            ))}
          </div>
          <div
            className={`tab-pane fade ${
              activeTab === "videos" ? "show active" : ""
            }`}
            id="videos"
            role="tabpanel"
            aria-labelledby="videos-tab"
          >
            {/* Render videos content */}
            {videos.map((video) => (
              <div key={video.id} className="video">
                <h5>{video.title}</h5>
                <p>{video.url}</p>
              </div>
            ))}
          </div>
          <div
            className={`tab-pane fade ${
              activeTab === "infographics" ? "show active" : ""
            }`}
            id="infographics"
            role="tabpanel"
            aria-labelledby="infographics-tab"
          >
            {infographics.map((infographic) => (
              <div key={infographic.id} className="infographic">
                <h5>{infographic.title}</h5>
                <img src={infographic.imageUrl} alt={infographic.title} />
              </div>
            ))}
          </div>
          <div className="btn border-primary">Show More</div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
