const MovieDetailsReviewsList = ({ items }) => {
  const elements = items.map(({ author, id, content }) => (
    <li key={id}>
      <h3>Author: {author}</h3>
      <p>{content}</p>
    </li>
  ));
  return <ul>{elements}</ul>;
};
export default MovieDetailsReviewsList;
