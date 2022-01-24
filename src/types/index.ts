export type User = {
    id: string,
    name: string,
    lastName: string,
    birthdate: string,
    email: string,
    password: string,
    sessionToken: string
}

export type Movie = {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: string,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}