import {useEffect, useState} from "react";
import {IBaseResponseModel} from "../../../model/IBaseResponseModel.ts";
import {IPost} from "../../../model/IPost.ts";
import {postService} from "../../../services/post.api.service.ts";
import PostComponent from "../post-component/PostComponent.tsx";


const PostsComponent = () => {


    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        postService.getPosts<IBaseResponseModel & {posts: IPost[]}>().then(({posts})=>{
            setPosts(posts);

        })
    }, []);

    return (
        <div>
            {
                posts.map(post => <PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostsComponent;