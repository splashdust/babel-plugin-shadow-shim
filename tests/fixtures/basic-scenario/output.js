__SDOMRef__myUniqueId(document, "querySelector").querySelector("#sel");
__SDOMRef__myUniqueId(document, "querySelectorAll").querySelectorAll(".sel");
__SDOMRef__myUniqueId(document, "getElementById").getElementById("id");
__SDOMRef__myUniqueId(doc.ref.in.object, "querySelector").querySelector("#sel");
wrappedInFunctionCall(
  __SDOMRef__myUniqueId(document, "querySelector").querySelector("#sel")
);
function __SDOMRef__myUniqueId(ogDOMRef, methodName) {
  // shadow-shim-ignore
  const shadowRoot = document.querySelector("#shadow")?.shadowRoot ?? document;
  if (methodName === "getElementById" || ogDOMRef === document) {
    return shadowRoot;
  } // If we're not doing getElementById and the original ref is not 'document',
  // then we'll return the original ref here.
  return ogDOMRef;
}