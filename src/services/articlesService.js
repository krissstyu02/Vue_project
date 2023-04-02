import axios from 'axios';

const loadArticles = (cancelTokenSource) => {
  return axios.get('http://localhost:10000/articles', {
    cancelToken: cancelTokenSource.token
  })
  .then(response => {
    return response.data;
  })
  .catch(error => {
    console.error(error);
    throw new Error('Ошибка загрузки статей');
  });
}

export { loadArticles };
