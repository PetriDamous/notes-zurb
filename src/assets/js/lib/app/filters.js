// Filter
const filters = {
    searchNotes: ''
}

const getFilters = () => filters;

const setFilters = (filterValue) => {

    if (typeof filterValue === 'string') {
        filters.searchNotes = filterValue;        
    }
}

export { getFilters, setFilters };
