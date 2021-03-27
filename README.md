# ReactiDom

ReactiDom is a dummy project to create a Javascript view framework very similar to React js. ReactiDom aims to manipulate the Dom directly instead of the Virtual Dom.


## Get Started
- elt
To create a tiDom element, the "elt" function is used. It is works just like React createElement function

`elt(tag, attribute, children)`

tag can be any valid javascript tag, and attributes can be html attributes or custom tiDom element props, children can be text or other tiDom elements created with elt.

## Hello World App

`elt('h1', null, "Hello World")`
`elt('h1', null, elt('div', null, 'Hello World'))`

- render
This is the function used to render tiDom element to the DOM

`render(element, node)`

`const HelloWorld = ()=>elt('h1', null, "Hello World")`
`render(document.body, HelloWorld)`

## currently working on
- re-rendering on changes to the DOM: mastering mutateObjectObserver in regards

Please!! Any contrarying suggestions

