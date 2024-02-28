import { useEffect, useState } from "react";
export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
  });

  const getData = async () => {
    setState({
      ...state,
      isLoading: true,
    });

    const resp = await fetch(url);
    const respData = await resp.json();
    console.log(respData);

    setState({
      data: respData,
      isLoading: false,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    data: state.data,
    isLoading: state.isLoading,
  };
};
