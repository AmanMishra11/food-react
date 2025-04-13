import "./Quote.css"

export default function Quote({ text, author }) {
  return (
    <div className="quote-card">
      <p className="quote-text">{text}</p>
      <p className="quote-author">- {author}</p>
    </div>
  )
}
