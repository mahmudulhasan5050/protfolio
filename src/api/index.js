import axios from 'axios';

const api = axios.create({ baseURL: 'https://api.github.com/users/mahmudulhasan5050' });
const readmeApi = axios.create({baseURL: 'https://api.github.com/repos/mahmudulhasan5050'})

export const getProjects = async() => await api.get('/repos');
export const getReadMeContent = async(projectName) => await readmeApi.get(`/${projectName}/contents/README.md`)