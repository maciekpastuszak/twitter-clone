import { useCallback, useMemo } from "react";
import useCurrentUser from "./useCurrentUser"
import useLoginModal from "./useLoginModal";
import useUser from "./useUser";

const useFollow = (userId: string) => {
    const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser();
    const { mutate: mutateFetchedUser } = useUser(userId);

    const loginModal = useLoginModal();

    const isFollowing = useMemo(() => {
        const list = currentUser?.followingIds || [];
    
        return list.includes(userId);
      }, [currentUser, userId]);
    
      const toggleFollow = useCallback(async () => {
        if (!currentUser) {
          return loginModal.onOpen();
        }
    }
    return {
        isFollowing,
        toggleFollow,
      }
    }

export default useFollow;