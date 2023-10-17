const baseUrl = 'https://parseapi.back4app.com/classes/Task';

export const getAllTasks = async () => {
    const response = await fetch(baseUrl, {
        method: 'Get',
        headers: {
            'X-Parse-Application-Id': 'Qt99Q7bMpGwYI36kO61nAl06FF6JgxuJZArg69wS',
            'X-Parse-REST-API-Key': 'I7GmGT9Mi4odzNHnOGtbnMNcigZEiWcpFgdXYW1W'
        }
    });
    const result = await response.json();

    return result.results;
};