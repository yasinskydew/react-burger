export function getCookie(name: string) {
  // eslint-disable-next-line no-useless-escape
  const regex = new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)');
  const matches = document.cookie.match(regex);
  return matches ? decodeURIComponent(matches[1]) : null;
}

export function setCookie(name: string, value: string | null, props: any) {
  props = props || {};
  let exp = props.expires;
  if (typeof exp == 'number' && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  }
  if (exp && exp.toUTCString) {
    props.expires = exp.toUTCString();
  }
  value = encodeURIComponent(value || '');
  let updatedCookie = name + '=' + value;
  for (const propName in props) {
    updatedCookie += '; ' + propName;
    const propValue = props[propName];
    if (propValue !== true) {
      updatedCookie += '=' + propValue;
    }
  }
  document.cookie = updatedCookie;
} 

export function deleteCookie(name: string) {
  setCookie(name, null, { expires: -1 });
}

export class TokenManager {
  private static readonly REFRESH_TOKEN_NAME = 'refreshToken';

  static getRefreshToken() {
    return getCookie(this.REFRESH_TOKEN_NAME);
  }

  static setRefreshToken(token: string) {
    setCookie(this.REFRESH_TOKEN_NAME, token, { expires: 3600 });
  }

  static deleteRefreshToken() {
    deleteCookie(this.REFRESH_TOKEN_NAME);
  }

  static getAccessToken() {
    return localStorage.getItem('accessToken');
  }

  static setAccessToken(bearerToken: string) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, token] = bearerToken.split(' ');
    localStorage.setItem('accessToken', token);
  }

  static deleteAccessToken() {
    localStorage.removeItem('accessToken');
  }
}
