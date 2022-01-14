import { AllFragmentModels } from '../utils/types';
import { HeroComponent } from './Hero';
import { Text } from './Text';

export const SectionResolver = ({
  section,
  order,
}: {
  section: AllFragmentModels;
  order: number;
}) => {
  switch (section.__typename) {
    case 'HeroModel':
      return <HeroComponent section={section} order={order} />;
    case 'TextModel':
      return <Text section={section} order={order} />;
    case 'CtaModel':
      return <div>CtaModel</div>;
    default:
      return <div>Unknown section type</div>;
  }
};
