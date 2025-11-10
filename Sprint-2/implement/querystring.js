// expect(parseQueryString("equation=x=y+1")).toEqual({ "equation": "x=y+1"});
  function parseQueryString(queryString) {
  if (queryString.length === 0) {
    return queryParams;
  }
  const index = queryString.indexOf("=");
  return {
    [queryString.slice(0, index )]: queryString.slice(index + 1 ),
  }
}

// expect(parseQueryString("equation=x=y+1")).toEqual({ "equation": "x=y+1", "equation": "x", "x":"y+1"});
function parseQueryString2(queryString) {
  if(typeof queryString !== "string"){
    return false;
  }
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("=");
  const lg = keyValuePairs.length;
  for(let i = 0 ;i<lg-1; i++){
    queryParams[keyValuePairs[i]] = keyValuePairs[i + 1];
  }
  return queryParams;
}
console.log(parseQueryString2({}));
module.exports = {
  parseQueryString,
  parseQueryString2,
};
