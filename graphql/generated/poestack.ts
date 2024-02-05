import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  JSONObject: { input: any; output: any; }
};

export type AtlasPassiveSnapshot = {
  __typename?: 'AtlasPassiveSnapshot';
  createdAtTimestamp: Scalars['DateTime']['output'];
  hashes: Array<Scalars['Float']['output']>;
  league: Scalars['String']['output'];
  source: Scalars['String']['output'];
  systemSnapshotTimestamp: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type AtlasPassiveSnapshotResponse = {
  __typename?: 'AtlasPassiveSnapshotResponse';
  results: Array<AtlasPassiveSnapshot>;
};

export type AtlasPassiveSnapshotSearch = {
  excludedHashes?: InputMaybe<Array<Scalars['String']['input']>>;
  includedHashes?: InputMaybe<Array<Scalars['String']['input']>>;
  league?: InputMaybe<Scalars['String']['input']>;
  timestampEndInclusive?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CustomLadderGroup = {
  __typename?: 'CustomLadderGroup';
  createdAtTimestamp: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  members: Array<CustomLadderMember>;
  name: Scalars['String']['output'];
  ownerUserId: Scalars['String']['output'];
};

export type CustomLadderGroupInput = {
  id: Scalars['String']['input'];
  members: Array<CustomLadderMemberInput>;
  name: Scalars['String']['input'];
};

export type CustomLadderMember = {
  __typename?: 'CustomLadderMember';
  poeProfileName: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type CustomLadderMemberInput = {
  poeProfileName: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type GenericAggregation = {
  __typename?: 'GenericAggregation';
  values: Array<GenericIntKeyValue>;
};

export type GenericIntKeyValue = {
  __typename?: 'GenericIntKeyValue';
  key?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['DateTime']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type GlobalSearch = {
  league: Scalars['String']['input'];
  searchText: Scalars['String']['input'];
};

export type GlobalSearchResponse = {
  __typename?: 'GlobalSearchResponse';
  results: Array<GlobalSearchResponseEntry>;
};

export type GlobalSearchResponseEntry = {
  __typename?: 'GlobalSearchResponseEntry';
  display: Scalars['String']['output'];
  group: Scalars['String']['output'];
  icon?: Maybe<Scalars['String']['output']>;
  target: Scalars['String']['output'];
};

export type ItemGroup = {
  __typename?: 'ItemGroup';
  baseType?: Maybe<Scalars['String']['output']>;
  createdAtTimestamp: Scalars['DateTime']['output'];
  displayName?: Maybe<Scalars['String']['output']>;
  hashString: Scalars['String']['output'];
  icon?: Maybe<Scalars['String']['output']>;
  inventoryMaxStackSize?: Maybe<Scalars['Float']['output']>;
  key: Scalars['String']['output'];
  properties?: Maybe<Array<Scalars['JSONObject']['output']>>;
  tag: Scalars['String']['output'];
};

export type ItemGroupListing = {
  __typename?: 'ItemGroupListing';
  listedAtTimestamp: Scalars['DateTime']['output'];
  listedValue: Scalars['Float']['output'];
  quantity: Scalars['Float']['output'];
};

export type LadderViewVectorRecord = {
  __typename?: 'LadderViewVectorRecord';
  league: Scalars['String']['output'];
  timestamp: Scalars['DateTime']['output'];
};

export type LivePricingHistoryConfig = {
  itemGroupHashStrings: Array<Scalars['String']['input']>;
  league: Scalars['String']['input'];
  minQuantities: Array<Scalars['Float']['input']>;
  types: Array<Scalars['String']['input']>;
};

export type LivePricingHistoryEntry = {
  __typename?: 'LivePricingHistoryEntry';
  timestamp: Scalars['DateTime']['output'];
  value: Scalars['Float']['output'];
};

export type LivePricingHistoryGroup = {
  __typename?: 'LivePricingHistoryGroup';
  itemGroup: ItemGroup;
  series: Array<LivePricingHistorySeries>;
};

export type LivePricingHistoryResult = {
  __typename?: 'LivePricingHistoryResult';
  results: Array<LivePricingHistoryGroup>;
};

export type LivePricingHistorySeries = {
  __typename?: 'LivePricingHistorySeries';
  entries: Array<LivePricingHistoryEntry>;
  stockRangeStartInclusive: Scalars['Float']['output'];
  type: Scalars['String']['output'];
};

export type LivePricingSimpleConfig = {
  itemGroupHashString: Scalars['String']['input'];
  league: Scalars['String']['input'];
  listingPercent?: InputMaybe<Scalars['Float']['input']>;
  quantity: Scalars['Float']['input'];
};

export type LivePricingSimpleResult = {
  __typename?: 'LivePricingSimpleResult';
  allListingsLength: Scalars['Float']['output'];
  stockValuation?: Maybe<LivePricingValuation>;
  valuation?: Maybe<LivePricingValuation>;
};

export type LivePricingSummary = {
  __typename?: 'LivePricingSummary';
  entries: Array<LivePricingSummaryEntry>;
};

export type LivePricingSummaryEntry = {
  __typename?: 'LivePricingSummaryEntry';
  itemGroup: ItemGroup;
  stockValuation?: Maybe<LivePricingValuation>;
  valuation?: Maybe<LivePricingValuation>;
};

export type LivePricingSummarySearch = {
  itemGroupHashStrings?: InputMaybe<Array<Scalars['String']['input']>>;
  league: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Float']['input']>;
  offSet?: InputMaybe<Scalars['Float']['input']>;
  quantityMin?: InputMaybe<Scalars['Float']['input']>;
  searchString?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
};

export type LivePricingValuation = {
  __typename?: 'LivePricingValuation';
  listingPercent: Scalars['Float']['output'];
  quantity: Scalars['Float']['output'];
  validListings: Array<ItemGroupListing>;
  validListingsLength: Scalars['Float']['output'];
  value: Scalars['Float']['output'];
  valueIndex: Scalars['Float']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteCustomLadderGroup: Scalars['Boolean']['output'];
  deleteStashViewValueSnapshotSeries: Scalars['Boolean']['output'];
  deleteTftOneClickMessage: Scalars['Boolean']['output'];
  exchangeAuthCode: Scalars['String']['output'];
  loginAs: Scalars['String']['output'];
  routeChange: Scalars['Boolean']['output'];
  stashViewOneClickMessage: Scalars['String']['output'];
  stashViewOneClickPost: Scalars['Boolean']['output'];
  stashViewRefreshTabs: Scalars['Boolean']['output'];
  stashViewSnapshot: Scalars['String']['output'];
  stashViewUpdateSnapshotRecord: Scalars['Boolean']['output'];
  updateCustomLadderGroup: CustomLadderGroup;
  updateDiscordCode: Scalars['Boolean']['output'];
  updatePatreonCode: Scalars['Boolean']['output'];
  updatePreferenceListingPercent: Scalars['Boolean']['output'];
  updateStashViewAutomaticSnapshotSettings: Scalars['Boolean']['output'];
};


export type MutationDeleteCustomLadderGroupArgs = {
  groupId: Scalars['String']['input'];
};


export type MutationDeleteTftOneClickMessageArgs = {
  messageId: Scalars['String']['input'];
};


export type MutationExchangeAuthCodeArgs = {
  authCode: Scalars['String']['input'];
};


export type MutationLoginAsArgs = {
  userId: Scalars['String']['input'];
};


export type MutationRouteChangeArgs = {
  path: Scalars['String']['input'];
  pathname: Scalars['String']['input'];
};


export type MutationStashViewOneClickMessageArgs = {
  input: StashViewSettings;
};


export type MutationStashViewOneClickPostArgs = {
  input: StashViewSettings;
};


export type MutationStashViewRefreshTabsArgs = {
  league: Scalars['String']['input'];
};


export type MutationStashViewSnapshotArgs = {
  input: StashViewSnapshotInput;
};


export type MutationStashViewUpdateSnapshotRecordArgs = {
  input: StashViewSnapshotRecordUpdateInput;
};


export type MutationUpdateCustomLadderGroupArgs = {
  group: CustomLadderGroupInput;
};


export type MutationUpdateDiscordCodeArgs = {
  code: Scalars['String']['input'];
};


export type MutationUpdatePatreonCodeArgs = {
  code: Scalars['String']['input'];
};


export type MutationUpdatePreferenceListingPercentArgs = {
  listingPercent: Scalars['Float']['input'];
};


export type MutationUpdateStashViewAutomaticSnapshotSettingsArgs = {
  input: StashViewAutomaticSnapshotSettingsInput;
};

export type OneClickMessageHistory = {
  __typename?: 'OneClickMessageHistory';
  channelId: Scalars['String']['output'];
  exportSubType?: Maybe<Scalars['String']['output']>;
  exportType: Scalars['String']['output'];
  messageId: Scalars['String']['output'];
  rateLimitExpires: Scalars['DateTime']['output'];
  timestamp: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type PassiveTreeConnection = {
  __typename?: 'PassiveTreeConnection';
  curved: Scalars['Boolean']['output'];
  fromNode: Scalars['String']['output'];
  toNode: Scalars['String']['output'];
};

export type PassiveTreeConstants = {
  __typename?: 'PassiveTreeConstants';
  maxX: Scalars['Float']['output'];
  maxY: Scalars['Float']['output'];
  minX: Scalars['Float']['output'];
  minY: Scalars['Float']['output'];
  orbitRadii: Array<Scalars['Float']['output']>;
  skillsPerOrbit: Array<Scalars['Float']['output']>;
};

export type PassiveTreeNode = {
  __typename?: 'PassiveTreeNode';
  activeEffectImage?: Maybe<Scalars['String']['output']>;
  activeIcon?: Maybe<Scalars['String']['output']>;
  ascendancyName?: Maybe<Scalars['String']['output']>;
  flavourText: Array<Scalars['String']['output']>;
  group: Scalars['Float']['output'];
  hash: Scalars['String']['output'];
  icon: Scalars['String']['output'];
  in: Array<Scalars['String']['output']>;
  inactiveIcon?: Maybe<Scalars['String']['output']>;
  isJewelSocket?: Maybe<Scalars['Boolean']['output']>;
  isKeystone?: Maybe<Scalars['Boolean']['output']>;
  isMastery?: Maybe<Scalars['Boolean']['output']>;
  isMultipleChoiceOption?: Maybe<Scalars['Boolean']['output']>;
  isNotable?: Maybe<Scalars['Boolean']['output']>;
  masteryEffects?: Maybe<Array<Scalars['JSON']['output']>>;
  name: Scalars['String']['output'];
  orbit: Scalars['Float']['output'];
  orbitIndex: Scalars['Float']['output'];
  out: Array<Scalars['String']['output']>;
  recipe: Array<Scalars['String']['output']>;
  reminderText: Array<Scalars['String']['output']>;
  size: Scalars['Float']['output'];
  stats: Array<Scalars['String']['output']>;
  x: Scalars['Float']['output'];
  y: Scalars['Float']['output'];
};

export type PassiveTreeResponse = {
  __typename?: 'PassiveTreeResponse';
  allConnections?: Maybe<Array<PassiveTreeConnection>>;
  allNodes?: Maybe<Array<PassiveTreeNode>>;
  connectionMap: Scalars['JSON']['output'];
  constants: PassiveTreeConstants;
  nodeMap: Scalars['JSON']['output'];
};

export type PoeLeague = {
  __typename?: 'PoeLeague';
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  realm: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type PoeStashTab = {
  __typename?: 'PoeStashTab';
  flatIndex?: Maybe<Scalars['Float']['output']>;
  id: Scalars['String']['output'];
  index: Scalars['Float']['output'];
  league: Scalars['String']['output'];
  name: Scalars['String']['output'];
  parent?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  atlasPassiveSnapshotsByUser: AtlasPassiveSnapshotResponse;
  atlasPassiveTreeSnapshotPopularityAggregation: GenericAggregation;
  atlasTree: PassiveTreeResponse;
  checkTftMembership: Scalars['Boolean']['output'];
  customLadderGroup: CustomLadderGroup;
  customLadderGroupsByOwner: Array<CustomLadderGroup>;
  globalSearch: GlobalSearchResponse;
  ladderViewVectorRecords: Array<LadderViewVectorRecord>;
  leagueActvityTimeseries: GenericAggregation;
  leagues: Array<PoeLeague>;
  livePriceSimple: LivePricingSimpleResult;
  livePricingHistory: LivePricingHistoryResult;
  livePricingSummarySearch: LivePricingSummary;
  myNotifications: Array<UserNotification>;
  myProfile: UserProfile;
  passiveTree: PassiveTreeResponse;
  poestackStats: Scalars['JSON']['output'];
  profileByPoeProfileName: UserProfile;
  stashTabs: Array<PoeStashTab>;
  stashViewAutomaticSnapshotSettings: StashViewAutomaticSnapshotSettings;
  stashViewItemSummary: StashViewStashSummary;
  stashViewJobStat: StashViewJob;
  stashViewSnapshotRecords: Array<StashViewSnapshotRecord>;
  stashViewValueSnapshotSeries: Array<StashViewValueSnapshotSeries>;
  tftLiveListingSearch: Array<TftLiveListing>;
  tftLiveListings: Array<TftLiveListing>;
  tftOneClickMessageHistory: Array<OneClickMessageHistory>;
};


export type QueryAtlasPassiveSnapshotsByUserArgs = {
  timestampEndInclusive?: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['String']['input'];
};


export type QueryAtlasPassiveTreeSnapshotPopularityAggregationArgs = {
  search: AtlasPassiveSnapshotSearch;
};


export type QueryAtlasTreeArgs = {
  passiveTreeVersion: Scalars['String']['input'];
};


export type QueryCheckTftMembershipArgs = {
  forcePull?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCustomLadderGroupArgs = {
  groupId: Scalars['String']['input'];
};


export type QueryCustomLadderGroupsByOwnerArgs = {
  ownerId: Scalars['String']['input'];
};


export type QueryGlobalSearchArgs = {
  search: GlobalSearch;
};


export type QueryLadderViewVectorRecordsArgs = {
  league: Scalars['String']['input'];
};


export type QueryLivePriceSimpleArgs = {
  config: LivePricingSimpleConfig;
};


export type QueryLivePricingHistoryArgs = {
  config: LivePricingHistoryConfig;
};


export type QueryLivePricingSummarySearchArgs = {
  search: LivePricingSummarySearch;
};


export type QueryPassiveTreeArgs = {
  passiveTreeVersion: Scalars['String']['input'];
};


export type QueryProfileByPoeProfileNameArgs = {
  poeProfileName: Scalars['String']['input'];
};


export type QueryStashTabsArgs = {
  forcePull?: InputMaybe<Scalars['Boolean']['input']>;
  league: Scalars['String']['input'];
};


export type QueryStashViewAutomaticSnapshotSettingsArgs = {
  league: Scalars['String']['input'];
};


export type QueryStashViewJobStatArgs = {
  jobId: Scalars['String']['input'];
};


export type QueryStashViewSnapshotRecordsArgs = {
  league: Scalars['String']['input'];
};


export type QueryStashViewValueSnapshotSeriesArgs = {
  league: Scalars['String']['input'];
};


export type QueryTftLiveListingSearchArgs = {
  search: TftLiveListingSearch;
};

export type StashViewAutomaticSnapshotSettings = {
  __typename?: 'StashViewAutomaticSnapshotSettings';
  durationBetweenSnapshotsSeconds: Scalars['Float']['output'];
  league: Scalars['String']['output'];
  nextSnapshotTimestamp: Scalars['DateTime']['output'];
  stashIds: Array<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
};

export type StashViewAutomaticSnapshotSettingsInput = {
  durationBetweenSnapshotsSeconds: Scalars['Float']['input'];
  league: Scalars['String']['input'];
  stashIds: Array<Scalars['String']['input']>;
};

export type StashViewItemSummary = {
  __typename?: 'StashViewItemSummary';
  icon?: Maybe<Scalars['String']['output']>;
  itemGroup?: Maybe<ItemGroup>;
  itemGroupHashString?: Maybe<Scalars['String']['output']>;
  itemGroupTag?: Maybe<Scalars['String']['output']>;
  itemId: Scalars['String']['output'];
  league: Scalars['String']['output'];
  quantity: Scalars['Float']['output'];
  searchableString: Scalars['String']['output'];
  stashId: Scalars['String']['output'];
  totalValueChaos?: Maybe<Scalars['Float']['output']>;
  userId: Scalars['String']['output'];
  valueChaos?: Maybe<Scalars['Float']['output']>;
  x: Scalars['Float']['output'];
  y: Scalars['Float']['output'];
};

export type StashViewJob = {
  __typename?: 'StashViewJob';
  id: Scalars['String']['output'];
  rateLimitEndTimestamp?: Maybe<Scalars['DateTime']['output']>;
  status: Scalars['String']['output'];
  timestamp: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type StashViewSettings = {
  chaosToDivRate: Scalars['Float']['input'];
  checkedTabIds: Array<Scalars['String']['input']>;
  checkedTags?: InputMaybe<Array<Scalars['String']['input']>>;
  excludedItemGroupIds: Array<Scalars['String']['input']>;
  exporterListedValueMultipler: Scalars['Float']['input'];
  ign?: InputMaybe<Scalars['String']['input']>;
  itemGroupValueOverrides: Scalars['JSONObject']['input'];
  league: Scalars['String']['input'];
  minItemQuantity?: InputMaybe<Scalars['Float']['input']>;
  minItemStackValue?: InputMaybe<Scalars['Float']['input']>;
  minItemValue?: InputMaybe<Scalars['Float']['input']>;
  searchString?: InputMaybe<Scalars['String']['input']>;
  selectedTabId?: InputMaybe<Scalars['String']['input']>;
  selectedValuationType?: InputMaybe<Scalars['String']['input']>;
  selectedView?: InputMaybe<Scalars['String']['input']>;
  tftSelectedCategory?: InputMaybe<Scalars['String']['input']>;
  tftSelectedSubCategory?: InputMaybe<Scalars['String']['input']>;
  valueOverridesEnabled: Scalars['Boolean']['input'];
};

export type StashViewSnapshotInput = {
  league: Scalars['String']['input'];
  stashIds: Array<Scalars['String']['input']>;
};

export type StashViewSnapshotRecord = {
  __typename?: 'StashViewSnapshotRecord';
  favorited: Scalars['Boolean']['output'];
  fixedValue?: Maybe<Scalars['Float']['output']>;
  league: Scalars['String']['output'];
  lpStockValue?: Maybe<Scalars['Float']['output']>;
  lpValue?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  timestamp: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type StashViewSnapshotRecordUpdateInput = {
  favorited: Scalars['Boolean']['input'];
  league: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  timestamp: Scalars['DateTime']['input'];
};

export type StashViewStashSummary = {
  __typename?: 'StashViewStashSummary';
  itemGroups: Array<ItemGroup>;
  items: Array<StashViewItemSummary>;
};

export type StashViewValueSnapshotSeries = {
  __typename?: 'StashViewValueSnapshotSeries';
  stashId: Scalars['String']['output'];
  timestamps: Array<Scalars['DateTime']['output']>;
  values: Array<Scalars['Float']['output']>;
};

export type TftLiveListing = {
  __typename?: 'TftLiveListing';
  body: Scalars['String']['output'];
  channelId: Scalars['String']['output'];
  delistedAtTimestamp?: Maybe<Scalars['DateTime']['output']>;
  messageId: Scalars['String']['output'];
  properties: Scalars['JSONObject']['output'];
  tag: Scalars['String']['output'];
  updatedAtTimestamp: Scalars['DateTime']['output'];
  userDiscordDisplayRole?: Maybe<Scalars['String']['output']>;
  userDiscordDisplayRoleColor?: Maybe<Scalars['String']['output']>;
  userDiscordHighestRole?: Maybe<Scalars['String']['output']>;
  userDiscordId: Scalars['String']['output'];
  userDiscordName: Scalars['String']['output'];
};

export type TftLiveListingSearch = {
  propertyFilterGroups: Array<TftLiveListingSearchPropertyGroup>;
  tag: Scalars['String']['input'];
};

export type TftLiveListingSearchProperty = {
  key: Scalars['String']['input'];
  type?: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type TftLiveListingSearchPropertyGroup = {
  filters: Array<TftLiveListingSearchProperty>;
  type?: Scalars['String']['input'];
};

export type UserNotification = {
  __typename?: 'UserNotification';
  body?: Maybe<Scalars['String']['output']>;
  href?: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  timestamp: Scalars['DateTime']['output'];
  title?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  userId?: Maybe<Scalars['String']['output']>;
};

export type UserProfile = {
  __typename?: 'UserProfile';
  createdAtTimestamp?: Maybe<Scalars['DateTime']['output']>;
  discordUserId?: Maybe<Scalars['String']['output']>;
  discordUsername?: Maybe<Scalars['String']['output']>;
  lastConnectedTimestamp?: Maybe<Scalars['DateTime']['output']>;
  oAuthTokenUpdatedAtTimestamp?: Maybe<Scalars['DateTime']['output']>;
  opaqueKey?: Maybe<Scalars['String']['output']>;
  patreonTier?: Maybe<Scalars['String']['output']>;
  patreonUserId?: Maybe<Scalars['String']['output']>;
  poeProfileName: Scalars['String']['output'];
  preferences: Scalars['JSON']['output'];
  roles: Array<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
};
