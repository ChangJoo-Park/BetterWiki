import { articleCreateAction } from "./controller/articleCreateAction";
import { articleDeleteAllAction } from "./controller/articleDeleteAllAction";
import { articleGetAction } from "./controller/articleGetAction";
import { articleGetAllAction } from "./controller/articleGetAllAction";
import { articleHistoryGetAllAction } from "./controller/articleHistoryGetAllAction";
import { articleUpdateAction } from "./controller/articleUpdateAction";
import { authAction } from "./controller/authAction";
import { meGetAction } from "./controller/meGetAction";
import { setupAction } from "./controller/setupAction";
import { topicArticlesGetAction } from "./controller/topicArticlesGetAction";
import { topicCreateAction } from "./controller/topicCreateAction";
import { topicGetAllAction } from "./controller/topicGetAllAction";
import { userSignUpAction } from "./controller/userSignUpAction";

/**
 * All application routes.
 */
export const AppRoutes = [
    // User and Authentication
    {
        action: authAction,
        method: "post",
        needAuth: false,
        path: "/login",
    },
    {
        action: userSignUpAction,
        method: "post",
        needAuth: false,
        path: "/signup",
    },
    {
        action: setupAction,
        method: "post",
        needAuth: false,
        path: "/setup",
    },
    {
        action: meGetAction,
        method: "get",
        needAuth: true,
        path: "/me",
    },
    {
        action: articleDeleteAllAction,
        method: "delete",
        needAuth: true,
        path: "/articles",
    },
    {
        action: articleGetAllAction,
        method: "get",
        needAuth: true,
        path: "/articles",
    },
    {
        action: articleGetAction,
        method: "get",
        needAuth: true,
        path: "/articles/:id",
    },
    {
        action: articleHistoryGetAllAction,
        method: "get",
        needAuth: true,
        path: "/articles/:id/history",
    },
    {
        action: articleUpdateAction,
        method: "patch",
        needAuth: true,
        path: "/articles/:id",
    },
    {
        action: articleCreateAction,
        method: "post",
        needAuth: true,
        path: "/articles",
    },
    {
        action: topicGetAllAction,
        method: "get",
        needAuth: true,
        path: "/topics",
    },
    {
        action: topicArticlesGetAction,
        method: "get",
        needAuth: true,
        path: "/topics/:id/articles",
    },
    {
        action: topicCreateAction,
        method: "post",
        needAuth: true,
        path: "/topics",
    },
];
