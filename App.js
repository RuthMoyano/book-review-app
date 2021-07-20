import React, { Component } from "react";

import Search from "./components/Search";
import BookInfo from "./components/BookInfo";

class App extends Component {



  render() {
    return (
      <div className="container">
        <div className="header clearfix mt-5">
          <h3 className="text-muted"> Goodreads Book Search </h3>
        </div>
        <div className="jumbotron">
        {Math.random() > 0 ? <BookInfo /> : <Search />}
        </div>
      </div>
    );
  }
}

export default App;