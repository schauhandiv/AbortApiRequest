// ARTICLE: https://medium.datadriveninvestor.com/aborting-cancelling-requests-with-fetch-or-axios-db2e93825a36
// SOURCE CODE FROM: https://github.com/devAbhimanyu/AbortApiRequest
import React, { useState, useEffect } from "react";
import { hitApi } from "./apis/api";
import axios from "axios";
import { getReq, postReq, postReqAbort } from "./apis/axiosInstance";
import "./App.css";

function App() {
  const [fetchRes, setFetchRes] = useState("");
  const [axiosRes, setAxiosRes] = useState("");
  const [fetchClick, setFetchClick] = useState(true);
  const [axiosClick, setAxiosClick] = useState("");
  const [axiosResPost, setAxiosResPost] = useState("");
  const [axiosClickPost, setAxiosPostClick] = useState("");
  const [axiosResPostAbort, setAxiosResPostAbort] = useState("");
  const [axiosClickPostAbort, setAxiosPostClickAbort] = useState("");

  // fetch api GET
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setFetchRes("fetch request created");
    hitApi(signal).then((res) => {
      setFetchRes(res);
    });
    return () => {
      controller.abort();
    };
  }, [fetchClick]);

  // axios api GET
  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();
    setAxiosRes("axios request created");
    getReq(source).then((res) => {
      setAxiosRes(res);
    });
    return () => {
      source.cancel("axios request cancelled");
    };
  }, [axiosClick]);

  // axios api POST (with CancelToken)
  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();
    setAxiosResPost("axios POST request created (CancelToken)");
    postReq(source).then((res) => {
      setAxiosResPost(res);
    });
    return () => {
      source.cancel("axios POST request cancelled");
    };
  }, [axiosClickPost]);
  
  // axios api POST (with AbortController)
  useEffect(() => {
    const controller = new AbortController();
    setAxiosResPostAbort("axios POST request created (AbortController)");
    postReqAbort(controller).then((res) => {
      setAxiosResPostAbort(res);
    });
    return () => {
      controller.abort();
    };
  }, [axiosClickPostAbort]);

  return (
    <div className="App">
    <div style={{ padding: '20px', margin:'auto', width:'600px'}}>
      <h2>Cancel Request</h2>
      <h5><i>(Each request takes 5 seconds to process)</i></h5>
    </div>
      <div style={{backgroundColor: 'gainsboro', padding: '20px', margin:'auto', width:'600px'}}>
        <p>This is using fetch GET (AbortController)</p>
        <p>The response is = {fetchRes}</p>
        <button type="button" onClick={() => setFetchClick(!fetchClick)}>
          {fetchRes.includes('request created') ? "CANCEL Request" : "Create Request"}
        </button>
      </div>
      <div style={{backgroundColor: 'powderblue', padding: '20px', margin:'auto', width:'600px'}}>
        <p>This is using Axios GET (CancelToken)</p>
        <p>The response is = {axiosRes}</p>
        <button type="button" onClick={() => setAxiosClick(!axiosClick)}>
          {axiosRes.includes('request created') ? "CANCEL Request" : "Create Request"}
        </button>
      </div>
      <div style={{backgroundColor: 'lavender', padding: '20px', margin:'auto', width:'600px'}}>
        <p>This is using Axios POST (CancelToken)</p>
        <p>The response is = {axiosResPost}</p>
        <button type="button" onClick={() => setAxiosPostClick(!axiosClickPost)}>
          {axiosResPost.includes('request created') ? "CANCEL Request" : "Create Request"}
        </button>
      </div>
      <div style={{backgroundColor: 'pink', padding: '20px', margin:'auto', width:'600px'}}>
        <p>This is using Axios POST (AbortController)</p>
        <p>The response is = {axiosResPostAbort}</p>
        <button type="button" onClick={() => setAxiosPostClickAbort(!axiosClickPostAbort)}>
          {axiosResPostAbort.includes('request created') ? "CANCEL Request" : "Create Request"}
        </button>
      </div>
    </div>
  );
}

export default App;
