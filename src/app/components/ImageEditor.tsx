import React from 'react';

const ImageEditor = ({ onClose, previewUrl, settings, setSettings }: {
    onClose: () => void;
    previewUrl: string;
    settings: { type: "original" | "wide" | "square"; sensitive: boolean; };
    setSettings: React.Dispatch<React.SetStateAction<{
        type: "original" | "wide" | "square";
        sensitive: boolean;
    }>>
}) => {
    return (
        <div>

        </div>
    );
}

export default ImageEditor;
