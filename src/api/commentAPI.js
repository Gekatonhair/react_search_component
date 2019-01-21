//import { resolve } from "url";

let commentAPI = {};

let getPromiseFetch = (type, url, request) => {
    const options = {
        method: type,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    if (request) {       
        options.body = JSON.stringify(request)
    }

    return new Promise((resolve, reject) => {
        fetch(url, options)
            .then((response) => response.json())
            .then((response) => {                 
                resolve(response);
            })
            .catch((err) => {
                reject(err);
            })
    })
}

commentAPI.getComments = () => {
    return getPromiseFetch("GET", "/api/getComments");
};

commentAPI.addComment = (commentData) => {
    return getPromiseFetch("POST", "/api/addComment", {commentData});
};


commentAPI.deleteComment = (commentId) => {   
    return getPromiseFetch("POST", "/api/deleteComment", {commentId: commentId});
};


export default commentAPI;


