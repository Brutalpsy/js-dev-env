export default function getBaseUrl() {
  // Note: Replace the production Heroku URL below with your URL.
  return getQueryStringParameterByName("useMockApi")
    ? "http://localhost:3001/"
    : "https://agile-depths-43606.herokuapp.com/";
}

const getQueryStringParameterByName = (name, url) => {
  if (!url) url = window.location.href;
  name = name.replace(/[[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
};
