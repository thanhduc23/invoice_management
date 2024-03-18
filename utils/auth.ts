import Cookie from "typescript-cookie";

interface AuthTokens {
  access: string;
  refresh: string;
}

export const setAuthTokens = (tokens: AuthTokens): void => {
  localStorage.setItem("accessToken", tokens.access);
  // Cookie.setCookie("refreshToken", tokens.refresh, {
  //   expires: 7,
  //   secure: true,
  // });
};
