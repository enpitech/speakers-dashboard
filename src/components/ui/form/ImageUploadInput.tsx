import { Camera } from 'lucide-react';

type ImageUploadInputProps = {
  image: string | undefined;
  onChange: (data: { image: string }) => void;
};

export const ImageUploadInput = ({ image, onChange }: ImageUploadInputProps) => {
  return (
    <div className="relative">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background-1/30">
        {image ? (
          <img src={image} alt="Avatar" className="h-16 w-16 rounded-full object-cover" />
        ) : (
          <Camera size={24} className="text-primary" />
        )}
      </div>
      <input
        type="file"
        id="image-upload"
        className={`absolute inset-0 cursor-pointer opacity-0`}
        accept="image/*"
        aria-label="Upload profile picture"
        onChange={e => {
          const file = e.target.files?.[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = () => {
              onChange({ image: reader.result as string });
            };
            reader.readAsDataURL(file);
          }
        }}
      />
    </div>
  );
};
