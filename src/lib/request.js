import Vue from 'vue';


const get = url =>
    Vue.http.get(url).then(response => (
      Promise.resolve(response.body)
    ), (response) => {
      console.log('ERROR', response);
    });

export default {
  get,
};
