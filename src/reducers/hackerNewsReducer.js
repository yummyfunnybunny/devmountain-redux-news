import axios from 'axios';

const initialState = {
  loading: false,
  articles: [],
};

const requestArticles = async (dispatch) => {
  // set pending state
  dispatch({ type: 'PENDING' });

  // make get request
  let articles;
  try {
    articles = await axios.get('/api/hacker-news');
  } catch (err) {
    console.log(err);
  }

  // set request_articles state with articles payload
  dispatch({ type: 'REQUEST_ARTICLES', payload: articles.data });
};

export default function hackerNewsReducer(state = initialState, action) {
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
