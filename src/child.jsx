import React, { useCallback } from "react";

const Child = React.memo(({ button, onClick }) => {
  const handleClick = useCallback(() => {
    onClick(button);
  }, []);
  return  <button onClick={handleClick}>{button}</button>;
});
 
export default Child;
