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
import { topicUpdateAction } from "./controller/topicUpdateAction";
import { userGetAction } from "./controller/userGetAction";
import { userGetAllAction } from "./controller/userGetAllAction";
import { userSignUpAction } from "./controller/userSignUpAction";
import { userUpdateAction } from "./controller/userUpdateAction";
import { HTTP } from "./enum/HTTP";

/**
 * All application routes.
 */
export const AppRoutes = [
    // Service
    {
        action: setupAction,
        method: HTTP.POST,
        needAuth: false,
        onlyAdmin: false,
        path: "/setup",
    },
    {
        action: serviceGetAction,
        method: HTTP.GET,
        needAuth: true,
        path: "/service",
    },
    {
        action: serviceUpdateAction,
        method: HTTP.PUT,
        needAuth: true,
        onlyAdmin: true,
        path: "/setting",
    },
    // User and Authentication
    {
        action: authAction,
        method: HTTP.POST,
        needAuth: false,
        path: "/login",
    },
    {
        action: userSignUpAction,
        method: HTTP.POST,
        needAuth: true,
        path: "/users",
    },
    {
        action: userGetAction,
        method: HTTP.GET,
        needAuth: true,
        path: "/users/:id",
    },
    {
        action: userUpdateAction,
        method: HTTP.PATCH,
        needAuth: true,
        path: "/users/:id",
    },
    {
        action: userGetAllAction,
        method: HTTP.GET,
        needAuth: true,
        path: "/users",
    },
    {
        action: setupCheckAction,
        method: HTTP.GET,
        needAuth: false,
        path: "/setup/check",
    },
    {
        action: meGetAction,
        method: HTTP.GET,
        needAuth: true,
        path: "/me",
    },
    {
        action: articleDeleteAllAction,
        method: HTTP.DELETE,
        needAuth: true,
        onlyAdmin: true,
        path: "/articles",
    },
    {
        action: articleGetAllAction,
        method: HTTP.GET,
        needAuth: true,
        path: "/articles",
    },
    {
        action: articleGetAction,
        method: HTTP.GET,
        needAuth: true,
        path: "/articles/:id",
    },
    {
        action: articleHistoryGetAllAction,
        method: HTTP.GET,
        needAuth: true,
        path: "/articles/:id/history",
    },
    {
        action: articleUpdateAction,
        method: HTTP.PATCH,
        needAuth: true,
        path: "/articles/:id",
    },
    {
        action: articleCreateAction,
        method: HTTP.POST,
        needAuth: true,
        path: "/articles",
    },
    {
        action: topicGetAllAction,
        method: HTTP.GET,
        needAuth: true,
        path: "/topics",
    },

    {
        action: topicArticlesGetAction,
        method: HTTP.GET,
        needAuth: true,
        path: "/topics/:id/articles",
    },
    {
        action: topicCreateAction,
        method: HTTP.POST,
        needAuth: true,
        path: "/topics",
    },
    {
        action: topicDeleteAction,
        method: HTTP.DELETE,
        needAuth: true,
        onlyAdmin: true,
        path: "/topics",
    },
    {
        action: topicUpdateAction,
        method: HTTP.PATCH,
        needAuth: true,
        path: "/topics/:id",
    },
    {
        action: topicArticleConnectAction,
        method: HTTP.PATCH,
        needAuth: true,
        path: "/topics/:topicId/articles/:articleId/connect",
    },
    {
        action: topicArticleDisconnectAction,
        method: HTTP.DELETE,
        needAuth: true,
        path: "/topics/:topicId/articles/:articleId/disconnect",
    },
];
