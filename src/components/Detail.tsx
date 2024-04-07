import { toast } from 'react-toastify'
import { Patient } from "../types"
import { DetailItem } from "./DetailItem"
import { usePatientStore } from "../store"

type DetailProps = {
    patient: Patient
    
}

export const Detail = ({patient}: DetailProps) => {

    const deletePatient = usePatientStore(state => state.deletePatient);
    const getPatientById = usePatientStore(state => state.getPatientById);

    const handleClick = () => {
        deletePatient(patient.id)
        toast.error('Patient Deleted Successfully')
    }

  return (
    <div className="mx-5 my-10 px-5 py-5 bg-white rounded-xl shadow-md">
        <DetailItem label={"ID"} data={patient.id}/>
        <DetailItem label={"Name"} data={patient.name}/>
        <DetailItem label={"Caretaker"} data={patient.caretaker}/>
        <DetailItem label={"Email"} data={patient.email}/>
        <DetailItem label={"Date"} data={patient.date.toString()}/>
        <DetailItem label={"Symptoms"} data={patient.symptoms}/>

        <div className="flex flex-col lg:flex-row justify-end gap-1">
            <button 
                type="button"
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-8 rounded mt-5"
                onClick={() => getPatientById(patient.id)}
            >
                Edit
            </button>
            <button 
                type="button"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded mt-5"
                onClick={handleClick}
            >
                Delete
            </button>
        </div>
    </div>
  )
}
