export const Config = {
  fcm_token: null,
  timeout: 120000,
  base_url: 'http://demo.apec-edu.net/',
  base_url_api: () => {
    return Config.base_url + 'api/';
  },
  access_token: null,
  is_login: 0,
  is_notify: 1,
  lang_code: 'vi',
  scan_code: '0',
  //Key lưu async storage
  storage: {
    base_url: 'base_url',
    access_token: 'access_token',
    fcm_token: 'fcm_token',
    is_login: 'is_login',
    is_notify: 'is_notify',
    lang_code: 'lang_code',
    scan_code: 'scan_code',
  },
};
