        // const heading = React.createElement("h1", {id: "heading"}, "Hello from Reacct");
        // const root = ReactDOM.createRoot(document.getElementById("root"));
        // root.render(heading);
        // const parent = React.createElement("div", {id : "parent"},
        //         React.createElement("div", {id : "child"},
        //                 React.createElement("h1", {}, "I am an h1 tag")
        //         )
        // );
        // console.log(parent);
        // const root = ReactDOM.createRoot(document.getElementById("root"));
        // root.render(parent);



        //multiple sibling elements :
//  <div id="root">
//      <div id="parent">
//              <div id="child">
//                      I am an hl tag</hl>
//                      I am an hl tag</hl>
//                      </div>
//              <div id="chi1d2">
//                      I am an h2 tag</h2>
//                      I am an h2 tag</h2>
//              </div> 
//           </div>
// </div>

        const parent = React.createElement("div", {id : "parent"},[
                React.createElement("div", {id : "child"},[
                        React.createElement("h1", {}, "I am an h1 tag"),
                        React.createElement("h1", {}, "I am an h1 tag")
                 ] ),
                        React.createElement("div", {id : "child2"},
                               [ React.createElement("h2", {}, "I am an h2 tag"),
                                React.createElement("h2", {}, "I am an h2 tag"),

        ])
        ]);
        console.log(parent);
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);