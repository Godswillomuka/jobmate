import api from './api';
export const getJobs = (params) => api.get('/jobs', { params });
export const postJob = (data) => api.post('/jobs', data);
export const getJob = (id) => api.get(`/jobs/${id}`);