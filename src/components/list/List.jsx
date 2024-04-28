import { React, useState, useEffect } from "react";
import axios from "axios";
import "./list.css";

function List() {
  const [quotes, setQuote] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.quotable.io/quotes/random?limit=5")
      .then((respose) => {
        setQuote(respose.data);
      });
  }, []);

  return (
    <>
      <div>
        <p className="cardHeader">
          <span className="firstLetterBig">T</span>ired of the same old
          motivational quotes? We get it. That's why we offer a refreshing
          alternative: a smorgasbord of silly <b>Randomly Generated Quotes</b>
          and dubious advice from history's most interesting (and sometimes
          questionable) characters. So, come on in, grab a metaphorical cookie,
          and let the giggles commence!
        </p>
      </div>
      <div className="tb-container">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-light-blue text-white">
              {/* Light blue header */}
              <th>Author</th>
              <th>Quote</th>
              <th>Quoted Year</th>
            </tr>
          </thead>
          <tbody>
            {quotes &&
              quotes.map((quote, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-row-even" : "bg-row-odd"}
                >
                  <td>{quote.author}</td>
                  <td className="td-content">{quote.content}</td>

                  <td className="td-date">{quote.dateAdded}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default List;
