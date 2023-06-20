import { TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";
import typia from "typia";

import { User } from "../api/structures/app/User";

@Controller("app")
export class AppController {
    /**
     * Maximum call stack size exceeded
     */
    @TypedRoute.Get("users")
    public users(): User[] {
        return typia.random<User[]>();
    }
}
