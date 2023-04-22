import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";

import Header from "@/components/Header";
import useUser from "@/hooks/useUser";

const UserView = () => {
    const router = useRouter();
    const {userId} = router.query;

    const { data: fetchedUser, isLoading } = useUser(userId as string)

    return (
        <>
        <Header showBackArrow label="User Profile"/>
        </>
    );
}

export default UserView;