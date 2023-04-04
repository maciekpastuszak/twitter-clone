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
        <div className="flex flex-row items-center">
            <div
                className="
                relative
                rounded-full
                h-14
                w-14
                flex
                items-center
                justify-center
                p-4
                hover:bg-slate-300
                hover:bg-opacity-10
                cursor-pointer
                lg:hidden
                "
            >

            </div>
        </div>
    )
}

export default SidebarItem