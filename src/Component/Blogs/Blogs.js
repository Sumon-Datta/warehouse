import React from "react";
import "./Blogs.css";
const Blogs = () => {
  return (
    <div className="blogs_area">
      <div className="blog">
        <h5 className="blog_heading">
          <span className="question">Question 01: </span>Difference between
          javascript and nodejs ?
        </h5>
        <p className="blogs_para">
          <span className="answer">Answer :</span> JavaScript is a core
          programming language that runs in any of our browser JavaScript
          Engine. whither Node JS is an interpreter or running environment for a
          JavaScript programming language that contains many excesses, it need
          libraries that can easily be accessed from JavaScript programming for
          better uses.
        </p>
      </div>

      <div className="blog">
        <h5 className="blog_heading">
          <span className="question">Question 02: </span> When should you use
          nodejs and when should you use mongodb?
        </h5>
        <p className="blogs_para">
          <span className="answer">Answer :</span> if we want to write certain
          or some kind of stand-alone program or server in Javascript, then you
          can use properly nodejs for this. When should we use MongoDB??.. If
          our application needs the ability to continuously stored data in a way
          that you can efficiently query or update it later, then you would
          typically usage some form of database.
        </p>
      </div>

      <div className="blog">
        <h5 className="blog_heading">
          <span className="question">Question 03: </span> Differences between
          sql and nosql databases?
        </h5>
        <p className="blogs_para">
          <span className="answer">Answer :</span> SQL databases are vertically
          measurable, while NoSQL databases are horizontally measurable. Here,
          SQL databases are table based, while NoSQL databases are document
          based, key-values, graph, or wide-column stores. SQL databases are
          better for multi row transactions, whilst NoSQL is better for
          incondite data like documents or JSON .
        </p>
      </div>

      <div className="blog">
        <h5 className="blog_heading">
          <span className="question">Question 04: </span> What is the purpose of
          jwt and how does it work?
        </h5>
        <p className="blogs_para">
          <span className="answer">Answer :</span> JWT, or JSON Web Token, is an
          open value used to share security information or data between two
          parties ,, a client side and a server side. Each JWT contains to
          encoded JSON objects, including a set of demand. JWTs are signed using
          a cryptographic algorithm to assure that the claims cannot be changed
          after the token is issued.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
