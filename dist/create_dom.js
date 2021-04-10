export default function createDom(Element, NODE) {
    if (typeof Element === "string") {
        Element = document.getElementById(Element);
    }
    var nn = Element.appendChild(NODE);
    //console.log(nn);
    return nn;
}
//# sourceMappingURL=create_dom.js.map