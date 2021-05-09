import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { Mic, SearchOutlined } from "@material-ui/icons";
import "./Search.css";
import { useHistory } from "react-router";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";

function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  //   stores broswer history
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();
    console.log("you hit something", input);

    // push the search term inside the data layer
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    history.push("/search");
  };
  return (
    <form className="search">
      <div className="search__input">
        <SearchOutlined className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <Mic />
      </div>

      {!hideButtons ? (
        <div className="search__buttons">
          <Button onClick={search} variant="outlined" type="submit">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttonsHidden">
          <Button onClick={search} variant="outlined" type="submit">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      )}
    </form>
  );
}

export default Search;
