import { TextModel } from '../utils/types';

export const Text = ({
  section,
  order,
}: {
  section: TextModel;
  order: number;
}) => {
  return (
    <section id={section.id ?? ''} className="mt-16 mb-16 lg:mt-0">
      <div className="max-w-[80ch] mx-auto pt-16 px-4">
        <h2 className="text-5xl text-center">{section.title}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: section.content?.html! }}
          className="mt-4 text-2xl font-light tracking-wider"
        />
      </div>
    </section>
  );
};
