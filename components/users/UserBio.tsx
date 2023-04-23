import { format } from "date-fns";
import { useMemo } from "react";

import useCurrentUser from "@/hooks/useCurrentUser";
import useUser from "@/hooks/useUser";
import Button from "../Button";

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
    }, [fetchedUser?.createAt]);
    return (
        <div className="border-b-[1px] border-neutral-800 pb-4">
            <div className="flex justify-end p-2">
                {currentUser?.id === userId ? (
                    <Button secondary label="Edit" onClick={() => {}}/>
                ) : (
                    <Button 
                    onClick={() => {}}
                    label="Follow"
                    secondary />
                )}
            </div>
            <div className="mt-8 px-4">
                <div className="flex flex-col">
                    <p className="text-white text-2xl font-semibold">
                        {fetchedUser?.name}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default UserBio;