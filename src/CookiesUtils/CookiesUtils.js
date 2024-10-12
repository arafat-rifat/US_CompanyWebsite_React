import Cookies from "js-cookie";

export const setCookies = (theme, hasPermission) => {
  Cookies.set("theme", theme, {
    expires: 200,
    secure: true,
    sameSite: "Strict",
  });
  Cookies.set("cookiePermission", hasPermission ? "granted" : "denied", {
    expires: 200,
    secure: true,
    sameSite: "Strict",
  });
};
