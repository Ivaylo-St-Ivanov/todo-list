import * as request from './requester';

const baseUrl = 'https://parseapi.back4app.com/classes/Task';

export const getAllTasks = async () => {
    return await request.get(baseUrl);
};

export const addTask = async (task) => {
    return await request.post(baseUrl, task);
};