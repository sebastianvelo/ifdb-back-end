import { TVShowResponse } from "tmdb-js/lib/api/request/tv-show/response/Response";
import { WatchlistTabModel } from "../../endpoints/model/components/section/Section";
import { ListModel } from "../../endpoints/model/components/WatchlistModel";
import { DetailWatchlistModel } from "../../endpoints/model/pages/detail/DetailPageModel";
import UserEntity from "../../repository/model/user/UserEntity";
import WatchlistEntity, { ListEntity } from "../../repository/model/watch-list/WatchlistEntity";
import WatchListRepository from "../../repository/watch-list/WatchListRepository";
import TMDB from "../../tmdb/TMDB";
import { getShowSuggestionCard } from "../card/CardHelper";

const transformToListModel = async (list: ListEntity): Promise<ListModel> => {
    const items: TVShowResponse[] = await Promise.all(list.items.map(async (item) => TMDB.tvShow.getDetails(Number(item))));
    return {
        title: list.title,
        items: items.map(getShowSuggestionCard),
        dynamic: false,
    };
};

const transformToWatchlistTabModel = async (title: string, model: WatchlistEntity): Promise<WatchlistTabModel> => {
    const lists = await Promise.all(model.lists.map(transformToListModel));
    return {
        title,
        lists,
    }
};

export const transformToWatchlistModel = (lists: ListModel[]): WatchlistEntity => ({
    lists: lists.map(list => ({
        title: list.title,
        items: list.items.map(item => item.path.split("/")[2])
    }))
});

export const getWatchlistByUser = async (user: UserEntity): Promise<DetailWatchlistModel> => {
    const tvShowWatchlist = await WatchListRepository.shows.getByUser(user.userName);
    const movieWatchlist = await WatchListRepository.movies.getByUser(user.userName);

    const tvShowWatchlistModel = await transformToWatchlistTabModel("TV Shows", tvShowWatchlist);
    const movieWatchlistModel = await transformToWatchlistTabModel("Movies", movieWatchlist);

    return {
        watchlists: [
            tvShowWatchlistModel,
            movieWatchlistModel
        ],
    };
};
