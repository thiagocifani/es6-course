const myPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => { resolve('OK') }, 2000);
});

myPromise().then(response => {
  console.log(response);
})
.catch(err => {
  console.log('error');
});

async function executePromise() {
  const response = await myPromise();

  console.log(response);
}

const executePromiseArrowFunction = async () => {
  const response = await myPromise();

  console.log(response);
}

executePromiseArrowFunction();
executePromise(); 

import axios from 'axios';

class Api {
  static async getUserInfo(username) {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      console.log(response);
    } catch(err) {
      console.warn('Api Error');
    }
  }
}

Api.getUserInfo('thiagocifani');
Api.getUserInfo('thiagocifani2');