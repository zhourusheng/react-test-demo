import React from 'react'

React.createElement(
  "div", {
    className: "shopping-list"
  }, 
  React.createElement("h1", null, "Shopping List for "), 
  React.createElement("ul", null, 
    React.createElement("li", null, "Instagram"), 
    React.createElement("li", null, "WhatsApp"), 
    React.createElement("li", null, "Oculus")
  )
)