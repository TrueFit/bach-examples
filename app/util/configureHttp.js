import {configureHttp as configure} from '@truefit/http-utils';

export const configureHttp = () => {
  configure({
    baseConfig: {
      baseURL: process.env.API_BASE_URL,
    },
  });
};
