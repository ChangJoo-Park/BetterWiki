import { articleCreateAction } from "./controller/articleCreateAction";
import { articleDeleteAllAction } from "./controller/articleDeleteAllAction";
import { articleGetAction } from "./controller/articleGetAction";
import { articleGetAllAction } from "./controller/articleGetAllAction";
import { articleHistoryGetAllAction } from "./controller/articleHistoryGetAllAction";
import { articleUpdateAction } from "./controller/articleUpdateAction";
import { authAction } from "./controller/authAction";
import { meGetAction } from "./controller/meGetAction";
import { serviceUpdateAction } from "./controller/serviceUpdateAction";
import { serviceGetAction } from "./controller/servieGetAction";
import { setupAction } from "./controller/setupAction";
import { setupCheckAction } from "./controller/setupCheckAction";
import { topicArticleConnectAction } from "./controller/topicArticleConnectAction";
import { topicArticleDisconnectAction } from "./controller/topicArticleDisconnect";
import { topicArticlesGetAction } from "./controller/topicArticlesGetAction";
import { topicCreateAction } from "./controller/topicCreateAction";
import { topicDeleteAction } from "./controller/topicDeleteAction";
import { topicGetAllAction } from "./controller/topicGetAllAction";
import { userGetAction } from "./controller/userGetAction";
import { userGetAllAction } from "./controller/userGetAllAction";
import { userSignUpAction } from "./controller/userSignUpAction";

/**
 * All application routes.
 */
export const AppRoutes = [
    // Service
    {
        action: setupAction,
        method: "post",
        needAuth: false,
        onlyAdmin: false,
        path: "/setup",
    },
    {
        action: serviceGetAction,
        method: "get",
        needAuth: true,
        path: "/service",
    },
    {
        action: serviceUpdateAction,
        method: "put",
        needAuth: true,
        onlyAdmin: true,
        path: "/setting",
    },
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
        needAuth: true,
        path: "/users",
    },
    {
        action: userGetAction,
        method: "get",
        needAuth: true,
        path: "/users/:id",
    },
    {
        action: userGetAllAction,
        method: "get",
        needAuth: true,
        path: "/users",
    },
    {
        action: setupCheckAction,
        method: "get",
        needAuth: false,
        path: "/setup/check",
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
        onlyAdmin: true,
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
    {
        action: topicDeleteAction,
        method: "delete",
        needAuth: true,
        onlyAdmin: true,
        path: "/topics",
    },
    {
        action: topicArticleConnectAction,
        method: "patch",
        needAuth: true,
        path: "/topics/:topicId/articles/:articleId/connect",
    },
    {
        action: topicArticleDisconnectAction,
        method: "delete",
        needAuth: true,
        path: "/topics/:topicId/articles/:articleId/disconnect",
    },
];
