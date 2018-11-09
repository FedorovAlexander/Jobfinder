import React from 'react';
import './Comments.css';

function Comments({ commentsText }) {
  return (
      <section className="comments">
        <h2 className="coditions__item-title">Comments</h2>
        <p className="conditions__item-value">{commentsText}</p>
      </section>
  )
}

export default Comments;
