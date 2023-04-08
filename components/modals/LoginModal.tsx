import useLoginModal from "@/hooks/useLoginModal";
import { useCallback, useState } from "react";

const LoginModal = () => {
    const loginModal = useLoginModal();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true);

            // TODO ADD LOG IN

            loginModal.onClose();
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false)
        }
    }, []);

    return (
        <div></div>
    )
}

export default LoginModal;