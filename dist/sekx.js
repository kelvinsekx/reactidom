var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function ENSURE_IT_IS_VALID_ATTRIBUTE(attributeName) {
    return ["class", "id", "style", "contenteditable", "onclick"].includes(attributeName);
}
function createAttributable(node, obj) {
    //let propState = []
    if (obj == null) {
        return "sola";
    }
    var result = Object.entries(obj);
    for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
        var each = result_1[_i];
        var attributeName = each[0], value = each[1];
        // check if it not valid attribute, if yes set it as custom attribute
        var isCustomTAG = !ENSURE_IT_IS_VALID_ATTRIBUTE(attributeName);
        if (isCustomTAG) {
            return value;
        }
        else {
            if (value == null) {
                node.removeAttribute(attributeName);
            }
            else {
                node.setAttribute(attributeName, value);
            }
        }
    }
}
function elt(type, attribute) {
    if (attribute === void 0) { attribute = {}; }
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    //elt.prototype.props = {}
    var node = document.createElement(type);
    //let PropState = createAttributable(node, attribute);
    // console.log(PropState)
    for (var _a = 0, children_1 = children; _a < children_1.length; _a++) {
        var child = children_1[_a];
        /** if child[ren] is an array, evaluate it and pipe it to
          to the parent node.
          else check if it a string or another function
         and PIPE to the node*/
        try {
            /** if child[ren] is an Array(), collect each child and PIPE */
            if (Array.isArray(child)) {
                var arraychild = __spreadArrays(child).slice(0);
                for (var _b = 0, arraychild_1 = arraychild; _b < arraychild_1.length; _b++) {
                    var child_1 = arraychild_1[_b];
                    node.appendChild(child_1);
                }
            } /**Since it isnot a Array, handlethem the best way ReactiDOM can. */
            else {
                if (typeof child == "string") {
                    node.appendChild(document.createTextNode(child));
                }
                else if (typeof child == "number") {
                    node.appendChild(document.createTextNode(String(child)));
                }
                else {
                    node.appendChild(child);
                }
            }
        }
        catch (error) {
            console.error('ReactiDOM err: something wrong : your argument cannot be rendered.\nYou could be rendering an "object" which doesnot fit ReactiDom present interface. Whatever, please kindly cross-check your argument.');
        }
    }
    return node;
}
/** This function tries to simulate reactDOM as much as possible except for THE-VIRTUAL-DOM */
function REPLACE_EXISTING_ELEMENT(Element, newNode) {
    return Element.childNodes[0].replaceWith(newNode);
}
export { REPLACE_EXISTING_ELEMENT, elt, createAttributable, ENSURE_IT_IS_VALID_ATTRIBUTE };
//# sourceMappingURL=sekx.js.map