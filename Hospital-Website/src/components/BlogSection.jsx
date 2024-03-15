import React from "react";
import { useState } from "react";
import "../../public/styles/blog.css";

export default function BlogSection() {
  const posts = [
    {
      id: 1,
      title: "The Importance of Regular Exercise for Healthy Living",
      author: "Dr. Smith",
      category: "Fitness",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
    },
    {
      id: 2,
      title: "Nutrition Tips for Boosting Immunity",
      author: "Dr. Johnson",
      category: "Nutrition",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
    },
    {
      id: 3,
      title: "Mindfulness Meditation: A Guide to Inner Peace",
      author: "Dr. Garcia",
      category: "Mental Health",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
    },
    {
      id: 4,
      title: "The Benefits of Getting Enough Sleep",
      author: "Dr. Lee",
      category: "Wellness",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
    },
    {
      id: 5,
      title: "Managing Stress: Techniques for a Calmer Life",
      author: "Dr. Patel",
      category: "Mental Health",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
    },
    {
      id: 6,
      title: "Healthy Snack Ideas for Weight Loss",
      author: "Dr. Nguyen",
      category: "Nutrition",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
    },
    {
      id: 7,
      title: "Tips for Staying Hydrated During Exercise",
      author: "Dr. Rodriguez",
      category: "Fitness",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
    },
    // Add more dummy blog posts as needed
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "" || post.category === selectedCategory)
  );

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form
          action=""
          className="search-text"
          style={{ justifyContent: "center", width: "60vw" }}
        >
          <input
            type="text"
            name="blog-search"
            id="blog-search"
            className="blog-search"
            placeholder="Search Blogs"
            style={{
              width: "80%",
              height: "fit-content",
              padding: "5px 5px",
              paddingLeft: "10px",
              borderRadius: "10px 0px 0px 10px",
            }}
          />
          <button
            type="submit"
            className="search-icon"
            style={{
              height: "37px",
              padding: "0",
              border: "1px solid rgb(0, 0, 0, 0.9)",

              borderRadius: "0px 10px 10px 0px",
            }}
          >
            <i className="fa-brands fa-searchengin"></i>
          </button>
        </form>
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ height: "39px", padding: "0 10px", borderRadius: "10px" }}
        >
          <option value="">All Categories</option>
          {/* Extract categories from dummy data */}
          {[...new Set(posts.map((post) => post.category))].map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="blogs">
        {filteredPosts.map((post) => (
          <div key={post.id} className="blog-item">
            <h2>{post.title}</h2>
            <p>
              {" "}
              <b>Author: {post.author}</b>
            </p>
            <p>
              {" "}
              <b>Category: {post.category}</b>
            </p>
            <p>{post.content}</p>
            <div className="btn border-primary">View Blog</div>
          </div>
        ))}
      </div>
    </div>
  );
}
