import { CardPost } from "../../components/CardPost"
import { usePosts } from "../../context/postContext"

export const HomePost = () => {
    const { posts } = usePosts();

    return(
        <div className="text-white">
            <div className="mt-6 grid grid-cols-3 gap-4">
                {
                    posts.map(post => (
                        <CardPost />
                    ))
                }
            </div>
        </div>
    )
}
