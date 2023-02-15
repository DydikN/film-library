const MovieDetailsCastList = ({ items }) => {
  const src = `https://www.themoviedb.org/t/p/w300`;
  const elements = items.map(({ name, character, cast_id, profile_path }) => (
    <li key={cast_id}>
      <img src={src + profile_path} alt={name} />
      <p>{name}</p>
      <p>Character: {character}</p>
    </li>
  ));
  return <ul>{elements}</ul>;
};
export default MovieDetailsCastList;
