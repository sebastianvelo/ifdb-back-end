import { CreditPerson } from "tmdb-js/lib/api/model/credit/Credit";
import { Character, Episode } from "tmdb-js/lib/api/model/episode/Episode";
import { TVShow } from "tmdb-js/lib/api/model/film/Film";
import { Image } from "tmdb-js/lib/api/model/image/Image";
import { PersonDetail } from "tmdb-js/lib/api/model/person/Person";
import { MovieResponse } from "tmdb-js/lib/api/request/movie/response/Response";
import { SeasonResponse } from "tmdb-js/lib/api/request/season/response/Response";
import { TVShowResponse } from "tmdb-js/lib/api/request/tv-show/response/Response";
import { CardProps } from "../../model/card/CardProps";
import { ItemProps } from "../../model/watchlist/WatchListPageProps";
import MediaHelper from "../media/MediaHelper";

class CardHelper {
  public static getMovieCard = (movie: MovieResponse): CardProps => ({
    title: movie.title,
    subtitle: `${movie.release_date?.substring(0, 4)}`,
    image: MediaHelper.getTMDBImage(movie.poster_path, movie.title),
    path: `/movie/${movie.id}`
  });

  public static getShowCard = (show: TVShow): CardProps => ({
    title: show.original_name,
    subtitle: `${show.first_air_date?.substring(0, 4)}`,
    image: MediaHelper.getTMDBImage(show.poster_path, show.title),
    path: `/show/${show.id}`
  });

  public static getPersonCard = (person: PersonDetail): CardProps => ({
    title: person.name,
    subtitle: person.birthday,
    image: MediaHelper.getTMDBImage(person.profile_path, person.name),
    path: `/person/${person.id}`
  });

  public static getCastMemberCard = (castMember: CreditPerson): CardProps => ({
    title: castMember.name,
    subtitle: `as ${castMember.character}`,
    image: MediaHelper.getTMDBImage(castMember.profile_path, castMember.name),
    path: `/person/${castMember.id}`
  });

  public static getCrewCard = (crew: Character): CardProps => ({
    title: crew.name,
    subtitle: `as ${crew.job}`,
    image: MediaHelper.getTMDBImage(crew.profile_path, crew.name),
    path: `/person/${crew.id}`
  });

  public static getShowAppareances = (castMember: any): CardProps => ({
    title: castMember.name,
    subtitle: `as ${castMember.character}`,
    path: `/show/${castMember.id}`,
    image: MediaHelper.getTMDBImage(castMember.poster_path, castMember.name),
  });

  public static getMovieAppareances = (castMember: any): CardProps => ({
    title: castMember.original_title,
    subtitle: `as ${castMember.character}`,
    path: `/movie/${castMember.id}`,
    image: MediaHelper.getTMDBImage(castMember.poster_path, castMember.original_title),
  });

  public static getSeasonCard = (season: SeasonResponse, show?: string | number): CardProps => ({
    title: `${season.name}`,
    subtitle: `${season.episode_count} episodes`,
    image: MediaHelper.getTMDBImage(season.poster_path, season.name),
    path: `/show/${show}/s/${season.season_number}`
  });

  public static getEpisodeCard = (episode: Episode, show?: string | number): CardProps => ({
    title: `${episode.name}`,
    subtitle: `${episode.vote_average}/10`,
    image: MediaHelper.getTMDBImage(episode.still_path, episode.name),
    path: `/show/${show}/s/${episode.season_number}/e/${episode.episode_number}`
  });

  public static getTopRatedEpisodeCard = (episode: Episode, show?: string | number): CardProps => ({
    title: `${episode.name} (${episode.season_number}x${episode.episode_number})`,
    subtitle: `${episode.vote_average}/10`,
    image: MediaHelper.getTMDBImage(episode.still_path, episode.name),
    path: `/show/${show}/s/${episode.season_number}/e/${episode.episode_number}`
  });

  public static getGalleryImage = (image: Image): CardProps => ({
    image: MediaHelper.getTMDBImage(image.file_path, image.id)
  });

  public static getShowSuggestionCard = (show: TVShowResponse): ItemProps => ({
    id: show.id,
    title: show.original_name ?? "",
    poster: MediaHelper.getTMDBImage(show.poster_path, show.title),
    info: `${show.seasons?.filter(season => season.season_number).length} seasons`,
    category: show.genres?.map((genre) => genre.name).join(", "),
    path: `/show/${show.id}`
  });
}

export default CardHelper;
