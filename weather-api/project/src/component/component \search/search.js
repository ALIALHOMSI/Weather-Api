const search = () => {
    const[search,setSearc]
 return (
    <AsyncPaginate
    placeholder="Search for the city"
    debounceTimeout=(600)
    value={search}
    />
 )   
}

export default Search;