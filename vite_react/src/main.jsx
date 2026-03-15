import React from "react";
import  ReactDom from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App|chai aur code</h1>
    </div>
  )
}

const anotherelement=(
  <a href="https://google.com" target='_blank'>visit google</a>
)
const anotherUser="Jayanta React"


const reactelement = React.createElement(
  'div',
  {},
  React.createElement(
    'a',
    {href:'https://youtube.com', target:'_blank'},
    'click me to visit youtube'
  ),
  anotherelement
)
ReactDom.createRoot(document.getElementById('root')).render(
 
  <>
  reactelement,
  <App/>
  </>
)