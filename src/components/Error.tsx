

export const Error = ({children}: {children: React.ReactNode}) => {
  return (
    <p className=" text-center my-2 bg-red-600 text-white font-bold p-2 uppercase text-xs">{children}</p>
  )
}
