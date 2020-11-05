import React from "react";
import { Toggle } from "aod-dependencies/Toggle";
import { initializeIcons } from "aod-dependencies/@uifabric/icons";
import { Wrapper } from "./AppStyle";
import Breadcrumb from "aod-dependencies/Breadcrumb";
import "./App.css";

initializeIcons();

const BreadcrumbData = [
  {
    id: "ad",
    text: "Add-on",
    data: "./aa",
    child: [
      {
        id: "365",
        text: "Resource Central 365",
        data: "./aa",
        child: [
          {
            id: "fe",
            text: "Frontend",
            data: "./aa",
            child: [
              {
                id: "nmd",
                text: "Controls",
                data: "./xadan",
                child: [
                  {
                    id: "list",
                    text: "DetailList",
                    data: "./aa",
                    child: [{ id: "", text: "Row", data: "./aa", child: [] }],
                  },
                  { id: "cal", text: "Calendar", data: "./aa", child: [] },
                  { id: "btn", text: "Button", data: "./aa", child: [] },
                ],
              },
            ],
          },
          { id: "be", text: "Backend", data: "./aa", child: [] },
        ],
      },
      { id: "fe2", text: "Resource Central", data: "./aa", child: [] },
    ],
  },
];

function App() {
  const [darkMode, setDarkMode] = React.useState<string>("");
  const onChangeMode = () => {
    if (darkMode === "dark") {
      setDarkMode("light");
    }
    if (darkMode !== "dark") {
      setDarkMode("dark");
    }
  };
  const onClickActionBreadcrumb = () => {
    console.log("click");
  };
  return (
    <div className="App">
      <Wrapper theme={darkMode}>
        <div className="toggle-wrapper">
          <Toggle label="Dark mode" onChange={onChangeMode} />
        </div>
        <Breadcrumb
          child={BreadcrumbData}
          // <BreadcrumbDarkMode>
          darkMode={darkMode}
          // </BreadcrumbDarkMode>
          onClick={onClickActionBreadcrumb}
        />
      </Wrapper>
    </div>
  );
}

export default App;
