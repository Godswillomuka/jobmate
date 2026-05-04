import api from './api';
export const getStats = (role) => api.get(`/dashboard/${role}/stats`);
export const getActivity = (role) => api.get(`/dashboard/${role}/activity`);