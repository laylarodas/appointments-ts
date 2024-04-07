import { Patient } from "../types"
import { DetailItem } from "./DetailItem"

type DetailProps = {
    patient: Patient
    
}

export const Detail = ({patient}: DetailProps) => {
  return (
    <div className="mx-5 my-10 px-5 py-5 bg-white rounded-xl shadow-md">
        <DetailItem label={"ID"} data={patient.id}/>
        <DetailItem label={"Name"} data={patient.name}/>
        <DetailItem label={"Caretaker"} data={patient.caretaker}/>
        <DetailItem label={"Email"} data={patient.email}/>
        <DetailItem label={"Date"} data={patient.date.toString()}/>
        <DetailItem label={"Symptoms"} data={patient.symptoms}/>

        <div className="flex justify-end gap-3">
            <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-8 rounded mt-5">
                Edit
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded mt-5">
                Delete
            </button>
        </div>
    </div>
  )
}
