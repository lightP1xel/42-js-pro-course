import { createComponent } from 'utils/components'
import './Contacts.css'
import catComputerUrl from './cat-computer.jpeg'

const Contacts = () => createComponent(`
  <main class="contacts">
    <h1>Contacts</h1>
    <p>Some info about site</p>
    <img src="${catComputerUrl}" />
  </main>
`)

export default Contacts
