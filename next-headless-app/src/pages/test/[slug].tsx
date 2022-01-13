import { GraphQLClient, gql } from 'graphql-request';
import { GetStaticPaths, GetStaticProps } from 'next';
const Test = (props: any) => {
  console.log(props);
  return <div>hi</div>;
};

export default Test;

const graphQLClient = new GraphQLClient(
  'http://localhost:4502/content/_cq_graphql/actoolminimal/endpoint.json',
  {
    headers: {
      authorization: 'Basic YWRtaW46YWRtaW4=',
    },
  }
);

const getIds = async () => {
  const data = await graphQLClient.request(
    gql`
      query {
        landingpageList {
          items {
            slug
            sections {
              __typename
              ... on HeroModel {
                _path
                title
                subtitle
                description {
                  html
                }
                image {
                  __typename
                  ... on ImageRef {
                    _authorUrl
                    width
                    height
                  }
                }
              }
              ... on CtaModel {
                _path
                callToAction
                url
              }
            }
          }
        }
      }
    `
  );
  return data;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getIds();
  const paths = data.landingpageList.items.map((item: any) => ({
    params: { slug: false },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      slug: params!.slug,
    },
  };
};
