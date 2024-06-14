/*import React, { useEffect, useState } from "react";
import "./News.css"

const News = () => {
  const [mynews, setMyNews] = useState([]);

  const fetchData = async () => {
    let resonse = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=714ef9b8a6ef47d19b4bda6f4f0d100f"
    );
    let data = await resonse.json();
    setMyNews(data.articles);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <h1 className="text-center my-3"> International Top - Headlines</h1>
          <div className="mainDiv">
      {mynews.map((ele) => {
        console.log(ele)
        return (
          <>
        <div class="card" style={{  marginTop:"2rem" , boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
              <img src={ele.urlToImage == null ? "https://kubrick.htvapps.com/vidthumb/f6865cb1-d77d-4a31-ba83-d57c4b2324d8/4b9c9d8f-ad14-47ea-bcf4-bf24ee0bb1f3.jpg?crop=0.383xw:0.383xh;0.517xw,0.252xh&resize=1200:*" : ele.urlToImage} class="card-img-top" alt="..." />
              <div class="card-body">
            
                <p class="card-text">
                 {ele.title}
                </p>
                <h5 class="card-title">{ele.author == "" ? "Janelle Ash" : ele.author}</h5>
                <h5 class="card-title">{ele.publishedAt == "" ? "Janelle Ash" : ele.publishedAt}</h5>
                <h5 class="card-title">{ele.source.name == "" ? "Janelle Ash" : ele.source.name}</h5>
                <a href={ele.url} target="_blank" class="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </>
        );
    })}
    </div>
    </>
  );
};

export default News; */


import React, { useEffect, useState } from 'react';
import './News.css';

const API_KEY = 'c193abb0a86941b1b452c651c2a1f91d' //'714ef9b8a6ef47d19b4bda6f4f0d100f';  Replace with your actual NewsAPI key

const News = ({ category }) => {
  const [mynews, setMyNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      let response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
      );
      let data = await response.json();
      setMyNews(data.articles);
    } catch (error) {
      console.error("Error fetching news data: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category] );

  return (
    <>

      <div className="text-center my-3"><h5>Top {category.charAt(0).toUpperCase() + category.slice(1)} Headlines</h5></div>

      <div className="mainDiv">
        {loading ? (
          <p>Loading...</p>
        ) : (
          mynews.map((ele, index) => (
            <div key={index} className="card" style={{ marginTop: '2rem', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
              <img
                src={
                  ele.urlToImage == null
                    ? 'https://kubrick.htvapps.com/vidthumb/f6865cb1-d77d-4a31-ba83-d57c4b2324d8/4b9c9d8f-ad14-47ea-bcf4-bf24ee0bb1f3.jpg?crop=0.383xw:0.383xh;0.517xw,0.252xh&resize=1200:*'
                    : ele.urlToImage
                }
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">{ele.title}</p>
                <h5 className="card-title">{ele.author || 'Unknown Author'}</h5>
                <h5 className="card-title">{ele.publishedAt || 'Unknown Date'}</h5>
                <h5 className="card-title">{ele.source.name || 'Unknown Source'}</h5>
                <a href={ele.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default News;








//const apiKey = process.env.REACT_APP_NEWS_API_KEY;