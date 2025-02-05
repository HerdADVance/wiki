
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { useApi } from '@/composables/useApi.js'
const { apiCall, apiLoading, apiData, apiError } = useApi()

export const usePageStore = defineStore('page', () => {
	
	const page = ref({
		id: null,
		title: '',
		topics: [],
		sections: []
	})

	const addPageTopic = async(topic) => {
		await apiCall('post', `pages/${page.value.id}/topics/${topic.id}`)
		console.log(page.value)
		console.log(topic)
		page.value.topics.push(topic)
		return 'done'
	}

	const getPageData = async (pageId) => {
		await apiCall('get', 'pages/' + pageId)
		return apiData.value.page
	}

	const setPage = (pageData) => {
		page.value = pageData
	}

	return { page, addPageTopic, getPageData, setPage }

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