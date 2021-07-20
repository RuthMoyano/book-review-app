import React, { Component } from "react";
import PropTypes from "prop-types";

class BookInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="row col-lg-12">
        <h3 className="mb-3">
          {
            "How to Fail at Almost Everything and Still Win Big: Kind of the Story of My Life"
          }
        </h3>
        <div className="col-lg-2">
          <img
            src={"https://images.gr-assets.com/books/1369823209m/17859574.jpg"}
            style={{ height: "200px" }}
            alt="book cover"
          />
          <p>
            By: <span className="font-weight-bold">Scott Adams</span>
          </p>
          <p>Avg. Rating: 4.09</p>
        </div>
        <div className="col-lg-10">
          <p>
            Scott Adams has likely failed at more things than anyone you’ve ever
            met or anyone you’ve even heard of. So how did he go from hapless
            office worker and serial failure to the creator of <i>Dilbert</i>,
            one of the world’s most famous syndicated comic strips, in just a
            few years? In{" "}
            <i>How to Fail at Almost Everything and Still Win Big</i>, Adams
            shares the strategy he has used since he was a teen to invite
            failure in, to embrace it, then pick its pocket. <br />
            <br />
            No career guide can offer advice for success that works for
            everyone. As Adams explains, your best bet is to study the ways of
            others who made it big and try to glean some tricks and strategies
            that make sense for you. Adams pulls back the covers on his own
            unusual life and shares what he learned for turning one failure
            after another into something good and lasting. Adams reveals that he
            failed at just about everything he’s tried, including his corporate
            career, his inventions, his investments, and his two restaurants.
            But there’s a lot to learn from his personal story, and a lot of
            humor along the way. While it’s hard for anyone to recover from a
            personal or professional failure, Adams discovered some unlikely
            truths that helped to propel him forward. For instance:
            <br />
            <br />• Goals are for losers. Systems are for winners.
            <br />• "Passion" is bull. What you need is personal energy.
            <br />• A combination of mediocre skills can make you surprisingly
            valuable.
            <br />• You can manage your odds in a way that makes you look lucky
            to others.
          </p>
        </div>
        <div>
          <p>
            Published October 15th 2013 by Little, Brown and Company.{" "}
            <a href="https://www.goodreads.com/book/show/17859574">
              Learn More
            </a>
          </p>
        </div>
      </div>
    );
  }
}

BookInfo.propTypes = {
  prop: PropTypes.object
};

export default BookInfo;