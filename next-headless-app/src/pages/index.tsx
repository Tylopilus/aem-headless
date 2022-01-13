import type { InferGetServerSidePropsType } from 'next';
import { SectionResolver } from '../components/SectionResolver';
import { landingPageQuery } from '../queries/landingpagequery';
import { graphQLClient } from '../utils/graphqlClient';
import { LandingPageQuery } from '../utils/types';

const Home = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (!data || !data.sections) {
    return <div>error while getting Data</div>;
  }
  return (
    <main className="mx-auto">
      {data.sections.map((section) => {
        return <SectionResolver section={section} key={section._path} />;
      })}
    </main>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const data = await graphQLClient.request<LandingPageQuery>(landingPageQuery);
  console.log(data.landingpageList);
  if (data && data.landingpageList.items.length > 0) {
    return { props: { data: data.landingpageList.items[0] } };
  }
  return { props: { data: null } };
};
