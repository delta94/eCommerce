import { User } from "../../models";

export const setCurrentUser = (user: User) => ({
  type: "SET_CURRENT_USER",
  payload: user,
});
