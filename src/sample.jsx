import React, {useCallback, useState} from "react"
import Child from "./child"

const Sample = () => {
    const [buttons, setButtons] = useState([1, 2]);
  
    const _onButtonClick = () => {
      setButtons([1, 2, 3]);
    };
  
    const _onClick = useCallback((button) => {
      console.log(button);
    }, []);
  
    return (
      <>
        <button onClick={_onButtonClick}>버튼</button>
        {buttons.map((button, index) => (
          <Child key={index} button={button} onClick={_onClick} />
        ))}
      </>
    );
  };

  export default Sample