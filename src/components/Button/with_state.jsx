import React, { useState } from "react";

import Button from "./Button";

export default () => {
  const [counter, setCounter] = useState(1000);

  const handleClick = () => {
    setCounter(current => current + 1)
  };

  return <Button label={counter} onClick={handleClick} />;
};
