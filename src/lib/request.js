import Vue from 'vue';


const get = url =>
    Vue.http.get(url).then(response => (
      response.json()
    ), () => {
      Promise.reject();
    });

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
