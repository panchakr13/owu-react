import {useLocation} from "react-router-dom";
import {IPost} from "../model/IPost.ts";

const SinglePostDetailsPage = () => {

    const {state} = useLocation();
    const post = state as IPost;
    return (
        <div>
            {post.body}
        </div>
    );
};

export default SinglePostDetailsPage;