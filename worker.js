function processData({ data }) {
  if(!Array.isArray(data)) {
    postMessage("Invalid data")
    return
  }
  const sum = data.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
  if(isNaN(sum)) {
    postMessage("Invalid data")
    return
  }
  postMessage(sum);
}

onmessage = processData;