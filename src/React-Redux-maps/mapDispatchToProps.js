import addToFavourites from '../Redux/action creators/addToFavourites';
import removeFromFavourites from '../Redux/action creators/removeFromFavourites';
import fetchRandomPosts from '../Redux/action creators/fetchRandomPosts'

export default function(dispatch) {
    return {
        addToFavourites: (post) => dispatch(addToFavourites(post)),
        removeFromFavourites: (post) => dispatch(removeFromFavourites(post)),
        fetchRandomPosts: () => dispatch(fetchRandomPosts()) 
    }
}