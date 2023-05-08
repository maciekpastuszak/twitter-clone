import useCurrentUser from "@/hooks/useCurrentUser";
import useNotifications from "@/hooks/useNotifications";
import { useEffect } from "react";

const NotificationsFeed = () => {
const { data: currentUser , mutate: mutateCurrentUser } = useCurrentUser();
const { data: fetchedNotifications = [] } = useNotifications(currentUser?.id);

useEffect(() => {
    mutateCurrentUser();
}, [mutateCurrentUser]);

    return (
        <div></div>
    );
}

export default NotificationsFeed;