import Quote from "./Quote"
import "./QuotePage.css"
import quotesData from "../data/quotes"

export default function QuotePage() {
  return (
    <div className="quote-page">
      <div className="quote-header">
        <h1 className="quote-title">Food for Thought</h1>
        <p className="quote-subtitle">
          A collection of inspiring quotes about food, cooking, and the joy of sharing meals.
        </p>
      </div>
      <div className="quotes-grid">
        {quotesData.map((quote, index) => (
          <Quote key={index} text={quote.text} author={quote.author} />
        ))}
      </div>
    </div>
  )
}
