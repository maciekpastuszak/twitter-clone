
interface ButtonProps {
    label: string;
    secondary?: boolean;
    fullWidth?: boolean;
    large?: boolean;
    onClick: () => void;
    disabled?: boolean;
    outline?: boolean
}

const Button: React.FC<ButtonProps> = ({
    label,
    secondary,
    fullWidth,
    large,
    onClick,
    disabled,
    outline
}) => {
    return (
        <button className="
            diasbled:opacity-70
            disabled:cursor-not-allowed
            rounded-full
            font-semibold
            hover:opacity-80transition
            border-2
        ">

        </button>
    )
}

export default Button;