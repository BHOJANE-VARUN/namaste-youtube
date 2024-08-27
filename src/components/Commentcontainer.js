import { PROFILE_LOGO_URL } from "../util/Constants";
import Comments from "./Comments";

const Commentcontainer = ({data}) => {

  return (
    <div>
        <h1 className="text-5xl my-5">Comments</h1>
        {data.map((d)=> <Comments data={d}/>)}
    </div>
  );
};
export default Commentcontainer;
