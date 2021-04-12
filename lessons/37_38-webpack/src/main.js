import './styles/index.css'
import Header from './components/Header'
import Content from './components/Content'
import Contacts from './components/Contacts'

const render = () => {
  const root = document.querySelector('#app')
  root.innerHTML = ''

  root.appendChild(
    Header()
  )
  if (window.location.pathname === '/home' || window.location.pathname === '/') {
    // import('./components/Content')
    //   .then(({ default: contentModule }) => {
    //     console.log(contentModule)
    //     root.appendChild(contentModule())
    //   })
    root.appendChild(
      Content()
    )
  }
  if (window.location.pathname === '/contacts') {
    root.appendChild(
      Contacts()
    )
  }
}

render()
