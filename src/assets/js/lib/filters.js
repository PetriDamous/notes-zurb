// Filter
const filters = {
    searchNotes: ''
}

export const getFilters = () => filters;

export const updateFilters = (search) => {

    if (typeof search === 'string') {
        filters.searchNotes = search;
        console.log(filters.searchNotes)
    }
}


