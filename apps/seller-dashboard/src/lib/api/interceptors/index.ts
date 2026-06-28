import api from "../axios";

import {
  requestInterceptor,
  requestErrorInterceptor,
} from "./request.interceptor";

import {
  responseInterceptor,
  responseErrorInterceptor,
} from "./response.interceptor";

/*
|--------------------------------------------------------------------------
| Attach Interceptors
|--------------------------------------------------------------------------
*/

api.interceptors.request.use(
  requestInterceptor,
  requestErrorInterceptor
);

api.interceptors.response.use(
  responseInterceptor,
  responseErrorInterceptor
);