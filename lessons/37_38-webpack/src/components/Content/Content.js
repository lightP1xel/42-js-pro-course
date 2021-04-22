import { createComponent } from 'utils/components'
import './Content.css'
import catUrl from './cat.jpeg'

const Content = () => createComponent(`
  <main class="content">
    <h1>My app</h1>
    <p>Some text with custom font</p>
    <img src="${catUrl}" />
  </main>
`)

export default Content
