import { useParams } from "react-router-dom";
export const Film = () => {
  const id = useParams();
  console.log(id);
  return <div>Film</div>;
};