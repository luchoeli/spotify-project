import {ADD_FAVS, DELETE_FAVS, SEARCH_ARTISTS_BEGIN,SEARCH_ARTISTS_SUCCESS,SEARCH_ARTISTS_FAILURE, SEARCH_ALBUMS_BEGIN, SEARCH_ALBUMS_SUCCESS,SEARCH_ALBUMS_FAILURE, SEARCH_TRACK, UPDATE_SEARCH} from '../constants.js';
import {  fetchTrackSearch } from '../api/api.js';

const EMPTY = '';

const initialState = {
            favsElements: [{
              name: 'song title',
              id: '1',
              album: 'album',
              albumImg: 'https://i.scdn.co/image/95191136789abd43fc7ad7b4ea5526eca2986c26',
              artist: 'artist'
            },
            {
              name: 'sds title',
              id: '2',
              album: 'albumf',
              albumImg: 'https://i.scdn.co/image/95191136789abd43fc7ad7b4ea5526eca2986c26',
              artist: 'artist'
            }    
            ],

            currentSearch: EMPTY,
            loading: false,
            error: null,
            currentListOfArtists:EMPTY,
            currentListOfAlbums: EMPTY,
            currentListOfTracks: EMPTY
}

function spotifyReducer(state = initialState, action) {
  switch (action.type) {
    
    case UPDATE_SEARCH: 
      return {
          currentSearch: action.input
      }

      case SEARCH_ARTISTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case SEARCH_ARTISTS_SUCCESS:
      return {
        ...state,
        loading: false,
        currentListOfArtists: action.payload.artists
      };

    case SEARCH_ARTISTS_FAILURE:

      return {
        ...state,
        loading: false,
        error: action.payload.error,
        currentListOfArtists: []
      }
     
      case SEARCH_ALBUMS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case SEARCH_ALBUMS_SUCCESS:
      return {
        ...state,
        loading: false,
        currentListOfAlbums: action.payload.albums
      };

    case SEARCH_ALBUMS_FAILURE:

      return {
        ...state,
        loading: false,
        error: action.payload.error,
        currentListOfAlbums: []
      }
    
    case SEARCH_TRACK:

        let promise3 = fetchTrackSearch(action.albumId);

        let trackSearch = []

        promise3.then(function(result) {

            for (let i = 0; i < result.items.length; i++) {

                let element = {
                  name: result.items[i].name,
                  duration: Math.trunc(result.items[i].duration / 1000), // parte entera superior
                  id: result.items[i].id
                };

                trackSearch.push(element);

            }

            console.log('---------------------------')

            for (let i = 0; i < trackSearch.length; i++) {
              console.log(trackSearch[i].name)
            }

          });

      return {
          currentListOfTracks: trackSearch
      }

    case ADD_FAVS: // añade un contenido a favoritos

          var newArray = [...state.favsElements];
          newArray.push(action.track);

          return {
            favsElements: newArray
          }
      
    case DELETE_FAVS: // elimina un contenido de favoritos

        newArray = state.favsElements.filter(item => item!==action.track) // falta comparar por algun atributo
        return {
          favsElements: newArray
        }

    default:
      return state

  }
}

export default spotifyReducer;