export * from "./common/entity.ts";
export * from "./user/index.ts";
import { DAO } from "./common/entity.ts";
import { UserDAO } from "./user/index.ts";

export function entities(): (typeof DAO)[] {
  return [
    UserDAO,
  ];
}
