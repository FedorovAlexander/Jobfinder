import React from 'react';
import './Comments.css';

function Comments({ commentsText }) {
  return (
      <section className="comments">
        <h3 className="coditions__item-title">Comments</h3>
        <p className="conditions__item-value">{commentsText}</p>
      </section>
  )
}

export default Comments;
