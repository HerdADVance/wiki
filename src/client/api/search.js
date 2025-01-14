import api from '@/api/index.js';

export const searchTopics = (data) => return api.post(`/topics/search`, data);