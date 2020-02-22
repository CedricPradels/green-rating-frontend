import React, { useState, useEffect } from "react";

// AXIOS
import axios from "axios";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState("");

  useEffect(() => {
    const getAPI = async () => {
      setIsLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_BLUE_RATING_API}/test`
      );
      setValue(response.data.message);
      setIsLoading(false);
    };
    getAPI();
  }, []);

  return <>{!isLoading && value}</>;
};

export default App;
