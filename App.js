const parent = React.createElement(
    'div',
    {id: "parent"},
    [React.createElement(
        'div',
        {id:"Child"},
        [React.createElement("h1",{},"I'm an h1 tag !"),React.createElement("h2",{},"I'm an h2s tag !")]
    ),
    React.createElement(
        'div',
        {id:"Child2"},
        [React.createElement("h1",{},"I'm an h1 tag !"),React.createElement("h2",{},"I'm an h2s tag !")]
    )
]
);

// const heading = React.createElement("h1", { id: "heading" }, "Hello World from React !");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);