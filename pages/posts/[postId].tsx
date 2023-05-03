import usePost from "@/hooks/usePost";
import { ClipLoader } from "react-spinners";
import { useRouter } from "next/router";

const PostView = () => {
    const router = useRouter();
    const { postId } = router.query;

    const { data: fetchedPost, isLoading } = usePost(postId as string);

    if (isLoading || !fetchedPost) {
        return (
            <div className="flex justofy-center items-center h-full">
                <ClipLoader color="lightblue" size={80}/>
            </div>
        )
    }
    return (
        <div>

        </div>
    )
}

export default PostView;