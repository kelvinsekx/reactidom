import  createDom from "./create_dom";
import {REPLACE_EXISTING_ELEMENT} from "./sekx"

export default function render(Element, NODE) {
    /**
     ## After we append it to the DOM;
     ## We check if the DOM is mounted before,
     ## if true,  
     ## We simply update the DOM
     */
    let elementToObserve
    if (Element.children.length < 1) {
       elementToObserve = createDom(Element, NODE);
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
      const observer = new MutationObserver(function() {
        console.log('callback that runs when observer is triggered');
    });
    observer.observe(elementToObserve, {subtree: true, childList: true});
      REPLACE_EXISTING_ELEMENT(Element, NODE);
      return;
    }
  }