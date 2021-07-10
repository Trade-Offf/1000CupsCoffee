import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Button disabled> Hello </Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
          Hello
        </Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com">
          Hello
        </Button>
      </header>
    </div>
  );
};

export default App;
