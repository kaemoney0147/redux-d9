export const addFavourites = (job) => {
  return {
    type: 'ADD_FAVORITE-COMPANY',
    payload: job,
  }
}

export const deleteFavourites = (job) => {
  return {
    type: 'REMOVE_FROM_FAVS',
    payload: job,
  }
}

export const SEARCH_JOBS = 'SEARCH_JOBS'

// action creator/builder, this can have any number of parameters
export const  getJobList= (query) => {
  // this is the thunk action, always 2 parameters
    return async (dispatch, getState) => {
      console.log('Fetching the jobs from the API...')
      try {
        let baseEndpoint =  "https://strive-benchmark.herokuapp.com/api/jobs?search="   
            const response = await fetch(baseEndpoint+ query + "&limit=20")
            if (response.ok) {
              let data = await response.json();
              const fetchJobs=data.data
              // {data}

              dispatch({
                type: SEARCH_JOBS,
                payload: fetchJobs, // the reducer is just being given
                // the final result, the array of books! so it cannot fail :)
              })
            } else {
              alert("Error fetching results");
            }
            } catch (error) {
            console.log(error);
          }
    }
}