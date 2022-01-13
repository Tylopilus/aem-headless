import { gql } from 'graphql-request';

export const landingPageQuery = gql`
  query {
    landingpageList {
      items {
        title
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
                _publishUrl
                _authorUrl
                width
                height
              }
            }
            externalimage
          }
          ... on CtaModel {
            _path
            callToAction
            url
          }
          ... on TextModel {
            _path
            title
            content {
              html
            }
          }
        }
      }
    }
  }
`;
