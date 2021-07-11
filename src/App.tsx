import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Button> 默认 </Button>
        <Button disabled> 不可触摸 </Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
          BigBtn
        </Button>
        <Button btnType={ButtonType.Danger}>DangerBtn</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>
          SmallBtn
        </Button>

        <Button btnType={ButtonType.Link} href="http://www.baidu.com">
          BaiDu.Link
        </Button>
        <Button disabled btnType={ButtonType.Link} href="http://www.baidu.com">
          BaiDu.Link
        </Button>
      </header>
    </div>
  );
};

export default App;
