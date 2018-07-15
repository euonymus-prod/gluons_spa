let api_host_uri   = 'ja.api.gluons.link';
let api_keyword    = 'euonymus';
if (process.env.NODE_ENV === 'development') {
    api_host_uri   = 'ja.localhost:8765';
    api_keyword    = 'euonymus';
}

export const API_HOST = api_host_uri;
export const API_KEY = api_keyword;
