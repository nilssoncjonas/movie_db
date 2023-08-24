

// /person/popular
export type KnownForItem = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    media_type: string;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
export type ActorResult = {
    adult: boolean;
    gender: number;
    id: number;
    known_for: KnownForItem[];
    known_for_department: string;
    name: string;
    popularity: number;
    profile_path: string;
}


// /person/:id
export type SinglePerson = {
    adult: boolean;
    also_known_as: string[];
    biography: string;
    birthday: string;
    deathday: string | null;
    gender: number;
    homepage: string | null;
    id: number;
    imdb_id: string;
    known_for_department: string;
    name: string;
    place_of_birth: string;
    popularity: number;
    profile_path: string | null;
}


// search/person query
export type PersonKnownForItem = {
    adult: boolean;
    backdrop_path: string | null;
    id: number;
    title: string;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string | null;
    media_type: string;
    genre_ids: number[];
    popularity: number;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    origin_country?: string[] | null;
}
export type Person = {
    adult: boolean;
    gender: number;
    id: number;
    // known_for_department: string;
    // name: string;
    // original_name: string;
    // popularity: number;
    // profile_path: string | null;
    known_for: PersonKnownForItem[];
}
export type Actor = {
	adult: boolean;
	gender: number;
	id: number;
	known_for_department: string;
	name: string;
	original_name: string;
	popularity: number;
	profile_path: string | null;
	cast_id: number;
	character: string;
	credit_id: string;
	order: number;
}