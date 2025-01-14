import {FC} from "react";
import {Link} from "react-router-dom";
import {IPost} from "../../../model/IPost.ts";

type UserTypeProps = {
    post: IPost
}

const PostComponent:FC<UserTypeProps> = ({post}) => {
    return (
        <div>
            <Link to={'details'} state={post}>{post.title}</Link>
        </div>
    );

};

export default PostComponent;