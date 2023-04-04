import { IconType } from 'react-icons';


interface SidebarItemProps {
    label: string;
    href?: string;
    icon: IconType;
    onClick?: () => void
}

const SidebarItem: React.FC<SidebarItemProps> = ({
    label,
    href,
    icon,
    onClick
}) => {
    return (
        <div>

        </div>
    )
}

export default SidebarItem