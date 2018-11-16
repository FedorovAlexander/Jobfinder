import React from 'react';
import './Comments.css';

function Comments({ commentsText }) {
  return (
      <section className="comments">
        <h2 className="coditions__item-title">Comments</h2>
        <p className="comments__item">{commentsText}</p>
      </section>
  )
}

export default Comments;
