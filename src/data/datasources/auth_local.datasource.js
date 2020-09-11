import { storage } from '../../utils/storage';
import { AUTH_STORAGE_KEY, USERS_STORAGE_KEY } from '../../utils/constants';
import { InvalidCredentialsError } from '../../errors/AuthErrors';

const AuthLocalDataSource = {
  authenticate: (username, password) => {
    const users = storage.get(USERS_STORAGE_KEY) || [];
    let authUser = users.find((user) => user.username === username);
    if (authUser && authUser.password !== password) {
      throw new InvalidCredentialsError();
    } else if (!authUser) {
      authUser = {
        username,
        password,
        favorites: [],
      };
      users.push(authUser);
      storage.set(USERS_STORAGE_KEY, users);
    }
    storage.set(AUTH_STORAGE_KEY, authUser);
    return authUser;
  },

  getActiveSession: () => {
    return storage.get(AUTH_STORAGE_KEY);
  },

  deAuthenticate: () => {
    storage.remove(AUTH_STORAGE_KEY);
  },
};

export { AuthLocalDataSource };
