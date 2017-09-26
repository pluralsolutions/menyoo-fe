import Vue from 'vue';


const get = (url, headers = {}) => (
  Vue.http.get(url, { headers }).then(response => (
    response.json()
  ), () => {
    Promise.reject();
  })
);

const post = (url, body) =>
    Vue.http.post(url, body).then(response => (
      Promise.resolve(response.body)
    ), (err) => {
      Promise.reject(err);
    });

export default {
  get,
  post,
};
