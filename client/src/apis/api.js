export const hitApi = async (signal) => {
  console.log('in hitApi');
  try {
    const response = await fetch("http://localhost:4001/", { signal });
    // const response = await fetch("http://localhost:4001/", { signal, method: 'POST', body: {fetchdata: 'fetch post data'} });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log('in hitApi catch error');
    if (err.name === "AbortError") {
      return "Request Aborted ";
    }
    return err;
  }
};
