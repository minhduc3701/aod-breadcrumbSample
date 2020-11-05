"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Toggle_1 = require("aod-dependencies/Toggle");
var icons_1 = require("aod-dependencies/@uifabric/icons");
var AppStyle_1 = require("./AppStyle");
var Breadcrumb_1 = require("aod-dependencies/Breadcrumb");
require("./App.css");
icons_1.initializeIcons();
var BreadcrumbData = [
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
                                        child: [{ id: "", text: "Row", data: "./aa", child: [] }]
                                    },
                                    { id: "cal", text: "Calendar", data: "./aa", child: [] },
                                    { id: "btn", text: "Button", data: "./aa", child: [] },
                                ]
                            },
                        ]
                    },
                    { id: "be", text: "Backend", data: "./aa", child: [] },
                ]
            },
            { id: "fe2", text: "Resource Central", data: "./aa", child: [] },
        ]
    },
];
function App() {
    var _a = react_1["default"].useState(""), darkMode = _a[0], setDarkMode = _a[1];
    var onChangeMode = function () {
        if (darkMode === "dark") {
            setDarkMode("light");
        }
        if (darkMode !== "dark") {
            setDarkMode("dark");
        }
    };
    var onClickActionBreadcrumb = function () {
        console.log("click");
    };
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement(AppStyle_1.Wrapper, { theme: darkMode },
            react_1["default"].createElement("div", { className: "toggle-wrapper" },
                react_1["default"].createElement(Toggle_1.Toggle, { label: "Dark mode", onChange: onChangeMode })),
            react_1["default"].createElement(Breadcrumb_1["default"], { child: BreadcrumbData, 
                // <BreadcrumbDarkMode>
                darkMode: darkMode, 
                // </BreadcrumbDarkMode>
                onClick: onClickActionBreadcrumb }))));
}
exports["default"] = App;
