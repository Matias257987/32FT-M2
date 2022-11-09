import { 
    GET_MOVIES, 
    GET_MOVIE_DETAIL, 
    ADD_MOVIE_FAVORITE, 
    REMOVE_MOVIE_FAVORITE, 
} from '../actions';

const initialState = {
    movies: [],
    favorite: [],
    movieDetail: {}
};

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_MOVIES:
            return {
                ...state,
                movies: payload.Search,
            };
        case GET_MOVIE_DETAIL:
            return {
                ...state,
                movieDetail: payload,
            };
        case ADD_MOVIE_FAVORITE:
            return {
                ...state,
                favorite: [...state.favorite, payload],
            };
        case REMOVE_MOVIE_FAVORITE:
            return {
                ...state,
                favorite: state.favorite.filter((movie) => movie.id !== payload),
            };
        default:
            return { ...state };
    };
};

export default rootReducer;
