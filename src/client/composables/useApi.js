import { ref } from 'vue'
import api from '@/util/api.js'

export function useApi() {
  
  let apiLoading = ref(false)
  let apiData = ref(null)
  let apiError = ref(false)
  let apiMessage = ref('')
  let apiStatus = ref(0)
  
  const apiCall = async (reqType='get', reqUrl='', reqData={}) => {
    
    apiLoading.value = true
    apiData.value = null
    apiError.value = false
    apiMessage.value = ''
    apiStatus.value = 0

    let response = null
    
    try { 
      if (reqType === 'get') {
        response = await api.get(reqUrl)
      } else if(reqType === 'post') {
        response = await api.post(reqUrl, reqData)
      } else if(reqType === 'patch') {
        response = await api.patch(reqUrl, reqData)
      }

      apiData.value = response.data
      apiStatus.value = response.status
      if (response.data?.message) apiMessage.value = response.data.message
    
    } catch (err) {

      console.log(err)
      apiError.value = true
      apiStatus.value = err.status
      if( err.response?.data?.message ) {
        apiMessage.value = err.response.data.message
        apiMessage.value = ''
      } else{
        apiMessage.value = err
        apiMessage.value = ''
      }

    } finally {
      apiLoading.value = false
    }
  }

  return { apiCall, apiData, apiError, apiLoading, apiMessage, apiStatus }
}
