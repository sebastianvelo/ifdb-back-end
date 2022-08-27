import { LanguageParams } from "tmdb-js/lib/api/common/params/CommonParams";
import BodyPageHelper from "../model/body-page/BodyPageHelper";
import SearchBarHelper from "../helper/searchbar/SearchBarHelper";
import * as TitleHelper from "../helper/title/TitleHelper";
import { DetailPageBodyModel } from "../../shared/model/pages/detail/DetailPageModel";
import ExplorePageModel from "../../shared/model/pages/explore/ExplorePageModel";
import MovieExplorePageBodyModel from "../model/body-page/explore/MovieExplorePageBodyModel";
import ShowExplorePageBodyModel from "../model/body-page/explore/ShowExplorePageBodyModel";

class ExplorePageService {
  public static async getMovie(query?: LanguageParams): Promise<ExplorePageModel> {
    const body: DetailPageBodyModel = await MovieExplorePageBodyModel(query);
    return {
      title: TitleHelper.movie.getExplore(),
      searchbar: SearchBarHelper.movie.getSearchbar(),
      body
    };
  }

  public static async getShow(query?: LanguageParams): Promise<ExplorePageModel> {
    const body: DetailPageBodyModel = await ShowExplorePageBodyModel(query);
    return {
      title: TitleHelper.show.getExplore(),
      searchbar: SearchBarHelper.show.getSearchbar(),
      body
    };
  }

  public static async getPeople(): Promise<ExplorePageModel> {
    const body: DetailPageBodyModel = await BodyPageHelper.people.getExplore();
    return {
      title: TitleHelper.people.getExplore(),
      searchbar: SearchBarHelper.people.getSearchbar(),
      body
    };
  }
}

export default ExplorePageService;
