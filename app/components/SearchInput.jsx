export const SearchInput = () => {
  return (
    <div className="p-3 bg-gray-200">
      <div className="relative">
        <input
          type="search"
          placeholder="Search..."
          className="w-full pl-4 pr-10 py-2 border-2 border-gray-400 bg-white focus:outline-none focus:border-blue-300"
          style={{ boxShadow: 'inset 1px 1px 0px 0px white, inset -1px -1px 0px 0px gray' }}
        />
        <button
          className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-gray-300 border border-gray-400 hover:bg-gray-400 px-3 py-1"
          style={{ boxShadow: '1px 1px 0px 0px gray, -1px -1px 0px 0px white' }}
        >
          🔍
        </button>
      </div>
    </div>
  )
}