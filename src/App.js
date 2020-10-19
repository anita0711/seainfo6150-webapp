import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { isEmpty } from "lodash";
import ArticleList from "./ArticleListItem/ArticleList.jsx";

function App() {
  const [fetchedData, setFetchedData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      // performs a GET request
      const response = await fetch("http://demo1390455.mockable.io/articles");
      const responseJson = await response.json();
      setFetchedData(responseJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);


  let displayContent;

  if (!isEmpty(fetchedData)) {
    displayContent = (
      <Switch>
        <Route path="/articlelist" exact>
          <ArticleList articles={Object.values(fetchedData)} />
        </Route>
      </Switch>
    );
  } else {
    displayContent = <div>You have no data!</div>;
  }

  return (
    <div>
      {displayContent}
    </div>
  );
};

export default App;
