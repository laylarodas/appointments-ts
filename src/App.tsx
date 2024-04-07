import { ToastContainer } from 'react-toastify'
import  { Form }  from "./components/Form"
import { Header } from "./components/Header"
import { List } from "./components/List"
import 'react-toastify/dist/ReactToastify.css'

function App() {

  return (
    <>
      <div className="container mx-auto mt-20">
        <Header />
        <div className="mt-12 mx-4 md:mx-24 md:flex">
          <Form />
          <List />
        </div>
      </div>
      <ToastContainer autoClose={2000}/>
    </>
  )
}

export default App
