import { JsonValue } from "./JsonValue";
import { Post } from "./Post";

export interface User {
    /**
     * @type unit
     */
    id: number;

    /**
     * @format email
     */
    email: string;
    name: string | null;
    content: JsonValue | null;
    posts: Post[];
}
