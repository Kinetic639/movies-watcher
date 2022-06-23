export interface MovieEntity {
    "adult": boolean;
    "backdrop_path": string;
    "genre_ids": number[];
    "id": number;
    "original_language": string;
    "original_title": string;
    "overview": string;
    "popularity": number;
    "poster_path": string;
    "release_date": string;
    "title": string;
    "video": boolean;
    "vote_average": number;
    "vote_count": number
};


export interface MoviesListByGenre {
    title: string;
    result: MovieEntity[]
}

export interface getMoviesQueryRes {
    page: number;
    results: MovieEntity[];
    total_pages: number;
    total_results: number
}

export interface MovieGenre {
    id: number;
    name: string
}

export interface getMoviesGenresRes {
    genres: MovieGenre[]
}

