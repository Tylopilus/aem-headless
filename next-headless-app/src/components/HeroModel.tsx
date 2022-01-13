import Image from 'next/image';
import { HeroModel as THeroModel } from '../utils/types';
import { useImageData } from '../utils/useImageData';

export const HeroModel = ({ section }: { section: THeroModel }) => {
  const imageData = useImageData(section.image._publishUrl);
  return (
    <div className="flex h-screen">
      <div className="flex flex-col items-center justify-center flex-1">
        <div className="max-w-3xl">
          <h1 className="text-6xl tracking-tight">{section.title}</h1>

          <div
            dangerouslySetInnerHTML={{
              __html: section.description.html,
            }}
            className="mt-8 text-2xl font-light leading-relaxed"></div>
          <button className="px-16 py-4 mt-16 text-2xl font-light tracking-wider uppercase border border-gray-300 rounded-full">
            Get started
          </button>
        </div>
      </div>
      <div className="relative flex-1 h-full">
        <Image
          src={section.image._publishUrl}
          width={section.image.width}
          height={section.image.height}
          alt={imageData ? imageData['jcr:content'].metadata['dc:title'] : ''}
          layout="fill"
          className="object-cover object-right h-full"
        />
      </div>
    </div>
  );
};
