import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";
import { formatDistanceToNowStrict } from "date-fns";
import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";

interface PostItemProps {
    data: Record<string, any>;
    userId?:string;
}

const PostItem: React.FC<PostItemProps> = ({data, userId}) => {
    const router = useRouter();
    const loginModal = useLoginModal();

    const { data:currentUser } = useCurrentUser()

    const goToUser = useCallback((event: any) => {
        event.stopPropagation();

        router.push(`/users/${data.user.id}`);
    }, [router, data.user.id])
    
    const goToPost = useCallback(() => {
        router.push(`/posts/${data.id}`);
      }, [router, data.id]);

    const onLike = useCallback((event: any) => {
        event.stopPropagation();
    
        loginModal.onOpen();
      }, [loginModal]);

    const createdAt = useMemo(() => {
        if (!data?.createdAt) {
            return null;
        }
        return formatDistanceToNowStrict(new Date(data.createdAt));
    }, [data?.createdAt]);

    return (
        <div>

        </div>
    )
}

export default PostItem;