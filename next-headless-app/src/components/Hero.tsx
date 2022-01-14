import Image from 'next/image';
import { HeroModel } from '../utils/types';
import { useImageData } from '../utils/useImageData';

export const HeroComponent = ({
  section,
  order = 0,
}: {
  section: HeroModel;
  order?: number;
}) => {
  // const imageData = useImageData(section.image._publishUrl);

  return !order ? (
    <HeroMain section={section} />
  ) : (
    <HeroSection section={section} />
  );
};

export const HeroMain = ({ section }: { section: HeroModel }) => {
  return (
    <section className="lg:h-screen lg:flex">
      <div className="relative w-full h-auto aspect-square lg:aspect-auto lg:w-1/2 lg:order-2">
        {/* <Image
        src={section.image._publishUrl}
        width={section.image.width}
        height={section.image.height}
        alt={imageData ? imageData['jcr:content'].metadata['dc:title'] : ''}
        layout="fill"
        className="object-cover object-right h-full"
      /> */}
        <Image
          src={section.externalimage ?? ''}
          // width={1440}
          // height={900}
          alt="fancy alt"
          layout="fill"
          priority
          className="object-cover object-right h-full"
        />
      </div>
      <div className="flex flex-col items-center justify-center flex-1 order-2 lg:order-1">
        <div className="max-w-3xl px-4 lg:w-4/6 lg:px-0">
          <h1 className="mt-4 text-6xl tracking-tight">{section.title}</h1>

          <div
            dangerouslySetInnerHTML={{
              __html: section?.description?.html ?? '',
            }}
            className="mt-8 text-2xl font-light leading-relaxed"></div>
          <a
            href={section.ctaurl}
            className="block px-16 py-4 mx-auto mt-16 text-2xl font-light tracking-wider uppercase border border-gray-300 rounded-full lg:mx-0 max-w-fit">
            {section.ctatext}
          </a>
        </div>
      </div>
    </section>
  );
};

const HeroSection = ({ section }: { section: HeroModel }) => {
  return (
    <section className="flex flex-col lg:flex-row section-hero min-h-[600px] h-auto mt-16 lg:mt-0 lg:even:flex-row-reverse">
      <div className="relative h-auto lg:w-5/12 aspect-video lg:aspect-auto">
        <Image
          src={section.externalimage ?? ''}
          alt="fancy alt2"
          layout="fill"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-center lg:w-7/12">
        <div className="lg:max-w-[80ch] mx-auto px-4 mt-4 lg:mt-0 lg:px-0">
          <h2 className="text-5xl">{section.title}</h2>
          <div
            className="mt-4 text-2xl font-light tracking-wider"
            dangerouslySetInnerHTML={{
              __html: section.description?.html ?? '',
            }}
          />
          <a
            href={section.ctaurl}
            className="block px-16 py-4 mx-auto mt-8 text-2xl font-light tracking-wider uppercase border border-gray-300 rounded-full lg:mx-0 max-w-fit">
            {section.ctatext}
          </a>
        </div>
      </div>
    </section>
  );
};
