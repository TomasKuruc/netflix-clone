const AxiosCommon = {
    applyRequestInterceptor: (instance, setError, store) => {
        instance.interceptors.request.use(function (config){
            const session = store.getState().session;
            if (session && session.token) {
                config.headers["Authorization"] = "Token " + session.token;
            }
            return config;
        }, function (error) {
            // Do something with request error
            return Promise.reject(error);
        });
    },
    applyResponseInterceptor: (instance, showMessageFunction, store) => {
        // Add a response interceptor
        instance.interceptors.response.use(function (response) {
            // Any status code that lie within the range of 2xx cause this function to trigger
            // Do something with response data
            return response;
        }, function (error) {
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error
            return Promise.reject(error);
        });
    }


}

export default AxiosCommon;