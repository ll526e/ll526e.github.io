export interface CookieOptions {
  expires?: Date;
  onsuccess?: () => void;
}

class Cookie {

  // 设置方法
  public set(name: string, value: string, options?: CookieOptions) {
    const { expires, onsuccess } = options || {};
    let useExpires = "";
    const date = new Date();
    // 保留 30 minutes
    date.setTime((expires ? expires.getTime() : date.getTime()) + 30 * 60 * 1000);
    useExpires = `; expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value || ""}${useExpires}; path=/`;
    onsuccess && onsuccess();
  }

  // 获取方法
  public get<T>(name: string): T | null {
    const nameEQ = `${name}=`;
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i += 1) {
      let c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0)
        return c.substring(nameEQ.length, c.length) as T;
    }
    return null;
  }

  // 移除方法
  public remove(name: string) {
    document.cookie = `${name}=; Max-Age=-99999999;`;
  }

}

export const useCookie = new Cookie();