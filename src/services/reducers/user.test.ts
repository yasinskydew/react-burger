import userReducer, { setUser, logout, initialState } from './user';

jest.mock('../utils/tokenManager', () => ({
  TokenManager: {
    setRefreshToken: jest.fn(),
    setAccessToken: jest.fn(),
    deleteAccessToken: jest.fn(),
    deleteRefreshToken: jest.fn(),
  },
}));

describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(userReducer(undefined, { type: '' })).toEqual(initialState);
  });

  it('should handle setUser', () => {
    const user = { name: 'Test', email: 'test@test.com' };
    const state = userReducer(initialState, setUser(user));
    expect(state.user).toEqual(user);
  });

  it('should handle logout', () => {
    const state = userReducer({ ...initialState, user: { name: 'Test', email: 'test@test.com' } }, logout());
    expect(state.user).toBeNull();
  });
});
