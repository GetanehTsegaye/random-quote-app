import { React, useState, useEffect } from "react";
import { fetchQuotes } from "../../api/fetchQuotes";
import "./card.css";

function Card() {
  const [quotes, setQuote] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedQuotes = await fetchQuotes();
        setQuote(fetchedQuotes);
      } catch (error) {
        console.error("Error fetching quotes:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div>
        <p className="cardHeader">
          <span className="firstLetterBig">F</span>eeling unmotivated? We've got
          just the cure: a healthy dose of questionable wisdom quotes of people
          who are definitely, maybe smarter than your toaster. Explore our
          collection quotes and see if you can find the inspiration (or
          amusement) you need <b>Randomly Generated Quotes</b> and see if you
          can find the inspiration (or amusement) you need.
        </p>
      </div>
      <div className="cardGrid">
        {quotes &&
          quotes.map((quote, index) => (
            <div className="cards" key={index}>
              <img
                className="card-image"
                src={`https://picsum.photos/200/200?random=${index + 1}`}
                alt="random image"
              />
              <h2 className="card-author">{quote.author}</h2>
              <p className="card-quote">{quote.content}</p>
            </div>
          ))}
      </div>
    </>
  );
}

export default Card;
