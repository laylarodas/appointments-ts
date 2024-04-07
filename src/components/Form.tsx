import { useForm } from 'react-hook-form'
import { Error } from './Error';

export const Form = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const registerPatient = () => {
        console.log('Registering Patient')
    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Pet Monitoring Form</h2>

            <p className="text-xl mt-5 text-center mb-10">
                Add Pets and {''}
                <span className="text-indigo-600 font-bold">Administration</span>
            </p>

            <form
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
                noValidate
                onSubmit={handleSubmit(registerPatient)}
            >
                <div className="mb-5">
                    <label htmlFor="name" className="text-sm uppercase font-bold">
                        Pet Name
                    </label>
                    <input
                        id="name"
                        className="w-full p-3  border border-gray-100"
                        type="text"
                        placeholder="Insert Pet Name"
                        {...register('name', { required: 'The name field is required' })}

                    />
                    {errors.name && (
                        <Error>{errors.name.message?.toString()}</Error>
                    )}

                </div>

                <div className="mb-5">
                    <label htmlFor="caretaker" className="text-sm uppercase font-bold">
                        Caretaker
                    </label>
                    <input
                        id="caretaker"
                        className="w-full p-3  border border-gray-100"
                        type="text"
                        placeholder="Owner's Name"
                        {...register('caretaker', { required: 'The caretaker field is required' })}
                    />
                    {errors.caretaker && (
                        <Error>{errors.caretaker.message?.toString()}</Error>
                    )}
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="text-sm uppercase font-bold">
                        Email
                    </label>
                    <input
                        id="email"
                        className="w-full p-3  border border-gray-100"
                        type="email"
                        placeholder="Owner's Email"
                        {...register("email", {
                            required: "The email field is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Email is invalid'
                            }
                          })} 
                    />
                    {errors.email && (
                        <Error>{errors.email.message?.toString()}</Error>
                    )}
                </div>

                <div className="mb-5">
                    <label htmlFor="date" className="text-sm uppercase font-bold">
                        Date
                    </label>
                    <input
                        id="date"
                        className="w-full p-3  border border-gray-100"
                        type="date"
                        {...register('date', { required: 'The date field is required' })}
                    />
                    {errors.date && (
                        <Error>{errors.date.message?.toString()}</Error>
                    )}
                </div>

                <div className="mb-5">
                    <label htmlFor="symptoms" className="text-sm uppercase font-bold">
                        Symptoms
                    </label>
                    <textarea
                        id="symptoms"
                        className="w-full p-3  border border-gray-100"
                        placeholder="Describe the Symptoms of the Pet"
                        {...register('symptons', { required: 'The symptoms field is required' }
                    )}
                    />
                    {errors.symptons && (
                        <Error>{errors.symptons.message?.toString()}</Error>
                    )}
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value='Add Pet &rarr;'
                />
            </form>
        </div>
    )
}
