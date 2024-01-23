
import Header from "./components/Header"
import AppForm from "./components/Form"
import PatientsList from "./components/PatientsList"

function App() {

  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <AppForm/>
      <PatientsList/>
    </div>
  )

}

export default App
