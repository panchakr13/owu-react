import {urls} from "../constants/urls.ts";

export const postService ={
    getPosts: async <T, >():Promise<T> => {
        return await fetch(urls.posts.allPosts)
            .then(value => value.json())
    }
}