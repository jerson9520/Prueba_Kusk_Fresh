// eslint-disable-next-line react/prop-types
export const Search = ({ handleInputChange, rightIcon }) => {
  return (
    <div className="relative">
      <input 
        type="search" 
        id="default-search" 
        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:bg-orange-50 focus:border-orange-400 dark:border-orange-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-orange-400" 
        placeholder="Search by name" 
        required 
        onChange={handleInputChange} 
      />
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
      </div>
      <div className="absolute inset-y-0 end-0 flex items-center pe-3 cursor-pointer">
        {rightIcon}
      </div>
    </div>
  )
}
