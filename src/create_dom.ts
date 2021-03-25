export default function createDom(Element:any, NODE:String) {
    if (typeof Element === "string") {
      Element = document.getElementById(Element);
    }
    let nn = Element.appendChild(NODE);
    //console.log(nn);
    return nn;
}