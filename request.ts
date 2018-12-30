import * as request from "request-promise-native";

const baseUrl = 'http://localhost:3000';
const queryString = '/';
var options = {
    uri: baseUrl + queryString,
};

const result = await request.get(options);