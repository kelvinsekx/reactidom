<!-- 
## Sekx Js is heavily influenced by react
## Most concept are transferable
## The only difference is that we don't work 
## with virtual DOM here.
## instead we try to create even better performance
## with our DOM

## Copy &copy kelvinsekx and friends.
 -->

# Rendering Element with Sekx JS

Elements are the smallest building blocks of any app and sekx is not an exception
An element can be described with the elt function
elt(htmlTAG, props, childrenElement)

Rendering an sekx up element into the DOM
<div id="root"></div>

We expect whatever element you provide be mounted, to be flagged with id, however you can can pass any valid element

We call our root element ``Dummy`` in Sekx.