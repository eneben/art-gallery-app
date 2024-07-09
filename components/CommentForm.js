import { useState } from "react";

export default function CommentForm({ onSubmitComment }) {
  const [comment, setComment] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmitComment(data.comment);
    event.target.reset();
    event.target.elements.motto.focus();
    setComment("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Comment:</h3>
      <div>
        <label htmlFor="comment">Please write here</label>
        <input
          type="text"
          name="comment"
          id="motto"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></input>
      </div>
      <button type="submit">Send</button>
    </form>
  );
}
