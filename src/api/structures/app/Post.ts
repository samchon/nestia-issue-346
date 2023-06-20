export interface Post {
    /**
     * @type unit
     */
    id: number;
    title: string;
    content: string | null;
    published: boolean;
}
