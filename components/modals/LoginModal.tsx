import useLoginModal from "@/hooks/useLoginModal";
import { useState } from "react";

const LoginModal = () => {
    const loginModal = useLoginModal();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div></div>
    )
}

export default LoginModal;