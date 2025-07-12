import { IUser } from "../../api/user";
import { setUser } from "../../reducers/user";
import { useAppDispatch, useAppSelector } from "../hook";

interface UserUserReturn {
  user: IUser | null,
  error: string | null,
  clearUser: () => void
}

export const useUser = (): UserUserReturn => {
    const dispatch = useAppDispatch();
    const { user, error } = useAppSelector((state) => state.user);

    const clearUser = () => {
      dispatch(setUser(null));
    }

    return {
      user,
      error,
      clearUser,
    }
}