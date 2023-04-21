import useUser from "@/hooks/useUser";
import { useCallback } from "react";

interface AvatarProps {
    userId: string;
    isLarge?: boolean;
    hasBorder?: boolean;
  }
  
const Avatar: React.FC<AvatarProps> = ({ 
    userId, isLarge, hasBorder 
}) => {
  const { data: fetchedUser} = useUser(userId);

  const onClick = useCallback((event: any) => {
    event.stopPropagation();
  }, []);

  
  return (
  <div></div>
  );
}

  export default Avatar;