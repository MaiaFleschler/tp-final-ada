export type User = {
    id: string,
    name: string,
    lastName: string,
    birthdate: string,
    email: string,
    password: string,
    sessionToken: string,
    role: string
}

export type MovieDBItem = {
    adult?: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id?: number,
    id_db?:number,
    original_language: string,
    original_title?: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date?: string,
    title?: string,
    video?: boolean,
    vote_average: number,
    vote_count: number,
    media_type?: string
    first_air_date?:string,
    origin_country?:string[],
    name?: string,
    original_name?: string
}
export type MovieDBItemData = {
    page: number,
    results: MovieDBItem[],
    total_pages: number,
    total_results: number
}