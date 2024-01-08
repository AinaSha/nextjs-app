export function getFilm(id: number): Promise<FilmResponce> {
 return fetch(`https://www.swapi.tech/api/films/${id}`).then(res => res.json());
}