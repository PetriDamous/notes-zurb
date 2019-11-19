// Filter
const filters = {
    searchNotes: '',
    sortBy: 'byEdit',

}

const getFilters = () => filters;

const setFilters = (filterValue) => {
    switch (filterValue) {
        case 0:
            filters.sortBy = 'byEdit';
            break;
        
        case 1:
            filters.sortBy = 'byCreated';
            break;
        
        case 2:
            filters.sortBy = 'byAlpha';
            break;

        default:
            filters.searchNotes = filterValue;
    }  
}

export { getFilters, setFilters };
