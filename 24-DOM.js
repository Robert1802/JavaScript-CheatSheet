// DOM - Document Object Model

// The Document Object Model (DOM) is the structure of a webpage's code.
// There are many different ways to build and alter HTML elements with JavaScript (called nodes). 

// Node Properties: Let us first take a look at some of the properties of a JavaScript DOM node:
    attributes       // Gets a live list of all the characteristics associated with an element.
    baseURI          // Returns an HTML element's absolute base URL.
    childNodes       // Returns a list of the child nodes of an element.
    firstChild       // Returns the element's first child node.
    lastChild        // An element's final child node
    nextSibling      // Returns the next node in the same node tree level as the current node.
    nodeName         // Returns a node's name.
    nodeType         // Returns the node's type.
    nodeValue        // Sets or returns a node's value.
    ownerDocument    // This node's top-level document object.
    parentNode       // Returns the element's parent node.
    previousSibling  // Gets the node that comes before the current one.
    textContent      // Sets or returns a node's and its descendants' textual content.

// Node Methods: Let us now take a look at some of the methods provided by JavaScript to manipulate these nodes in the DOM:
    appendChild() // Adds a new child node as the last child node to an element.
    cloneNode() // Is a function that duplicates an HTML element.
    compareDocumentPosition() // Compares two elements' document positions.
    getFeature() // Returns an object that implements the APIs of a feature.
    hasAttributes() // If an element has any attributes, it returns true; otherwise, it returns false.
    hasChildNodes() // If an element has any child nodes, it returns true; otherwise, it returns false.
    insertBefore() // Adds a new child node to the left of an existing child node.
    isDefaultNamespace() // Returns true if a given namespaceURI is the default, and false otherwise.
    isEqualNode() // Determines whether two elements are the same.
    isSameNode() // Determines whether two elements belong to the same node.
    isSupported() // Returns true if the element supports the provided feature.
    lookupNamespaceURI() // Returns the namespace URI for a specific node.
    lookupPrefix() // If the prefix for a given namespace URI is present, lookupPrefix() returns a DOMString containing it.
    normalise() // In an element, joins neighbouring text nodes and removes empty text nodes.
    removeChild() // Removes a child node from an element using the Child() method.
    replaceChild() // In an element, this function replaces a child node.

// Element Methods: Given below are some of the element methods provided by JavaScript:
    getAttribute() // Returns the value of an element node's provided attribute.
    getAttributeNS() // Returns the string value of an attribute with the namespace and name supplied.
    getAttributeNode() // Returns the attribute node supplied.
    getAttributeNodeNS() // Returns the attribute node for the specified namespace and name for the attribute.
    getElementById() // Returns an element with a specified value
    getElementsByTagName() // Returns a list of all child elements whose tag name is supplied.
    getElementsByTagNameNS() // Returns a live HTMLCollection of items belonging to the provided namespace with a certain tag name.
    hasAttribute() // If an element has any attributes, it returns true; otherwise, it returns false.
    hasAttributeNS() // Returns true or false depending on whether the current element in a particular namespace has the supplied attribute.
    removeAttribute() // Removes an element's supplied attribute.
    removeAttributeNS() // Removes an attribute from an element in a specific namespace.
    setAttributeNode() // Sets or modifies an attribute node.
    setAttributeNodeNS() // Sets a new namespaced attribute node to an element with setAttributeNodeNS()

// Input Events
    onblur // When a user leaves an input field
    onchange // When a user changes the content of an input field
    onchange // When a user selects a dropdown value
    onfocus // When input text is selected
    onselect // When user input text is selected
    onsubmit // When a user clicks the submit button
    onreset // When a user clicks the reset button
    onkeydown // When a user is pressing/holding down a key
    onkeypress // When user is pressing/holding down a key
    onkeyup // When the user releases a key
    
// Mouse Events
    onmouseover / onmousedown // When the mouse passes over an element
    onmousedown / onmouseup // When pressing/releasing a mouse button
    onmousedown // When mouse is clicked: Alert which element
    onmousedown // When mouse is clicked: Alert which button
    onmousemove / onmouseout // When moving the mouse pointer over/out of an image
    onmouseover/ onmouseout // When moving the mouse over/out of an image

// Click Events
    onclick // When button is clicked
    ondblclick // When a text is double-clicked

// Load Events
    onload // When the page has been loaded
    onload // When the image has been loaded
    onerror // When an error occurs when loading an image
    onunload // When the browser closes the document
    onresize // When the browser window is resized
