import { articleCreateAction } from "./controller/articleCreateAction";
import { articleDeleteAllAction } from "./controller/articleDeleteAllAction";
import { articleGetAction } from "./controller/articleGetAction";
import { articleGetAllAction } from "./controller/articleGetAllAction";
import { articleUpdateAction } from "./controller/articleUpdateAction";
import { topicArticlesGetAction } from "./controller/topicArticlesGetAction";
import { topicCreateAction } from "./controller/topicCreateAction";
import { topicGetAllAction } from "./controller/topicGetAllAction";

/**
 * All application routes.
 */
export const AppRoutes = [
    // Admin Only
    {
        action: articleDeleteAllAction,
        method: "delete",
        path: "/articles",
    },
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
        action: articleUpdateAction,
        method: "patch",
        path: "/articles/:id",
    },
    {
        action: articleCreateAction,
        method: "post",
        path: "/articles",
    },
    {
        action: topicGetAllAction,
        method: "get",
        path: "/topics",
    },
    {
        action: topicArticlesGetAction,
        method: "get",
        path: "/topics/:id/articles",
    },
    {
        action: topicCreateAction,
        method: "post",
        path: "/topics",
    },
];
