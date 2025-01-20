import { ref } from 'vue';
import api from '@/util/api.js';

export function useApi() {
  const apiLoading = ref(false);
  const apiData = ref(null);
  const apiError = ref(null);

  const apiCall = async (reqType='get', reqUrl='', reqData={}) => {
    apiLoading.value = true;
    let response = null;
    try { 
      if (reqType === 'get') {
        response = await api.get(reqUrl);
      } else{
        response = await api.post(reqUrl, reqData);
      }
      apiData.value = response.data;
    } catch (err) {
      apiError.value = err;
    } finally {
      apiLoading.value = false;
    }
  };

  return { apiCall, apiData, apiError, apiLoading };
}
