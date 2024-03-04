import { ListingCreateNestedManyWithoutUsersInput } from "./ListingCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TripCreateNestedManyWithoutUsersInput } from "./TripCreateNestedManyWithoutUsersInput";
import { WishListCreateNestedManyWithoutUsersInput } from "./WishListCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  listings?: ListingCreateNestedManyWithoutUsersInput;
  password: string;
  roles: InputJsonValue;
  trips?: TripCreateNestedManyWithoutUsersInput;
  username: string;
  wishLists?: WishListCreateNestedManyWithoutUsersInput;
};
