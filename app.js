import React from "react";
import ReactDOM from "react-dom/client";


//JavaScript code----- 
// const heading = React.createElement("div", { id: "parent" }, [
//     React.createElement("div", { id: "child" }, [
//         React.createElement("h1", {}, "Yes We Are 👍..."),
//         React.createElement("h1", {}, "You are Here 😈..."),
//     ]),
//     React.createElement("div", { id: "child2" }, [
//         React.createElement("h1", {}, "Yes We Are 🐽..."),
//         React.createElement("h2", {}, "H2 is here"),
//     ]),
// ]);


// JSX(transpiled before it reaches the JS) - PARCEL - BABEL
// JSX => React.createElement => ReactElement-JS Object => HTMLelement(render)

// React Element
// const Jsxheading = <h1 id="heading" >Namami Ganga!!!</h1>
const Jsxheading = () => <h1 id="heading" >Namami Ganga!!!</h1>

//React Functional Component
const HeadingComponent = () => (
    <div>
        <Jsxheading/>
    <h1 className="heading">Namaste React Functional Component</h1>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(Jsxheading);
root.render(<Jsxheading/>);
root.render(<HeadingComponent/>); // for React Component
