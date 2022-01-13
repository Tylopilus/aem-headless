import { AllFragmentModels } from '../utils/types';
import { HeroComponent } from './Hero';
import { TextModel } from './TextModel';

export const SectionResolver = ({
  section,
}: {
  section: AllFragmentModels;
}) => {
  switch (section.__typename) {
    case 'HeroModel':
      return <HeroComponent section={section} />;
    case 'TextModel':
      return <TextModel section={section} />;
    case 'CtaModel':
      return <div>CtaModel</div>;
  }
};
