export  function getAllFilms(): Promise<FilmsResponce> {
  return fetch('https://swapi.tech/api/films', {
    //cache: 'no-store' // SSR - getServersideProps zaopsos ne budet keshirovat'sya
    //cache: "force-cache" //SSG - getSaticProps -static generatsya
     //next:{revalidate: 60} // -getStaticProps and revalidate
  }).then((res) => res.json());
}