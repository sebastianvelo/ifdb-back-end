import { EpisodeResponse } from "tmdb-js/lib/api/request/episode/response/Response";
import { PersonDetailsResponse } from "tmdb-js/lib/api/request/person/response/Response";
import { SeasonWithEpisodesResponse } from "tmdb-js/lib/api/request/season/response/Response";
import { TVShowResponse } from "tmdb-js/lib/api/request/tv-show/response/Response";
import { DetailContentHeaderModel } from "../../../../shared/model/pages/detail/header/DetailContentModel";

export const getPerson = (person: PersonDetailsResponse): DetailContentHeaderModel => ({
    title: `${person.name}`,
});

export const getShow = (shpw: TVShowResponse): DetailContentHeaderModel => ({
    title: `${shpw.original_name}`,
});

export const getSeason = (season: SeasonWithEpisodesResponse): DetailContentHeaderModel => ({
    title: `${season.name}`,
});

export const getEpisode = (episode: EpisodeResponse): DetailContentHeaderModel => ({
    title: `${episode.name} (${episode.season_number}x${episode.episode_number})`,
})
