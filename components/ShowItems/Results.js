import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";
// In order to show the content in the 4K resolution screen then we need to customize our screen through tailwind.config.js file.
const Results = ({ results }) => {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results.map((results) => (
        <Thumbnail key={results.id} results={results} />
      ))}
    </FlipMove>
  );
};

export default Results;
