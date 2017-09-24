import Vue from 'vue';


const get = url =>
    Vue.http.get(url).then(response => (
      Promise.resolve(response.body)
    ), () => {
      Promise.reject();
    });

export default {
  get,
};
