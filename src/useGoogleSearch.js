import { useState, useEffect } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "80a97715821d2b6b5";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // whenever term changes,the code below fires
    //   term is a data layer variable
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [term]);
  return { data };
};
export default useGoogleSearch;
