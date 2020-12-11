import axios from 'axios';
import Toast from 'react-native-simple-toast';
export const Request = {
  async get(url) {
    return new Promise(async (rs, rj) => {
      try {
        let header = await this.header();
        rs(await header.get(url));
      } catch (error) {
        Toast.show('general.error');
      }
    });
  },

  async post(url, json) {
    return new Promise(async (rs, rj) => {
      try {
        let header = await this.header();
        rs(await header.post(url, json));
      } catch (error) {
        Toast.show('general.error');
      }
    });
  },
};
