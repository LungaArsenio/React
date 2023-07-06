import React from "react";
import "../components/Blogs.css";

function Blogs({ numCards }) {
  const blogCards = [];

  for (let i = 1; i <= numCards; i++) {
    const card = {
      id: i,
      title: ` Blog `,
      image: `../src/assets/blog${i}.jpg`,
      date: "2023",
      duration: "Duration",
    };

    blogCards.push(card);
  }

  return (
    <div className="blogsContainer">
      <div className="blogs">
        {blogCards.map((card) => (
          <div key={card.id} className="blog">
            <figure className="blog__imageContainer">
              <img
                className="blog__image"
                src={card.image}
                alt={`Image for ${card.title}`}
              />
            </figure>
            <div className="blog__description">
              <h2 className="blog__description__title">{card.title}</h2>
              <div className="blog__description__time">
                <p className="blog__description__time__date">{card.date}</p>
                <p className="blog__description__time__duration">
                  {card.duration}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="blog__btn">See more articles</button>
    </div>
  );
}

export default Blogs;
