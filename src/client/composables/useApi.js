import { ref } from 'vue';
import api from '@/util/api.js';

export function useApi() {
  const loading = ref(false);
  const resData = ref(null);
  const resError = ref(null);

  const callApi = async (reqType='get', reqUrl='', reqData={}) => {
    loading.value = true;
    let response = null;
    try { 
      if (reqType === 'get') {
        response = await api.get(reqUrl);
      } else{
        response = await api.post(reqUrl, reqData);
      }
      resData.value = response.data;
    } catch (err) {
      resError.value = err;
    } finally {
      loading.value = false;
    }
  };

  return { callApi, loading, resData, resError };
}
