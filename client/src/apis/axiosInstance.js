import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:4001",
});

export const getReq = async (source) => {
  console.log('in getReq');
  try {
    const { data } = await instance.get("/", {
      cancelToken: source.token,
    });
    return data;
  } catch (err) {
    console.log('in getReq catch error', err);
    if (axios.isCancel(err)) {
      console.log('..........get cancelled..............');
      return `get axios request cancelled. `;
    }
    return err;
  }
};

// post request (CancelToken)
export const postReq = async (source) => {
  console.log('in postReq ', Date.now());
  try {
    const { data } = await instance.post("/", {mydata: 'post me data', time: Date.now()}, {
      cancelToken: source.token,
    });
    return data;
  } catch (err) {
    console.log('in cancel POST catch error',  Date.now(), err);
    if (axios.isCancel(err)) {
      console.log('..........POST cancelled..............');
      return `post axios request cancelled.`;
    }
    return err;
  }
};

// post request (AbortController)
export const postReqAbort = async (controller) => {
  console.log('in postReqAbort ',  Date.now());
  try {
    const { data } = await instance.post("/", {mydata: 'abort post data', time: Date.now()}, {
      signal: controller.signal
    });
    return data;
  } catch (err) {
    console.log('in abort catch error',  Date.now(), err);
    if (axios.isCancel(err)) {
      console.log('..........POST aborted..............');
      return `post axios request aborted.`;
    }
    return err;
  }
};
