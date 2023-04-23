import { format } from "date-fns";

import useCurrentUser from "@/hooks/useCurrentUser";
import useUser from "@/hooks/useUser";
import { useMemo } from "react";

interface UserBioProps {
    userId: string;
}


const UserBio: React.FC<UserBioProps> = ( { userId } ) => {
    const { data:currentUser } = useCurrentUser();
    const { data: fetchedUser } = useUser(userId);

    const createAt = useMemo(() => {
        if(!fetchedUser?.createAt) {
            return null;
        }
        
        return format(new Date(fetchedUser.createAt), 'MMMM yyyy');
    }, []);
    return (
        <div></div>
    )
}

export default UserBio;