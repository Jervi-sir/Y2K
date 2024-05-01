export const SearchInput = () => {
  return (
    <div className="p-5 bg-gray-200">
      <div className="relative">
        <input
          type="search"
          placeholder="Search..."
          className="w-full pl-4 pr-10 py-2 border-2 border-gray-400 bg-white focus:outline-none focus:border-blue-300"
          style={{ boxShadow: 'inset 1px 1px 0px 0px white, inset -1px -1px 0px 0px gray' }}
        />
      </div>
    </div>
  )
}