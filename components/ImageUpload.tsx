import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

interface ImageUploadProps {
  onChange: (base64: string) => void;
  label: string;
  value?: string;
  disabled?: boolean;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
    onChange,
    label,
    value,
    disabled
}) => {
    const [base64, setBase64] = useState();

    const handleChange = useCallback((base64: string) => {
        onChange(base64);
    }, [onChange]);
    
    return (
        <div></div>
    )
}

export default ImageUpload;