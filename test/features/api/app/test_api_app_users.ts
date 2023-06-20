import { ArrayUtil } from "@nestia/e2e";
import typia from "typia";

import api from "@ORGANIZATION/PROJECT-api/lib/index";
import { User } from "@ORGANIZATION/PROJECT-api/lib/structures/app/User";

export async function test_api_app_users(
    connection: api.IConnection,
): Promise<void> {
    await ArrayUtil.asyncRepeat(4)(async (i) => {
        const users: User[] = await api.functional.app.users(connection);
        typia.assertEquals(users);
        console.log(`Works fine at ${i + 1}th trial`, users);
    });
}
