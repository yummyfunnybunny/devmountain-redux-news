import axios from 'axios';

const initialState = {
  loading: false,
  articles: [],
};

const requestArticles = async (dispatch) => {
  dispatch({ type: 'PENDING' });

  let articles;
  try {
    articles = await axios.get('/api/reddit');
  } catch (err) {
    console.log(err);
  }

  dispatch({ type: 'REQUEST_ARTICLES', payload: articles.data });
};

export default function redditReducer(state = initialState, action) {
  switch (action.type) {
    case 'PENDING':
      return { ...state, loading: true };
    case 'REQUEST_ARTICLES':
      return { ...state, loading: false, articles: action.payload };
    default:
      return state;
  }
}

export { requestArticles };
