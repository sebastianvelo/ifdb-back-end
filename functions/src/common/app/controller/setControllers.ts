import express from "express";
import DetailPageController from "../../../endpoints/detail/controller/DetailPageController";
import ExplorePageController from "../../../endpoints/explore/controller/ExplorePageController";
import SearchResultPageController from "../../../endpoints/search-result/controller/SearchResultPageController";
import Controller from "../../controller/Controller";

const setControllers = (app: express.Application) => {
    const controllers: Array<Controller> = [
        new DetailPageController(app),
        new ExplorePageController(app),
        new SearchResultPageController(app),
    ];

    return controllers;
}

export default setControllers;