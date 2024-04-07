import { usePatientStore } from '../store'
import { Detail } from './Detail'

export const List = () => {

    const patients = usePatientStore(state => state.patients)

    return (
        <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
            <h2 className='font-black text-3xl text-center'>Patient List</h2>

            {patients.length ? (
                <>
                    <p className='text-xl mt-5 mb-6 text-center'>
                        Administration of {''}
                        <span className='text-indigo-600 font-bold'>Patients and Appointments</span>
                    </p>

                    {
                        patients.map(patient => (
                            <Detail key={patient.id} patient={patient} />
                        ))
                    }
                </>
            ) : (
                <>
                    <p className='text-xl mt-5 mb-10 text-center'>
                        Add patients  {''}
                        <span className='text-indigo-600 font-bold'> And they'll appear here.</span>
                    </p>
                    <h2 className=' font-semibold text-lg text-center'>There are not patients yet.</h2>
                </>
            )}


        </div>
    )
}
