
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { useApi } from '@/composables/useApi.js'
const { apiCall, apiData, apiError, apiLoading, apiMessage, apiStatus } = useApi()

export const usePageStore = defineStore('page', () => {
	
	// === STATE ===
	const page = ref({
		id: null,
		title: '',
		topics: [],
		sections: []
	})

	const messages = ref({
		page: null,
		topics: null
	})

	
	// === SETTERS ===
	const addTopic = (topic) => {
		page.value.topics.push(topic)
	}

	const clearMessages = () => {
		const newEmptyObj = Object.fromEntries(
      Object.keys(messages.value).map(key => [key, ''])
    )
    messages.value = newEmptyObj
	}

	const removeTopic = (index) => {
		page.value.topics.splice(index, 1)
	}

	const setMessage = (messageType) => {
		clearMessages()
		messages.value[messageType] = {
			message: apiMessage.value,
			status: apiStatus.value
		}
	}

	const setPage = (pageData) => {
		page.value = pageData
	}


	// === API CALLS ===
	const addPageTopic = async(topic) => {
		await apiCall('post', `pages/${page.value.id}/topics/${topic.id}`)
		apiError.value ? setMessage('topics') : addTopic(topic)
	}

	const getPageData = async (pageId) => {
		await apiCall('get', 	`pages/${pageId}`)
		apiError.value ? setMessage('page') : setPage(apiData.value.page)
	}

	const removePageTopic = async(index, topic) => {
		clearMessages()
		await apiCall('delete', `pages/${page.value.id}/topics/${topic.id}`)
		apiError.value ? setMessage('topics') : removeTopic(index)
	}

	


	// === RETURN AVAILABLE METHODS ===
	return { page, messages, addPageTopic, getPageData, removePageTopic }

});




// {id: 1, order: 1, title: 'Section 1', blocks: [
// 	{id: 4, type: 'editor', content: '<p>HTML Content from WYSIWYG #1 here</p>'},
// 	{id: 5, type: 'title', content: 'Section 1 Title'},
// 	{id: 6, type: 'editor', content: '<p>HTML Content from WYSIWYG #2 here</p>'},
// ]},
// {id: 2, order: 2, title: 'Section 2', blocks: [
// 	{id: 7, type: 'editor', content: '<p>HTML Content from WYSIWYG #3 here</p>'},
// 	{id: 8, type: 'title', content: 'Section 2 Title'},
// 	{id: 9, type: 'editor', content: '<p>HTML Content from WYSIWYG #4 here</p>'},
// ]},
// {id: 3, order: 3, title: 'Section 3', blocks: [
// 	{id: 10, type: 'editor', content: '<p>HTML Content from WYSIWYG #5 here</p>'},
// 	{id: 11, type: 'title', content: 'Section 3 Title'},
// 	{id: 12, type: 'editor', content: '<p>HTML Content from WYSIWYG #6 here</p>'},
// ]}