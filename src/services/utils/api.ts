import { TokenManager } from "./tokenManager";
import { BASE_URL } from "../api/constants/api";

export const refreshToken = async (): Promise<boolean> => {
  const refreshToken = TokenManager.getRefreshToken();
  if (!refreshToken) {
    return false;
  }

  const response = await fetch(`${BASE_URL}/auth/token`, {
    method: 'POST',
    body: JSON.stringify({
      token: refreshToken,
    }),
  });

  if(response.ok) {
    const data = await response.json();
    TokenManager.setAccessToken(data.accessToken);
    TokenManager.setRefreshToken(data.refreshToken);
    return true;
  }

  return false;
}