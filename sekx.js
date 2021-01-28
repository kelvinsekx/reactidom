function ENSURE_IT_IS_VALID_ATTRIBUTE(attributeName) {
  return ["class", "id", "style", "contenteditable", "onclick"].includes(
    attributeName
  );
}

function createAttributable(node, obj) {
  //let propState = []
  if (obj == null) {
    return "sola";
  }
  let result = Object.entries(obj);
  for (let each of result) {
    const [attributeName, value] = each;
    // check if it not valid attribute, if yes set it as custom attribute
    const isCustomTAG = !ENSURE_IT_IS_VALID_ATTRIBUTE(attributeName);
    if (isCustomTAG) {
       return value;
    } else {
      if (value == null) {
        node.removeAttribute(attributeName);
      }else{
        node.setAttribute(attributeName, value);
      }
    }
  }
}

function elt(type, attribute = {}, ...children) {
  elt.prototype.props = {}
  let node = document.createElement(type);
  let PropState = createAttributable(node, attribute);
  // console.log(PropState)
  for (let child of children) {
    // if it an array, evaluate it and pipe it to
    // to the parent node

    // else check if it a string or another function
    // and PIPE to the node
    try {
      if (Array.isArray(child)) {
        const [...arraychild] = [...child];
        for (let child of arraychild){
          node.appendChild(child);
        }
      }else{
         if (typeof child == "string") {
          node.appendChild(document.createTextNode(child))
        }else if(typeof child == "number"){
          node.appendChild(document.createTextNode(child));
        }else{
          node.appendChild(child)
        }
      }
    } catch (error) {
      console.error('ReactiDOM err: something wrong : your argument cannot be rendered.\nYou could be rendering an "object" which doesnot fit interface. Whatever, please kindly cross-check your argument.');
    }
  }
  return node;
}

function createDom(Element, NODE) {
  if (typeof Element === "string") {
    Element = document.getElementById(Element);
  }

  let nn = Element.appendChild(NODE);
  console.log(nn);
  return nn;
}

function REPLACE_EXISTING_ELEMENT(Element, newNode) {
  return Element.childNodes[0].replaceWith(newNode);
}

function render(Element, NODE) {
  /**
   ## After we append it to the DOM;
   ## We check if the DOM is mounted before,
   ## if true,  
   ## We simply update the DOM
   */
  if (Element.children.length < 1) {
    createDom(Element, NODE);
    return;
  }
  if (Element.children.length >= 1) {
    /**  
    ## This :
    ## Element.parentNode.replaceChild(NODE, Element.firstChild);
    ## was the old way and it is problematic. At 
    ## least for me.
    ## You can help me with why it didnot work.
    ## YOUR answer would be availbale in this comment with
    ## due attribution
    */
    /**
     ## If the Old node and New node is same 
     ## Do nothing
     */
    if(Element.childNodes[0].isEqualNode(NODE)){
      return;
    }
    REPLACE_EXISTING_ELEMENT(Element, NODE);
    return;
  }
}
