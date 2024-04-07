import  { Form }  from "./components/Form"
import { Header } from "./components/Header"
import { List } from "./components/List"

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
    </>
  )
}

export default App
