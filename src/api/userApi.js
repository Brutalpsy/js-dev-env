import "whatwg-fetch";
import getBaseUrl from "./baseUrl";

const baseUrl = getBaseUrl();

export const getUsers = () => get("users");
export const deleteUser = (id) => del(`users/${id}`);

const get = (url) => fetch(baseUrl + url).then(onSuccess, onError);
const del = (url) =>
  fetch(new Request(baseUrl + url, { method: "DELETE" })).then(
    onSuccess,
    onError
  );
const onSuccess = (response) => response.json();
const onError = (error) => console.log(error); // eslint-disable-line no-console
