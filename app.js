const heading = React.createElement("div", {id: "parent"}, [
    React.createElement("div", { id: "child" },[
         React.createElement("h1", {}, "Yes We Are"),
        React.createElement("h1",{}, "YOu are Here"),
    ]),
    React.createElement("div", {id: "child2"},[
        React.createElement("h1", {}, "Yes We Are"),
        React.createElement("h2", {}, "H2 is here"),
        ]),
    ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); 