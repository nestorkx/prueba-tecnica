import API from '@/utils/api';

export function getData() {
  return API().get('/front.json');
}

export default {
  getData,
};
