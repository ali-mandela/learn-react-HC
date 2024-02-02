// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// const user = 6+5; // var injection after as its text parameter in React.createElement

// const reactElement = {
//   type:'a',
//   props:{
//       href:"https://looka.com/",
//       target:'_blank'
//   },
//   children:'click me to visit looka'
// }

// const anotherElement = (
//   <a href='http://looka.com'>Visit Looks</a>
// )

// const reactElement = React.createElement('a',{href:"http://looka.com", target :'_blank'}, 'Ckick me to see looka.com - - ',user)

ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
  // reactElement

)

