import { articleCreateAction } from "./controller/articleCreateAction";
import { articleGetAction } from "./controller/articleGetAction";
import { articleGetAllAction } from "./controller/articleGetAllAction";

/**
 * All application routes.
 */
export const AppRoutes = [
    {
        action: articleGetAllAction,
        method: "get",
        path: "/articles",
    },
    {
        action: articleGetAction,
        method: "get",
        path: "/articles/:id",
    },
    {
        action: articleCreateAction,
        method: "post",
        path: "/articles",
    },
];
