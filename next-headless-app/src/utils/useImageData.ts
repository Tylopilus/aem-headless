import { useEffect, useState } from 'react';
import { ImageType } from './imageType';

export const useImageData = (url: string) => {
  const [imageData, setImageData] = useState<ImageType>();
  useEffect(() => {
    const getData = async () => {
      console.log(url);
      const data = (await (
        await fetch(`${url}.2.json`, {
          headers: {
            authorization: 'Basic YWRtaW46YWRtaW4=',
          },
        })
      ).json()) as ImageType;
      setImageData(data);
    };
    getData();
  }, [url]);

  return imageData!;
};
