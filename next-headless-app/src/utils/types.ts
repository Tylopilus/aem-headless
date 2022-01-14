export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** com.adobe.aem.graphql.sites.adapters.sling.ScalarComponentWrapper@4e2b2294 */
  Calendar: any;
  /** com.adobe.aem.graphql.sites.adapters.sling.ScalarComponentWrapper@2b766946 */
  Date: any;
  /** com.adobe.aem.graphql.sites.adapters.sling.ScalarComponentWrapper@86ef0e5 */
  Json: any;
  /** com.adobe.aem.graphql.sites.adapters.sling.ScalarComponentWrapper@7224c6a7 */
  Time: any;
};

export type AllFragmentModels = CtaModel | HeroModel | LandingpageModel | TextModel;

export type ArchiveRef = {
  __typename?: 'ArchiveRef';
  _authorUrl?: Maybe<Scalars['String']>;
  _path?: Maybe<Scalars['ID']>;
  _publishUrl?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export enum ArrayMode {
  All = 'ALL',
  AllOrEmpty = 'ALL_OR_EMPTY',
  AtLeastOnce = 'AT_LEAST_ONCE',
  Instances = 'INSTANCES'
}

export type BooleanArrayFilter = {
  _expressions: Array<InputMaybe<BooleanArrayFilterExpression>>;
  _logOp?: InputMaybe<LogOp>;
};

export type BooleanArrayFilterExpression = {
  _apply?: InputMaybe<ArrayMode>;
  _operator?: InputMaybe<BooleanOperator>;
  value?: InputMaybe<Scalars['Boolean']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type BooleanArrayMetadata = {
  __typename?: 'BooleanArrayMetadata';
  name: Scalars['String'];
  value: Array<Maybe<Scalars['Boolean']>>;
};

export type BooleanFilter = {
  _expressions: Array<InputMaybe<BooleanFilterExpression>>;
  _logOp?: InputMaybe<LogOp>;
};

export type BooleanFilterExpression = {
  _operator?: InputMaybe<BooleanOperator>;
  value?: InputMaybe<Scalars['Boolean']>;
};

export type BooleanMetadata = {
  __typename?: 'BooleanMetadata';
  name: Scalars['String'];
  value: Scalars['Boolean'];
};

export enum BooleanOperator {
  Equals = 'EQUALS'
}

export type CalendarArrayFilter = {
  _expressions: Array<InputMaybe<CalendarArrayFilterExpression>>;
  _logOp?: InputMaybe<LogOp>;
};

export type CalendarArrayFilterExpression = {
  _apply?: InputMaybe<ArrayMode>;
  _operator?: InputMaybe<CalendarOperator>;
  value?: InputMaybe<Scalars['Calendar']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['Calendar']>>>;
};

export type CalendarArrayMetadata = {
  __typename?: 'CalendarArrayMetadata';
  name: Scalars['String'];
  value: Array<Maybe<Scalars['Calendar']>>;
};

export type CalendarFilter = {
  _expressions: Array<InputMaybe<CalendarFilterExpression>>;
  _logOp?: InputMaybe<LogOp>;
};

export type CalendarFilterExpression = {
  _operator?: InputMaybe<CalendarOperator>;
  value?: InputMaybe<Scalars['Calendar']>;
};

export type CalendarMetadata = {
  __typename?: 'CalendarMetadata';
  name: Scalars['String'];
  value: Scalars['Calendar'];
};

export enum CalendarOperator {
  After = 'AFTER',
  At = 'AT',
  AtOrAfter = 'AT_OR_AFTER',
  AtOrBefore = 'AT_OR_BEFORE',
  Before = 'BEFORE',
  NotAt = 'NOT_AT'
}

export type CtaModel = {
  __typename?: 'CtaModel';
  _metadata?: Maybe<TypedMetaData>;
  _model?: Maybe<ModelInfo>;
  _path?: Maybe<Scalars['ID']>;
  _variation?: Maybe<Scalars['String']>;
  _variations?: Maybe<Array<Maybe<Scalars['String']>>>;
  callToAction?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type CtaModelArrayFilter = {
  _apply?: InputMaybe<ArrayMode>;
  _match?: InputMaybe<CtaModelFilter>;
};

export type CtaModelFilter = {
  _logOp?: InputMaybe<LogOp>;
  _path?: InputMaybe<IdFilter>;
  _variation?: InputMaybe<StringFilter>;
  _variations?: InputMaybe<StringArrayFilter>;
  callToAction?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type CtaModelResult = {
  __typename?: 'CtaModelResult';
  _references?: Maybe<Array<Maybe<Reference>>>;
  item: CtaModel;
};

export type CtaModelResults = {
  __typename?: 'CtaModelResults';
  _references?: Maybe<Array<Maybe<Reference>>>;
  items: Array<Maybe<CtaModel>>;
};

export type DateArrayFilter = {
  _expressions: Array<InputMaybe<DateArrayFilterExpression>>;
  _logOp?: InputMaybe<LogOp>;
};

export type DateArrayFilterExpression = {
  _apply?: InputMaybe<ArrayMode>;
  _operator?: InputMaybe<DateOperator>;
  value?: InputMaybe<Scalars['Date']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type DateFilter = {
  _expressions: Array<InputMaybe<DateFilterExpression>>;
  _logOp?: InputMaybe<LogOp>;
};

export type DateFilterExpression = {
  _operator?: InputMaybe<DateOperator>;
  value?: InputMaybe<Scalars['Date']>;
};

export enum DateOperator {
  After = 'AFTER',
  At = 'AT',
  AtOrAfter = 'AT_OR_AFTER',
  AtOrBefore = 'AT_OR_BEFORE',
  Before = 'BEFORE',
  NotAt = 'NOT_AT'
}

export type DocumentRef = {
  __typename?: 'DocumentRef';
  _authorUrl?: Maybe<Scalars['String']>;
  _path?: Maybe<Scalars['ID']>;
  _publishUrl?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type FloatArrayFilter = {
  _expressions: Array<InputMaybe<FloatArrayFilterExpression>>;
  _logOp?: InputMaybe<LogOp>;
};

export type FloatArrayFilterExpression = {
  _apply?: InputMaybe<ArrayMode>;
  _operator?: InputMaybe<FloatOperator>;
  _sensitiveness?: InputMaybe<Scalars['Float']>;
  value?: InputMaybe<Scalars['Float']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FloatArrayMetadata = {
  __typename?: 'FloatArrayMetadata';
  name: Scalars['String'];
  value: Array<Maybe<Scalars['Float']>>;
};

export type FloatFilter = {
  _expressions: Array<InputMaybe<FloatFilterExpression>>;
  _logOp?: InputMaybe<LogOp>;
};

export type FloatFilterExpression = {
  _operator?: InputMaybe<FloatOperator>;
  _sensitiveness?: InputMaybe<Scalars['Float']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FloatMetadata = {
  __typename?: 'FloatMetadata';
  name: Scalars['String'];
  value: Scalars['Float'];
};

export enum FloatOperator {
  Equal = 'EQUAL',
  Greater = 'GREATER',
  GreaterEqual = 'GREATER_EQUAL',
  Lower = 'LOWER',
  LowerEqual = 'LOWER_EQUAL',
  Unequal = 'UNEQUAL'
}

export type HeroModel = {
  __typename?: 'HeroModel';
  _metadata?: Maybe<TypedMetaData>;
  _model?: Maybe<ModelInfo>;
  _path?: Maybe<Scalars['ID']>;
  _variation?: Maybe<Scalars['String']>;
  _variations?: Maybe<Array<Maybe<Scalars['String']>>>;
  ctatext?: Maybe<Scalars['String']>;
  ctaurl?: Maybe<Scalars['String']>;
  description?: Maybe<MultiFormatString>;
  externalimage?: Maybe<Scalars['String']>;
  image?: Maybe<Reference>;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type HeroModelArrayFilter = {
  _apply?: InputMaybe<ArrayMode>;
  _match?: InputMaybe<HeroModelFilter>;
};

export type HeroModelFilter = {
  _logOp?: InputMaybe<LogOp>;
  _path?: InputMaybe<IdFilter>;
  _variation?: InputMaybe<StringFilter>;
  _variations?: InputMaybe<StringArrayFilter>;
  ctatext?: InputMaybe<StringFilter>;
  ctaurl?: InputMaybe<StringFilter>;
  description?: InputMaybe<MultiFormatStringFilter>;
  externalimage?: InputMaybe<StringFilter>;
  subtitle?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type HeroModelResult = {
  __typename?: 'HeroModelResult';
  _references?: Maybe<Array<Maybe<Reference>>>;
  item: HeroModel;
};

export type HeroModelResults = {
  __typename?: 'HeroModelResults';
  _references?: Maybe<Array<Maybe<Reference>>>;
  items: Array<Maybe<HeroModel>>;
};

export type IdArrayFilter = {
  _expressions: Array<InputMaybe<IdArrayFilterExpression>>;
  _logOp?: InputMaybe<LogOp>;
};

export type IdArrayFilterExpression = {
  _apply?: InputMaybe<ArrayMode>;
  _operator?: InputMaybe<IdOperator>;
  value?: InputMaybe<Scalars['ID']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type IdFilter = {
  _expressions: Array<InputMaybe<IdFilterExpression>>;
  _logOp?: InputMaybe<LogOp>;
};

export type IdFilterExpression = {
  _operator?: InputMaybe<IdOperator>;
  value?: InputMaybe<Scalars['ID']>;
};

export enum IdOperator {
  Equals = 'EQUALS',
  EqualsNot = 'EQUALS_NOT',
  StartsWith = 'STARTS_WITH'
}

export type ImageRef = {
  __typename?: 'ImageRef';
  _authorUrl?: Maybe<Scalars['String']>;
  _path?: Maybe<Scalars['ID']>;
  _publishUrl?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  mimeType?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type IntArrayFilter = {
  _expressions: Array<InputMaybe<IntArrayFilterExpression>>;
  _logOp?: InputMaybe<LogOp>;
};

export type IntArrayFilterExpression = {
  _apply?: InputMaybe<ArrayMode>;
  _operator?: InputMaybe<IntOperator>;
  value?: InputMaybe<Scalars['Int']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type IntArrayMetadata = {
  __typename?: 'IntArrayMetadata';
  name: Scalars['String'];
  value: Array<Maybe<Scalars['Int']>>;
};

export type IntFilter = {
  _expressions: Array<InputMaybe<IntFilterExpression>>;
  _logOp?: InputMaybe<LogOp>;
};

export type IntFilterExpression = {
  _operator?: InputMaybe<IntOperator>;
  value?: InputMaybe<Scalars['Int']>;
};

export type IntMetadata = {
  __typename?: 'IntMetadata';
  name: Scalars['String'];
  value: Scalars['Int'];
};

export enum IntOperator {
  Equal = 'EQUAL',
  Greater = 'GREATER',
  GreaterEqual = 'GREATER_EQUAL',
  Lower = 'LOWER',
  LowerEqual = 'LOWER_EQUAL',
  Unequal = 'UNEQUAL'
}

export type LandingpageModel = {
  __typename?: 'LandingpageModel';
  _metadata?: Maybe<TypedMetaData>;
  _model?: Maybe<ModelInfo>;
  _path?: Maybe<Scalars['ID']>;
  _variation?: Maybe<Scalars['String']>;
  _variations?: Maybe<Array<Maybe<Scalars['String']>>>;
  sections?: Maybe<Array<Maybe<AllFragmentModels>>>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type LandingpageModelArrayFilter = {
  _apply?: InputMaybe<ArrayMode>;
  _match?: InputMaybe<LandingpageModelFilter>;
};

export type LandingpageModelFilter = {
  _logOp?: InputMaybe<LogOp>;
  _path?: InputMaybe<IdFilter>;
  _variation?: InputMaybe<StringFilter>;
  _variations?: InputMaybe<StringArrayFilter>;
  slug?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type LandingpageModelResult = {
  __typename?: 'LandingpageModelResult';
  _references?: Maybe<Array<Maybe<Reference>>>;
  item: LandingpageModel;
};

export type LandingpageModelResults = {
  __typename?: 'LandingpageModelResults';
  _references?: Maybe<Array<Maybe<Reference>>>;
  items: Array<Maybe<LandingpageModel>>;
};

export enum LogOp {
  And = 'AND',
  Or = 'OR'
}

export type ModelInfo = {
  __typename?: 'ModelInfo';
  _path?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};

export type MultiFormatString = {
  __typename?: 'MultiFormatString';
  html?: Maybe<Scalars['String']>;
  json?: Maybe<Scalars['Json']>;
  markdown?: Maybe<Scalars['String']>;
  plaintext?: Maybe<Scalars['String']>;
};

export type MultiFormatStringArrayFilter = {
  _apply?: InputMaybe<ArrayMode>;
  _match?: InputMaybe<MultiFormatStringFilter>;
};

export type MultiFormatStringFilter = {
  _logOp?: InputMaybe<LogOp>;
  html?: InputMaybe<StringFilter>;
  markdown?: InputMaybe<StringFilter>;
  plaintext?: InputMaybe<StringFilter>;
};

export type MultimediaRef = {
  __typename?: 'MultimediaRef';
  _authorUrl?: Maybe<Scalars['String']>;
  _path?: Maybe<Scalars['ID']>;
  _publishUrl?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type PageRef = {
  __typename?: 'PageRef';
  _authorUrl?: Maybe<Scalars['String']>;
  _path?: Maybe<Scalars['ID']>;
  _publishUrl?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type QueryType = {
  __typename?: 'QueryType';
  /** Get a single `cta`, specified by its path and optional variation */
  ctaByPath: CtaModelResult;
  /** Get multiple `cta` objects */
  ctaList: CtaModelResults;
  /** Get a single `hero`, specified by its path and optional variation */
  heroByPath: HeroModelResult;
  /** Get multiple `hero` objects */
  heroList: HeroModelResults;
  /** Get a single `landingpage`, specified by its path and optional variation */
  landingpageByPath: LandingpageModelResult;
  /** Get multiple `landingpage` objects */
  landingpageList: LandingpageModelResults;
  /** Get a single `text`, specified by its path and optional variation */
  textByPath: TextModelResult;
  /** Get multiple `text` objects */
  textList: TextModelResults;
};


export type QueryTypeCtaByPathArgs = {
  _path: Scalars['String'];
  variation?: InputMaybe<Scalars['String']>;
};


export type QueryTypeCtaListArgs = {
  _locale?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CtaModelFilter>;
  variation?: InputMaybe<Scalars['String']>;
};


export type QueryTypeHeroByPathArgs = {
  _path: Scalars['String'];
  variation?: InputMaybe<Scalars['String']>;
};


export type QueryTypeHeroListArgs = {
  _locale?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<HeroModelFilter>;
  variation?: InputMaybe<Scalars['String']>;
};


export type QueryTypeLandingpageByPathArgs = {
  _path: Scalars['String'];
  variation?: InputMaybe<Scalars['String']>;
};


export type QueryTypeLandingpageListArgs = {
  _locale?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<LandingpageModelFilter>;
  variation?: InputMaybe<Scalars['String']>;
};


export type QueryTypeTextByPathArgs = {
  _path: Scalars['String'];
  variation?: InputMaybe<Scalars['String']>;
};


export type QueryTypeTextListArgs = {
  _locale?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TextModelFilter>;
  variation?: InputMaybe<Scalars['String']>;
};

export type Reference = ArchiveRef | CtaModel | DocumentRef | HeroModel | ImageRef | LandingpageModel | MultimediaRef | PageRef | TextModel;

export type StringArrayFilter = {
  _expressions: Array<InputMaybe<StringArrayFilterExpression>>;
  _logOp?: InputMaybe<LogOp>;
};

export type StringArrayFilterExpression = {
  _apply?: InputMaybe<ArrayMode>;
  _operator?: InputMaybe<StringOperator>;
  value?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type StringArrayMetadata = {
  __typename?: 'StringArrayMetadata';
  name: Scalars['String'];
  value: Array<Maybe<Scalars['String']>>;
};

export type StringFilter = {
  _expressions: Array<InputMaybe<StringFilterExpression>>;
  _logOp?: InputMaybe<LogOp>;
};

export type StringFilterExpression = {
  _ignoreCase?: InputMaybe<Scalars['Boolean']>;
  _operator?: InputMaybe<StringOperator>;
  value?: InputMaybe<Scalars['String']>;
};

export type StringMetadata = {
  __typename?: 'StringMetadata';
  name: Scalars['String'];
  value: Scalars['String'];
};

export enum StringOperator {
  Contains = 'CONTAINS',
  ContainsNot = 'CONTAINS_NOT',
  Equals = 'EQUALS',
  EqualsNot = 'EQUALS_NOT'
}

export type TextModel = {
  __typename?: 'TextModel';
  _metadata?: Maybe<TypedMetaData>;
  _model?: Maybe<ModelInfo>;
  _path?: Maybe<Scalars['ID']>;
  _variation?: Maybe<Scalars['String']>;
  _variations?: Maybe<Array<Maybe<Scalars['String']>>>;
  content?: Maybe<MultiFormatString>;
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type TextModelArrayFilter = {
  _apply?: InputMaybe<ArrayMode>;
  _match?: InputMaybe<TextModelFilter>;
};

export type TextModelFilter = {
  _logOp?: InputMaybe<LogOp>;
  _path?: InputMaybe<IdFilter>;
  _variation?: InputMaybe<StringFilter>;
  _variations?: InputMaybe<StringArrayFilter>;
  content?: InputMaybe<MultiFormatStringFilter>;
  id?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type TextModelResult = {
  __typename?: 'TextModelResult';
  _references?: Maybe<Array<Maybe<Reference>>>;
  item: TextModel;
};

export type TextModelResults = {
  __typename?: 'TextModelResults';
  _references?: Maybe<Array<Maybe<Reference>>>;
  items: Array<Maybe<TextModel>>;
};

export type TimeArrayFilter = {
  _expressions: Array<InputMaybe<TimeArrayFilterExpression>>;
  _logOp?: InputMaybe<LogOp>;
};

export type TimeArrayFilterExpression = {
  _apply?: InputMaybe<ArrayMode>;
  _operator?: InputMaybe<TimeOperator>;
  value?: InputMaybe<Scalars['Time']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
};

export type TimeFilter = {
  _expressions: Array<InputMaybe<TimeFilterExpression>>;
  _logOp?: InputMaybe<LogOp>;
};

export type TimeFilterExpression = {
  _operator?: InputMaybe<TimeOperator>;
  value?: InputMaybe<Scalars['Time']>;
};

export enum TimeOperator {
  After = 'AFTER',
  At = 'AT',
  AtOrAfter = 'AT_OR_AFTER',
  AtOrBefore = 'AT_OR_BEFORE',
  Before = 'BEFORE',
  NotAt = 'NOT_AT'
}

export type TypedMetaData = {
  __typename?: 'TypedMetaData';
  booleanArrayMetadata: Array<Maybe<BooleanArrayMetadata>>;
  booleanMetadata: Array<Maybe<BooleanMetadata>>;
  calendarArrayMetadata: Array<Maybe<CalendarArrayMetadata>>;
  calendarMetadata: Array<Maybe<CalendarMetadata>>;
  floatArrayMetadata: Array<Maybe<FloatArrayMetadata>>;
  floatMetadata: Array<Maybe<FloatMetadata>>;
  intArrayMetadata: Array<Maybe<IntArrayMetadata>>;
  intMetadata: Array<Maybe<IntMetadata>>;
  stringArrayMetadata: Array<Maybe<StringArrayMetadata>>;
  stringMetadata: Array<Maybe<StringMetadata>>;
};

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = { __typename?: 'QueryType', landingpageList: { __typename?: 'LandingpageModelResults', items: Array<{ __typename?: 'LandingpageModel', title?: string, slug?: string, sections?: Array<{ __typename: 'CtaModel', _path?: string, callToAction?: string, url?: string } | { __typename: 'HeroModel', _path?: string, title?: string, subtitle?: string, externalimage?: string, description?: { __typename?: 'MultiFormatString', html?: string }, image?: { __typename: 'ArchiveRef' } | { __typename: 'CtaModel' } | { __typename: 'DocumentRef' } | { __typename: 'HeroModel' } | { __typename: 'ImageRef', _publishUrl?: string, _authorUrl?: string, width?: number, height?: number } | { __typename: 'LandingpageModel' } | { __typename: 'MultimediaRef' } | { __typename: 'PageRef' } | { __typename: 'TextModel' } } | { __typename: 'LandingpageModel' } | { __typename: 'TextModel', _path?: string, title?: string, id?: string, content?: { __typename?: 'MultiFormatString', html?: string } }> }> } };
