__SDOMRef__myUniqueId(document, "querySelector").querySelector("#sel");
__SDOMRef__myUniqueId(document, "querySelectorAll").querySelectorAll(".sel");
__SDOMRef__myUniqueId(document, "getElementById").getElementById("id");
__SDOMRef__myUniqueId(doc.ref.in.object, "querySelector").querySelector("#sel");
wrappedInFunctionCall(
  __SDOMRef__myUniqueId(document, "querySelector").querySelector("#sel")
);
function __SDOMRef__myUniqueId(ogDomRef, methodName) {
  // shadow-shim-ignore
  const shadowRoot = document.querySelector("#shadow")?.shadowRoot ?? document;
  if (methodName === "getElementById" || ogDomRef === document) {
    return shadowRoot;
  }
  return ogDomRef;
}