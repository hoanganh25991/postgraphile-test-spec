declare module gateway {
  // tslint:disable
  // graphql typescript definitions

  declare namespace gateway {
    interface IGraphQLResponseRoot {
      data?: IQuery | IMutation;
      errors?: Array<IGraphQLResponseError>;
    }

    interface IGraphQLResponseError {
      /** Required for all errors */
      message: string;
      locations?: Array<IGraphQLResponseErrorLocation>;
      /** 7.2.2 says 'GraphQL servers may provide additional entries to error' */
      [propName: string]: any;
    }

    interface IGraphQLResponseErrorLocation {
      line: number;
      column: number;
    }

    /**
     * The root query type which gives access points into the data universe.
     */
    interface IQuery {
      __typename: 'Query';

      /**
       * Exposes the root query type nested one level down. This is helpful for Relay 1 which can only query top level fields if they are in a particular form.
       */
      query: IQuery;

      /**
       * The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`.
       */
      nodeId: string;

      /**
       * Fetches an object given its globally unique `ID`.
       */
      node: Node | null;

      /**
       * Reads and enables pagination through a set of `AuxEngine`.
       */
      allAuxEngines: IAuxEnginesConnection | null;

      /**
       * Reads and enables pagination through a set of `AuxiliaryGenerator`.
       */
      allAuxiliaryGenerators: IAuxiliaryGeneratorsConnection | null;

      /**
       * Reads and enables pagination through a set of `BoilersExpanded`.
       */
      allBoilersExpandeds: IBoilersExpandedsConnection | null;

      /**
       * Reads and enables pagination through a set of `BuilderHistory`.
       */
      allBuilderHistories: IBuilderHistoriesConnection | null;

      /**
       * Reads and enables pagination through a set of `Capacity`.
       */
      allCapacities: ICapacitiesConnection | null;

      /**
       * Reads and enables pagination through a set of `ClassHistory`.
       */
      allClassHistories: IClassHistoriesConnection | null;

      /**
       * Reads and enables pagination through a set of `ClassWithdrawn`.
       */
      allClassWithdrawns: IClassWithdrawnsConnection | null;

      /**
       * Reads and enables pagination through a set of `CompanyFullDetailsAndParentCode`.
       */
      allCompanyFullDetailsAndParentCodes: ICompanyFullDetailsAndParentCodesConnection | null;

      /**
       * Reads and enables pagination through a set of `CompanyVesselRelationship`.
       */
      allCompanyVesselRelationships: ICompanyVesselRelationshipsConnection | null;

      /**
       * Reads and enables pagination through a set of `CrewList`.
       */
      allCrewLists: ICrewListsConnection | null;

      /**
       * Reads and enables pagination through a set of `DocHistory`.
       */
      allDocHistories: IDocHistoriesConnection | null;

      /**
       * Reads and enables pagination through a set of `FlagHistory`.
       */
      allFlagHistories: IFlagHistoriesConnection | null;

      /**
       * Reads and enables pagination through a set of `GroupBeneficialOwnerHistory`.
       */
      allGroupBeneficialOwnerHistories: IGroupBeneficialOwnerHistoriesConnection | null;

      /**
       * Reads and enables pagination through a set of `MainEngine`.
       */
      allMainEngines: IMainEnginesConnection | null;

      /**
       * Reads and enables pagination through a set of `MainGenerator`.
       */
      allMainGenerators: IMainGeneratorsConnection | null;

      /**
       * Reads and enables pagination through a set of `NameHistory`.
       */
      allNameHistories: INameHistoriesConnection | null;

      /**
       * Reads and enables pagination through a set of `OperatorHistory`.
       */
      allOperatorHistories: IOperatorHistoriesConnection | null;

      /**
       * Reads and enables pagination through a set of `PAndIHistory`.
       */
      allPAndIHistories: IPAndIHistoriesConnection | null;

      /**
       * Reads and enables pagination through a set of `RegisteredOwnerHistory`.
       */
      allRegisteredOwnerHistories: IRegisteredOwnerHistoriesConnection | null;

      /**
       * Reads and enables pagination through a set of `ShipData`.
       */
      allShipData: IShipDataConnection | null;

      /**
       * Reads and enables pagination through a set of `ShipManagerHistory`.
       */
      allShipManagerHistories: IShipManagerHistoriesConnection | null;

      /**
       * Reads and enables pagination through a set of `SpecialFeature`.
       */
      allSpecialFeatures: ISpecialFeaturesConnection | null;

      /**
       * Reads and enables pagination through a set of `StatusHistory`.
       */
      allStatusHistories: IStatusHistoriesConnection | null;

      /**
       * Reads and enables pagination through a set of `SurveyDateHistory`.
       */
      allSurveyDateHistories: ISurveyDateHistoriesConnection | null;

      /**
       * Reads and enables pagination through a set of `SurveyDate`.
       */
      allSurveyDates: ISurveyDatesConnection | null;

      /**
       * Reads and enables pagination through a set of `TechnicalManagerHistory`.
       */
      allTechnicalManagerHistories: ITechnicalManagerHistoriesConnection | null;

      /**
       * Reads and enables pagination through a set of `UnverifiedOwnership`.
       */
      allUnverifiedOwnerships: IUnverifiedOwnershipsConnection | null;
      shipDataByHash: IShipData | null;

      /**
       * Reads a single `ShipData` using its globally unique `ID`.
       */
      shipData: IShipData | null;
    }

    interface INodeOnQueryArguments {
      /**
       * The globally unique `ID`.
       */
      nodeId: string;
    }

    interface IAllAuxEnginesOnQueryArguments {
      /**
       * Only read the first `n` values of the set.
       */
      first?: number | null;

      /**
       * Only read the last `n` values of the set.
       */
      last?: number | null;

      /**
       * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
       */
      offset?: number | null;

      /**
       * Read all values in the set before (above) this cursor.
       */
      before?: any | null;

      /**
       * Read all values in the set after (below) this cursor.
       */
      after?: any | null;

      /**
       * The method to use when ordering `AuxEngine`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<AuxEnginesOrderBy> | null;

      /**
       * A condition to be used in determining which values should be returned by the collection.
       */
      condition?: IAuxEngineCondition | null;
    }

    interface IAllAuxiliaryGeneratorsOnQueryArguments {
      /**
       * Only read the first `n` values of the set.
       */
      first?: number | null;

      /**
       * Only read the last `n` values of the set.
       */
      last?: number | null;

      /**
       * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
       */
      offset?: number | null;

      /**
       * Read all values in the set before (above) this cursor.
       */
      before?: any | null;

      /**
       * Read all values in the set after (below) this cursor.
       */
      after?: any | null;

      /**
       * The method to use when ordering `AuxiliaryGenerator`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<AuxiliaryGeneratorsOrderBy> | null;

      /**
       * A condition to be used in determining which values should be returned by the collection.
       */
      condition?: IAuxiliaryGeneratorCondition | null;
    }

    interface IAllBoilersExpandedsOnQueryArguments {
      /**
       * Only read the first `n` values of the set.
       */
      first?: number | null;

      /**
       * Only read the last `n` values of the set.
       */
      last?: number | null;

      /**
       * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
       */
      offset?: number | null;

      /**
       * Read all values in the set before (above) this cursor.
       */
      before?: any | null;

      /**
       * Read all values in the set after (below) this cursor.
       */
      after?: any | null;

      /**
       * The method to use when ordering `BoilersExpanded`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<BoilersExpandedsOrderBy> | null;

      /**
       * A condition to be used in determining which values should be returned by the collection.
       */
      condition?: IBoilersExpandedCondition | null;
    }

    interface IAllBuilderHistoriesOnQueryArguments {
      /**
       * Only read the first `n` values of the set.
       */
      first?: number | null;

      /**
       * Only read the last `n` values of the set.
       */
      last?: number | null;

      /**
       * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
       */
      offset?: number | null;

      /**
       * Read all values in the set before (above) this cursor.
       */
      before?: any | null;

      /**
       * Read all values in the set after (below) this cursor.
       */
      after?: any | null;

      /**
       * The method to use when ordering `BuilderHistory`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<BuilderHistoriesOrderBy> | null;

      /**
       * A condition to be used in determining which values should be returned by the collection.
       */
      condition?: IBuilderHistoryCondition | null;
    }

    interface IAllCapacitiesOnQueryArguments {
      /**
       * Only read the first `n` values of the set.
       */
      first?: number | null;

      /**
       * Only read the last `n` values of the set.
       */
      last?: number | null;

      /**
       * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
       */
      offset?: number | null;

      /**
       * Read all values in the set before (above) this cursor.
       */
      before?: any | null;

      /**
       * Read all values in the set after (below) this cursor.
       */
      after?: any | null;

      /**
       * The method to use when ordering `Capacity`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<CapacitiesOrderBy> | null;

      /**
       * A condition to be used in determining which values should be returned by the collection.
       */
      condition?: ICapacityCondition | null;
    }

    interface IAllClassHistoriesOnQueryArguments {
      /**
       * Only read the first `n` values of the set.
       */
      first?: number | null;

      /**
       * Only read the last `n` values of the set.
       */
      last?: number | null;

      /**
       * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
       */
      offset?: number | null;

      /**
       * Read all values in the set before (above) this cursor.
       */
      before?: any | null;

      /**
       * Read all values in the set after (below) this cursor.
       */
      after?: any | null;

      /**
       * The method to use when ordering `ClassHistory`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<ClassHistoriesOrderBy> | null;

      /**
       * A condition to be used in determining which values should be returned by the collection.
       */
      condition?: IClassHistoryCondition | null;
    }

    interface IAllClassWithdrawnsOnQueryArguments {
      /**
       * Only read the first `n` values of the set.
       */
      first?: number | null;

      /**
       * Only read the last `n` values of the set.
       */
      last?: number | null;

      /**
       * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
       */
      offset?: number | null;

      /**
       * Read all values in the set before (above) this cursor.
       */
      before?: any | null;

      /**
       * Read all values in the set after (below) this cursor.
       */
      after?: any | null;

      /**
       * The method to use when ordering `ClassWithdrawn`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<ClassWithdrawnsOrderBy> | null;

      /**
       * A condition to be used in determining which values should be returned by the collection.
       */
      condition?: IClassWithdrawnCondition | null;
    }

    interface IAllCompanyFullDetailsAndParentCodesOnQueryArguments {
      /**
       * Only read the first `n` values of the set.
       */
      first?: number | null;

      /**
       * Only read the last `n` values of the set.
       */
      last?: number | null;

      /**
       * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
       */
      offset?: number | null;

      /**
       * Read all values in the set before (above) this cursor.
       */
      before?: any | null;

      /**
       * Read all values in the set after (below) this cursor.
       */
      after?: any | null;

      /**
       * The method to use when ordering `CompanyFullDetailsAndParentCode`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<CompanyFullDetailsAndParentCodesOrderBy> | null;

      /**
       * A condition to be used in determining which values should be returned by the collection.
       */
      condition?: ICompanyFullDetailsAndParentCodeCondition | null;
    }

    interface IAllCompanyVesselRelationshipsOnQueryArguments {
      /**
       * Only read the first `n` values of the set.
       */
      first?: number | null;

      /**
       * Only read the last `n` values of the set.
       */
      last?: number | null;

      /**
       * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
       */
      offset?: number | null;

      /**
       * Read all values in the set before (above) this cursor.
       */
      before?: any | null;

      /**
       * Read all values in the set after (below) this cursor.
       */
      after?: any | null;

      /**
       * The method to use when ordering `CompanyVesselRelationship`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<CompanyVesselRelationshipsOrderBy> | null;

      /**
       * A condition to be used in determining which values should be returned by the collection.
       */
      condition?: ICompanyVesselRelationshipCondition | null;
    }

    interface IAllCrewListsOnQueryArguments {
      /**
       * Only read the first `n` values of the set.
       */
      first?: number | null;

      /**
       * Only read the last `n` values of the set.
       */
      last?: number | null;

      /**
       * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
       */
      offset?: number | null;

      /**
       * Read all values in the set before (above) this cursor.
       */
      before?: any | null;

      /**
       * Read all values in the set after (below) this cursor.
       */
      after?: any | null;

      /**
       * The method to use when ordering `CrewList`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<CrewListsOrderBy> | null;

      /**
       * A condition to be used in determining which values should be returned by the collection.
       */
      condition?: ICrewListCondition | null;
    }

    interface IAllDocHistoriesOnQueryArguments {
      /**
       * Only read the first `n` values of the set.
       */
      first?: number | null;

      /**
       * Only read the last `n` values of the set.
       */
      last?: number | null;

      /**
       * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
       */
      offset?: number | null;

      /**
       * Read all values in the set before (above) this cursor.
       */
      before?: any | null;

      /**
       * Read all values in the set after (below) this cursor.
       */
      after?: any | null;

      /**
       * The method to use when ordering `DocHistory`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<DocHistoriesOrderBy> | null;

      /**
       * A condition to be used in determining which values should be returned by the collection.
       */
      condition?: IDocHistoryCondition | null;
    }

    interface IAllFlagHistoriesOnQueryArguments {
      /**
       * Only read the first `n` values of the set.
       */
      first?: number | null;

      /**
       * Only read the last `n` values of the set.
       */
      last?: number | null;

      /**
       * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
       */
      offset?: number | null;

      /**
       * Read all values in the set before (above) this cursor.
       */
      before?: any | null;

      /**
       * Read all values in the set after (below) this cursor.
       */
      after?: any | null;

      /**
       * The method to use when ordering `FlagHistory`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<FlagHistoriesOrderBy> | null;

      /**
       * A condition to be used in determining which values should be returned by the collection.
       */
      condition?: IFlagHistoryCondition | null;
    }

    interface IAllGroupBeneficialOwnerHistoriesOnQueryArguments {
      /**
       * Only read the first `n` values of the set.
       */
      first?: number | null;

      /**
       * Only read the last `n` values of the set.
       */
      last?: number | null;

      /**
       * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
       */
      offset?: number | null;

      /**
       * Read all values in the set before (above) this cursor.
       */
      before?: any | null;

      /**
       * Read all values in the set after (below) this cursor.
       */
      after?: any | null;

      /**
       * The method to use when ordering `GroupBeneficialOwnerHistory`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<GroupBeneficialOwnerHistoriesOrderBy> | null;

      /**
       * A condition to be used in determining which values should be returned by the collection.
       */
      condition?: IGroupBeneficialOwnerHistoryCondition | null;
    }

    interface IAllMainEnginesOnQueryArguments {
      /**
       * Only read the first `n` values of the set.
       */
      first?: number | null;

      /**
       * Only read the last `n` values of the set.
       */
      last?: number | null;

      /**
       * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
       */
      offset?: number | null;

      /**
       * Read all values in the set before (above) this cursor.
       */
      before?: any | null;

      /**
       * Read all values in the set after (below) this cursor.
       */
      after?: any | null;

      /**
       * The method to use when ordering `MainEngine`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<MainEnginesOrderBy> | null;

      /**
       * A condition to be used in determining which values should be returned by the collection.
       */
      condition?: IMainEngineCondition | null;
    }

    interface IAllMainGeneratorsOnQueryArguments {
      /**
       * Only read the first `n` values of the set.
       */
      first?: number | null;

      /**
       * Only read the last `n` values of the set.
       */
      last?: number | null;

      /**
       * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
       */
      offset?: number | null;

      /**
       * Read all values in the set before (above) this cursor.
       */
      before?: any | null;

      /**
       * Read all values in the set after (below) this cursor.
       */
      after?: any | null;

      /**
       * The method to use when ordering `MainGenerator`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<MainGeneratorsOrderBy> | null;

      /**
       * A condition to be used in determining which values should be returned by the collection.
       */
      condition?: IMainGeneratorCondition | null;
    }

    interface IAllNameHistoriesOnQueryArguments {
      /**
       * Only read the first `n` values of the set.
       */
      first?: number | null;

      /**
       * Only read the last `n` values of the set.
       */
      last?: number | null;

      /**
       * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
       */
      offset?: number | null;

      /**
       * Read all values in the set before (above) this cursor.
       */
      before?: any | null;

      /**
       * Read all values in the set after (below) this cursor.
       */
      after?: any | null;

      /**
       * The method to use when ordering `NameHistory`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<NameHistoriesOrderBy> | null;

      /**
       * A condition to be used in determining which values should be returned by the collection.
       */
      condition?: INameHistoryCondition | null;
    }

    interface IAllOperatorHistoriesOnQueryArguments {
      /**
       * Only read the first `n` values of the set.
       */
      first?: number | null;

      /**
       * Only read the last `n` values of the set.
       */
      last?: number | null;

      /**
       * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
       */
      offset?: number | null;

      /**
       * Read all values in the set before (above) this cursor.
       */
      before?: any | null;

      /**
       * Read all values in the set after (below) this cursor.
       */
      after?: any | null;

      /**
       * The method to use when ordering `OperatorHistory`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<OperatorHistoriesOrderBy> | null;

      /**
       * A condition to be used in determining which values should be returned by the collection.
       */
      condition?: IOperatorHistoryCondition | null;
    }

    interface IAllPAndIHistoriesOnQueryArguments {
      /**
       * Only read the first `n` values of the set.
       */
      first?: number | null;

      /**
       * Only read the last `n` values of the set.
       */
      last?: number | null;

      /**
       * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
       */
      offset?: number | null;

      /**
       * Read all values in the set before (above) this cursor.
       */
      before?: any | null;

      /**
       * Read all values in the set after (below) this cursor.
       */
      after?: any | null;

      /**
       * The method to use when ordering `PAndIHistory`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<PAndIHistoriesOrderBy> | null;

      /**
       * A condition to be used in determining which values should be returned by the collection.
       */
      condition?: IPAndIHistoryCondition | null;
    }

    interface IAllRegisteredOwnerHistoriesOnQueryArguments {
      /**
       * Only read the first `n` values of the set.
       */
      first?: number | null;

      /**
       * Only read the last `n` values of the set.
       */
      last?: number | null;

      /**
       * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
       */
      offset?: number | null;

      /**
       * Read all values in the set before (above) this cursor.
       */
      before?: any | null;

      /**
       * Read all values in the set after (below) this cursor.
       */
      after?: any | null;

      /**
       * The method to use when ordering `RegisteredOwnerHistory`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<RegisteredOwnerHistoriesOrderBy> | null;

      /**
       * A condition to be used in determining which values should be returned by the collection.
       */
      condition?: IRegisteredOwnerHistoryCondition | null;
    }

    interface IAllShipDataOnQueryArguments {
      /**
       * Only read the first `n` values of the set.
       */
      first?: number | null;

      /**
       * Only read the last `n` values of the set.
       */
      last?: number | null;

      /**
       * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
       */
      offset?: number | null;

      /**
       * Read all values in the set before (above) this cursor.
       */
      before?: any | null;

      /**
       * Read all values in the set after (below) this cursor.
       */
      after?: any | null;

      /**
       * The method to use when ordering `ShipData`.
       * @default ["PRIMARY_KEY_ASC"]
       */
      orderBy?: Array<ShipDataOrderBy> | null;

      /**
       * A condition to be used in determining which values should be returned by the collection.
       */
      condition?: IShipDataCondition | null;
    }

    interface IAllShipManagerHistoriesOnQueryArguments {
      /**
       * Only read the first `n` values of the set.
       */
      first?: number | null;

      /**
       * Only read the last `n` values of the set.
       */
      last?: number | null;

      /**
       * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
       */
      offset?: number | null;

      /**
       * Read all values in the set before (above) this cursor.
       */
      before?: any | null;

      /**
       * Read all values in the set after (below) this cursor.
       */
      after?: any | null;

      /**
       * The method to use when ordering `ShipManagerHistory`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<ShipManagerHistoriesOrderBy> | null;

      /**
       * A condition to be used in determining which values should be returned by the collection.
       */
      condition?: IShipManagerHistoryCondition | null;
    }

    interface IAllSpecialFeaturesOnQueryArguments {
      /**
       * Only read the first `n` values of the set.
       */
      first?: number | null;

      /**
       * Only read the last `n` values of the set.
       */
      last?: number | null;

      /**
       * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
       */
      offset?: number | null;

      /**
       * Read all values in the set before (above) this cursor.
       */
      before?: any | null;

      /**
       * Read all values in the set after (below) this cursor.
       */
      after?: any | null;

      /**
       * The method to use when ordering `SpecialFeature`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<SpecialFeaturesOrderBy> | null;

      /**
       * A condition to be used in determining which values should be returned by the collection.
       */
      condition?: ISpecialFeatureCondition | null;
    }

    interface IAllStatusHistoriesOnQueryArguments {
      /**
       * Only read the first `n` values of the set.
       */
      first?: number | null;

      /**
       * Only read the last `n` values of the set.
       */
      last?: number | null;

      /**
       * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
       */
      offset?: number | null;

      /**
       * Read all values in the set before (above) this cursor.
       */
      before?: any | null;

      /**
       * Read all values in the set after (below) this cursor.
       */
      after?: any | null;

      /**
       * The method to use when ordering `StatusHistory`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<StatusHistoriesOrderBy> | null;

      /**
       * A condition to be used in determining which values should be returned by the collection.
       */
      condition?: IStatusHistoryCondition | null;
    }

    interface IAllSurveyDateHistoriesOnQueryArguments {
      /**
       * Only read the first `n` values of the set.
       */
      first?: number | null;

      /**
       * Only read the last `n` values of the set.
       */
      last?: number | null;

      /**
       * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
       */
      offset?: number | null;

      /**
       * Read all values in the set before (above) this cursor.
       */
      before?: any | null;

      /**
       * Read all values in the set after (below) this cursor.
       */
      after?: any | null;

      /**
       * The method to use when ordering `SurveyDateHistory`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<SurveyDateHistoriesOrderBy> | null;

      /**
       * A condition to be used in determining which values should be returned by the collection.
       */
      condition?: ISurveyDateHistoryCondition | null;
    }

    interface IAllSurveyDatesOnQueryArguments {
      /**
       * Only read the first `n` values of the set.
       */
      first?: number | null;

      /**
       * Only read the last `n` values of the set.
       */
      last?: number | null;

      /**
       * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
       */
      offset?: number | null;

      /**
       * Read all values in the set before (above) this cursor.
       */
      before?: any | null;

      /**
       * Read all values in the set after (below) this cursor.
       */
      after?: any | null;

      /**
       * The method to use when ordering `SurveyDate`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<SurveyDatesOrderBy> | null;

      /**
       * A condition to be used in determining which values should be returned by the collection.
       */
      condition?: ISurveyDateCondition | null;
    }

    interface IAllTechnicalManagerHistoriesOnQueryArguments {
      /**
       * Only read the first `n` values of the set.
       */
      first?: number | null;

      /**
       * Only read the last `n` values of the set.
       */
      last?: number | null;

      /**
       * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
       */
      offset?: number | null;

      /**
       * Read all values in the set before (above) this cursor.
       */
      before?: any | null;

      /**
       * Read all values in the set after (below) this cursor.
       */
      after?: any | null;

      /**
       * The method to use when ordering `TechnicalManagerHistory`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<TechnicalManagerHistoriesOrderBy> | null;

      /**
       * A condition to be used in determining which values should be returned by the collection.
       */
      condition?: ITechnicalManagerHistoryCondition | null;
    }

    interface IAllUnverifiedOwnershipsOnQueryArguments {
      /**
       * Only read the first `n` values of the set.
       */
      first?: number | null;

      /**
       * Only read the last `n` values of the set.
       */
      last?: number | null;

      /**
       * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
       */
      offset?: number | null;

      /**
       * Read all values in the set before (above) this cursor.
       */
      before?: any | null;

      /**
       * Read all values in the set after (below) this cursor.
       */
      after?: any | null;

      /**
       * The method to use when ordering `UnverifiedOwnership`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<UnverifiedOwnershipsOrderBy> | null;

      /**
       * A condition to be used in determining which values should be returned by the collection.
       */
      condition?: IUnverifiedOwnershipCondition | null;
    }

    interface IShipDataByHashOnQueryArguments {
      hash: string;
    }

    interface IShipDataOnQueryArguments {
      /**
       * The globally unique `ID` to be used in selecting a single `ShipData`.
       */
      nodeId: string;
    }

    /**
     * An object with a globally unique `ID`.
     */
    type Node = IQuery | IShipData;

    /**
     * An object with a globally unique `ID`.
     */
    interface INode {
      __typename: 'Node';

      /**
       * A globally unique identifier. Can be used in various places throughout the system to identify this single value.
       */
      nodeId: string;
    }

    /**
     * Methods to use when ordering `AuxEngine`.
     */
    const enum AuxEnginesOrderBy {
      NATURAL = 'NATURAL',
      LRNO_ASC = 'LRNO_ASC',
      LRNO_DESC = 'LRNO_DESC',
      ENGINE_SEQUENCE_ASC = 'ENGINE_SEQUENCE_ASC',
      ENGINE_SEQUENCE_DESC = 'ENGINE_SEQUENCE_DESC',
      ENGINE_BUILDER_ASC = 'ENGINE_BUILDER_ASC',
      ENGINE_BUILDER_DESC = 'ENGINE_BUILDER_DESC',
      ENGINE_DESIGNER_ASC = 'ENGINE_DESIGNER_ASC',
      ENGINE_DESIGNER_DESC = 'ENGINE_DESIGNER_DESC',
      ENGINE_MODEL_ASC = 'ENGINE_MODEL_ASC',
      ENGINE_MODEL_DESC = 'ENGINE_MODEL_DESC',
      NUMBER_OF_CYLINDERS_ASC = 'NUMBER_OF_CYLINDERS_ASC',
      NUMBER_OF_CYLINDERS_DESC = 'NUMBER_OF_CYLINDERS_DESC',
      BORE_ASC = 'BORE_ASC',
      BORE_DESC = 'BORE_DESC',
      STROKE_ASC = 'STROKE_ASC',
      STROKE_DESC = 'STROKE_DESC',
      STROKE_TYPE_ASC = 'STROKE_TYPE_ASC',
      STROKE_TYPE_DESC = 'STROKE_TYPE_DESC',
      MAX_POWER_ASC = 'MAX_POWER_ASC',
      MAX_POWER_DESC = 'MAX_POWER_DESC',
      CREATE_DATE_ASC = 'CREATE_DATE_ASC',
      CREATE_DATE_DESC = 'CREATE_DATE_DESC',
    }

    /**
     * A condition to be used against `AuxEngine` object types. All fields are tested for equality and combined with a logical ‘and.’
     */
    interface IAuxEngineCondition {
      /**
       * Checks for equality with the object’s `lrno` field.
       */
      lrno?: string | null;

      /**
       * Checks for equality with the object’s `engineSequence` field.
       */
      engineSequence?: string | null;

      /**
       * Checks for equality with the object’s `engineBuilder` field.
       */
      engineBuilder?: string | null;

      /**
       * Checks for equality with the object’s `engineDesigner` field.
       */
      engineDesigner?: string | null;

      /**
       * Checks for equality with the object’s `engineModel` field.
       */
      engineModel?: string | null;

      /**
       * Checks for equality with the object’s `numberOfCylinders` field.
       */
      numberOfCylinders?: string | null;

      /**
       * Checks for equality with the object’s `bore` field.
       */
      bore?: string | null;

      /**
       * Checks for equality with the object’s `stroke` field.
       */
      stroke?: string | null;

      /**
       * Checks for equality with the object’s `strokeType` field.
       */
      strokeType?: string | null;

      /**
       * Checks for equality with the object’s `maxPower` field.
       */
      maxPower?: string | null;

      /**
       * Checks for equality with the object’s `createDate` field.
       */
      createDate?: any | null;
    }

    /**
     * A connection to a list of `AuxEngine` values.
     */
    interface IAuxEnginesConnection {
      __typename: 'AuxEnginesConnection';

      /**
       * A list of `AuxEngine` objects.
       */
      nodes: Array<IAuxEngine | null>;

      /**
       * A list of edges which contains the `AuxEngine` and cursor to aid in pagination.
       */
      edges: Array<IAuxEnginesEdge>;

      /**
       * Information to aid in pagination.
       */
      pageInfo: IPageInfo;

      /**
       * The count of *all* `AuxEngine` you could get from the connection.
       */
      totalCount: number | null;
    }

    interface IAuxEngine {
      __typename: 'AuxEngine';
      lrno: string | null;
      engineSequence: string | null;
      engineBuilder: string | null;
      engineDesigner: string | null;
      engineModel: string | null;
      numberOfCylinders: string | null;
      bore: string | null;
      stroke: string | null;
      strokeType: string | null;
      maxPower: string | null;
      createDate: any | null;
    }

    /**
     * A `AuxEngine` edge in the connection.
     */
    interface IAuxEnginesEdge {
      __typename: 'AuxEnginesEdge';

      /**
       * A cursor for use in pagination.
       */
      cursor: any | null;

      /**
       * The `AuxEngine` at the end of the edge.
       */
      node: IAuxEngine | null;
    }

    /**
     * Information about pagination in a connection.
     */
    interface IPageInfo {
      __typename: 'PageInfo';

      /**
       * When paginating forwards, are there more items?
       */
      hasNextPage: boolean;

      /**
       * When paginating backwards, are there more items?
       */
      hasPreviousPage: boolean;

      /**
       * When paginating backwards, the cursor to continue.
       */
      startCursor: any | null;

      /**
       * When paginating forwards, the cursor to continue.
       */
      endCursor: any | null;
    }

    /**
     * Methods to use when ordering `AuxiliaryGenerator`.
     */
    const enum AuxiliaryGeneratorsOrderBy {
      NATURAL = 'NATURAL',
      LRNO_ASC = 'LRNO_ASC',
      LRNO_DESC = 'LRNO_DESC',
      NUMBER_ASC = 'NUMBER_ASC',
      NUMBER_DESC = 'NUMBER_DESC',
      KWEACH_ASC = 'KWEACH_ASC',
      KWEACH_DESC = 'KWEACH_DESC',
      VOLTAGE1_ASC = 'VOLTAGE1_ASC',
      VOLTAGE1_DESC = 'VOLTAGE1_DESC',
      VOLTAGE2_ASC = 'VOLTAGE2_ASC',
      VOLTAGE2_DESC = 'VOLTAGE2_DESC',
      FREQUENCY_ASC = 'FREQUENCY_ASC',
      FREQUENCY_DESC = 'FREQUENCY_DESC',
      ACDC_ASC = 'ACDC_ASC',
      ACDC_DESC = 'ACDC_DESC',
      MAIN_ENGINE_DRIVEN_ASC = 'MAIN_ENGINE_DRIVEN_ASC',
      MAIN_ENGINE_DRIVEN_DESC = 'MAIN_ENGINE_DRIVEN_DESC',
      SEQ_ASC = 'SEQ_ASC',
      SEQ_DESC = 'SEQ_DESC',
      CREATE_DATE_ASC = 'CREATE_DATE_ASC',
      CREATE_DATE_DESC = 'CREATE_DATE_DESC',
    }

    /**
     * A condition to be used against `AuxiliaryGenerator` object types. All fields are tested for equality and combined with a logical ‘and.’
     */
    interface IAuxiliaryGeneratorCondition {
      /**
       * Checks for equality with the object’s `lrno` field.
       */
      lrno?: string | null;

      /**
       * Checks for equality with the object’s `number` field.
       */
      number?: number | null;

      /**
       * Checks for equality with the object’s `kwEach` field.
       */
      kwEach?: any | null;

      /**
       * Checks for equality with the object’s `voltage1` field.
       */
      voltage1?: number | null;

      /**
       * Checks for equality with the object’s `voltage2` field.
       */
      voltage2?: number | null;

      /**
       * Checks for equality with the object’s `frequency` field.
       */
      frequency?: number | null;

      /**
       * Checks for equality with the object’s `acdc` field.
       */
      acdc?: string | null;

      /**
       * Checks for equality with the object’s `mainEngineDriven` field.
       */
      mainEngineDriven?: string | null;

      /**
       * Checks for equality with the object’s `seq` field.
       */
      seq?: string | null;

      /**
       * Checks for equality with the object’s `createDate` field.
       */
      createDate?: any | null;
    }

    /**
     * A connection to a list of `AuxiliaryGenerator` values.
     */
    interface IAuxiliaryGeneratorsConnection {
      __typename: 'AuxiliaryGeneratorsConnection';

      /**
       * A list of `AuxiliaryGenerator` objects.
       */
      nodes: Array<IAuxiliaryGenerator | null>;

      /**
       * A list of edges which contains the `AuxiliaryGenerator` and cursor to aid in pagination.
       */
      edges: Array<IAuxiliaryGeneratorsEdge>;

      /**
       * Information to aid in pagination.
       */
      pageInfo: IPageInfo;

      /**
       * The count of *all* `AuxiliaryGenerator` you could get from the connection.
       */
      totalCount: number | null;
    }

    interface IAuxiliaryGenerator {
      __typename: 'AuxiliaryGenerator';
      lrno: string | null;
      number: number | null;
      kwEach: any | null;
      voltage1: number | null;
      voltage2: number | null;
      frequency: number | null;
      acdc: string | null;
      mainEngineDriven: string | null;
      seq: string | null;
      createDate: any | null;
    }

    /**
     * A `AuxiliaryGenerator` edge in the connection.
     */
    interface IAuxiliaryGeneratorsEdge {
      __typename: 'AuxiliaryGeneratorsEdge';

      /**
       * A cursor for use in pagination.
       */
      cursor: any | null;

      /**
       * The `AuxiliaryGenerator` at the end of the edge.
       */
      node: IAuxiliaryGenerator | null;
    }

    /**
     * Methods to use when ordering `BoilersExpanded`.
     */
    const enum BoilersExpandedsOrderBy {
      NATURAL = 'NATURAL',
      LRNO_ASC = 'LRNO_ASC',
      LRNO_DESC = 'LRNO_DESC',
      SEQUENCE_ASC = 'SEQUENCE_ASC',
      SEQUENCE_DESC = 'SEQUENCE_DESC',
      BUILDER_ASC = 'BUILDER_ASC',
      BUILDER_DESC = 'BUILDER_DESC',
      DESIGN_ASC = 'DESIGN_ASC',
      DESIGN_DESC = 'DESIGN_DESC',
      EFFECTIVE_DATE_ASC = 'EFFECTIVE_DATE_ASC',
      EFFECTIVE_DATE_DESC = 'EFFECTIVE_DATE_DESC',
      NUMBER_OF_BOILERS_ASC = 'NUMBER_OF_BOILERS_ASC',
      NUMBER_OF_BOILERS_DESC = 'NUMBER_OF_BOILERS_DESC',
      BOILER_TYPE_CODE_ASC = 'BOILER_TYPE_CODE_ASC',
      BOILER_TYPE_CODE_DESC = 'BOILER_TYPE_CODE_DESC',
      BOILER_TYPE_DECODE_ASC = 'BOILER_TYPE_DECODE_ASC',
      BOILER_TYPE_DECODE_DESC = 'BOILER_TYPE_DECODE_DESC',
      FIRING_TYPE_CODE_ASC = 'FIRING_TYPE_CODE_ASC',
      FIRING_TYPE_CODE_DESC = 'FIRING_TYPE_CODE_DESC',
      FIRING_TYPE_DECODE_ASC = 'FIRING_TYPE_DECODE_ASC',
      FIRING_TYPE_DECODE_DESC = 'FIRING_TYPE_DECODE_DESC',
      CREATE_DATE_ASC = 'CREATE_DATE_ASC',
      CREATE_DATE_DESC = 'CREATE_DATE_DESC',
    }

    /**
     * A condition to be used against `BoilersExpanded` object types. All fields are tested for equality and combined with a logical ‘and.’
     */
    interface IBoilersExpandedCondition {
      /**
       * Checks for equality with the object’s `lrno` field.
       */
      lrno?: string | null;

      /**
       * Checks for equality with the object’s `sequence` field.
       */
      sequence?: string | null;

      /**
       * Checks for equality with the object’s `builder` field.
       */
      builder?: string | null;

      /**
       * Checks for equality with the object’s `design` field.
       */
      design?: string | null;

      /**
       * Checks for equality with the object’s `effectiveDate` field.
       */
      effectiveDate?: string | null;

      /**
       * Checks for equality with the object’s `numberOfBoilers` field.
       */
      numberOfBoilers?: string | null;

      /**
       * Checks for equality with the object’s `boilerTypeCode` field.
       */
      boilerTypeCode?: string | null;

      /**
       * Checks for equality with the object’s `boilerTypeDecode` field.
       */
      boilerTypeDecode?: string | null;

      /**
       * Checks for equality with the object’s `firingTypeCode` field.
       */
      firingTypeCode?: string | null;

      /**
       * Checks for equality with the object’s `firingTypeDecode` field.
       */
      firingTypeDecode?: string | null;

      /**
       * Checks for equality with the object’s `createDate` field.
       */
      createDate?: any | null;
    }

    /**
     * A connection to a list of `BoilersExpanded` values.
     */
    interface IBoilersExpandedsConnection {
      __typename: 'BoilersExpandedsConnection';

      /**
       * A list of `BoilersExpanded` objects.
       */
      nodes: Array<IBoilersExpanded | null>;

      /**
       * A list of edges which contains the `BoilersExpanded` and cursor to aid in pagination.
       */
      edges: Array<IBoilersExpandedsEdge>;

      /**
       * Information to aid in pagination.
       */
      pageInfo: IPageInfo;

      /**
       * The count of *all* `BoilersExpanded` you could get from the connection.
       */
      totalCount: number | null;
    }

    interface IBoilersExpanded {
      __typename: 'BoilersExpanded';
      lrno: string | null;
      sequence: string | null;
      builder: string | null;
      design: string | null;
      effectiveDate: string | null;
      numberOfBoilers: string | null;
      boilerTypeCode: string | null;
      boilerTypeDecode: string | null;
      firingTypeCode: string | null;
      firingTypeDecode: string | null;
      createDate: any | null;
    }

    /**
     * A `BoilersExpanded` edge in the connection.
     */
    interface IBoilersExpandedsEdge {
      __typename: 'BoilersExpandedsEdge';

      /**
       * A cursor for use in pagination.
       */
      cursor: any | null;

      /**
       * The `BoilersExpanded` at the end of the edge.
       */
      node: IBoilersExpanded | null;
    }

    /**
     * Methods to use when ordering `BuilderHistory`.
     */
    const enum BuilderHistoriesOrderBy {
      NATURAL = 'NATURAL',
      BUILDER_CODE_ASC = 'BUILDER_CODE_ASC',
      BUILDER_CODE_DESC = 'BUILDER_CODE_DESC',
      BUILDER_HISTORY_ASC = 'BUILDER_HISTORY_ASC',
      BUILDER_HISTORY_DESC = 'BUILDER_HISTORY_DESC',
      CREATE_DATE_ASC = 'CREATE_DATE_ASC',
      CREATE_DATE_DESC = 'CREATE_DATE_DESC',
    }

    /**
     * A condition to be used against `BuilderHistory` object types. All fields are tested for equality and combined with a logical ‘and.’
     */
    interface IBuilderHistoryCondition {
      /**
       * Checks for equality with the object’s `builderCode` field.
       */
      builderCode?: string | null;

      /**
       * Checks for equality with the object’s `builderHistory` field.
       */
      builderHistory?: string | null;

      /**
       * Checks for equality with the object’s `createDate` field.
       */
      createDate?: any | null;
    }

    /**
     * A connection to a list of `BuilderHistory` values.
     */
    interface IBuilderHistoriesConnection {
      __typename: 'BuilderHistoriesConnection';

      /**
       * A list of `BuilderHistory` objects.
       */
      nodes: Array<IBuilderHistory | null>;

      /**
       * A list of edges which contains the `BuilderHistory` and cursor to aid in pagination.
       */
      edges: Array<IBuilderHistoriesEdge>;

      /**
       * Information to aid in pagination.
       */
      pageInfo: IPageInfo;

      /**
       * The count of *all* `BuilderHistory` you could get from the connection.
       */
      totalCount: number | null;
    }

    interface IBuilderHistory {
      __typename: 'BuilderHistory';
      builderCode: string | null;
      builderHistory: string | null;
      createDate: any | null;
    }

    /**
     * A `BuilderHistory` edge in the connection.
     */
    interface IBuilderHistoriesEdge {
      __typename: 'BuilderHistoriesEdge';

      /**
       * A cursor for use in pagination.
       */
      cursor: any | null;

      /**
       * The `BuilderHistory` at the end of the edge.
       */
      node: IBuilderHistory | null;
    }

    /**
     * Methods to use when ordering `Capacity`.
     */
    const enum CapacitiesOrderBy {
      NATURAL = 'NATURAL',
      LRNO_ASC = 'LRNO_ASC',
      LRNO_DESC = 'LRNO_DESC',
      BALE_ASC = 'BALE_ASC',
      BALE_DESC = 'BALE_DESC',
      HORSEPOWER_ASC = 'HORSEPOWER_ASC',
      HORSEPOWER_DESC = 'HORSEPOWER_DESC',
      NUMBER_OF_BARGES_ASC = 'NUMBER_OF_BARGES_ASC',
      NUMBER_OF_BARGES_DESC = 'NUMBER_OF_BARGES_DESC',
      BOLLARD_PULL_ASC = 'BOLLARD_PULL_ASC',
      BOLLARD_PULL_DESC = 'BOLLARD_PULL_DESC',
      NUMBER_OF_CARS_ASC = 'NUMBER_OF_CARS_ASC',
      NUMBER_OF_CARS_DESC = 'NUMBER_OF_CARS_DESC',
      GAS_CAPACITY_ASC = 'GAS_CAPACITY_ASC',
      GAS_CAPACITY_DESC = 'GAS_CAPACITY_DESC',
      GRAIN_CAPACITY_ASC = 'GRAIN_CAPACITY_ASC',
      GRAIN_CAPACITY_DESC = 'GRAIN_CAPACITY_DESC',
      INDICATED_HORSEPOWER_ASC = 'INDICATED_HORSEPOWER_ASC',
      INDICATED_HORSEPOWER_DESC = 'INDICATED_HORSEPOWER_DESC',
      LIQUID_CAPACITY_ASC = 'LIQUID_CAPACITY_ASC',
      LIQUID_CAPACITY_DESC = 'LIQUID_CAPACITY_DESC',
      NUMBER_OF_PASSENGERS_ASC = 'NUMBER_OF_PASSENGERS_ASC',
      NUMBER_OF_PASSENGERS_DESC = 'NUMBER_OF_PASSENGERS_DESC',
      NUMBER_REFRIGERATED_CONTAINERS_ASC = 'NUMBER_REFRIGERATED_CONTAINERS_ASC',
      NUMBER_REFRIGERATED_CONTAINERS_DESC = 'NUMBER_REFRIGERATED_CONTAINERS_DESC',
      NUMBER_OF_TEU_ASC = 'NUMBER_OF_TEU_ASC',
      NUMBER_OF_TEU_DESC = 'NUMBER_OF_TEU_DESC',
      NUMBER_OF_TRUCKS_ASC = 'NUMBER_OF_TRUCKS_ASC',
      NUMBER_OF_TRUCKS_DESC = 'NUMBER_OF_TRUCKS_DESC',
      NUMBER_OF_VEHICLES_ASC = 'NUMBER_OF_VEHICLES_ASC',
      NUMBER_OF_VEHICLES_DESC = 'NUMBER_OF_VEHICLES_DESC',
      NUMBER_OF_RAIL_WAGONS_ASC = 'NUMBER_OF_RAIL_WAGONS_ASC',
      NUMBER_OF_RAIL_WAGONS_DESC = 'NUMBER_OF_RAIL_WAGONS_DESC',
      CREATE_DATE_ASC = 'CREATE_DATE_ASC',
      CREATE_DATE_DESC = 'CREATE_DATE_DESC',
    }

    /**
     * A condition to be used against `Capacity` object types. All fields are tested for equality and combined with a logical ‘and.’
     */
    interface ICapacityCondition {
      /**
       * Checks for equality with the object’s `lrno` field.
       */
      lrno?: string | null;

      /**
       * Checks for equality with the object’s `bale` field.
       */
      bale?: number | null;

      /**
       * Checks for equality with the object’s `horsepower` field.
       */
      horsepower?: number | null;

      /**
       * Checks for equality with the object’s `numberOfBarges` field.
       */
      numberOfBarges?: number | null;

      /**
       * Checks for equality with the object’s `bollardPull` field.
       */
      bollardPull?: number | null;

      /**
       * Checks for equality with the object’s `numberOfCars` field.
       */
      numberOfCars?: number | null;

      /**
       * Checks for equality with the object’s `gasCapacity` field.
       */
      gasCapacity?: number | null;

      /**
       * Checks for equality with the object’s `grainCapacity` field.
       */
      grainCapacity?: number | null;

      /**
       * Checks for equality with the object’s `indicatedHorsepower` field.
       */
      indicatedHorsepower?: number | null;

      /**
       * Checks for equality with the object’s `liquidCapacity` field.
       */
      liquidCapacity?: number | null;

      /**
       * Checks for equality with the object’s `numberOfPassengers` field.
       */
      numberOfPassengers?: number | null;

      /**
       * Checks for equality with the object’s `numberRefrigeratedContainers` field.
       */
      numberRefrigeratedContainers?: number | null;

      /**
       * Checks for equality with the object’s `numberOfTeu` field.
       */
      numberOfTeu?: number | null;

      /**
       * Checks for equality with the object’s `numberOfTrucks` field.
       */
      numberOfTrucks?: number | null;

      /**
       * Checks for equality with the object’s `numberOfVehicles` field.
       */
      numberOfVehicles?: number | null;

      /**
       * Checks for equality with the object’s `numberOfRailWagons` field.
       */
      numberOfRailWagons?: number | null;

      /**
       * Checks for equality with the object’s `createDate` field.
       */
      createDate?: any | null;
    }

    /**
     * A connection to a list of `Capacity` values.
     */
    interface ICapacitiesConnection {
      __typename: 'CapacitiesConnection';

      /**
       * A list of `Capacity` objects.
       */
      nodes: Array<ICapacity | null>;

      /**
       * A list of edges which contains the `Capacity` and cursor to aid in pagination.
       */
      edges: Array<ICapacitiesEdge>;

      /**
       * Information to aid in pagination.
       */
      pageInfo: IPageInfo;

      /**
       * The count of *all* `Capacity` you could get from the connection.
       */
      totalCount: number | null;
    }

    interface ICapacity {
      __typename: 'Capacity';
      lrno: string | null;
      bale: number | null;
      horsepower: number | null;
      numberOfBarges: number | null;
      bollardPull: number | null;
      numberOfCars: number | null;
      gasCapacity: number | null;
      grainCapacity: number | null;
      indicatedHorsepower: number | null;
      liquidCapacity: number | null;
      numberOfPassengers: number | null;
      numberRefrigeratedContainers: number | null;
      numberOfTeu: number | null;
      numberOfTrucks: number | null;
      numberOfVehicles: number | null;
      numberOfRailWagons: number | null;
      createDate: any | null;
    }

    /**
     * A `Capacity` edge in the connection.
     */
    interface ICapacitiesEdge {
      __typename: 'CapacitiesEdge';

      /**
       * A cursor for use in pagination.
       */
      cursor: any | null;

      /**
       * The `Capacity` at the end of the edge.
       */
      node: ICapacity | null;
    }

    /**
     * Methods to use when ordering `ClassHistory`.
     */
    const enum ClassHistoriesOrderBy {
      NATURAL = 'NATURAL',
      LRNO_ASC = 'LRNO_ASC',
      LRNO_DESC = 'LRNO_DESC',
      SEQUENCE_ASC = 'SEQUENCE_ASC',
      SEQUENCE_DESC = 'SEQUENCE_DESC',
      CURRENT_INDICATOR_ASC = 'CURRENT_INDICATOR_ASC',
      CURRENT_INDICATOR_DESC = 'CURRENT_INDICATOR_DESC',
      EFFECTIVE_DATE_ASC = 'EFFECTIVE_DATE_ASC',
      EFFECTIVE_DATE_DESC = 'EFFECTIVE_DATE_DESC',
      CLASS_ASC = 'CLASS_ASC',
      CLASS_DESC = 'CLASS_DESC',
      CLASS_ID_ASC = 'CLASS_ID_ASC',
      CLASS_ID_DESC = 'CLASS_ID_DESC',
      CLASS_CODE_ASC = 'CLASS_CODE_ASC',
      CLASS_CODE_DESC = 'CLASS_CODE_DESC',
      CREATE_DATE_ASC = 'CREATE_DATE_ASC',
      CREATE_DATE_DESC = 'CREATE_DATE_DESC',
      CLASS_INDICATOR_ASC = 'CLASS_INDICATOR_ASC',
      CLASS_INDICATOR_DESC = 'CLASS_INDICATOR_DESC',
    }

    /**
     * A condition to be used against `ClassHistory` object types. All fields are tested for equality and combined with a logical ‘and.’
     */
    interface IClassHistoryCondition {
      /**
       * Checks for equality with the object’s `lrno` field.
       */
      lrno?: string | null;

      /**
       * Checks for equality with the object’s `sequence` field.
       */
      sequence?: string | null;

      /**
       * Checks for equality with the object’s `currentIndicator` field.
       */
      currentIndicator?: string | null;

      /**
       * Checks for equality with the object’s `effectiveDate` field.
       */
      effectiveDate?: string | null;

      /**
       * Checks for equality with the object’s `class` field.
       */
      class?: string | null;

      /**
       * Checks for equality with the object’s `classId` field.
       */
      classId?: string | null;

      /**
       * Checks for equality with the object’s `classCode` field.
       */
      classCode?: string | null;

      /**
       * Checks for equality with the object’s `createDate` field.
       */
      createDate?: any | null;

      /**
       * Checks for equality with the object’s `classIndicator` field.
       */
      classIndicator?: string | null;
    }

    /**
     * A connection to a list of `ClassHistory` values.
     */
    interface IClassHistoriesConnection {
      __typename: 'ClassHistoriesConnection';

      /**
       * A list of `ClassHistory` objects.
       */
      nodes: Array<IClassHistory | null>;

      /**
       * A list of edges which contains the `ClassHistory` and cursor to aid in pagination.
       */
      edges: Array<IClassHistoriesEdge>;

      /**
       * Information to aid in pagination.
       */
      pageInfo: IPageInfo;

      /**
       * The count of *all* `ClassHistory` you could get from the connection.
       */
      totalCount: number | null;
    }

    interface IClassHistory {
      __typename: 'ClassHistory';
      lrno: string | null;
      sequence: string | null;
      currentIndicator: string | null;
      effectiveDate: string | null;
      class: string | null;
      classId: string | null;
      classCode: string | null;
      createDate: any | null;
      classIndicator: string | null;
    }

    /**
     * A `ClassHistory` edge in the connection.
     */
    interface IClassHistoriesEdge {
      __typename: 'ClassHistoriesEdge';

      /**
       * A cursor for use in pagination.
       */
      cursor: any | null;

      /**
       * The `ClassHistory` at the end of the edge.
       */
      node: IClassHistory | null;
    }

    /**
     * Methods to use when ordering `ClassWithdrawn`.
     */
    const enum ClassWithdrawnsOrderBy {
      NATURAL = 'NATURAL',
      LRNO_ASC = 'LRNO_ASC',
      LRNO_DESC = 'LRNO_DESC',
      CLASS_ASC = 'CLASS_ASC',
      CLASS_DESC = 'CLASS_DESC',
      WITHDRAWN_DATE_ASC = 'WITHDRAWN_DATE_ASC',
      WITHDRAWN_DATE_DESC = 'WITHDRAWN_DATE_DESC',
      REASON_ASC = 'REASON_ASC',
      REASON_DESC = 'REASON_DESC',
      CREATE_DATE_ASC = 'CREATE_DATE_ASC',
      CREATE_DATE_DESC = 'CREATE_DATE_DESC',
    }

    /**
     * A condition to be used against `ClassWithdrawn` object types. All fields are tested for equality and combined with a logical ‘and.’
     */
    interface IClassWithdrawnCondition {
      /**
       * Checks for equality with the object’s `lrno` field.
       */
      lrno?: string | null;

      /**
       * Checks for equality with the object’s `class` field.
       */
      class?: string | null;

      /**
       * Checks for equality with the object’s `withdrawnDate` field.
       */
      withdrawnDate?: string | null;

      /**
       * Checks for equality with the object’s `reason` field.
       */
      reason?: string | null;

      /**
       * Checks for equality with the object’s `createDate` field.
       */
      createDate?: any | null;
    }

    /**
     * A connection to a list of `ClassWithdrawn` values.
     */
    interface IClassWithdrawnsConnection {
      __typename: 'ClassWithdrawnsConnection';

      /**
       * A list of `ClassWithdrawn` objects.
       */
      nodes: Array<IClassWithdrawn | null>;

      /**
       * A list of edges which contains the `ClassWithdrawn` and cursor to aid in pagination.
       */
      edges: Array<IClassWithdrawnsEdge>;

      /**
       * Information to aid in pagination.
       */
      pageInfo: IPageInfo;

      /**
       * The count of *all* `ClassWithdrawn` you could get from the connection.
       */
      totalCount: number | null;
    }

    interface IClassWithdrawn {
      __typename: 'ClassWithdrawn';
      lrno: string | null;
      class: string | null;
      withdrawnDate: string | null;
      reason: string | null;
      createDate: any | null;
    }

    /**
     * A `ClassWithdrawn` edge in the connection.
     */
    interface IClassWithdrawnsEdge {
      __typename: 'ClassWithdrawnsEdge';

      /**
       * A cursor for use in pagination.
       */
      cursor: any | null;

      /**
       * The `ClassWithdrawn` at the end of the edge.
       */
      node: IClassWithdrawn | null;
    }

    /**
     * Methods to use when ordering `CompanyFullDetailsAndParentCode`.
     */
    const enum CompanyFullDetailsAndParentCodesOrderBy {
      NATURAL = 'NATURAL',
      OWCODE_ASC = 'OWCODE_ASC',
      OWCODE_DESC = 'OWCODE_DESC',
      SHORT_COMPANY_NAME_ASC = 'SHORT_COMPANY_NAME_ASC',
      SHORT_COMPANY_NAME_DESC = 'SHORT_COMPANY_NAME_DESC',
      COUNTRY_NAME_ASC = 'COUNTRY_NAME_ASC',
      COUNTRY_NAME_DESC = 'COUNTRY_NAME_DESC',
      TOWN_NAME_ASC = 'TOWN_NAME_ASC',
      TOWN_NAME_DESC = 'TOWN_NAME_DESC',
      TELEPHONE_ASC = 'TELEPHONE_ASC',
      TELEPHONE_DESC = 'TELEPHONE_DESC',
      TELEX_ASC = 'TELEX_ASC',
      TELEX_DESC = 'TELEX_DESC',
      EMAILADDRESS_ASC = 'EMAILADDRESS_ASC',
      EMAILADDRESS_DESC = 'EMAILADDRESS_DESC',
      WEBSITE_ASC = 'WEBSITE_ASC',
      WEBSITE_DESC = 'WEBSITE_DESC',
      CARE_OF_CODE_ASC = 'CARE_OF_CODE_ASC',
      CARE_OF_CODE_DESC = 'CARE_OF_CODE_DESC',
      ROOM_FLOOR_BUILDING1_ASC = 'ROOM_FLOOR_BUILDING1_ASC',
      ROOM_FLOOR_BUILDING1_DESC = 'ROOM_FLOOR_BUILDING1_DESC',
      ROOM_FLOOR_BUILDING2_ASC = 'ROOM_FLOOR_BUILDING2_ASC',
      ROOM_FLOOR_BUILDING2_DESC = 'ROOM_FLOOR_BUILDING2_DESC',
      ROOM_FLOOR_BUILDING3_ASC = 'ROOM_FLOOR_BUILDING3_ASC',
      ROOM_FLOOR_BUILDING3_DESC = 'ROOM_FLOOR_BUILDING3_DESC',
      POBOX_ASC = 'POBOX_ASC',
      POBOX_DESC = 'POBOX_DESC',
      STREET_NUMBER_ASC = 'STREET_NUMBER_ASC',
      STREET_NUMBER_DESC = 'STREET_NUMBER_DESC',
      STREET_ASC = 'STREET_ASC',
      STREET_DESC = 'STREET_DESC',
      PRE_POSTCODE_ASC = 'PRE_POSTCODE_ASC',
      PRE_POSTCODE_DESC = 'PRE_POSTCODE_DESC',
      POST_POSTCODE_ASC = 'POST_POSTCODE_ASC',
      POST_POSTCODE_DESC = 'POST_POSTCODE_DESC',
      LAST_CHANGE_DATE_ASC = 'LAST_CHANGE_DATE_ASC',
      LAST_CHANGE_DATE_DESC = 'LAST_CHANGE_DATE_DESC',
      PARENT_COMPANY_ASC = 'PARENT_COMPANY_ASC',
      PARENT_COMPANY_DESC = 'PARENT_COMPANY_DESC',
      NATIONALITYOF_REGISTRATION_ASC = 'NATIONALITYOF_REGISTRATION_ASC',
      NATIONALITYOF_REGISTRATION_DESC = 'NATIONALITYOF_REGISTRATION_DESC',
      NATIONALITYOF_CONTROL_ASC = 'NATIONALITYOF_CONTROL_ASC',
      NATIONALITYOF_CONTROL_DESC = 'NATIONALITYOF_CONTROL_DESC',
      COMPANY_STATUS_ASC = 'COMPANY_STATUS_ASC',
      COMPANY_STATUS_DESC = 'COMPANY_STATUS_DESC',
      FULL_COMPANY_NAME_ASC = 'FULL_COMPANY_NAME_ASC',
      FULL_COMPANY_NAME_DESC = 'FULL_COMPANY_NAME_DESC',
      FULL_ADDRESS_ASC = 'FULL_ADDRESS_ASC',
      FULL_ADDRESS_DESC = 'FULL_ADDRESS_DESC',
      FACSIMILE_ASC = 'FACSIMILE_ASC',
      FACSIMILE_DESC = 'FACSIMILE_DESC',
      CREATE_DATE_ASC = 'CREATE_DATE_ASC',
      CREATE_DATE_DESC = 'CREATE_DATE_DESC',
    }

    /**
     * A condition to be used against `CompanyFullDetailsAndParentCode` object types. All fields are tested for equality and combined with a logical ‘and.’
     */
    interface ICompanyFullDetailsAndParentCodeCondition {
      /**
       * Checks for equality with the object’s `owcode` field.
       */
      owcode?: string | null;

      /**
       * Checks for equality with the object’s `shortCompanyName` field.
       */
      shortCompanyName?: string | null;

      /**
       * Checks for equality with the object’s `countryName` field.
       */
      countryName?: string | null;

      /**
       * Checks for equality with the object’s `townName` field.
       */
      townName?: string | null;

      /**
       * Checks for equality with the object’s `telephone` field.
       */
      telephone?: string | null;

      /**
       * Checks for equality with the object’s `telex` field.
       */
      telex?: string | null;

      /**
       * Checks for equality with the object’s `emailaddress` field.
       */
      emailaddress?: string | null;

      /**
       * Checks for equality with the object’s `website` field.
       */
      website?: string | null;

      /**
       * Checks for equality with the object’s `careOfCode` field.
       */
      careOfCode?: string | null;

      /**
       * Checks for equality with the object’s `roomFloorBuilding1` field.
       */
      roomFloorBuilding1?: string | null;

      /**
       * Checks for equality with the object’s `roomFloorBuilding2` field.
       */
      roomFloorBuilding2?: string | null;

      /**
       * Checks for equality with the object’s `roomFloorBuilding3` field.
       */
      roomFloorBuilding3?: string | null;

      /**
       * Checks for equality with the object’s `poBox` field.
       */
      poBox?: string | null;

      /**
       * Checks for equality with the object’s `streetNumber` field.
       */
      streetNumber?: string | null;

      /**
       * Checks for equality with the object’s `street` field.
       */
      street?: string | null;

      /**
       * Checks for equality with the object’s `prePostcode` field.
       */
      prePostcode?: string | null;

      /**
       * Checks for equality with the object’s `postPostcode` field.
       */
      postPostcode?: string | null;

      /**
       * Checks for equality with the object’s `lastChangeDate` field.
       */
      lastChangeDate?: string | null;

      /**
       * Checks for equality with the object’s `parentCompany` field.
       */
      parentCompany?: string | null;

      /**
       * Checks for equality with the object’s `nationalityofRegistration` field.
       */
      nationalityofRegistration?: string | null;

      /**
       * Checks for equality with the object’s `nationalityofControl` field.
       */
      nationalityofControl?: string | null;

      /**
       * Checks for equality with the object’s `companyStatus` field.
       */
      companyStatus?: string | null;

      /**
       * Checks for equality with the object’s `fullCompanyName` field.
       */
      fullCompanyName?: string | null;

      /**
       * Checks for equality with the object’s `fullAddress` field.
       */
      fullAddress?: string | null;

      /**
       * Checks for equality with the object’s `facsimile` field.
       */
      facsimile?: string | null;

      /**
       * Checks for equality with the object’s `createDate` field.
       */
      createDate?: any | null;
    }

    /**
     * A connection to a list of `CompanyFullDetailsAndParentCode` values.
     */
    interface ICompanyFullDetailsAndParentCodesConnection {
      __typename: 'CompanyFullDetailsAndParentCodesConnection';

      /**
       * A list of `CompanyFullDetailsAndParentCode` objects.
       */
      nodes: Array<ICompanyFullDetailsAndParentCode | null>;

      /**
       * A list of edges which contains the `CompanyFullDetailsAndParentCode` and cursor to aid in pagination.
       */
      edges: Array<ICompanyFullDetailsAndParentCodesEdge>;

      /**
       * Information to aid in pagination.
       */
      pageInfo: IPageInfo;

      /**
       * The count of *all* `CompanyFullDetailsAndParentCode` you could get from the connection.
       */
      totalCount: number | null;
    }

    interface ICompanyFullDetailsAndParentCode {
      __typename: 'CompanyFullDetailsAndParentCode';
      owcode: string | null;
      shortCompanyName: string | null;
      countryName: string | null;
      townName: string | null;
      telephone: string | null;
      telex: string | null;
      emailaddress: string | null;
      website: string | null;
      careOfCode: string | null;
      roomFloorBuilding1: string | null;
      roomFloorBuilding2: string | null;
      roomFloorBuilding3: string | null;
      poBox: string | null;
      streetNumber: string | null;
      street: string | null;
      prePostcode: string | null;
      postPostcode: string | null;
      lastChangeDate: string | null;
      parentCompany: string | null;
      nationalityofRegistration: string | null;
      nationalityofControl: string | null;
      companyStatus: string | null;
      fullCompanyName: string | null;
      fullAddress: string | null;
      facsimile: string | null;
      createDate: any | null;
    }

    /**
     * A `CompanyFullDetailsAndParentCode` edge in the connection.
     */
    interface ICompanyFullDetailsAndParentCodesEdge {
      __typename: 'CompanyFullDetailsAndParentCodesEdge';

      /**
       * A cursor for use in pagination.
       */
      cursor: any | null;

      /**
       * The `CompanyFullDetailsAndParentCode` at the end of the edge.
       */
      node: ICompanyFullDetailsAndParentCode | null;
    }

    /**
     * Methods to use when ordering `CompanyVesselRelationship`.
     */
    const enum CompanyVesselRelationshipsOrderBy {
      NATURAL = 'NATURAL',
      LRNO_ASC = 'LRNO_ASC',
      LRNO_DESC = 'LRNO_DESC',
      REGISTERED_OWNER_CODE_ASC = 'REGISTERED_OWNER_CODE_ASC',
      REGISTERED_OWNER_CODE_DESC = 'REGISTERED_OWNER_CODE_DESC',
      REGISTERED_OWNER_ASC = 'REGISTERED_OWNER_ASC',
      REGISTERED_OWNER_DESC = 'REGISTERED_OWNER_DESC',
      SHIP_MANAGER_CODE_ASC = 'SHIP_MANAGER_CODE_ASC',
      SHIP_MANAGER_CODE_DESC = 'SHIP_MANAGER_CODE_DESC',
      SHIP_MANAGER_ASC = 'SHIP_MANAGER_ASC',
      SHIP_MANAGER_DESC = 'SHIP_MANAGER_DESC',
      OPERATOR_CODE_ASC = 'OPERATOR_CODE_ASC',
      OPERATOR_CODE_DESC = 'OPERATOR_CODE_DESC',
      OPERATOR_ASC = 'OPERATOR_ASC',
      OPERATOR_DESC = 'OPERATOR_DESC',
      GROUP_BENEFICIAL_OWNER_CODE_ASC = 'GROUP_BENEFICIAL_OWNER_CODE_ASC',
      GROUP_BENEFICIAL_OWNER_CODE_DESC = 'GROUP_BENEFICIAL_OWNER_CODE_DESC',
      GROUP_BENEFICIAL_OWNER_ASC = 'GROUP_BENEFICIAL_OWNER_ASC',
      GROUP_BENEFICIAL_OWNER_DESC = 'GROUP_BENEFICIAL_OWNER_DESC',
      DOCCODE_ASC = 'DOCCODE_ASC',
      DOCCODE_DESC = 'DOCCODE_DESC',
      DOCCOMPANY_ASC = 'DOCCOMPANY_ASC',
      DOCCOMPANY_DESC = 'DOCCOMPANY_DESC',
      TECHNICAL_MANAGER_CODE_ASC = 'TECHNICAL_MANAGER_CODE_ASC',
      TECHNICAL_MANAGER_CODE_DESC = 'TECHNICAL_MANAGER_CODE_DESC',
      TECHNICAL_MANAGER_ASC = 'TECHNICAL_MANAGER_ASC',
      TECHNICAL_MANAGER_DESC = 'TECHNICAL_MANAGER_DESC',
      OPERATOR_GROUP_CODE_ASC = 'OPERATOR_GROUP_CODE_ASC',
      OPERATOR_GROUP_CODE_DESC = 'OPERATOR_GROUP_CODE_DESC',
      OPERATOR_GROUP_ASC = 'OPERATOR_GROUP_ASC',
      OPERATOR_GROUP_DESC = 'OPERATOR_GROUP_DESC',
      SHIP_MANAGER_GROUP_ASC = 'SHIP_MANAGER_GROUP_ASC',
      SHIP_MANAGER_GROUP_DESC = 'SHIP_MANAGER_GROUP_DESC',
      DOCGROUP_CODE_ASC = 'DOCGROUP_CODE_ASC',
      DOCGROUP_CODE_DESC = 'DOCGROUP_CODE_DESC',
      DOCGROUP_ASC = 'DOCGROUP_ASC',
      DOCGROUP_DESC = 'DOCGROUP_DESC',
      TECHNICAL_MANAGER_GROUP_CODE_ASC = 'TECHNICAL_MANAGER_GROUP_CODE_ASC',
      TECHNICAL_MANAGER_GROUP_CODE_DESC = 'TECHNICAL_MANAGER_GROUP_CODE_DESC',
      TECHNICAL_MANAGER_GROUP_ASC = 'TECHNICAL_MANAGER_GROUP_ASC',
      TECHNICAL_MANAGER_GROUP_DESC = 'TECHNICAL_MANAGER_GROUP_DESC',
      SHIP_MANAGER_GROUP_CODE_ASC = 'SHIP_MANAGER_GROUP_CODE_ASC',
      SHIP_MANAGER_GROUP_CODE_DESC = 'SHIP_MANAGER_GROUP_CODE_DESC',
      CREATE_DATE_ASC = 'CREATE_DATE_ASC',
      CREATE_DATE_DESC = 'CREATE_DATE_DESC',
    }

    /**
     * A condition to be used against `CompanyVesselRelationship` object types. All fields are tested for equality and combined with a logical ‘and.’
     */
    interface ICompanyVesselRelationshipCondition {
      /**
       * Checks for equality with the object’s `lrno` field.
       */
      lrno?: string | null;

      /**
       * Checks for equality with the object’s `registeredOwnerCode` field.
       */
      registeredOwnerCode?: string | null;

      /**
       * Checks for equality with the object’s `registeredOwner` field.
       */
      registeredOwner?: string | null;

      /**
       * Checks for equality with the object’s `shipManagerCode` field.
       */
      shipManagerCode?: string | null;

      /**
       * Checks for equality with the object’s `shipManager` field.
       */
      shipManager?: string | null;

      /**
       * Checks for equality with the object’s `operatorCode` field.
       */
      operatorCode?: string | null;

      /**
       * Checks for equality with the object’s `operator` field.
       */
      operator?: string | null;

      /**
       * Checks for equality with the object’s `groupBeneficialOwnerCode` field.
       */
      groupBeneficialOwnerCode?: string | null;

      /**
       * Checks for equality with the object’s `groupBeneficialOwner` field.
       */
      groupBeneficialOwner?: string | null;

      /**
       * Checks for equality with the object’s `docCode` field.
       */
      docCode?: string | null;

      /**
       * Checks for equality with the object’s `docCompany` field.
       */
      docCompany?: string | null;

      /**
       * Checks for equality with the object’s `technicalManagerCode` field.
       */
      technicalManagerCode?: string | null;

      /**
       * Checks for equality with the object’s `technicalManager` field.
       */
      technicalManager?: string | null;

      /**
       * Checks for equality with the object’s `operatorGroupCode` field.
       */
      operatorGroupCode?: string | null;

      /**
       * Checks for equality with the object’s `operatorGroup` field.
       */
      operatorGroup?: string | null;

      /**
       * Checks for equality with the object’s `shipManagerGroup` field.
       */
      shipManagerGroup?: string | null;

      /**
       * Checks for equality with the object’s `docGroupCode` field.
       */
      docGroupCode?: string | null;

      /**
       * Checks for equality with the object’s `docGroup` field.
       */
      docGroup?: string | null;

      /**
       * Checks for equality with the object’s `technicalManagerGroupCode` field.
       */
      technicalManagerGroupCode?: string | null;

      /**
       * Checks for equality with the object’s `technicalManagerGroup` field.
       */
      technicalManagerGroup?: string | null;

      /**
       * Checks for equality with the object’s `shipManagerGroupCode` field.
       */
      shipManagerGroupCode?: string | null;

      /**
       * Checks for equality with the object’s `createDate` field.
       */
      createDate?: any | null;
    }

    /**
     * A connection to a list of `CompanyVesselRelationship` values.
     */
    interface ICompanyVesselRelationshipsConnection {
      __typename: 'CompanyVesselRelationshipsConnection';

      /**
       * A list of `CompanyVesselRelationship` objects.
       */
      nodes: Array<ICompanyVesselRelationship | null>;

      /**
       * A list of edges which contains the `CompanyVesselRelationship` and cursor to aid in pagination.
       */
      edges: Array<ICompanyVesselRelationshipsEdge>;

      /**
       * Information to aid in pagination.
       */
      pageInfo: IPageInfo;

      /**
       * The count of *all* `CompanyVesselRelationship` you could get from the connection.
       */
      totalCount: number | null;
    }

    interface ICompanyVesselRelationship {
      __typename: 'CompanyVesselRelationship';
      lrno: string | null;
      registeredOwnerCode: string | null;
      registeredOwner: string | null;
      shipManagerCode: string | null;
      shipManager: string | null;
      operatorCode: string | null;
      operator: string | null;
      groupBeneficialOwnerCode: string | null;
      groupBeneficialOwner: string | null;
      docCode: string | null;
      docCompany: string | null;
      technicalManagerCode: string | null;
      technicalManager: string | null;
      operatorGroupCode: string | null;
      operatorGroup: string | null;
      shipManagerGroup: string | null;
      docGroupCode: string | null;
      docGroup: string | null;
      technicalManagerGroupCode: string | null;
      technicalManagerGroup: string | null;
      shipManagerGroupCode: string | null;
      createDate: any | null;
    }

    /**
     * A `CompanyVesselRelationship` edge in the connection.
     */
    interface ICompanyVesselRelationshipsEdge {
      __typename: 'CompanyVesselRelationshipsEdge';

      /**
       * A cursor for use in pagination.
       */
      cursor: any | null;

      /**
       * The `CompanyVesselRelationship` at the end of the edge.
       */
      node: ICompanyVesselRelationship | null;
    }

    /**
     * Methods to use when ordering `CrewList`.
     */
    const enum CrewListsOrderBy {
      NATURAL = 'NATURAL',
      ID_ASC = 'ID_ASC',
      ID_DESC = 'ID_DESC',
      LRNO_ASC = 'LRNO_ASC',
      LRNO_DESC = 'LRNO_DESC',
      SHIPNAME_ASC = 'SHIPNAME_ASC',
      SHIPNAME_DESC = 'SHIPNAME_DESC',
      CREW_LIST_DATE_ASC = 'CREW_LIST_DATE_ASC',
      CREW_LIST_DATE_DESC = 'CREW_LIST_DATE_DESC',
      NATIONALITY_ASC = 'NATIONALITY_ASC',
      NATIONALITY_DESC = 'NATIONALITY_DESC',
      TOTAL_CREW_ASC = 'TOTAL_CREW_ASC',
      TOTAL_CREW_DESC = 'TOTAL_CREW_DESC',
      TOTAL_RATINGS_ASC = 'TOTAL_RATINGS_ASC',
      TOTAL_RATINGS_DESC = 'TOTAL_RATINGS_DESC',
      TOTAL_OFFICERS_ASC = 'TOTAL_OFFICERS_ASC',
      TOTAL_OFFICERS_DESC = 'TOTAL_OFFICERS_DESC',
      CREATE_DATE_ASC = 'CREATE_DATE_ASC',
      CREATE_DATE_DESC = 'CREATE_DATE_DESC',
    }

    /**
     * A condition to be used against `CrewList` object types. All fields are tested for equality and combined with a logical ‘and.’
     */
    interface ICrewListCondition {
      /**
       * Checks for equality with the object’s `id` field.
       */
      id?: number | null;

      /**
       * Checks for equality with the object’s `lrno` field.
       */
      lrno?: string | null;

      /**
       * Checks for equality with the object’s `shipname` field.
       */
      shipname?: string | null;

      /**
       * Checks for equality with the object’s `crewListDate` field.
       */
      crewListDate?: string | null;

      /**
       * Checks for equality with the object’s `nationality` field.
       */
      nationality?: string | null;

      /**
       * Checks for equality with the object’s `totalCrew` field.
       */
      totalCrew?: number | null;

      /**
       * Checks for equality with the object’s `totalRatings` field.
       */
      totalRatings?: number | null;

      /**
       * Checks for equality with the object’s `totalOfficers` field.
       */
      totalOfficers?: number | null;

      /**
       * Checks for equality with the object’s `createDate` field.
       */
      createDate?: any | null;
    }

    /**
     * A connection to a list of `CrewList` values.
     */
    interface ICrewListsConnection {
      __typename: 'CrewListsConnection';

      /**
       * A list of `CrewList` objects.
       */
      nodes: Array<ICrewList | null>;

      /**
       * A list of edges which contains the `CrewList` and cursor to aid in pagination.
       */
      edges: Array<ICrewListsEdge>;

      /**
       * Information to aid in pagination.
       */
      pageInfo: IPageInfo;

      /**
       * The count of *all* `CrewList` you could get from the connection.
       */
      totalCount: number | null;
    }

    interface ICrewList {
      __typename: 'CrewList';
      id: number | null;
      lrno: string | null;
      shipname: string | null;
      crewListDate: string | null;
      nationality: string | null;
      totalCrew: number | null;
      totalRatings: number | null;
      totalOfficers: number | null;
      createDate: any | null;
    }

    /**
     * A `CrewList` edge in the connection.
     */
    interface ICrewListsEdge {
      __typename: 'CrewListsEdge';

      /**
       * A cursor for use in pagination.
       */
      cursor: any | null;

      /**
       * The `CrewList` at the end of the edge.
       */
      node: ICrewList | null;
    }

    /**
     * Methods to use when ordering `DocHistory`.
     */
    const enum DocHistoriesOrderBy {
      NATURAL = 'NATURAL',
      LRNO_ASC = 'LRNO_ASC',
      LRNO_DESC = 'LRNO_DESC',
      SEQUENCE_ASC = 'SEQUENCE_ASC',
      SEQUENCE_DESC = 'SEQUENCE_DESC',
      EFFECTIVE_DATE_ASC = 'EFFECTIVE_DATE_ASC',
      EFFECTIVE_DATE_DESC = 'EFFECTIVE_DATE_DESC',
      DOCCOMPANY_ASC = 'DOCCOMPANY_ASC',
      DOCCOMPANY_DESC = 'DOCCOMPANY_DESC',
      DOCCOMPANY_CODE_ASC = 'DOCCOMPANY_CODE_ASC',
      DOCCOMPANY_CODE_DESC = 'DOCCOMPANY_CODE_DESC',
      COMPANY_STATUS_ASC = 'COMPANY_STATUS_ASC',
      COMPANY_STATUS_DESC = 'COMPANY_STATUS_DESC',
      CREATE_DATE_ASC = 'CREATE_DATE_ASC',
      CREATE_DATE_DESC = 'CREATE_DATE_DESC',
    }

    /**
     * A condition to be used against `DocHistory` object types. All fields are tested for equality and combined with a logical ‘and.’
     */
    interface IDocHistoryCondition {
      /**
       * Checks for equality with the object’s `lrno` field.
       */
      lrno?: string | null;

      /**
       * Checks for equality with the object’s `sequence` field.
       */
      sequence?: string | null;

      /**
       * Checks for equality with the object’s `effectiveDate` field.
       */
      effectiveDate?: string | null;

      /**
       * Checks for equality with the object’s `docCompany` field.
       */
      docCompany?: string | null;

      /**
       * Checks for equality with the object’s `docCompanyCode` field.
       */
      docCompanyCode?: string | null;

      /**
       * Checks for equality with the object’s `companyStatus` field.
       */
      companyStatus?: string | null;

      /**
       * Checks for equality with the object’s `createDate` field.
       */
      createDate?: any | null;
    }

    /**
     * A connection to a list of `DocHistory` values.
     */
    interface IDocHistoriesConnection {
      __typename: 'DocHistoriesConnection';

      /**
       * A list of `DocHistory` objects.
       */
      nodes: Array<IDocHistory | null>;

      /**
       * A list of edges which contains the `DocHistory` and cursor to aid in pagination.
       */
      edges: Array<IDocHistoriesEdge>;

      /**
       * Information to aid in pagination.
       */
      pageInfo: IPageInfo;

      /**
       * The count of *all* `DocHistory` you could get from the connection.
       */
      totalCount: number | null;
    }

    interface IDocHistory {
      __typename: 'DocHistory';
      lrno: string | null;
      sequence: string | null;
      effectiveDate: string | null;
      docCompany: string | null;
      docCompanyCode: string | null;
      companyStatus: string | null;
      createDate: any | null;
    }

    /**
     * A `DocHistory` edge in the connection.
     */
    interface IDocHistoriesEdge {
      __typename: 'DocHistoriesEdge';

      /**
       * A cursor for use in pagination.
       */
      cursor: any | null;

      /**
       * The `DocHistory` at the end of the edge.
       */
      node: IDocHistory | null;
    }

    /**
     * Methods to use when ordering `FlagHistory`.
     */
    const enum FlagHistoriesOrderBy {
      NATURAL = 'NATURAL',
      LRNO_ASC = 'LRNO_ASC',
      LRNO_DESC = 'LRNO_DESC',
      SEQUENCE_ASC = 'SEQUENCE_ASC',
      SEQUENCE_DESC = 'SEQUENCE_DESC',
      EFFECTIVE_DATE_ASC = 'EFFECTIVE_DATE_ASC',
      EFFECTIVE_DATE_DESC = 'EFFECTIVE_DATE_DESC',
      FLAG_ASC = 'FLAG_ASC',
      FLAG_DESC = 'FLAG_DESC',
      FLAG_CODE_ASC = 'FLAG_CODE_ASC',
      FLAG_CODE_DESC = 'FLAG_CODE_DESC',
      CREATE_DATE_ASC = 'CREATE_DATE_ASC',
      CREATE_DATE_DESC = 'CREATE_DATE_DESC',
    }

    /**
     * A condition to be used against `FlagHistory` object types. All fields are tested for equality and combined with a logical ‘and.’
     */
    interface IFlagHistoryCondition {
      /**
       * Checks for equality with the object’s `lrno` field.
       */
      lrno?: string | null;

      /**
       * Checks for equality with the object’s `sequence` field.
       */
      sequence?: string | null;

      /**
       * Checks for equality with the object’s `effectiveDate` field.
       */
      effectiveDate?: string | null;

      /**
       * Checks for equality with the object’s `flag` field.
       */
      flag?: string | null;

      /**
       * Checks for equality with the object’s `flagCode` field.
       */
      flagCode?: string | null;

      /**
       * Checks for equality with the object’s `createDate` field.
       */
      createDate?: any | null;
    }

    /**
     * A connection to a list of `FlagHistory` values.
     */
    interface IFlagHistoriesConnection {
      __typename: 'FlagHistoriesConnection';

      /**
       * A list of `FlagHistory` objects.
       */
      nodes: Array<IFlagHistory | null>;

      /**
       * A list of edges which contains the `FlagHistory` and cursor to aid in pagination.
       */
      edges: Array<IFlagHistoriesEdge>;

      /**
       * Information to aid in pagination.
       */
      pageInfo: IPageInfo;

      /**
       * The count of *all* `FlagHistory` you could get from the connection.
       */
      totalCount: number | null;
    }

    interface IFlagHistory {
      __typename: 'FlagHistory';
      lrno: string | null;
      sequence: string | null;
      effectiveDate: string | null;
      flag: string | null;
      flagCode: string | null;
      createDate: any | null;
    }

    /**
     * A `FlagHistory` edge in the connection.
     */
    interface IFlagHistoriesEdge {
      __typename: 'FlagHistoriesEdge';

      /**
       * A cursor for use in pagination.
       */
      cursor: any | null;

      /**
       * The `FlagHistory` at the end of the edge.
       */
      node: IFlagHistory | null;
    }

    /**
     * Methods to use when ordering `GroupBeneficialOwnerHistory`.
     */
    const enum GroupBeneficialOwnerHistoriesOrderBy {
      NATURAL = 'NATURAL',
      LRNO_ASC = 'LRNO_ASC',
      LRNO_DESC = 'LRNO_DESC',
      SEQUENCE_ASC = 'SEQUENCE_ASC',
      SEQUENCE_DESC = 'SEQUENCE_DESC',
      EFFECTIVE_DATE_ASC = 'EFFECTIVE_DATE_ASC',
      EFFECTIVE_DATE_DESC = 'EFFECTIVE_DATE_DESC',
      GROUP_BENEFICIAL_OWNER_ASC = 'GROUP_BENEFICIAL_OWNER_ASC',
      GROUP_BENEFICIAL_OWNER_DESC = 'GROUP_BENEFICIAL_OWNER_DESC',
      GROUP_BENEFICIAL_OWNER_CODE_ASC = 'GROUP_BENEFICIAL_OWNER_CODE_ASC',
      GROUP_BENEFICIAL_OWNER_CODE_DESC = 'GROUP_BENEFICIAL_OWNER_CODE_DESC',
      COMPANY_STATUS_ASC = 'COMPANY_STATUS_ASC',
      COMPANY_STATUS_DESC = 'COMPANY_STATUS_DESC',
      CREATE_DATE_ASC = 'CREATE_DATE_ASC',
      CREATE_DATE_DESC = 'CREATE_DATE_DESC',
    }

    /**
     * A condition to be used against `GroupBeneficialOwnerHistory` object types. All fields are tested for equality and combined with a logical ‘and.’
     */
    interface IGroupBeneficialOwnerHistoryCondition {
      /**
       * Checks for equality with the object’s `lrno` field.
       */
      lrno?: string | null;

      /**
       * Checks for equality with the object’s `sequence` field.
       */
      sequence?: string | null;

      /**
       * Checks for equality with the object’s `effectiveDate` field.
       */
      effectiveDate?: string | null;

      /**
       * Checks for equality with the object’s `groupBeneficialOwner` field.
       */
      groupBeneficialOwner?: string | null;

      /**
       * Checks for equality with the object’s `groupBeneficialOwnerCode` field.
       */
      groupBeneficialOwnerCode?: string | null;

      /**
       * Checks for equality with the object’s `companyStatus` field.
       */
      companyStatus?: string | null;

      /**
       * Checks for equality with the object’s `createDate` field.
       */
      createDate?: any | null;
    }

    /**
     * A connection to a list of `GroupBeneficialOwnerHistory` values.
     */
    interface IGroupBeneficialOwnerHistoriesConnection {
      __typename: 'GroupBeneficialOwnerHistoriesConnection';

      /**
       * A list of `GroupBeneficialOwnerHistory` objects.
       */
      nodes: Array<IGroupBeneficialOwnerHistory | null>;

      /**
       * A list of edges which contains the `GroupBeneficialOwnerHistory` and cursor to aid in pagination.
       */
      edges: Array<IGroupBeneficialOwnerHistoriesEdge>;

      /**
       * Information to aid in pagination.
       */
      pageInfo: IPageInfo;

      /**
       * The count of *all* `GroupBeneficialOwnerHistory` you could get from the connection.
       */
      totalCount: number | null;
    }

    interface IGroupBeneficialOwnerHistory {
      __typename: 'GroupBeneficialOwnerHistory';
      lrno: string | null;
      sequence: string | null;
      effectiveDate: string | null;
      groupBeneficialOwner: string | null;
      groupBeneficialOwnerCode: string | null;
      companyStatus: string | null;
      createDate: any | null;
    }

    /**
     * A `GroupBeneficialOwnerHistory` edge in the connection.
     */
    interface IGroupBeneficialOwnerHistoriesEdge {
      __typename: 'GroupBeneficialOwnerHistoriesEdge';

      /**
       * A cursor for use in pagination.
       */
      cursor: any | null;

      /**
       * The `GroupBeneficialOwnerHistory` at the end of the edge.
       */
      node: IGroupBeneficialOwnerHistory | null;
    }

    /**
     * Methods to use when ordering `MainEngine`.
     */
    const enum MainEnginesOrderBy {
      NATURAL = 'NATURAL',
      LRNO_ASC = 'LRNO_ASC',
      LRNO_DESC = 'LRNO_DESC',
      POSITION_ASC = 'POSITION_ASC',
      POSITION_DESC = 'POSITION_DESC',
      ENGINE_TYPE_ASC = 'ENGINE_TYPE_ASC',
      ENGINE_TYPE_DESC = 'ENGINE_TYPE_DESC',
      ENGINE_DESIGNER_ASC = 'ENGINE_DESIGNER_ASC',
      ENGINE_DESIGNER_DESC = 'ENGINE_DESIGNER_DESC',
      ENGINE_BUILDER_ASC = 'ENGINE_BUILDER_ASC',
      ENGINE_BUILDER_DESC = 'ENGINE_BUILDER_DESC',
      ENGINE_MODEL_ASC = 'ENGINE_MODEL_ASC',
      ENGINE_MODEL_DESC = 'ENGINE_MODEL_DESC',
      NUMBER_OF_CYLINDERS_ASC = 'NUMBER_OF_CYLINDERS_ASC',
      NUMBER_OF_CYLINDERS_DESC = 'NUMBER_OF_CYLINDERS_DESC',
      BORE_ASC = 'BORE_ASC',
      BORE_DESC = 'BORE_DESC',
      STROKE_ASC = 'STROKE_ASC',
      STROKE_DESC = 'STROKE_DESC',
      STROKE_TYPE_ASC = 'STROKE_TYPE_ASC',
      STROKE_TYPE_DESC = 'STROKE_TYPE_DESC',
      POWER_BHP_ASC = 'POWER_BHP_ASC',
      POWER_BHP_DESC = 'POWER_BHP_DESC',
      POWER_KW_ASC = 'POWER_KW_ASC',
      POWER_KW_DESC = 'POWER_KW_DESC',
      RPM_ASC = 'RPM_ASC',
      RPM_DESC = 'RPM_DESC',
      ENGINE_BUILDER_CODE_ASC = 'ENGINE_BUILDER_CODE_ASC',
      ENGINE_BUILDER_CODE_DESC = 'ENGINE_BUILDER_CODE_DESC',
      ENGINE_MAKER_CODE_ASC = 'ENGINE_MAKER_CODE_ASC',
      ENGINE_MAKER_CODE_DESC = 'ENGINE_MAKER_CODE_DESC',
      CYLINDER_ARRANGEMENT_CODE_ASC = 'CYLINDER_ARRANGEMENT_CODE_ASC',
      CYLINDER_ARRANGEMENT_CODE_DESC = 'CYLINDER_ARRANGEMENT_CODE_DESC',
      CYLINDER_ARRANGEMENT_DECODE_ASC = 'CYLINDER_ARRANGEMENT_DECODE_ASC',
      CYLINDER_ARRANGEMENT_DECODE_DESC = 'CYLINDER_ARRANGEMENT_DECODE_DESC',
      BHPOF_MAIN_OIL_ENGINES_ASC = 'BHPOF_MAIN_OIL_ENGINES_ASC',
      BHPOF_MAIN_OIL_ENGINES_DESC = 'BHPOF_MAIN_OIL_ENGINES_DESC',
      CREATE_DATE_ASC = 'CREATE_DATE_ASC',
      CREATE_DATE_DESC = 'CREATE_DATE_DESC',
    }

    /**
     * A condition to be used against `MainEngine` object types. All fields are tested for equality and combined with a logical ‘and.’
     */
    interface IMainEngineCondition {
      /**
       * Checks for equality with the object’s `lrno` field.
       */
      lrno?: string | null;

      /**
       * Checks for equality with the object’s `position` field.
       */
      position?: string | null;

      /**
       * Checks for equality with the object’s `engineType` field.
       */
      engineType?: string | null;

      /**
       * Checks for equality with the object’s `engineDesigner` field.
       */
      engineDesigner?: string | null;

      /**
       * Checks for equality with the object’s `engineBuilder` field.
       */
      engineBuilder?: string | null;

      /**
       * Checks for equality with the object’s `engineModel` field.
       */
      engineModel?: string | null;

      /**
       * Checks for equality with the object’s `numberOfCylinders` field.
       */
      numberOfCylinders?: number | null;

      /**
       * Checks for equality with the object’s `bore` field.
       */
      bore?: number | null;

      /**
       * Checks for equality with the object’s `stroke` field.
       */
      stroke?: number | null;

      /**
       * Checks for equality with the object’s `strokeType` field.
       */
      strokeType?: string | null;

      /**
       * Checks for equality with the object’s `powerBhp` field.
       */
      powerBhp?: number | null;

      /**
       * Checks for equality with the object’s `powerKw` field.
       */
      powerKw?: number | null;

      /**
       * Checks for equality with the object’s `rpm` field.
       */
      rpm?: number | null;

      /**
       * Checks for equality with the object’s `engineBuilderCode` field.
       */
      engineBuilderCode?: string | null;

      /**
       * Checks for equality with the object’s `engineMakerCode` field.
       */
      engineMakerCode?: string | null;

      /**
       * Checks for equality with the object’s `cylinderArrangementCode` field.
       */
      cylinderArrangementCode?: string | null;

      /**
       * Checks for equality with the object’s `cylinderArrangementDecode` field.
       */
      cylinderArrangementDecode?: string | null;

      /**
       * Checks for equality with the object’s `bhpOfMainOilEngines` field.
       */
      bhpOfMainOilEngines?: number | null;

      /**
       * Checks for equality with the object’s `createDate` field.
       */
      createDate?: any | null;
    }

    /**
     * A connection to a list of `MainEngine` values.
     */
    interface IMainEnginesConnection {
      __typename: 'MainEnginesConnection';

      /**
       * A list of `MainEngine` objects.
       */
      nodes: Array<IMainEngine | null>;

      /**
       * A list of edges which contains the `MainEngine` and cursor to aid in pagination.
       */
      edges: Array<IMainEnginesEdge>;

      /**
       * Information to aid in pagination.
       */
      pageInfo: IPageInfo;

      /**
       * The count of *all* `MainEngine` you could get from the connection.
       */
      totalCount: number | null;
    }

    interface IMainEngine {
      __typename: 'MainEngine';
      lrno: string | null;
      position: string | null;
      engineType: string | null;
      engineDesigner: string | null;
      engineBuilder: string | null;
      engineModel: string | null;
      numberOfCylinders: number | null;
      bore: number | null;
      stroke: number | null;
      strokeType: string | null;
      powerBhp: number | null;
      powerKw: number | null;
      rpm: number | null;
      engineBuilderCode: string | null;
      engineMakerCode: string | null;
      cylinderArrangementCode: string | null;
      cylinderArrangementDecode: string | null;
      bhpOfMainOilEngines: number | null;
      createDate: any | null;
    }

    /**
     * A `MainEngine` edge in the connection.
     */
    interface IMainEnginesEdge {
      __typename: 'MainEnginesEdge';

      /**
       * A cursor for use in pagination.
       */
      cursor: any | null;

      /**
       * The `MainEngine` at the end of the edge.
       */
      node: IMainEngine | null;
    }

    /**
     * Methods to use when ordering `MainGenerator`.
     */
    const enum MainGeneratorsOrderBy {
      NATURAL = 'NATURAL',
      LRNO_ASC = 'LRNO_ASC',
      LRNO_DESC = 'LRNO_DESC',
      SEQUENCE_NUMBER_ASC = 'SEQUENCE_NUMBER_ASC',
      SEQUENCE_NUMBER_DESC = 'SEQUENCE_NUMBER_DESC',
      GENERATOR_POSITION_ASC = 'GENERATOR_POSITION_ASC',
      GENERATOR_POSITION_DESC = 'GENERATOR_POSITION_DESC',
      NUMBER_ASC = 'NUMBER_ASC',
      NUMBER_DESC = 'NUMBER_DESC',
      KW_ASC = 'KW_ASC',
      KW_DESC = 'KW_DESC',
      VOLTAGE_ASC = 'VOLTAGE_ASC',
      VOLTAGE_DESC = 'VOLTAGE_DESC',
      AC_DCINDICATOR_ASC = 'AC_DCINDICATOR_ASC',
      AC_DCINDICATOR_DESC = 'AC_DCINDICATOR_DESC',
      FREQUENCY_ASC = 'FREQUENCY_ASC',
      FREQUENCY_DESC = 'FREQUENCY_DESC',
      GENERATOR_MAKER_ASC = 'GENERATOR_MAKER_ASC',
      GENERATOR_MAKER_DESC = 'GENERATOR_MAKER_DESC',
      CREATE_DATE_ASC = 'CREATE_DATE_ASC',
      CREATE_DATE_DESC = 'CREATE_DATE_DESC',
    }

    /**
     * A condition to be used against `MainGenerator` object types. All fields are tested for equality and combined with a logical ‘and.’
     */
    interface IMainGeneratorCondition {
      /**
       * Checks for equality with the object’s `lrno` field.
       */
      lrno?: string | null;

      /**
       * Checks for equality with the object’s `sequenceNumber` field.
       */
      sequenceNumber?: string | null;

      /**
       * Checks for equality with the object’s `generatorPosition` field.
       */
      generatorPosition?: string | null;

      /**
       * Checks for equality with the object’s `number` field.
       */
      number?: number | null;

      /**
       * Checks for equality with the object’s `kw` field.
       */
      kw?: number | null;

      /**
       * Checks for equality with the object’s `voltage` field.
       */
      voltage?: number | null;

      /**
       * Checks for equality with the object’s `acDcIndicator` field.
       */
      acDcIndicator?: string | null;

      /**
       * Checks for equality with the object’s `frequency` field.
       */
      frequency?: number | null;

      /**
       * Checks for equality with the object’s `generatorMaker` field.
       */
      generatorMaker?: string | null;

      /**
       * Checks for equality with the object’s `createDate` field.
       */
      createDate?: any | null;
    }

    /**
     * A connection to a list of `MainGenerator` values.
     */
    interface IMainGeneratorsConnection {
      __typename: 'MainGeneratorsConnection';

      /**
       * A list of `MainGenerator` objects.
       */
      nodes: Array<IMainGenerator | null>;

      /**
       * A list of edges which contains the `MainGenerator` and cursor to aid in pagination.
       */
      edges: Array<IMainGeneratorsEdge>;

      /**
       * Information to aid in pagination.
       */
      pageInfo: IPageInfo;

      /**
       * The count of *all* `MainGenerator` you could get from the connection.
       */
      totalCount: number | null;
    }

    interface IMainGenerator {
      __typename: 'MainGenerator';
      lrno: string | null;
      sequenceNumber: string | null;
      generatorPosition: string | null;
      number: number | null;
      kw: number | null;
      voltage: number | null;
      acDcIndicator: string | null;
      frequency: number | null;
      generatorMaker: string | null;
      createDate: any | null;
    }

    /**
     * A `MainGenerator` edge in the connection.
     */
    interface IMainGeneratorsEdge {
      __typename: 'MainGeneratorsEdge';

      /**
       * A cursor for use in pagination.
       */
      cursor: any | null;

      /**
       * The `MainGenerator` at the end of the edge.
       */
      node: IMainGenerator | null;
    }

    /**
     * Methods to use when ordering `NameHistory`.
     */
    const enum NameHistoriesOrderBy {
      NATURAL = 'NATURAL',
      LRNO_ASC = 'LRNO_ASC',
      LRNO_DESC = 'LRNO_DESC',
      SEQUENCE_ASC = 'SEQUENCE_ASC',
      SEQUENCE_DESC = 'SEQUENCE_DESC',
      VESSEL_NAME_ASC = 'VESSEL_NAME_ASC',
      VESSEL_NAME_DESC = 'VESSEL_NAME_DESC',
      EFFECTIVE_DATE_ASC = 'EFFECTIVE_DATE_ASC',
      EFFECTIVE_DATE_DESC = 'EFFECTIVE_DATE_DESC',
      CREATE_DATE_ASC = 'CREATE_DATE_ASC',
      CREATE_DATE_DESC = 'CREATE_DATE_DESC',
    }

    /**
     * A condition to be used against `NameHistory` object types. All fields are tested for equality and combined with a logical ‘and.’
     */
    interface INameHistoryCondition {
      /**
       * Checks for equality with the object’s `lrno` field.
       */
      lrno?: string | null;

      /**
       * Checks for equality with the object’s `sequence` field.
       */
      sequence?: string | null;

      /**
       * Checks for equality with the object’s `vesselName` field.
       */
      vesselName?: string | null;

      /**
       * Checks for equality with the object’s `effectiveDate` field.
       */
      effectiveDate?: string | null;

      /**
       * Checks for equality with the object’s `createDate` field.
       */
      createDate?: any | null;
    }

    /**
     * A connection to a list of `NameHistory` values.
     */
    interface INameHistoriesConnection {
      __typename: 'NameHistoriesConnection';

      /**
       * A list of `NameHistory` objects.
       */
      nodes: Array<INameHistory | null>;

      /**
       * A list of edges which contains the `NameHistory` and cursor to aid in pagination.
       */
      edges: Array<INameHistoriesEdge>;

      /**
       * Information to aid in pagination.
       */
      pageInfo: IPageInfo;

      /**
       * The count of *all* `NameHistory` you could get from the connection.
       */
      totalCount: number | null;
    }

    interface INameHistory {
      __typename: 'NameHistory';
      lrno: string | null;
      sequence: string | null;
      vesselName: string | null;
      effectiveDate: string | null;
      createDate: any | null;
    }

    /**
     * A `NameHistory` edge in the connection.
     */
    interface INameHistoriesEdge {
      __typename: 'NameHistoriesEdge';

      /**
       * A cursor for use in pagination.
       */
      cursor: any | null;

      /**
       * The `NameHistory` at the end of the edge.
       */
      node: INameHistory | null;
    }

    /**
     * Methods to use when ordering `OperatorHistory`.
     */
    const enum OperatorHistoriesOrderBy {
      NATURAL = 'NATURAL',
      LRNO_ASC = 'LRNO_ASC',
      LRNO_DESC = 'LRNO_DESC',
      SEQUENCE_ASC = 'SEQUENCE_ASC',
      SEQUENCE_DESC = 'SEQUENCE_DESC',
      EFFECTIVE_DATE_ASC = 'EFFECTIVE_DATE_ASC',
      EFFECTIVE_DATE_DESC = 'EFFECTIVE_DATE_DESC',
      OPERATOR_ASC = 'OPERATOR_ASC',
      OPERATOR_DESC = 'OPERATOR_DESC',
      OPERATOR_CODE_ASC = 'OPERATOR_CODE_ASC',
      OPERATOR_CODE_DESC = 'OPERATOR_CODE_DESC',
      COMPANY_STATUS_ASC = 'COMPANY_STATUS_ASC',
      COMPANY_STATUS_DESC = 'COMPANY_STATUS_DESC',
      CREATE_DATE_ASC = 'CREATE_DATE_ASC',
      CREATE_DATE_DESC = 'CREATE_DATE_DESC',
    }

    /**
     * A condition to be used against `OperatorHistory` object types. All fields are tested for equality and combined with a logical ‘and.’
     */
    interface IOperatorHistoryCondition {
      /**
       * Checks for equality with the object’s `lrno` field.
       */
      lrno?: string | null;

      /**
       * Checks for equality with the object’s `sequence` field.
       */
      sequence?: string | null;

      /**
       * Checks for equality with the object’s `effectiveDate` field.
       */
      effectiveDate?: string | null;

      /**
       * Checks for equality with the object’s `operator` field.
       */
      operator?: string | null;

      /**
       * Checks for equality with the object’s `operatorCode` field.
       */
      operatorCode?: string | null;

      /**
       * Checks for equality with the object’s `companyStatus` field.
       */
      companyStatus?: string | null;

      /**
       * Checks for equality with the object’s `createDate` field.
       */
      createDate?: any | null;
    }

    /**
     * A connection to a list of `OperatorHistory` values.
     */
    interface IOperatorHistoriesConnection {
      __typename: 'OperatorHistoriesConnection';

      /**
       * A list of `OperatorHistory` objects.
       */
      nodes: Array<IOperatorHistory | null>;

      /**
       * A list of edges which contains the `OperatorHistory` and cursor to aid in pagination.
       */
      edges: Array<IOperatorHistoriesEdge>;

      /**
       * Information to aid in pagination.
       */
      pageInfo: IPageInfo;

      /**
       * The count of *all* `OperatorHistory` you could get from the connection.
       */
      totalCount: number | null;
    }

    interface IOperatorHistory {
      __typename: 'OperatorHistory';
      lrno: string | null;
      sequence: string | null;
      effectiveDate: string | null;
      operator: string | null;
      operatorCode: string | null;
      companyStatus: string | null;
      createDate: any | null;
    }

    /**
     * A `OperatorHistory` edge in the connection.
     */
    interface IOperatorHistoriesEdge {
      __typename: 'OperatorHistoriesEdge';

      /**
       * A cursor for use in pagination.
       */
      cursor: any | null;

      /**
       * The `OperatorHistory` at the end of the edge.
       */
      node: IOperatorHistory | null;
    }

    /**
     * Methods to use when ordering `PAndIHistory`.
     */
    const enum PAndIHistoriesOrderBy {
      NATURAL = 'NATURAL',
      LRNO_ASC = 'LRNO_ASC',
      LRNO_DESC = 'LRNO_DESC',
      SEQUENCE_ASC = 'SEQUENCE_ASC',
      SEQUENCE_DESC = 'SEQUENCE_DESC',
      PAND_ICLUB_CODE_ASC = 'PAND_ICLUB_CODE_ASC',
      PAND_ICLUB_CODE_DESC = 'PAND_ICLUB_CODE_DESC',
      PAND_ICLUB_DECODE_ASC = 'PAND_ICLUB_DECODE_ASC',
      PAND_ICLUB_DECODE_DESC = 'PAND_ICLUB_DECODE_DESC',
      EFFECTIVE_DATE_ASC = 'EFFECTIVE_DATE_ASC',
      EFFECTIVE_DATE_DESC = 'EFFECTIVE_DATE_DESC',
      SOURCE_ASC = 'SOURCE_ASC',
      SOURCE_DESC = 'SOURCE_DESC',
      CREATE_DATE_ASC = 'CREATE_DATE_ASC',
      CREATE_DATE_DESC = 'CREATE_DATE_DESC',
    }

    /**
     * A condition to be used against `PAndIHistory` object types. All fields are tested for equality and combined with a logical ‘and.’
     */
    interface IPAndIHistoryCondition {
      /**
       * Checks for equality with the object’s `lrno` field.
       */
      lrno?: string | null;

      /**
       * Checks for equality with the object’s `sequence` field.
       */
      sequence?: string | null;

      /**
       * Checks for equality with the object’s `pandIClubCode` field.
       */
      pandIClubCode?: string | null;

      /**
       * Checks for equality with the object’s `pandIClubDecode` field.
       */
      pandIClubDecode?: string | null;

      /**
       * Checks for equality with the object’s `effectiveDate` field.
       */
      effectiveDate?: string | null;

      /**
       * Checks for equality with the object’s `source` field.
       */
      source?: string | null;

      /**
       * Checks for equality with the object’s `createDate` field.
       */
      createDate?: any | null;
    }

    /**
     * A connection to a list of `PAndIHistory` values.
     */
    interface IPAndIHistoriesConnection {
      __typename: 'PAndIHistoriesConnection';

      /**
       * A list of `PAndIHistory` objects.
       */
      nodes: Array<IPAndIHistory | null>;

      /**
       * A list of edges which contains the `PAndIHistory` and cursor to aid in pagination.
       */
      edges: Array<IPAndIHistoriesEdge>;

      /**
       * Information to aid in pagination.
       */
      pageInfo: IPageInfo;

      /**
       * The count of *all* `PAndIHistory` you could get from the connection.
       */
      totalCount: number | null;
    }

    interface IPAndIHistory {
      __typename: 'PAndIHistory';
      lrno: string | null;
      sequence: string | null;
      pandIClubCode: string | null;
      pandIClubDecode: string | null;
      effectiveDate: string | null;
      source: string | null;
      createDate: any | null;
    }

    /**
     * A `PAndIHistory` edge in the connection.
     */
    interface IPAndIHistoriesEdge {
      __typename: 'PAndIHistoriesEdge';

      /**
       * A cursor for use in pagination.
       */
      cursor: any | null;

      /**
       * The `PAndIHistory` at the end of the edge.
       */
      node: IPAndIHistory | null;
    }

    /**
     * Methods to use when ordering `RegisteredOwnerHistory`.
     */
    const enum RegisteredOwnerHistoriesOrderBy {
      NATURAL = 'NATURAL',
      LRNO_ASC = 'LRNO_ASC',
      LRNO_DESC = 'LRNO_DESC',
      SEQUENCE_ASC = 'SEQUENCE_ASC',
      SEQUENCE_DESC = 'SEQUENCE_DESC',
      EFFECTIVE_DATE_ASC = 'EFFECTIVE_DATE_ASC',
      EFFECTIVE_DATE_DESC = 'EFFECTIVE_DATE_DESC',
      OWNER_ASC = 'OWNER_ASC',
      OWNER_DESC = 'OWNER_DESC',
      OWNER_CODE_ASC = 'OWNER_CODE_ASC',
      OWNER_CODE_DESC = 'OWNER_CODE_DESC',
      COMPANY_STATUS_ASC = 'COMPANY_STATUS_ASC',
      COMPANY_STATUS_DESC = 'COMPANY_STATUS_DESC',
      CREATE_DATE_ASC = 'CREATE_DATE_ASC',
      CREATE_DATE_DESC = 'CREATE_DATE_DESC',
    }

    /**
     * A condition to be used against `RegisteredOwnerHistory` object types. All fields are tested for equality and combined with a logical ‘and.’
     */
    interface IRegisteredOwnerHistoryCondition {
      /**
       * Checks for equality with the object’s `lrno` field.
       */
      lrno?: string | null;

      /**
       * Checks for equality with the object’s `sequence` field.
       */
      sequence?: string | null;

      /**
       * Checks for equality with the object’s `effectiveDate` field.
       */
      effectiveDate?: string | null;

      /**
       * Checks for equality with the object’s `owner` field.
       */
      owner?: string | null;

      /**
       * Checks for equality with the object’s `ownerCode` field.
       */
      ownerCode?: string | null;

      /**
       * Checks for equality with the object’s `companyStatus` field.
       */
      companyStatus?: string | null;

      /**
       * Checks for equality with the object’s `createDate` field.
       */
      createDate?: any | null;
    }

    /**
     * A connection to a list of `RegisteredOwnerHistory` values.
     */
    interface IRegisteredOwnerHistoriesConnection {
      __typename: 'RegisteredOwnerHistoriesConnection';

      /**
       * A list of `RegisteredOwnerHistory` objects.
       */
      nodes: Array<IRegisteredOwnerHistory | null>;

      /**
       * A list of edges which contains the `RegisteredOwnerHistory` and cursor to aid in pagination.
       */
      edges: Array<IRegisteredOwnerHistoriesEdge>;

      /**
       * Information to aid in pagination.
       */
      pageInfo: IPageInfo;

      /**
       * The count of *all* `RegisteredOwnerHistory` you could get from the connection.
       */
      totalCount: number | null;
    }

    interface IRegisteredOwnerHistory {
      __typename: 'RegisteredOwnerHistory';
      lrno: string | null;
      sequence: string | null;
      effectiveDate: string | null;
      owner: string | null;
      ownerCode: string | null;
      companyStatus: string | null;
      createDate: any | null;
    }

    /**
     * A `RegisteredOwnerHistory` edge in the connection.
     */
    interface IRegisteredOwnerHistoriesEdge {
      __typename: 'RegisteredOwnerHistoriesEdge';

      /**
       * A cursor for use in pagination.
       */
      cursor: any | null;

      /**
       * The `RegisteredOwnerHistory` at the end of the edge.
       */
      node: IRegisteredOwnerHistory | null;
    }

    /**
     * Methods to use when ordering `ShipData`.
     */
    const enum ShipDataOrderBy {
      NATURAL = 'NATURAL',
      HASH_ASC = 'HASH_ASC',
      HASH_DESC = 'HASH_DESC',
      LRIMOSHIP_NO_ASC = 'LRIMOSHIP_NO_ASC',
      LRIMOSHIP_NO_DESC = 'LRIMOSHIP_NO_DESC',
      SHIP_NAME_ASC = 'SHIP_NAME_ASC',
      SHIP_NAME_DESC = 'SHIP_NAME_DESC',
      SHIP_STATUS_ASC = 'SHIP_STATUS_ASC',
      SHIP_STATUS_DESC = 'SHIP_STATUS_DESC',
      SHIP_STATUS_EFFECTIVE_DATE_ASC = 'SHIP_STATUS_EFFECTIVE_DATE_ASC',
      SHIP_STATUS_EFFECTIVE_DATE_DESC = 'SHIP_STATUS_EFFECTIVE_DATE_DESC',
      SHIPTYPE_LEVEL5_ASC = 'SHIPTYPE_LEVEL5_ASC',
      SHIPTYPE_LEVEL5_DESC = 'SHIPTYPE_LEVEL5_DESC',
      SHIPTYPE_GROUP_ASC = 'SHIPTYPE_GROUP_ASC',
      SHIPTYPE_GROUP_DESC = 'SHIPTYPE_GROUP_DESC',
      YEAR_OF_BUILD_ASC = 'YEAR_OF_BUILD_ASC',
      YEAR_OF_BUILD_DESC = 'YEAR_OF_BUILD_DESC',
      GROSS_TONNAGE_ASC = 'GROSS_TONNAGE_ASC',
      GROSS_TONNAGE_DESC = 'GROSS_TONNAGE_DESC',
      NET_TONNAGE_ASC = 'NET_TONNAGE_ASC',
      NET_TONNAGE_DESC = 'NET_TONNAGE_DESC',
      DEADWEIGHT_ASC = 'DEADWEIGHT_ASC',
      DEADWEIGHT_DESC = 'DEADWEIGHT_DESC',
      FLAG_NAME_ASC = 'FLAG_NAME_ASC',
      FLAG_NAME_DESC = 'FLAG_NAME_DESC',
      CALL_SIGN_ASC = 'CALL_SIGN_ASC',
      CALL_SIGN_DESC = 'CALL_SIGN_DESC',
      MARITIME_MOBILE_SERVICE_IDENTITY_MMSINUMBER_ASC = 'MARITIME_MOBILE_SERVICE_IDENTITY_MMSINUMBER_ASC',
      MARITIME_MOBILE_SERVICE_IDENTITY_MMSINUMBER_DESC = 'MARITIME_MOBILE_SERVICE_IDENTITY_MMSINUMBER_DESC',
      PORTOF_REGISTRY_ASC = 'PORTOF_REGISTRY_ASC',
      PORTOF_REGISTRY_DESC = 'PORTOF_REGISTRY_DESC',
      OFFICIAL_NUMBER_ASC = 'OFFICIAL_NUMBER_ASC',
      OFFICIAL_NUMBER_DESC = 'OFFICIAL_NUMBER_DESC',
      PAND_ICLUB_ASC = 'PAND_ICLUB_ASC',
      PAND_ICLUB_DESC = 'PAND_ICLUB_DESC',
      OPERATOR_ASC = 'OPERATOR_ASC',
      OPERATOR_DESC = 'OPERATOR_DESC',
      OPERATOR_COMPANY_CODE_ASC = 'OPERATOR_COMPANY_CODE_ASC',
      OPERATOR_COMPANY_CODE_DESC = 'OPERATOR_COMPANY_CODE_DESC',
      OPERATOR_COUNTRY_OF_CONTROL_ASC = 'OPERATOR_COUNTRY_OF_CONTROL_ASC',
      OPERATOR_COUNTRY_OF_CONTROL_DESC = 'OPERATOR_COUNTRY_OF_CONTROL_DESC',
      OPERATOR_COUNTRYOF_DOMICILE_NAME_ASC = 'OPERATOR_COUNTRYOF_DOMICILE_NAME_ASC',
      OPERATOR_COUNTRYOF_DOMICILE_NAME_DESC = 'OPERATOR_COUNTRYOF_DOMICILE_NAME_DESC',
      OPERATOR_COUNTRYOF_DOMICILE_CODE_ASC = 'OPERATOR_COUNTRYOF_DOMICILE_CODE_ASC',
      OPERATOR_COUNTRYOF_DOMICILE_CODE_DESC = 'OPERATOR_COUNTRYOF_DOMICILE_CODE_DESC',
      OPERATOR_COUNTRY_OF_REGISTRATION_ASC = 'OPERATOR_COUNTRY_OF_REGISTRATION_ASC',
      OPERATOR_COUNTRY_OF_REGISTRATION_DESC = 'OPERATOR_COUNTRY_OF_REGISTRATION_DESC',
      GROUP_BENEFICIAL_OWNER_ASC = 'GROUP_BENEFICIAL_OWNER_ASC',
      GROUP_BENEFICIAL_OWNER_DESC = 'GROUP_BENEFICIAL_OWNER_DESC',
      GROUP_BENEFICIAL_OWNER_COMPANY_CODE_ASC = 'GROUP_BENEFICIAL_OWNER_COMPANY_CODE_ASC',
      GROUP_BENEFICIAL_OWNER_COMPANY_CODE_DESC = 'GROUP_BENEFICIAL_OWNER_COMPANY_CODE_DESC',
      GROUP_BENEFICIAL_OWNER_COUNTRY_OF_CONTROL_ASC = 'GROUP_BENEFICIAL_OWNER_COUNTRY_OF_CONTROL_ASC',
      GROUP_BENEFICIAL_OWNER_COUNTRY_OF_CONTROL_DESC = 'GROUP_BENEFICIAL_OWNER_COUNTRY_OF_CONTROL_DESC',
      GROUP_BENEFICIAL_OWNER_COUNTRYOF_DOMICILE_ASC = 'GROUP_BENEFICIAL_OWNER_COUNTRYOF_DOMICILE_ASC',
      GROUP_BENEFICIAL_OWNER_COUNTRYOF_DOMICILE_DESC = 'GROUP_BENEFICIAL_OWNER_COUNTRYOF_DOMICILE_DESC',
      GROUP_BENEFICIAL_OWNER_COUNTRYOF_DOMICILE_CODE_ASC = 'GROUP_BENEFICIAL_OWNER_COUNTRYOF_DOMICILE_CODE_ASC',
      GROUP_BENEFICIAL_OWNER_COUNTRYOF_DOMICILE_CODE_DESC = 'GROUP_BENEFICIAL_OWNER_COUNTRYOF_DOMICILE_CODE_DESC',
      GROUP_BENEFICIAL_OWNER_COUNTRY_OF_REGISTRATION_ASC = 'GROUP_BENEFICIAL_OWNER_COUNTRY_OF_REGISTRATION_ASC',
      GROUP_BENEFICIAL_OWNER_COUNTRY_OF_REGISTRATION_DESC = 'GROUP_BENEFICIAL_OWNER_COUNTRY_OF_REGISTRATION_DESC',
      SHIP_MANAGER_ASC = 'SHIP_MANAGER_ASC',
      SHIP_MANAGER_DESC = 'SHIP_MANAGER_DESC',
      SHIP_MANAGER_COMPANY_CODE_ASC = 'SHIP_MANAGER_COMPANY_CODE_ASC',
      SHIP_MANAGER_COMPANY_CODE_DESC = 'SHIP_MANAGER_COMPANY_CODE_DESC',
      SHIP_MANAGER_COUNTRY_OF_CONTROL_ASC = 'SHIP_MANAGER_COUNTRY_OF_CONTROL_ASC',
      SHIP_MANAGER_COUNTRY_OF_CONTROL_DESC = 'SHIP_MANAGER_COUNTRY_OF_CONTROL_DESC',
      SHIP_MANAGER_COUNTRYOF_DOMICILE_NAME_ASC = 'SHIP_MANAGER_COUNTRYOF_DOMICILE_NAME_ASC',
      SHIP_MANAGER_COUNTRYOF_DOMICILE_NAME_DESC = 'SHIP_MANAGER_COUNTRYOF_DOMICILE_NAME_DESC',
      SHIP_MANAGER_COUNTRYOF_DOMICILE_CODE_ASC = 'SHIP_MANAGER_COUNTRYOF_DOMICILE_CODE_ASC',
      SHIP_MANAGER_COUNTRYOF_DOMICILE_CODE_DESC = 'SHIP_MANAGER_COUNTRYOF_DOMICILE_CODE_DESC',
      SHIP_MANAGER_COUNTRY_OF_REGISTRATION_ASC = 'SHIP_MANAGER_COUNTRY_OF_REGISTRATION_ASC',
      SHIP_MANAGER_COUNTRY_OF_REGISTRATION_DESC = 'SHIP_MANAGER_COUNTRY_OF_REGISTRATION_DESC',
      DOCCOMPANY_ASC = 'DOCCOMPANY_ASC',
      DOCCOMPANY_DESC = 'DOCCOMPANY_DESC',
      DOCUMENTOF_COMPLIANCE_DOCCOMPANY_CODE_ASC = 'DOCUMENTOF_COMPLIANCE_DOCCOMPANY_CODE_ASC',
      DOCUMENTOF_COMPLIANCE_DOCCOMPANY_CODE_DESC = 'DOCUMENTOF_COMPLIANCE_DOCCOMPANY_CODE_DESC',
      DOCCOUNTRY_OF_CONTROL_ASC = 'DOCCOUNTRY_OF_CONTROL_ASC',
      DOCCOUNTRY_OF_CONTROL_DESC = 'DOCCOUNTRY_OF_CONTROL_DESC',
      DOCCOMPANY_COUNTRYOF_DOMICILE_ASC = 'DOCCOMPANY_COUNTRYOF_DOMICILE_ASC',
      DOCCOMPANY_COUNTRYOF_DOMICILE_DESC = 'DOCCOMPANY_COUNTRYOF_DOMICILE_DESC',
      DOCCOMPANY_COUNTRYOF_DOMICILECODE_ASC = 'DOCCOMPANY_COUNTRYOF_DOMICILECODE_ASC',
      DOCCOMPANY_COUNTRYOF_DOMICILECODE_DESC = 'DOCCOMPANY_COUNTRYOF_DOMICILECODE_DESC',
      DOCCOUNTRY_OF_REGISTRATION_ASC = 'DOCCOUNTRY_OF_REGISTRATION_ASC',
      DOCCOUNTRY_OF_REGISTRATION_DESC = 'DOCCOUNTRY_OF_REGISTRATION_DESC',
      REGISTERED_OWNER_ASC = 'REGISTERED_OWNER_ASC',
      REGISTERED_OWNER_DESC = 'REGISTERED_OWNER_DESC',
      REGISTERED_OWNER_CODE_ASC = 'REGISTERED_OWNER_CODE_ASC',
      REGISTERED_OWNER_CODE_DESC = 'REGISTERED_OWNER_CODE_DESC',
      REGISTERED_OWNER_COUNTRY_OF_CONTROL_ASC = 'REGISTERED_OWNER_COUNTRY_OF_CONTROL_ASC',
      REGISTERED_OWNER_COUNTRY_OF_CONTROL_DESC = 'REGISTERED_OWNER_COUNTRY_OF_CONTROL_DESC',
      REGISTERED_OWNER_COUNTRYOF_DOMICILE_ASC = 'REGISTERED_OWNER_COUNTRYOF_DOMICILE_ASC',
      REGISTERED_OWNER_COUNTRYOF_DOMICILE_DESC = 'REGISTERED_OWNER_COUNTRYOF_DOMICILE_DESC',
      REGISTERED_OWNER_COUNTRYOF_DOMICILE_CODE_ASC = 'REGISTERED_OWNER_COUNTRYOF_DOMICILE_CODE_ASC',
      REGISTERED_OWNER_COUNTRYOF_DOMICILE_CODE_DESC = 'REGISTERED_OWNER_COUNTRYOF_DOMICILE_CODE_DESC',
      REGISTERED_OWNER_COUNTRY_OF_REGISTRATION_ASC = 'REGISTERED_OWNER_COUNTRY_OF_REGISTRATION_ASC',
      REGISTERED_OWNER_COUNTRY_OF_REGISTRATION_DESC = 'REGISTERED_OWNER_COUNTRY_OF_REGISTRATION_DESC',
      TECHNICAL_MANAGER_ASC = 'TECHNICAL_MANAGER_ASC',
      TECHNICAL_MANAGER_DESC = 'TECHNICAL_MANAGER_DESC',
      TECHNICAL_MANAGER_CODE_ASC = 'TECHNICAL_MANAGER_CODE_ASC',
      TECHNICAL_MANAGER_CODE_DESC = 'TECHNICAL_MANAGER_CODE_DESC',
      TECHNICAL_MANAGER_COUNTRY_OF_CONTROL_ASC = 'TECHNICAL_MANAGER_COUNTRY_OF_CONTROL_ASC',
      TECHNICAL_MANAGER_COUNTRY_OF_CONTROL_DESC = 'TECHNICAL_MANAGER_COUNTRY_OF_CONTROL_DESC',
      TECHNICAL_MANAGER_COUNTRY_OF_DOMICILE_ASC = 'TECHNICAL_MANAGER_COUNTRY_OF_DOMICILE_ASC',
      TECHNICAL_MANAGER_COUNTRY_OF_DOMICILE_DESC = 'TECHNICAL_MANAGER_COUNTRY_OF_DOMICILE_DESC',
      TECHNICAL_MANAGER_COUNTRY_OF_DOMICILE_CODE_ASC = 'TECHNICAL_MANAGER_COUNTRY_OF_DOMICILE_CODE_ASC',
      TECHNICAL_MANAGER_COUNTRY_OF_DOMICILE_CODE_DESC = 'TECHNICAL_MANAGER_COUNTRY_OF_DOMICILE_CODE_DESC',
      TECHNICAL_MANAGER_COUNTRY_OF_REGISTRATION_ASC = 'TECHNICAL_MANAGER_COUNTRY_OF_REGISTRATION_ASC',
      TECHNICAL_MANAGER_COUNTRY_OF_REGISTRATION_DESC = 'TECHNICAL_MANAGER_COUNTRY_OF_REGISTRATION_DESC',
      BAREBOAT_CHARTER_COMPANY_ASC = 'BAREBOAT_CHARTER_COMPANY_ASC',
      BAREBOAT_CHARTER_COMPANY_DESC = 'BAREBOAT_CHARTER_COMPANY_DESC',
      BAREBOAT_CHARTER_COMPANY_CODE_ASC = 'BAREBOAT_CHARTER_COMPANY_CODE_ASC',
      BAREBOAT_CHARTER_COMPANY_CODE_DESC = 'BAREBOAT_CHARTER_COMPANY_CODE_DESC',
      BAREBOAT_CHARTER_COUNTRYOF_CONTROL_ASC = 'BAREBOAT_CHARTER_COUNTRYOF_CONTROL_ASC',
      BAREBOAT_CHARTER_COUNTRYOF_CONTROL_DESC = 'BAREBOAT_CHARTER_COUNTRYOF_CONTROL_DESC',
      BAREBOAT_CHARTER_COUNTRYOF_CONTROL_CODE_ASC = 'BAREBOAT_CHARTER_COUNTRYOF_CONTROL_CODE_ASC',
      BAREBOAT_CHARTER_COUNTRYOF_CONTROL_CODE_DESC = 'BAREBOAT_CHARTER_COUNTRYOF_CONTROL_CODE_DESC',
      BAREBOAT_CHARTER_COUNTRYOF_DOMICILE_CODE_ASC = 'BAREBOAT_CHARTER_COUNTRYOF_DOMICILE_CODE_ASC',
      BAREBOAT_CHARTER_COUNTRYOF_DOMICILE_CODE_DESC = 'BAREBOAT_CHARTER_COUNTRYOF_DOMICILE_CODE_DESC',
      BAREBOAT_CHARTER_COUNTRYOF_DOMICILE_ASC = 'BAREBOAT_CHARTER_COUNTRYOF_DOMICILE_ASC',
      BAREBOAT_CHARTER_COUNTRYOF_DOMICILE_DESC = 'BAREBOAT_CHARTER_COUNTRYOF_DOMICILE_DESC',
      BAREBOAT_CHARTER_COUNTRYOF_REGISTRATION_ASC = 'BAREBOAT_CHARTER_COUNTRYOF_REGISTRATION_ASC',
      BAREBOAT_CHARTER_COUNTRYOF_REGISTRATION_DESC = 'BAREBOAT_CHARTER_COUNTRYOF_REGISTRATION_DESC',
      BAREBOAT_CHARTER_COUNTRYOF_REGISTRATION_CODE_ASC = 'BAREBOAT_CHARTER_COUNTRYOF_REGISTRATION_CODE_ASC',
      BAREBOAT_CHARTER_COUNTRYOF_REGISTRATION_CODE_DESC = 'BAREBOAT_CHARTER_COUNTRYOF_REGISTRATION_CODE_DESC',
      SHIPBUILDER_ASC = 'SHIPBUILDER_ASC',
      SHIPBUILDER_DESC = 'SHIPBUILDER_DESC',
      SHIPBUILDER_FULL_STYLE_ASC = 'SHIPBUILDER_FULL_STYLE_ASC',
      SHIPBUILDER_FULL_STYLE_DESC = 'SHIPBUILDER_FULL_STYLE_DESC',
      COUNTRY_OF_BUILD_ASC = 'COUNTRY_OF_BUILD_ASC',
      COUNTRY_OF_BUILD_DESC = 'COUNTRY_OF_BUILD_DESC',
      YARD_NUMBER_ASC = 'YARD_NUMBER_ASC',
      YARD_NUMBER_DESC = 'YARD_NUMBER_DESC',
      NEWCONSTRUCTION_ENTRY_DATE_ASC = 'NEWCONSTRUCTION_ENTRY_DATE_ASC',
      NEWCONSTRUCTION_ENTRY_DATE_DESC = 'NEWCONSTRUCTION_ENTRY_DATE_DESC',
      CONTRACT_DATE_ASC = 'CONTRACT_DATE_ASC',
      CONTRACT_DATE_DESC = 'CONTRACT_DATE_DESC',
      KEEL_LAID_DATE_ASC = 'KEEL_LAID_DATE_ASC',
      KEEL_LAID_DATE_DESC = 'KEEL_LAID_DATE_DESC',
      LAUNCH_DATE_ASC = 'LAUNCH_DATE_ASC',
      LAUNCH_DATE_DESC = 'LAUNCH_DATE_DESC',
      DELIVERY_DATE_ASC = 'DELIVERY_DATE_ASC',
      DELIVERY_DATE_DESC = 'DELIVERY_DATE_DESC',
      ESTIMATED_COMPLETION_DATE_ASC = 'ESTIMATED_COMPLETION_DATE_ASC',
      ESTIMATED_COMPLETION_DATE_DESC = 'ESTIMATED_COMPLETION_DATE_DESC',
      DRAUGHT_ASC = 'DRAUGHT_ASC',
      DRAUGHT_DESC = 'DRAUGHT_DESC',
      DEPTH_ASC = 'DEPTH_ASC',
      DEPTH_DESC = 'DEPTH_DESC',
      LENGTH_OVERALL_LOA_ASC = 'LENGTH_OVERALL_LOA_ASC',
      LENGTH_OVERALL_LOA_DESC = 'LENGTH_OVERALL_LOA_DESC',
      LENGTH_BETWEEN_PERPENDICULARS_LBP_ASC = 'LENGTH_BETWEEN_PERPENDICULARS_LBP_ASC',
      LENGTH_BETWEEN_PERPENDICULARS_LBP_DESC = 'LENGTH_BETWEEN_PERPENDICULARS_LBP_DESC',
      BREADTH_EXTREME_ASC = 'BREADTH_EXTREME_ASC',
      BREADTH_EXTREME_DESC = 'BREADTH_EXTREME_DESC',
      BREADTH_MOULDED_ASC = 'BREADTH_MOULDED_ASC',
      BREADTH_MOULDED_DESC = 'BREADTH_MOULDED_DESC',
      CRANE_SWL_ASC = 'CRANE_SWL_ASC',
      CRANE_SWL_DESC = 'CRANE_SWL_DESC',
      NUMBEROF_DECKS_ASC = 'NUMBEROF_DECKS_ASC',
      NUMBEROF_DECKS_DESC = 'NUMBEROF_DECKS_DESC',
      NUMBEROF_TANKS_ASC = 'NUMBEROF_TANKS_ASC',
      NUMBEROF_TANKS_DESC = 'NUMBEROF_TANKS_DESC',
      NUMBEROF_HATCHES_ASC = 'NUMBEROF_HATCHES_ASC',
      NUMBEROF_HATCHES_DESC = 'NUMBEROF_HATCHES_DESC',
      NUMBEROF_HOLDS_ASC = 'NUMBEROF_HOLDS_ASC',
      NUMBEROF_HOLDS_DESC = 'NUMBEROF_HOLDS_DESC',
      NUMBEROF_CREW_ASC = 'NUMBEROF_CREW_ASC',
      NUMBEROF_CREW_DESC = 'NUMBEROF_CREW_DESC',
      NUMBEROF_CARS_ASC = 'NUMBEROF_CARS_ASC',
      NUMBEROF_CARS_DESC = 'NUMBEROF_CARS_DESC',
      PASSENGERS_BERTHED_ASC = 'PASSENGERS_BERTHED_ASC',
      PASSENGERS_BERTHED_DESC = 'PASSENGERS_BERTHED_DESC',
      TEU_ASC = 'TEU_ASC',
      TEU_DESC = 'TEU_DESC',
      IMOCHEMICAL_CLASS_I_ASC = 'IMOCHEMICAL_CLASS_I_ASC',
      IMOCHEMICAL_CLASS_I_DESC = 'IMOCHEMICAL_CLASS_I_DESC',
      IMOCHEMICAL_CLASS_II_ASC = 'IMOCHEMICAL_CLASS_II_ASC',
      IMOCHEMICAL_CLASS_II_DESC = 'IMOCHEMICAL_CLASS_II_DESC',
      IMOCHEMICAL_CLASS_III_ASC = 'IMOCHEMICAL_CLASS_III_ASC',
      IMOCHEMICAL_CLASS_III_DESC = 'IMOCHEMICAL_CLASS_III_DESC',
      CLASS_NARRATIVE_ASC = 'CLASS_NARRATIVE_ASC',
      CLASS_NARRATIVE_DESC = 'CLASS_NARRATIVE_DESC',
      SAFETY_MANAGEMENT_CERTIFICATE_AUDITOR_ASC = 'SAFETY_MANAGEMENT_CERTIFICATE_AUDITOR_ASC',
      SAFETY_MANAGEMENT_CERTIFICATE_AUDITOR_DESC = 'SAFETY_MANAGEMENT_CERTIFICATE_AUDITOR_DESC',
      SAFETY_MANAGEMENT_CERTIFICATE_CONVENTIONOR_VOL_ASC = 'SAFETY_MANAGEMENT_CERTIFICATE_CONVENTIONOR_VOL_ASC',
      SAFETY_MANAGEMENT_CERTIFICATE_CONVENTIONOR_VOL_DESC = 'SAFETY_MANAGEMENT_CERTIFICATE_CONVENTIONOR_VOL_DESC',
      SAFETY_MANAGEMENT_CERTIFICATE_DATE_EXPIRES_ASC = 'SAFETY_MANAGEMENT_CERTIFICATE_DATE_EXPIRES_ASC',
      SAFETY_MANAGEMENT_CERTIFICATE_DATE_EXPIRES_DESC = 'SAFETY_MANAGEMENT_CERTIFICATE_DATE_EXPIRES_DESC',
      SAFETY_MANAGEMENT_CERTIFICATE_DATE_ISSUED_ASC = 'SAFETY_MANAGEMENT_CERTIFICATE_DATE_ISSUED_ASC',
      SAFETY_MANAGEMENT_CERTIFICATE_DATE_ISSUED_DESC = 'SAFETY_MANAGEMENT_CERTIFICATE_DATE_ISSUED_DESC',
      SAFETY_MANAGEMENT_CERTIFICATE_DOCCOMPANY_ASC = 'SAFETY_MANAGEMENT_CERTIFICATE_DOCCOMPANY_ASC',
      SAFETY_MANAGEMENT_CERTIFICATE_DOCCOMPANY_DESC = 'SAFETY_MANAGEMENT_CERTIFICATE_DOCCOMPANY_DESC',
      SAFETY_MANAGEMENT_CERTIFICATE_FLAG_ASC = 'SAFETY_MANAGEMENT_CERTIFICATE_FLAG_ASC',
      SAFETY_MANAGEMENT_CERTIFICATE_FLAG_DESC = 'SAFETY_MANAGEMENT_CERTIFICATE_FLAG_DESC',
      SAFETY_MANAGEMENT_CERTIFICATE_ISSUER_ASC = 'SAFETY_MANAGEMENT_CERTIFICATE_ISSUER_ASC',
      SAFETY_MANAGEMENT_CERTIFICATE_ISSUER_DESC = 'SAFETY_MANAGEMENT_CERTIFICATE_ISSUER_DESC',
      SAFETY_MANAGEMENT_CERTIFICATE_OTHER_DESCRIPTION_ASC = 'SAFETY_MANAGEMENT_CERTIFICATE_OTHER_DESCRIPTION_ASC',
      SAFETY_MANAGEMENT_CERTIFICATE_OTHER_DESCRIPTION_DESC = 'SAFETY_MANAGEMENT_CERTIFICATE_OTHER_DESCRIPTION_DESC',
      SAFETY_MANAGEMENT_CERTIFICATE_SHIP_NAME_ASC = 'SAFETY_MANAGEMENT_CERTIFICATE_SHIP_NAME_ASC',
      SAFETY_MANAGEMENT_CERTIFICATE_SHIP_NAME_DESC = 'SAFETY_MANAGEMENT_CERTIFICATE_SHIP_NAME_DESC',
      SAFETY_MANAGEMENT_CERTIFICATE_SHIP_TYPE_ASC = 'SAFETY_MANAGEMENT_CERTIFICATE_SHIP_TYPE_ASC',
      SAFETY_MANAGEMENT_CERTIFICATE_SHIP_TYPE_DESC = 'SAFETY_MANAGEMENT_CERTIFICATE_SHIP_TYPE_DESC',
      SAFETY_MANAGEMENT_CERTIFICATE_SOURCE_ASC = 'SAFETY_MANAGEMENT_CERTIFICATE_SOURCE_ASC',
      SAFETY_MANAGEMENT_CERTIFICATE_SOURCE_DESC = 'SAFETY_MANAGEMENT_CERTIFICATE_SOURCE_DESC',
      FLAG_DISPUTED_ASC = 'FLAG_DISPUTED_ASC',
      FLAG_DISPUTED_DESC = 'FLAG_DISPUTED_DESC',
      FLAG_SANCTIONED_COUNTRY_ASC = 'FLAG_SANCTIONED_COUNTRY_ASC',
      FLAG_SANCTIONED_COUNTRY_DESC = 'FLAG_SANCTIONED_COUNTRY_DESC',
      HISTORICAL_FLAG_SANCTIONED_COUNTRY_ASC = 'HISTORICAL_FLAG_SANCTIONED_COUNTRY_ASC',
      HISTORICAL_FLAG_SANCTIONED_COUNTRY_DESC = 'HISTORICAL_FLAG_SANCTIONED_COUNTRY_DESC',
      HISTORICAL_OWNERIN_OFACSANCTIONED_COUNTRY_ASC = 'HISTORICAL_OWNERIN_OFACSANCTIONED_COUNTRY_ASC',
      HISTORICAL_OWNERIN_OFACSANCTIONED_COUNTRY_DESC = 'HISTORICAL_OWNERIN_OFACSANCTIONED_COUNTRY_DESC',
      OVERALL_COMPLIANCE_STATUS_ASC = 'OVERALL_COMPLIANCE_STATUS_ASC',
      OVERALL_COMPLIANCE_STATUS_DESC = 'OVERALL_COMPLIANCE_STATUS_DESC',
      OWNERIN_FATFJURISDICTION_ASC = 'OWNERIN_FATFJURISDICTION_ASC',
      OWNERIN_FATFJURISDICTION_DESC = 'OWNERIN_FATFJURISDICTION_DESC',
      OWNERIN_OFACSANCTIONED_COUNTRY_ASC = 'OWNERIN_OFACSANCTIONED_COUNTRY_ASC',
      OWNERIN_OFACSANCTIONED_COUNTRY_DESC = 'OWNERIN_OFACSANCTIONED_COUNTRY_DESC',
      OWNERON_BESSANCTION_LIST_ASC = 'OWNERON_BESSANCTION_LIST_ASC',
      OWNERON_BESSANCTION_LIST_DESC = 'OWNERON_BESSANCTION_LIST_DESC',
      OWNERON_EUSANCTION_LIST_ASC = 'OWNERON_EUSANCTION_LIST_ASC',
      OWNERON_EUSANCTION_LIST_DESC = 'OWNERON_EUSANCTION_LIST_DESC',
      OWNERON_OFACSANCTION_LIST_ASC = 'OWNERON_OFACSANCTION_LIST_ASC',
      OWNERON_OFACSANCTION_LIST_DESC = 'OWNERON_OFACSANCTION_LIST_DESC',
      OWNERON_UNSANCTION_LIST_ASC = 'OWNERON_UNSANCTION_LIST_ASC',
      OWNERON_UNSANCTION_LIST_DESC = 'OWNERON_UNSANCTION_LIST_DESC',
      PARENTIN_FATFJURISDICTION_ASC = 'PARENTIN_FATFJURISDICTION_ASC',
      PARENTIN_FATFJURISDICTION_DESC = 'PARENTIN_FATFJURISDICTION_DESC',
      PARENTIN_OFACSANCTIONED_COUNTRY_ASC = 'PARENTIN_OFACSANCTIONED_COUNTRY_ASC',
      PARENTIN_OFACSANCTIONED_COUNTRY_DESC = 'PARENTIN_OFACSANCTIONED_COUNTRY_DESC',
      SANCTIONED_COUNTRY_PORT_CALL_LAST12M_ASC = 'SANCTIONED_COUNTRY_PORT_CALL_LAST12M_ASC',
      SANCTIONED_COUNTRY_PORT_CALL_LAST12M_DESC = 'SANCTIONED_COUNTRY_PORT_CALL_LAST12M_DESC',
      SANCTIONED_COUNTRY_PORT_CALL_LAST3M_ASC = 'SANCTIONED_COUNTRY_PORT_CALL_LAST3M_ASC',
      SANCTIONED_COUNTRY_PORT_CALL_LAST3M_DESC = 'SANCTIONED_COUNTRY_PORT_CALL_LAST3M_DESC',
      SANCTIONED_COUNTRY_PORT_CALL_LAST6M_ASC = 'SANCTIONED_COUNTRY_PORT_CALL_LAST6M_ASC',
      SANCTIONED_COUNTRY_PORT_CALL_LAST6M_DESC = 'SANCTIONED_COUNTRY_PORT_CALL_LAST6M_DESC',
      SHIPON_EUSANCTION_LIST_ASC = 'SHIPON_EUSANCTION_LIST_ASC',
      SHIPON_EUSANCTION_LIST_DESC = 'SHIPON_EUSANCTION_LIST_DESC',
      SHIPON_OFACNON_SDNSANCTION_LIST_ASC = 'SHIPON_OFACNON_SDNSANCTION_LIST_ASC',
      SHIPON_OFACNON_SDNSANCTION_LIST_DESC = 'SHIPON_OFACNON_SDNSANCTION_LIST_DESC',
      SHIPON_OFACSANCTION_LIST_ASC = 'SHIPON_OFACSANCTION_LIST_ASC',
      SHIPON_OFACSANCTION_LIST_DESC = 'SHIPON_OFACSANCTION_LIST_DESC',
      SHIPON_UNSANCTION_LIST_ASC = 'SHIPON_UNSANCTION_LIST_ASC',
      SHIPON_UNSANCTION_LIST_DESC = 'SHIPON_UNSANCTION_LIST_DESC',
      CREATE_DATE_ASC = 'CREATE_DATE_ASC',
      CREATE_DATE_DESC = 'CREATE_DATE_DESC',
      PRIMARY_KEY_ASC = 'PRIMARY_KEY_ASC',
      PRIMARY_KEY_DESC = 'PRIMARY_KEY_DESC',
    }

    /**
     * A condition to be used against `ShipData` object types. All fields are tested for equality and combined with a logical ‘and.’
     */
    interface IShipDataCondition {
      /**
       * Checks for equality with the object’s `hash` field.
       */
      hash?: string | null;

      /**
       * Checks for equality with the object’s `lrimoShipNo` field.
       */
      lrimoShipNo?: string | null;

      /**
       * Checks for equality with the object’s `shipName` field.
       */
      shipName?: string | null;

      /**
       * Checks for equality with the object’s `shipStatus` field.
       */
      shipStatus?: string | null;

      /**
       * Checks for equality with the object’s `shipStatusEffectiveDate` field.
       */
      shipStatusEffectiveDate?: string | null;

      /**
       * Checks for equality with the object’s `shiptypeLevel5` field.
       */
      shiptypeLevel5?: string | null;

      /**
       * Checks for equality with the object’s `shiptypeGroup` field.
       */
      shiptypeGroup?: string | null;

      /**
       * Checks for equality with the object’s `yearOfBuild` field.
       */
      yearOfBuild?: string | null;

      /**
       * Checks for equality with the object’s `grossTonnage` field.
       */
      grossTonnage?: number | null;

      /**
       * Checks for equality with the object’s `netTonnage` field.
       */
      netTonnage?: number | null;

      /**
       * Checks for equality with the object’s `deadweight` field.
       */
      deadweight?: number | null;

      /**
       * Checks for equality with the object’s `flagName` field.
       */
      flagName?: string | null;

      /**
       * Checks for equality with the object’s `callSign` field.
       */
      callSign?: string | null;

      /**
       * Checks for equality with the object’s `maritimeMobileServiceIdentityMmsiNumber` field.
       */
      maritimeMobileServiceIdentityMmsiNumber?: string | null;

      /**
       * Checks for equality with the object’s `portofRegistry` field.
       */
      portofRegistry?: string | null;

      /**
       * Checks for equality with the object’s `officialNumber` field.
       */
      officialNumber?: string | null;

      /**
       * Checks for equality with the object’s `pandIClub` field.
       */
      pandIClub?: string | null;

      /**
       * Checks for equality with the object’s `operator` field.
       */
      operator?: string | null;

      /**
       * Checks for equality with the object’s `operatorCompanyCode` field.
       */
      operatorCompanyCode?: string | null;

      /**
       * Checks for equality with the object’s `operatorCountryOfControl` field.
       */
      operatorCountryOfControl?: string | null;

      /**
       * Checks for equality with the object’s `operatorCountryofDomicileName` field.
       */
      operatorCountryofDomicileName?: string | null;

      /**
       * Checks for equality with the object’s `operatorCountryofDomicileCode` field.
       */
      operatorCountryofDomicileCode?: string | null;

      /**
       * Checks for equality with the object’s `operatorCountryOfRegistration` field.
       */
      operatorCountryOfRegistration?: string | null;

      /**
       * Checks for equality with the object’s `groupBeneficialOwner` field.
       */
      groupBeneficialOwner?: string | null;

      /**
       * Checks for equality with the object’s `groupBeneficialOwnerCompanyCode` field.
       */
      groupBeneficialOwnerCompanyCode?: string | null;

      /**
       * Checks for equality with the object’s `groupBeneficialOwnerCountryOfControl` field.
       */
      groupBeneficialOwnerCountryOfControl?: string | null;

      /**
       * Checks for equality with the object’s `groupBeneficialOwnerCountryofDomicile` field.
       */
      groupBeneficialOwnerCountryofDomicile?: string | null;

      /**
       * Checks for equality with the object’s `groupBeneficialOwnerCountryofDomicileCode` field.
       */
      groupBeneficialOwnerCountryofDomicileCode?: string | null;

      /**
       * Checks for equality with the object’s `groupBeneficialOwnerCountryOfRegistration` field.
       */
      groupBeneficialOwnerCountryOfRegistration?: string | null;

      /**
       * Checks for equality with the object’s `shipManager` field.
       */
      shipManager?: string | null;

      /**
       * Checks for equality with the object’s `shipManagerCompanyCode` field.
       */
      shipManagerCompanyCode?: string | null;

      /**
       * Checks for equality with the object’s `shipManagerCountryOfControl` field.
       */
      shipManagerCountryOfControl?: string | null;

      /**
       * Checks for equality with the object’s `shipManagerCountryofDomicileName` field.
       */
      shipManagerCountryofDomicileName?: string | null;

      /**
       * Checks for equality with the object’s `shipManagerCountryofDomicileCode` field.
       */
      shipManagerCountryofDomicileCode?: string | null;

      /**
       * Checks for equality with the object’s `shipManagerCountryOfRegistration` field.
       */
      shipManagerCountryOfRegistration?: string | null;

      /**
       * Checks for equality with the object’s `docCompany` field.
       */
      docCompany?: string | null;

      /**
       * Checks for equality with the object’s `documentofComplianceDocCompanyCode` field.
       */
      documentofComplianceDocCompanyCode?: string | null;

      /**
       * Checks for equality with the object’s `docCountryOfControl` field.
       */
      docCountryOfControl?: string | null;

      /**
       * Checks for equality with the object’s `docCompanyCountryofDomicile` field.
       */
      docCompanyCountryofDomicile?: string | null;

      /**
       * Checks for equality with the object’s `docCompanyCountryofDomicilecode` field.
       */
      docCompanyCountryofDomicilecode?: string | null;

      /**
       * Checks for equality with the object’s `docCountryOfRegistration` field.
       */
      docCountryOfRegistration?: string | null;

      /**
       * Checks for equality with the object’s `registeredOwner` field.
       */
      registeredOwner?: string | null;

      /**
       * Checks for equality with the object’s `registeredOwnerCode` field.
       */
      registeredOwnerCode?: string | null;

      /**
       * Checks for equality with the object’s `registeredOwnerCountryOfControl` field.
       */
      registeredOwnerCountryOfControl?: string | null;

      /**
       * Checks for equality with the object’s `registeredOwnerCountryofDomicile` field.
       */
      registeredOwnerCountryofDomicile?: string | null;

      /**
       * Checks for equality with the object’s `registeredOwnerCountryofDomicileCode` field.
       */
      registeredOwnerCountryofDomicileCode?: string | null;

      /**
       * Checks for equality with the object’s `registeredOwnerCountryOfRegistration` field.
       */
      registeredOwnerCountryOfRegistration?: string | null;

      /**
       * Checks for equality with the object’s `technicalManager` field.
       */
      technicalManager?: string | null;

      /**
       * Checks for equality with the object’s `technicalManagerCode` field.
       */
      technicalManagerCode?: string | null;

      /**
       * Checks for equality with the object’s `technicalManagerCountryOfControl` field.
       */
      technicalManagerCountryOfControl?: string | null;

      /**
       * Checks for equality with the object’s `technicalManagerCountryOfDomicile` field.
       */
      technicalManagerCountryOfDomicile?: string | null;

      /**
       * Checks for equality with the object’s `technicalManagerCountryOfDomicileCode` field.
       */
      technicalManagerCountryOfDomicileCode?: string | null;

      /**
       * Checks for equality with the object’s `technicalManagerCountryOfRegistration` field.
       */
      technicalManagerCountryOfRegistration?: string | null;

      /**
       * Checks for equality with the object’s `bareboatCharterCompany` field.
       */
      bareboatCharterCompany?: string | null;

      /**
       * Checks for equality with the object’s `bareboatCharterCompanyCode` field.
       */
      bareboatCharterCompanyCode?: string | null;

      /**
       * Checks for equality with the object’s `bareboatCharterCountryofControl` field.
       */
      bareboatCharterCountryofControl?: string | null;

      /**
       * Checks for equality with the object’s `bareboatCharterCountryofControlCode` field.
       */
      bareboatCharterCountryofControlCode?: string | null;

      /**
       * Checks for equality with the object’s `bareboatCharterCountryofDomicileCode` field.
       */
      bareboatCharterCountryofDomicileCode?: string | null;

      /**
       * Checks for equality with the object’s `bareboatCharterCountryofDomicile` field.
       */
      bareboatCharterCountryofDomicile?: string | null;

      /**
       * Checks for equality with the object’s `bareboatCharterCountryofRegistration` field.
       */
      bareboatCharterCountryofRegistration?: string | null;

      /**
       * Checks for equality with the object’s `bareboatCharterCountryofRegistrationCode` field.
       */
      bareboatCharterCountryofRegistrationCode?: string | null;

      /**
       * Checks for equality with the object’s `shipbuilder` field.
       */
      shipbuilder?: string | null;

      /**
       * Checks for equality with the object’s `shipbuilderFullStyle` field.
       */
      shipbuilderFullStyle?: string | null;

      /**
       * Checks for equality with the object’s `countryOfBuild` field.
       */
      countryOfBuild?: string | null;

      /**
       * Checks for equality with the object’s `yardNumber` field.
       */
      yardNumber?: string | null;

      /**
       * Checks for equality with the object’s `newconstructionEntryDate` field.
       */
      newconstructionEntryDate?: string | null;

      /**
       * Checks for equality with the object’s `contractDate` field.
       */
      contractDate?: string | null;

      /**
       * Checks for equality with the object’s `keelLaidDate` field.
       */
      keelLaidDate?: string | null;

      /**
       * Checks for equality with the object’s `launchDate` field.
       */
      launchDate?: string | null;

      /**
       * Checks for equality with the object’s `deliveryDate` field.
       */
      deliveryDate?: string | null;

      /**
       * Checks for equality with the object’s `estimatedCompletionDate` field.
       */
      estimatedCompletionDate?: string | null;

      /**
       * Checks for equality with the object’s `draught` field.
       */
      draught?: any | null;

      /**
       * Checks for equality with the object’s `depth` field.
       */
      depth?: any | null;

      /**
       * Checks for equality with the object’s `lengthOverallLoa` field.
       */
      lengthOverallLoa?: any | null;

      /**
       * Checks for equality with the object’s `lengthBetweenPerpendicularsLbp` field.
       */
      lengthBetweenPerpendicularsLbp?: any | null;

      /**
       * Checks for equality with the object’s `breadthExtreme` field.
       */
      breadthExtreme?: any | null;

      /**
       * Checks for equality with the object’s `breadthMoulded` field.
       */
      breadthMoulded?: any | null;

      /**
       * Checks for equality with the object’s `craneSwl` field.
       */
      craneSwl?: any | null;

      /**
       * Checks for equality with the object’s `numberofDecks` field.
       */
      numberofDecks?: number | null;

      /**
       * Checks for equality with the object’s `numberofTanks` field.
       */
      numberofTanks?: number | null;

      /**
       * Checks for equality with the object’s `numberofHatches` field.
       */
      numberofHatches?: number | null;

      /**
       * Checks for equality with the object’s `numberofHolds` field.
       */
      numberofHolds?: number | null;

      /**
       * Checks for equality with the object’s `numberofCrew` field.
       */
      numberofCrew?: number | null;

      /**
       * Checks for equality with the object’s `numberofCars` field.
       */
      numberofCars?: number | null;

      /**
       * Checks for equality with the object’s `passengersBerthed` field.
       */
      passengersBerthed?: number | null;

      /**
       * Checks for equality with the object’s `teu` field.
       */
      teu?: number | null;

      /**
       * Checks for equality with the object’s `imoChemicalClassI` field.
       */
      imoChemicalClassI?: string | null;

      /**
       * Checks for equality with the object’s `imoChemicalClassIi` field.
       */
      imoChemicalClassIi?: string | null;

      /**
       * Checks for equality with the object’s `imoChemicalClassIii` field.
       */
      imoChemicalClassIii?: string | null;

      /**
       * Checks for equality with the object’s `classNarrative` field.
       */
      classNarrative?: string | null;

      /**
       * Checks for equality with the object’s `safetyManagementCertificateAuditor` field.
       */
      safetyManagementCertificateAuditor?: string | null;

      /**
       * Checks for equality with the object’s `safetyManagementCertificateConventionorVol` field.
       */
      safetyManagementCertificateConventionorVol?: string | null;

      /**
       * Checks for equality with the object’s `safetyManagementCertificateDateExpires` field.
       */
      safetyManagementCertificateDateExpires?: string | null;

      /**
       * Checks for equality with the object’s `safetyManagementCertificateDateIssued` field.
       */
      safetyManagementCertificateDateIssued?: string | null;

      /**
       * Checks for equality with the object’s `safetyManagementCertificateDocCompany` field.
       */
      safetyManagementCertificateDocCompany?: string | null;

      /**
       * Checks for equality with the object’s `safetyManagementCertificateFlag` field.
       */
      safetyManagementCertificateFlag?: string | null;

      /**
       * Checks for equality with the object’s `safetyManagementCertificateIssuer` field.
       */
      safetyManagementCertificateIssuer?: string | null;

      /**
       * Checks for equality with the object’s `safetyManagementCertificateOtherDescription` field.
       */
      safetyManagementCertificateOtherDescription?: string | null;

      /**
       * Checks for equality with the object’s `safetyManagementCertificateShipName` field.
       */
      safetyManagementCertificateShipName?: string | null;

      /**
       * Checks for equality with the object’s `safetyManagementCertificateShipType` field.
       */
      safetyManagementCertificateShipType?: string | null;

      /**
       * Checks for equality with the object’s `safetyManagementCertificateSource` field.
       */
      safetyManagementCertificateSource?: string | null;

      /**
       * Checks for equality with the object’s `flagDisputed` field.
       */
      flagDisputed?: number | null;

      /**
       * Checks for equality with the object’s `flagSanctionedCountry` field.
       */
      flagSanctionedCountry?: number | null;

      /**
       * Checks for equality with the object’s `historicalFlagSanctionedCountry` field.
       */
      historicalFlagSanctionedCountry?: number | null;

      /**
       * Checks for equality with the object’s `historicalOwnerinOfacSanctionedCountry` field.
       */
      historicalOwnerinOfacSanctionedCountry?: number | null;

      /**
       * Checks for equality with the object’s `overallComplianceStatus` field.
       */
      overallComplianceStatus?: number | null;

      /**
       * Checks for equality with the object’s `ownerinFatfJurisdiction` field.
       */
      ownerinFatfJurisdiction?: number | null;

      /**
       * Checks for equality with the object’s `ownerinOfacSanctionedCountry` field.
       */
      ownerinOfacSanctionedCountry?: number | null;

      /**
       * Checks for equality with the object’s `owneronBesSanctionList` field.
       */
      owneronBesSanctionList?: number | null;

      /**
       * Checks for equality with the object’s `owneronEuSanctionList` field.
       */
      owneronEuSanctionList?: number | null;

      /**
       * Checks for equality with the object’s `owneronOfacSanctionList` field.
       */
      owneronOfacSanctionList?: number | null;

      /**
       * Checks for equality with the object’s `owneronUnSanctionList` field.
       */
      owneronUnSanctionList?: number | null;

      /**
       * Checks for equality with the object’s `parentinFatfJurisdiction` field.
       */
      parentinFatfJurisdiction?: number | null;

      /**
       * Checks for equality with the object’s `parentinOfacSanctionedCountry` field.
       */
      parentinOfacSanctionedCountry?: number | null;

      /**
       * Checks for equality with the object’s `sanctionedCountryPortCallLast12M` field.
       */
      sanctionedCountryPortCallLast12M?: number | null;

      /**
       * Checks for equality with the object’s `sanctionedCountryPortCallLast3M` field.
       */
      sanctionedCountryPortCallLast3M?: number | null;

      /**
       * Checks for equality with the object’s `sanctionedCountryPortCallLast6M` field.
       */
      sanctionedCountryPortCallLast6M?: number | null;

      /**
       * Checks for equality with the object’s `shiponEuSanctionList` field.
       */
      shiponEuSanctionList?: number | null;

      /**
       * Checks for equality with the object’s `shiponOfacNonSdnSanctionList` field.
       */
      shiponOfacNonSdnSanctionList?: number | null;

      /**
       * Checks for equality with the object’s `shiponOfacSanctionList` field.
       */
      shiponOfacSanctionList?: number | null;

      /**
       * Checks for equality with the object’s `shiponUnSanctionList` field.
       */
      shiponUnSanctionList?: number | null;

      /**
       * Checks for equality with the object’s `createDate` field.
       */
      createDate?: any | null;
    }

    /**
     * A connection to a list of `ShipData` values.
     */
    interface IShipDataConnection {
      __typename: 'ShipDataConnection';

      /**
       * A list of `ShipData` objects.
       */
      nodes: Array<IShipData | null>;

      /**
       * A list of edges which contains the `ShipData` and cursor to aid in pagination.
       */
      edges: Array<IShipDataEdge>;

      /**
       * Information to aid in pagination.
       */
      pageInfo: IPageInfo;

      /**
       * The count of *all* `ShipData` you could get from the connection.
       */
      totalCount: number | null;
    }

    interface IShipData {
      __typename: 'ShipData';

      /**
       * A globally unique identifier. Can be used in various places throughout the system to identify this single value.
       */
      nodeId: string;
      hash: string;
      lrimoShipNo: string | null;
      shipName: string | null;
      shipStatus: string | null;
      shipStatusEffectiveDate: string | null;
      shiptypeLevel5: string | null;
      shiptypeGroup: string | null;
      yearOfBuild: string | null;
      grossTonnage: number | null;
      netTonnage: number | null;
      deadweight: number | null;
      flagName: string | null;
      callSign: string | null;
      maritimeMobileServiceIdentityMmsiNumber: string | null;
      portofRegistry: string | null;
      officialNumber: string | null;
      pandIClub: string | null;
      operator: string | null;
      operatorCompanyCode: string | null;
      operatorCountryOfControl: string | null;
      operatorCountryofDomicileName: string | null;
      operatorCountryofDomicileCode: string | null;
      operatorCountryOfRegistration: string | null;
      groupBeneficialOwner: string | null;
      groupBeneficialOwnerCompanyCode: string | null;
      groupBeneficialOwnerCountryOfControl: string | null;
      groupBeneficialOwnerCountryofDomicile: string | null;
      groupBeneficialOwnerCountryofDomicileCode: string | null;
      groupBeneficialOwnerCountryOfRegistration: string | null;
      shipManager: string | null;
      shipManagerCompanyCode: string | null;
      shipManagerCountryOfControl: string | null;
      shipManagerCountryofDomicileName: string | null;
      shipManagerCountryofDomicileCode: string | null;
      shipManagerCountryOfRegistration: string | null;
      docCompany: string | null;
      documentofComplianceDocCompanyCode: string | null;
      docCountryOfControl: string | null;
      docCompanyCountryofDomicile: string | null;
      docCompanyCountryofDomicilecode: string | null;
      docCountryOfRegistration: string | null;
      registeredOwner: string | null;
      registeredOwnerCode: string | null;
      registeredOwnerCountryOfControl: string | null;
      registeredOwnerCountryofDomicile: string | null;
      registeredOwnerCountryofDomicileCode: string | null;
      registeredOwnerCountryOfRegistration: string | null;
      technicalManager: string | null;
      technicalManagerCode: string | null;
      technicalManagerCountryOfControl: string | null;
      technicalManagerCountryOfDomicile: string | null;
      technicalManagerCountryOfDomicileCode: string | null;
      technicalManagerCountryOfRegistration: string | null;
      bareboatCharterCompany: string | null;
      bareboatCharterCompanyCode: string | null;
      bareboatCharterCountryofControl: string | null;
      bareboatCharterCountryofControlCode: string | null;
      bareboatCharterCountryofDomicileCode: string | null;
      bareboatCharterCountryofDomicile: string | null;
      bareboatCharterCountryofRegistration: string | null;
      bareboatCharterCountryofRegistrationCode: string | null;
      shipbuilder: string | null;
      shipbuilderFullStyle: string | null;
      countryOfBuild: string | null;
      yardNumber: string | null;
      newconstructionEntryDate: string | null;
      contractDate: string | null;
      keelLaidDate: string | null;
      launchDate: string | null;
      deliveryDate: string | null;
      estimatedCompletionDate: string | null;
      draught: any | null;
      depth: any | null;
      lengthOverallLoa: any | null;
      lengthBetweenPerpendicularsLbp: any | null;
      breadthExtreme: any | null;
      breadthMoulded: any | null;
      craneSwl: any | null;
      numberofDecks: number | null;
      numberofTanks: number | null;
      numberofHatches: number | null;
      numberofHolds: number | null;
      numberofCrew: number | null;
      numberofCars: number | null;
      passengersBerthed: number | null;
      teu: number | null;
      imoChemicalClassI: string | null;
      imoChemicalClassIi: string | null;
      imoChemicalClassIii: string | null;
      classNarrative: string | null;
      safetyManagementCertificateAuditor: string | null;
      safetyManagementCertificateConventionorVol: string | null;
      safetyManagementCertificateDateExpires: string | null;
      safetyManagementCertificateDateIssued: string | null;
      safetyManagementCertificateDocCompany: string | null;
      safetyManagementCertificateFlag: string | null;
      safetyManagementCertificateIssuer: string | null;
      safetyManagementCertificateOtherDescription: string | null;
      safetyManagementCertificateShipName: string | null;
      safetyManagementCertificateShipType: string | null;
      safetyManagementCertificateSource: string | null;
      flagDisputed: number | null;
      flagSanctionedCountry: number | null;
      historicalFlagSanctionedCountry: number | null;
      historicalOwnerinOfacSanctionedCountry: number | null;
      overallComplianceStatus: number | null;
      ownerinFatfJurisdiction: number | null;
      ownerinOfacSanctionedCountry: number | null;
      owneronBesSanctionList: number | null;
      owneronEuSanctionList: number | null;
      owneronOfacSanctionList: number | null;
      owneronUnSanctionList: number | null;
      parentinFatfJurisdiction: number | null;
      parentinOfacSanctionedCountry: number | null;
      sanctionedCountryPortCallLast12M: number | null;
      sanctionedCountryPortCallLast3M: number | null;
      sanctionedCountryPortCallLast6M: number | null;
      shiponEuSanctionList: number | null;
      shiponOfacNonSdnSanctionList: number | null;
      shiponOfacSanctionList: number | null;
      shiponUnSanctionList: number | null;
      createDate: any | null;
    }

    /**
     * A `ShipData` edge in the connection.
     */
    interface IShipDataEdge {
      __typename: 'ShipDataEdge';

      /**
       * A cursor for use in pagination.
       */
      cursor: any | null;

      /**
       * The `ShipData` at the end of the edge.
       */
      node: IShipData | null;
    }

    /**
     * Methods to use when ordering `ShipManagerHistory`.
     */
    const enum ShipManagerHistoriesOrderBy {
      NATURAL = 'NATURAL',
      LRNO_ASC = 'LRNO_ASC',
      LRNO_DESC = 'LRNO_DESC',
      SEQUENCE_ASC = 'SEQUENCE_ASC',
      SEQUENCE_DESC = 'SEQUENCE_DESC',
      EFFECTIVE_DATE_ASC = 'EFFECTIVE_DATE_ASC',
      EFFECTIVE_DATE_DESC = 'EFFECTIVE_DATE_DESC',
      SHIP_MANAGER_ASC = 'SHIP_MANAGER_ASC',
      SHIP_MANAGER_DESC = 'SHIP_MANAGER_DESC',
      SHIP_MANAGER_CODE_ASC = 'SHIP_MANAGER_CODE_ASC',
      SHIP_MANAGER_CODE_DESC = 'SHIP_MANAGER_CODE_DESC',
      COMPANY_STATUS_ASC = 'COMPANY_STATUS_ASC',
      COMPANY_STATUS_DESC = 'COMPANY_STATUS_DESC',
      CREATE_DATE_ASC = 'CREATE_DATE_ASC',
      CREATE_DATE_DESC = 'CREATE_DATE_DESC',
    }

    /**
     * A condition to be used against `ShipManagerHistory` object types. All fields are tested for equality and combined with a logical ‘and.’
     */
    interface IShipManagerHistoryCondition {
      /**
       * Checks for equality with the object’s `lrno` field.
       */
      lrno?: string | null;

      /**
       * Checks for equality with the object’s `sequence` field.
       */
      sequence?: string | null;

      /**
       * Checks for equality with the object’s `effectiveDate` field.
       */
      effectiveDate?: string | null;

      /**
       * Checks for equality with the object’s `shipManager` field.
       */
      shipManager?: string | null;

      /**
       * Checks for equality with the object’s `shipManagerCode` field.
       */
      shipManagerCode?: string | null;

      /**
       * Checks for equality with the object’s `companyStatus` field.
       */
      companyStatus?: string | null;

      /**
       * Checks for equality with the object’s `createDate` field.
       */
      createDate?: any | null;
    }

    /**
     * A connection to a list of `ShipManagerHistory` values.
     */
    interface IShipManagerHistoriesConnection {
      __typename: 'ShipManagerHistoriesConnection';

      /**
       * A list of `ShipManagerHistory` objects.
       */
      nodes: Array<IShipManagerHistory | null>;

      /**
       * A list of edges which contains the `ShipManagerHistory` and cursor to aid in pagination.
       */
      edges: Array<IShipManagerHistoriesEdge>;

      /**
       * Information to aid in pagination.
       */
      pageInfo: IPageInfo;

      /**
       * The count of *all* `ShipManagerHistory` you could get from the connection.
       */
      totalCount: number | null;
    }

    interface IShipManagerHistory {
      __typename: 'ShipManagerHistory';
      lrno: string | null;
      sequence: string | null;
      effectiveDate: string | null;
      shipManager: string | null;
      shipManagerCode: string | null;
      companyStatus: string | null;
      createDate: any | null;
    }

    /**
     * A `ShipManagerHistory` edge in the connection.
     */
    interface IShipManagerHistoriesEdge {
      __typename: 'ShipManagerHistoriesEdge';

      /**
       * A cursor for use in pagination.
       */
      cursor: any | null;

      /**
       * The `ShipManagerHistory` at the end of the edge.
       */
      node: IShipManagerHistory | null;
    }

    /**
     * Methods to use when ordering `SpecialFeature`.
     */
    const enum SpecialFeaturesOrderBy {
      NATURAL = 'NATURAL',
      LRNO_ASC = 'LRNO_ASC',
      LRNO_DESC = 'LRNO_DESC',
      SEQUENCE_ASC = 'SEQUENCE_ASC',
      SEQUENCE_DESC = 'SEQUENCE_DESC',
      SPECIAL_FEATURE_ASC = 'SPECIAL_FEATURE_ASC',
      SPECIAL_FEATURE_DESC = 'SPECIAL_FEATURE_DESC',
      SPECIAL_FEATURE_CODE_ASC = 'SPECIAL_FEATURE_CODE_ASC',
      SPECIAL_FEATURE_CODE_DESC = 'SPECIAL_FEATURE_CODE_DESC',
      CREATE_DATE_ASC = 'CREATE_DATE_ASC',
      CREATE_DATE_DESC = 'CREATE_DATE_DESC',
    }

    /**
     * A condition to be used against `SpecialFeature` object types. All fields are tested for equality and combined with a logical ‘and.’
     */
    interface ISpecialFeatureCondition {
      /**
       * Checks for equality with the object’s `lrno` field.
       */
      lrno?: string | null;

      /**
       * Checks for equality with the object’s `sequence` field.
       */
      sequence?: string | null;

      /**
       * Checks for equality with the object’s `specialFeature` field.
       */
      specialFeature?: string | null;

      /**
       * Checks for equality with the object’s `specialFeatureCode` field.
       */
      specialFeatureCode?: string | null;

      /**
       * Checks for equality with the object’s `createDate` field.
       */
      createDate?: any | null;
    }

    /**
     * A connection to a list of `SpecialFeature` values.
     */
    interface ISpecialFeaturesConnection {
      __typename: 'SpecialFeaturesConnection';

      /**
       * A list of `SpecialFeature` objects.
       */
      nodes: Array<ISpecialFeature | null>;

      /**
       * A list of edges which contains the `SpecialFeature` and cursor to aid in pagination.
       */
      edges: Array<ISpecialFeaturesEdge>;

      /**
       * Information to aid in pagination.
       */
      pageInfo: IPageInfo;

      /**
       * The count of *all* `SpecialFeature` you could get from the connection.
       */
      totalCount: number | null;
    }

    interface ISpecialFeature {
      __typename: 'SpecialFeature';
      lrno: string | null;
      sequence: string | null;
      specialFeature: string | null;
      specialFeatureCode: string | null;
      createDate: any | null;
    }

    /**
     * A `SpecialFeature` edge in the connection.
     */
    interface ISpecialFeaturesEdge {
      __typename: 'SpecialFeaturesEdge';

      /**
       * A cursor for use in pagination.
       */
      cursor: any | null;

      /**
       * The `SpecialFeature` at the end of the edge.
       */
      node: ISpecialFeature | null;
    }

    /**
     * Methods to use when ordering `StatusHistory`.
     */
    const enum StatusHistoriesOrderBy {
      NATURAL = 'NATURAL',
      LRNO_ASC = 'LRNO_ASC',
      LRNO_DESC = 'LRNO_DESC',
      STATUS_ASC = 'STATUS_ASC',
      STATUS_DESC = 'STATUS_DESC',
      SEQUENCE_ASC = 'SEQUENCE_ASC',
      SEQUENCE_DESC = 'SEQUENCE_DESC',
      STATUS_DATE_ASC = 'STATUS_DATE_ASC',
      STATUS_DATE_DESC = 'STATUS_DATE_DESC',
      STATUS_CODE_ASC = 'STATUS_CODE_ASC',
      STATUS_CODE_DESC = 'STATUS_CODE_DESC',
      CREATE_DATE_ASC = 'CREATE_DATE_ASC',
      CREATE_DATE_DESC = 'CREATE_DATE_DESC',
    }

    /**
     * A condition to be used against `StatusHistory` object types. All fields are tested for equality and combined with a logical ‘and.’
     */
    interface IStatusHistoryCondition {
      /**
       * Checks for equality with the object’s `lrno` field.
       */
      lrno?: string | null;

      /**
       * Checks for equality with the object’s `status` field.
       */
      status?: string | null;

      /**
       * Checks for equality with the object’s `sequence` field.
       */
      sequence?: string | null;

      /**
       * Checks for equality with the object’s `statusDate` field.
       */
      statusDate?: string | null;

      /**
       * Checks for equality with the object’s `statusCode` field.
       */
      statusCode?: string | null;

      /**
       * Checks for equality with the object’s `createDate` field.
       */
      createDate?: any | null;
    }

    /**
     * A connection to a list of `StatusHistory` values.
     */
    interface IStatusHistoriesConnection {
      __typename: 'StatusHistoriesConnection';

      /**
       * A list of `StatusHistory` objects.
       */
      nodes: Array<IStatusHistory | null>;

      /**
       * A list of edges which contains the `StatusHistory` and cursor to aid in pagination.
       */
      edges: Array<IStatusHistoriesEdge>;

      /**
       * Information to aid in pagination.
       */
      pageInfo: IPageInfo;

      /**
       * The count of *all* `StatusHistory` you could get from the connection.
       */
      totalCount: number | null;
    }

    interface IStatusHistory {
      __typename: 'StatusHistory';
      lrno: string | null;
      status: string | null;
      sequence: string | null;
      statusDate: string | null;
      statusCode: string | null;
      createDate: any | null;
    }

    /**
     * A `StatusHistory` edge in the connection.
     */
    interface IStatusHistoriesEdge {
      __typename: 'StatusHistoriesEdge';

      /**
       * A cursor for use in pagination.
       */
      cursor: any | null;

      /**
       * The `StatusHistory` at the end of the edge.
       */
      node: IStatusHistory | null;
    }

    /**
     * Methods to use when ordering `SurveyDateHistory`.
     */
    const enum SurveyDateHistoriesOrderBy {
      NATURAL = 'NATURAL',
      LRNO_ASC = 'LRNO_ASC',
      LRNO_DESC = 'LRNO_DESC',
      CLASS_SOCIETY_CODE_ASC = 'CLASS_SOCIETY_CODE_ASC',
      CLASS_SOCIETY_CODE_DESC = 'CLASS_SOCIETY_CODE_DESC',
      SPECIAL_SURVEY_ASC = 'SPECIAL_SURVEY_ASC',
      SPECIAL_SURVEY_DESC = 'SPECIAL_SURVEY_DESC',
      CONTINUOUS_SURVEY_ASC = 'CONTINUOUS_SURVEY_ASC',
      CONTINUOUS_SURVEY_DESC = 'CONTINUOUS_SURVEY_DESC',
      TAILSHAFT_SURVEY_ASC = 'TAILSHAFT_SURVEY_ASC',
      TAILSHAFT_SURVEY_DESC = 'TAILSHAFT_SURVEY_DESC',
      DOCKING_SURVEY_ASC = 'DOCKING_SURVEY_ASC',
      DOCKING_SURVEY_DESC = 'DOCKING_SURVEY_DESC',
      CLASS_SOCIETY_ASC = 'CLASS_SOCIETY_ASC',
      CLASS_SOCIETY_DESC = 'CLASS_SOCIETY_DESC',
      CREATE_DATE_ASC = 'CREATE_DATE_ASC',
      CREATE_DATE_DESC = 'CREATE_DATE_DESC',
    }

    /**
     * A condition to be used against `SurveyDateHistory` object types. All fields are tested for equality and combined with a logical ‘and.’
     */
    interface ISurveyDateHistoryCondition {
      /**
       * Checks for equality with the object’s `lrno` field.
       */
      lrno?: string | null;

      /**
       * Checks for equality with the object’s `classSocietyCode` field.
       */
      classSocietyCode?: string | null;

      /**
       * Checks for equality with the object’s `specialSurvey` field.
       */
      specialSurvey?: string | null;

      /**
       * Checks for equality with the object’s `continuousSurvey` field.
       */
      continuousSurvey?: string | null;

      /**
       * Checks for equality with the object’s `tailshaftSurvey` field.
       */
      tailshaftSurvey?: string | null;

      /**
       * Checks for equality with the object’s `dockingSurvey` field.
       */
      dockingSurvey?: string | null;

      /**
       * Checks for equality with the object’s `classSociety` field.
       */
      classSociety?: string | null;

      /**
       * Checks for equality with the object’s `createDate` field.
       */
      createDate?: any | null;
    }

    /**
     * A connection to a list of `SurveyDateHistory` values.
     */
    interface ISurveyDateHistoriesConnection {
      __typename: 'SurveyDateHistoriesConnection';

      /**
       * A list of `SurveyDateHistory` objects.
       */
      nodes: Array<ISurveyDateHistory | null>;

      /**
       * A list of edges which contains the `SurveyDateHistory` and cursor to aid in pagination.
       */
      edges: Array<ISurveyDateHistoriesEdge>;

      /**
       * Information to aid in pagination.
       */
      pageInfo: IPageInfo;

      /**
       * The count of *all* `SurveyDateHistory` you could get from the connection.
       */
      totalCount: number | null;
    }

    interface ISurveyDateHistory {
      __typename: 'SurveyDateHistory';
      lrno: string | null;
      classSocietyCode: string | null;
      specialSurvey: string | null;
      continuousSurvey: string | null;
      tailshaftSurvey: string | null;
      dockingSurvey: string | null;
      classSociety: string | null;
      createDate: any | null;
    }

    /**
     * A `SurveyDateHistory` edge in the connection.
     */
    interface ISurveyDateHistoriesEdge {
      __typename: 'SurveyDateHistoriesEdge';

      /**
       * A cursor for use in pagination.
       */
      cursor: any | null;

      /**
       * The `SurveyDateHistory` at the end of the edge.
       */
      node: ISurveyDateHistory | null;
    }

    /**
     * Methods to use when ordering `SurveyDate`.
     */
    const enum SurveyDatesOrderBy {
      NATURAL = 'NATURAL',
      LRNO_ASC = 'LRNO_ASC',
      LRNO_DESC = 'LRNO_DESC',
      CLASS_SOCIETY_CODE_ASC = 'CLASS_SOCIETY_CODE_ASC',
      CLASS_SOCIETY_CODE_DESC = 'CLASS_SOCIETY_CODE_DESC',
      SPECIAL_SURVEY_ASC = 'SPECIAL_SURVEY_ASC',
      SPECIAL_SURVEY_DESC = 'SPECIAL_SURVEY_DESC',
      SPECIAL_SURVEY_LAKES_ASC = 'SPECIAL_SURVEY_LAKES_ASC',
      SPECIAL_SURVEY_LAKES_DESC = 'SPECIAL_SURVEY_LAKES_DESC',
      CONTINUOUS_HULL_SURVEY_ASC = 'CONTINUOUS_HULL_SURVEY_ASC',
      CONTINUOUS_HULL_SURVEY_DESC = 'CONTINUOUS_HULL_SURVEY_DESC',
      CONTINUOUS_MACHINERY_SURVEY_ASC = 'CONTINUOUS_MACHINERY_SURVEY_ASC',
      CONTINUOUS_MACHINERY_SURVEY_DESC = 'CONTINUOUS_MACHINERY_SURVEY_DESC',
      TAIL_SHAFT_SURVEY_ASC = 'TAIL_SHAFT_SURVEY_ASC',
      TAIL_SHAFT_SURVEY_DESC = 'TAIL_SHAFT_SURVEY_DESC',
      DOCKING_SURVEY_ASC = 'DOCKING_SURVEY_ASC',
      DOCKING_SURVEY_DESC = 'DOCKING_SURVEY_DESC',
      ANNUAL_SURVEY_ASC = 'ANNUAL_SURVEY_ASC',
      ANNUAL_SURVEY_DESC = 'ANNUAL_SURVEY_DESC',
      CLASS_SOCIETY_ASC = 'CLASS_SOCIETY_ASC',
      CLASS_SOCIETY_DESC = 'CLASS_SOCIETY_DESC',
      CREATE_DATE_ASC = 'CREATE_DATE_ASC',
      CREATE_DATE_DESC = 'CREATE_DATE_DESC',
    }

    /**
     * A condition to be used against `SurveyDate` object types. All fields are tested for equality and combined with a logical ‘and.’
     */
    interface ISurveyDateCondition {
      /**
       * Checks for equality with the object’s `lrno` field.
       */
      lrno?: string | null;

      /**
       * Checks for equality with the object’s `classSocietyCode` field.
       */
      classSocietyCode?: string | null;

      /**
       * Checks for equality with the object’s `specialSurvey` field.
       */
      specialSurvey?: string | null;

      /**
       * Checks for equality with the object’s `specialSurveyLakes` field.
       */
      specialSurveyLakes?: string | null;

      /**
       * Checks for equality with the object’s `continuousHullSurvey` field.
       */
      continuousHullSurvey?: string | null;

      /**
       * Checks for equality with the object’s `continuousMachinerySurvey` field.
       */
      continuousMachinerySurvey?: string | null;

      /**
       * Checks for equality with the object’s `tailShaftSurvey` field.
       */
      tailShaftSurvey?: string | null;

      /**
       * Checks for equality with the object’s `dockingSurvey` field.
       */
      dockingSurvey?: string | null;

      /**
       * Checks for equality with the object’s `annualSurvey` field.
       */
      annualSurvey?: string | null;

      /**
       * Checks for equality with the object’s `classSociety` field.
       */
      classSociety?: string | null;

      /**
       * Checks for equality with the object’s `createDate` field.
       */
      createDate?: any | null;
    }

    /**
     * A connection to a list of `SurveyDate` values.
     */
    interface ISurveyDatesConnection {
      __typename: 'SurveyDatesConnection';

      /**
       * A list of `SurveyDate` objects.
       */
      nodes: Array<ISurveyDate | null>;

      /**
       * A list of edges which contains the `SurveyDate` and cursor to aid in pagination.
       */
      edges: Array<ISurveyDatesEdge>;

      /**
       * Information to aid in pagination.
       */
      pageInfo: IPageInfo;

      /**
       * The count of *all* `SurveyDate` you could get from the connection.
       */
      totalCount: number | null;
    }

    interface ISurveyDate {
      __typename: 'SurveyDate';
      lrno: string | null;
      classSocietyCode: string | null;
      specialSurvey: string | null;
      specialSurveyLakes: string | null;
      continuousHullSurvey: string | null;
      continuousMachinerySurvey: string | null;
      tailShaftSurvey: string | null;
      dockingSurvey: string | null;
      annualSurvey: string | null;
      classSociety: string | null;
      createDate: any | null;
    }

    /**
     * A `SurveyDate` edge in the connection.
     */
    interface ISurveyDatesEdge {
      __typename: 'SurveyDatesEdge';

      /**
       * A cursor for use in pagination.
       */
      cursor: any | null;

      /**
       * The `SurveyDate` at the end of the edge.
       */
      node: ISurveyDate | null;
    }

    /**
     * Methods to use when ordering `TechnicalManagerHistory`.
     */
    const enum TechnicalManagerHistoriesOrderBy {
      NATURAL = 'NATURAL',
      LRNO_ASC = 'LRNO_ASC',
      LRNO_DESC = 'LRNO_DESC',
      SEQUENCE_ASC = 'SEQUENCE_ASC',
      SEQUENCE_DESC = 'SEQUENCE_DESC',
      EFFECTIVE_DATE_ASC = 'EFFECTIVE_DATE_ASC',
      EFFECTIVE_DATE_DESC = 'EFFECTIVE_DATE_DESC',
      TECHNICAL_MANAGER_ASC = 'TECHNICAL_MANAGER_ASC',
      TECHNICAL_MANAGER_DESC = 'TECHNICAL_MANAGER_DESC',
      TECHNICAL_MANAGER_CODE_ASC = 'TECHNICAL_MANAGER_CODE_ASC',
      TECHNICAL_MANAGER_CODE_DESC = 'TECHNICAL_MANAGER_CODE_DESC',
      COMPANY_STATUS_ASC = 'COMPANY_STATUS_ASC',
      COMPANY_STATUS_DESC = 'COMPANY_STATUS_DESC',
      CREATE_DATE_ASC = 'CREATE_DATE_ASC',
      CREATE_DATE_DESC = 'CREATE_DATE_DESC',
    }

    /**
     * A condition to be used against `TechnicalManagerHistory` object types. All fields are tested for equality and combined with a logical ‘and.’
     */
    interface ITechnicalManagerHistoryCondition {
      /**
       * Checks for equality with the object’s `lrno` field.
       */
      lrno?: string | null;

      /**
       * Checks for equality with the object’s `sequence` field.
       */
      sequence?: string | null;

      /**
       * Checks for equality with the object’s `effectiveDate` field.
       */
      effectiveDate?: string | null;

      /**
       * Checks for equality with the object’s `technicalManager` field.
       */
      technicalManager?: string | null;

      /**
       * Checks for equality with the object’s `technicalManagerCode` field.
       */
      technicalManagerCode?: string | null;

      /**
       * Checks for equality with the object’s `companyStatus` field.
       */
      companyStatus?: string | null;

      /**
       * Checks for equality with the object’s `createDate` field.
       */
      createDate?: any | null;
    }

    /**
     * A connection to a list of `TechnicalManagerHistory` values.
     */
    interface ITechnicalManagerHistoriesConnection {
      __typename: 'TechnicalManagerHistoriesConnection';

      /**
       * A list of `TechnicalManagerHistory` objects.
       */
      nodes: Array<ITechnicalManagerHistory | null>;

      /**
       * A list of edges which contains the `TechnicalManagerHistory` and cursor to aid in pagination.
       */
      edges: Array<ITechnicalManagerHistoriesEdge>;

      /**
       * Information to aid in pagination.
       */
      pageInfo: IPageInfo;

      /**
       * The count of *all* `TechnicalManagerHistory` you could get from the connection.
       */
      totalCount: number | null;
    }

    interface ITechnicalManagerHistory {
      __typename: 'TechnicalManagerHistory';
      lrno: string | null;
      sequence: string | null;
      effectiveDate: string | null;
      technicalManager: string | null;
      technicalManagerCode: string | null;
      companyStatus: string | null;
      createDate: any | null;
    }

    /**
     * A `TechnicalManagerHistory` edge in the connection.
     */
    interface ITechnicalManagerHistoriesEdge {
      __typename: 'TechnicalManagerHistoriesEdge';

      /**
       * A cursor for use in pagination.
       */
      cursor: any | null;

      /**
       * The `TechnicalManagerHistory` at the end of the edge.
       */
      node: ITechnicalManagerHistory | null;
    }

    /**
     * Methods to use when ordering `UnverifiedOwnership`.
     */
    const enum UnverifiedOwnershipsOrderBy {
      NATURAL = 'NATURAL',
      LRNO_ASC = 'LRNO_ASC',
      LRNO_DESC = 'LRNO_DESC',
      ANNOTID_ASC = 'ANNOTID_ASC',
      ANNOTID_DESC = 'ANNOTID_DESC',
      BARE_BOAT_CHARTERER_CODE_ASC = 'BARE_BOAT_CHARTERER_CODE_ASC',
      BARE_BOAT_CHARTERER_CODE_DESC = 'BARE_BOAT_CHARTERER_CODE_DESC',
      BARE_BOAT_CHARTERER_ASC = 'BARE_BOAT_CHARTERER_ASC',
      BARE_BOAT_CHARTERER_DESC = 'BARE_BOAT_CHARTERER_DESC',
      COMMERCIAL_MANAGER_CODE_ASC = 'COMMERCIAL_MANAGER_CODE_ASC',
      COMMERCIAL_MANAGER_CODE_DESC = 'COMMERCIAL_MANAGER_CODE_DESC',
      COMMERCIAL_MANAGER_ASC = 'COMMERCIAL_MANAGER_ASC',
      COMMERCIAL_MANAGER_DESC = 'COMMERCIAL_MANAGER_DESC',
      COMMERCIAL_OPERATOR_CODE_ASC = 'COMMERCIAL_OPERATOR_CODE_ASC',
      COMMERCIAL_OPERATOR_CODE_DESC = 'COMMERCIAL_OPERATOR_CODE_DESC',
      COMMERCIAL_OPERATOR_ASC = 'COMMERCIAL_OPERATOR_ASC',
      COMMERCIAL_OPERATOR_DESC = 'COMMERCIAL_OPERATOR_DESC',
      REGISTERED_OWNER_CODE_ASC = 'REGISTERED_OWNER_CODE_ASC',
      REGISTERED_OWNER_CODE_DESC = 'REGISTERED_OWNER_CODE_DESC',
      REGISTERED_OWNER_ASC = 'REGISTERED_OWNER_ASC',
      REGISTERED_OWNER_DESC = 'REGISTERED_OWNER_DESC',
      TECHNICAL_MANAGER_CODE_ASC = 'TECHNICAL_MANAGER_CODE_ASC',
      TECHNICAL_MANAGER_CODE_DESC = 'TECHNICAL_MANAGER_CODE_DESC',
      TECHNICAL_MANAGER_ASC = 'TECHNICAL_MANAGER_ASC',
      TECHNICAL_MANAGER_DESC = 'TECHNICAL_MANAGER_DESC',
      OWNERSHIP_TAKE_OVER_DATE_ASC = 'OWNERSHIP_TAKE_OVER_DATE_ASC',
      OWNERSHIP_TAKE_OVER_DATE_DESC = 'OWNERSHIP_TAKE_OVER_DATE_DESC',
      NEW_FLAG_CODE_ASC = 'NEW_FLAG_CODE_ASC',
      NEW_FLAG_CODE_DESC = 'NEW_FLAG_CODE_DESC',
      NEW_FLAG_ASC = 'NEW_FLAG_ASC',
      NEW_FLAG_DESC = 'NEW_FLAG_DESC',
      CREATE_DATE_ASC = 'CREATE_DATE_ASC',
      CREATE_DATE_DESC = 'CREATE_DATE_DESC',
    }

    /**
     * A condition to be used against `UnverifiedOwnership` object types. All fields are tested for equality and combined with a logical ‘and.’
     */
    interface IUnverifiedOwnershipCondition {
      /**
       * Checks for equality with the object’s `lrno` field.
       */
      lrno?: string | null;

      /**
       * Checks for equality with the object’s `annotid` field.
       */
      annotid?: number | null;

      /**
       * Checks for equality with the object’s `bareBoatChartererCode` field.
       */
      bareBoatChartererCode?: string | null;

      /**
       * Checks for equality with the object’s `bareBoatCharterer` field.
       */
      bareBoatCharterer?: string | null;

      /**
       * Checks for equality with the object’s `commercialManagerCode` field.
       */
      commercialManagerCode?: string | null;

      /**
       * Checks for equality with the object’s `commercialManager` field.
       */
      commercialManager?: string | null;

      /**
       * Checks for equality with the object’s `commercialOperatorCode` field.
       */
      commercialOperatorCode?: string | null;

      /**
       * Checks for equality with the object’s `commercialOperator` field.
       */
      commercialOperator?: string | null;

      /**
       * Checks for equality with the object’s `registeredOwnerCode` field.
       */
      registeredOwnerCode?: string | null;

      /**
       * Checks for equality with the object’s `registeredOwner` field.
       */
      registeredOwner?: string | null;

      /**
       * Checks for equality with the object’s `technicalManagerCode` field.
       */
      technicalManagerCode?: string | null;

      /**
       * Checks for equality with the object’s `technicalManager` field.
       */
      technicalManager?: string | null;

      /**
       * Checks for equality with the object’s `ownershipTakeOverDate` field.
       */
      ownershipTakeOverDate?: string | null;

      /**
       * Checks for equality with the object’s `newFlagCode` field.
       */
      newFlagCode?: string | null;

      /**
       * Checks for equality with the object’s `newFlag` field.
       */
      newFlag?: string | null;

      /**
       * Checks for equality with the object’s `createDate` field.
       */
      createDate?: any | null;
    }

    /**
     * A connection to a list of `UnverifiedOwnership` values.
     */
    interface IUnverifiedOwnershipsConnection {
      __typename: 'UnverifiedOwnershipsConnection';

      /**
       * A list of `UnverifiedOwnership` objects.
       */
      nodes: Array<IUnverifiedOwnership | null>;

      /**
       * A list of edges which contains the `UnverifiedOwnership` and cursor to aid in pagination.
       */
      edges: Array<IUnverifiedOwnershipsEdge>;

      /**
       * Information to aid in pagination.
       */
      pageInfo: IPageInfo;

      /**
       * The count of *all* `UnverifiedOwnership` you could get from the connection.
       */
      totalCount: number | null;
    }

    interface IUnverifiedOwnership {
      __typename: 'UnverifiedOwnership';
      lrno: string | null;
      annotid: number | null;
      bareBoatChartererCode: string | null;
      bareBoatCharterer: string | null;
      commercialManagerCode: string | null;
      commercialManager: string | null;
      commercialOperatorCode: string | null;
      commercialOperator: string | null;
      registeredOwnerCode: string | null;
      registeredOwner: string | null;
      technicalManagerCode: string | null;
      technicalManager: string | null;
      ownershipTakeOverDate: string | null;
      newFlagCode: string | null;
      newFlag: string | null;
      createDate: any | null;
    }

    /**
     * A `UnverifiedOwnership` edge in the connection.
     */
    interface IUnverifiedOwnershipsEdge {
      __typename: 'UnverifiedOwnershipsEdge';

      /**
       * A cursor for use in pagination.
       */
      cursor: any | null;

      /**
       * The `UnverifiedOwnership` at the end of the edge.
       */
      node: IUnverifiedOwnership | null;
    }

    /**
     * The root mutation type which contains root level fields which mutate data.
     */
    interface IMutation {
      __typename: 'Mutation';

      /**
       * Creates a single `AuxEngine`.
       */
      createAuxEngine: ICreateAuxEnginePayload | null;

      /**
       * Creates a single `AuxiliaryGenerator`.
       */
      createAuxiliaryGenerator: ICreateAuxiliaryGeneratorPayload | null;

      /**
       * Creates a single `BoilersExpanded`.
       */
      createBoilersExpanded: ICreateBoilersExpandedPayload | null;

      /**
       * Creates a single `BuilderHistory`.
       */
      createBuilderHistory: ICreateBuilderHistoryPayload | null;

      /**
       * Creates a single `Capacity`.
       */
      createCapacity: ICreateCapacityPayload | null;

      /**
       * Creates a single `ClassHistory`.
       */
      createClassHistory: ICreateClassHistoryPayload | null;

      /**
       * Creates a single `ClassWithdrawn`.
       */
      createClassWithdrawn: ICreateClassWithdrawnPayload | null;

      /**
       * Creates a single `CompanyFullDetailsAndParentCode`.
       */
      createCompanyFullDetailsAndParentCode: ICreateCompanyFullDetailsAndParentCodePayload | null;

      /**
       * Creates a single `CompanyVesselRelationship`.
       */
      createCompanyVesselRelationship: ICreateCompanyVesselRelationshipPayload | null;

      /**
       * Creates a single `CrewList`.
       */
      createCrewList: ICreateCrewListPayload | null;

      /**
       * Creates a single `DocHistory`.
       */
      createDocHistory: ICreateDocHistoryPayload | null;

      /**
       * Creates a single `FlagHistory`.
       */
      createFlagHistory: ICreateFlagHistoryPayload | null;

      /**
       * Creates a single `GroupBeneficialOwnerHistory`.
       */
      createGroupBeneficialOwnerHistory: ICreateGroupBeneficialOwnerHistoryPayload | null;

      /**
       * Creates a single `MainEngine`.
       */
      createMainEngine: ICreateMainEnginePayload | null;

      /**
       * Creates a single `MainGenerator`.
       */
      createMainGenerator: ICreateMainGeneratorPayload | null;

      /**
       * Creates a single `NameHistory`.
       */
      createNameHistory: ICreateNameHistoryPayload | null;

      /**
       * Creates a single `OperatorHistory`.
       */
      createOperatorHistory: ICreateOperatorHistoryPayload | null;

      /**
       * Creates a single `PAndIHistory`.
       */
      createPAndIHistory: ICreatePAndIHistoryPayload | null;

      /**
       * Creates a single `RegisteredOwnerHistory`.
       */
      createRegisteredOwnerHistory: ICreateRegisteredOwnerHistoryPayload | null;

      /**
       * Creates a single `ShipData`.
       */
      createShipData: ICreateShipDataPayload | null;

      /**
       * Creates a single `ShipManagerHistory`.
       */
      createShipManagerHistory: ICreateShipManagerHistoryPayload | null;

      /**
       * Creates a single `SpecialFeature`.
       */
      createSpecialFeature: ICreateSpecialFeaturePayload | null;

      /**
       * Creates a single `StatusHistory`.
       */
      createStatusHistory: ICreateStatusHistoryPayload | null;

      /**
       * Creates a single `SurveyDateHistory`.
       */
      createSurveyDateHistory: ICreateSurveyDateHistoryPayload | null;

      /**
       * Creates a single `SurveyDate`.
       */
      createSurveyDate: ICreateSurveyDatePayload | null;

      /**
       * Creates a single `TechnicalManagerHistory`.
       */
      createTechnicalManagerHistory: ICreateTechnicalManagerHistoryPayload | null;

      /**
       * Creates a single `UnverifiedOwnership`.
       */
      createUnverifiedOwnership: ICreateUnverifiedOwnershipPayload | null;

      /**
       * Updates a single `ShipData` using its globally unique id and a patch.
       */
      updateShipData: IUpdateShipDataPayload | null;

      /**
       * Updates a single `ShipData` using a unique key and a patch.
       */
      updateShipDataByHash: IUpdateShipDataPayload | null;

      /**
       * Deletes a single `ShipData` using its globally unique id.
       */
      deleteShipData: IDeleteShipDataPayload | null;

      /**
       * Deletes a single `ShipData` using a unique key.
       */
      deleteShipDataByHash: IDeleteShipDataPayload | null;
    }

    interface ICreateAuxEngineOnMutationArguments {
      /**
       * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
       */
      input: ICreateAuxEngineInput;
    }

    interface ICreateAuxiliaryGeneratorOnMutationArguments {
      /**
       * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
       */
      input: ICreateAuxiliaryGeneratorInput;
    }

    interface ICreateBoilersExpandedOnMutationArguments {
      /**
       * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
       */
      input: ICreateBoilersExpandedInput;
    }

    interface ICreateBuilderHistoryOnMutationArguments {
      /**
       * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
       */
      input: ICreateBuilderHistoryInput;
    }

    interface ICreateCapacityOnMutationArguments {
      /**
       * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
       */
      input: ICreateCapacityInput;
    }

    interface ICreateClassHistoryOnMutationArguments {
      /**
       * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
       */
      input: ICreateClassHistoryInput;
    }

    interface ICreateClassWithdrawnOnMutationArguments {
      /**
       * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
       */
      input: ICreateClassWithdrawnInput;
    }

    interface ICreateCompanyFullDetailsAndParentCodeOnMutationArguments {
      /**
       * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
       */
      input: ICreateCompanyFullDetailsAndParentCodeInput;
    }

    interface ICreateCompanyVesselRelationshipOnMutationArguments {
      /**
       * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
       */
      input: ICreateCompanyVesselRelationshipInput;
    }

    interface ICreateCrewListOnMutationArguments {
      /**
       * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
       */
      input: ICreateCrewListInput;
    }

    interface ICreateDocHistoryOnMutationArguments {
      /**
       * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
       */
      input: ICreateDocHistoryInput;
    }

    interface ICreateFlagHistoryOnMutationArguments {
      /**
       * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
       */
      input: ICreateFlagHistoryInput;
    }

    interface ICreateGroupBeneficialOwnerHistoryOnMutationArguments {
      /**
       * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
       */
      input: ICreateGroupBeneficialOwnerHistoryInput;
    }

    interface ICreateMainEngineOnMutationArguments {
      /**
       * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
       */
      input: ICreateMainEngineInput;
    }

    interface ICreateMainGeneratorOnMutationArguments {
      /**
       * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
       */
      input: ICreateMainGeneratorInput;
    }

    interface ICreateNameHistoryOnMutationArguments {
      /**
       * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
       */
      input: ICreateNameHistoryInput;
    }

    interface ICreateOperatorHistoryOnMutationArguments {
      /**
       * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
       */
      input: ICreateOperatorHistoryInput;
    }

    interface ICreatePAndIHistoryOnMutationArguments {
      /**
       * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
       */
      input: ICreatePAndIHistoryInput;
    }

    interface ICreateRegisteredOwnerHistoryOnMutationArguments {
      /**
       * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
       */
      input: ICreateRegisteredOwnerHistoryInput;
    }

    interface ICreateShipDataOnMutationArguments {
      /**
       * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
       */
      input: ICreateShipDataInput;
    }

    interface ICreateShipManagerHistoryOnMutationArguments {
      /**
       * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
       */
      input: ICreateShipManagerHistoryInput;
    }

    interface ICreateSpecialFeatureOnMutationArguments {
      /**
       * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
       */
      input: ICreateSpecialFeatureInput;
    }

    interface ICreateStatusHistoryOnMutationArguments {
      /**
       * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
       */
      input: ICreateStatusHistoryInput;
    }

    interface ICreateSurveyDateHistoryOnMutationArguments {
      /**
       * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
       */
      input: ICreateSurveyDateHistoryInput;
    }

    interface ICreateSurveyDateOnMutationArguments {
      /**
       * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
       */
      input: ICreateSurveyDateInput;
    }

    interface ICreateTechnicalManagerHistoryOnMutationArguments {
      /**
       * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
       */
      input: ICreateTechnicalManagerHistoryInput;
    }

    interface ICreateUnverifiedOwnershipOnMutationArguments {
      /**
       * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
       */
      input: ICreateUnverifiedOwnershipInput;
    }

    interface IUpdateShipDataOnMutationArguments {
      /**
       * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
       */
      input: IUpdateShipDataInput;
    }

    interface IUpdateShipDataByHashOnMutationArguments {
      /**
       * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
       */
      input: IUpdateShipDataByHashInput;
    }

    interface IDeleteShipDataOnMutationArguments {
      /**
       * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
       */
      input: IDeleteShipDataInput;
    }

    interface IDeleteShipDataByHashOnMutationArguments {
      /**
       * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
       */
      input: IDeleteShipDataByHashInput;
    }

    /**
     * All input for the create `AuxEngine` mutation.
     */
    interface ICreateAuxEngineInput {
      /**
       * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
       */
      clientMutationId?: string | null;

      /**
       * The `AuxEngine` to be created by this mutation.
       */
      auxEngine: IAuxEngineInput;
    }

    /**
     * An input for mutations affecting `AuxEngine`
     */
    interface IAuxEngineInput {
      lrno?: string | null;
      engineSequence?: string | null;
      engineBuilder?: string | null;
      engineDesigner?: string | null;
      engineModel?: string | null;
      numberOfCylinders?: string | null;
      bore?: string | null;
      stroke?: string | null;
      strokeType?: string | null;
      maxPower?: string | null;
      createDate?: any | null;
    }

    /**
     * The output of our create `AuxEngine` mutation.
     */
    interface ICreateAuxEnginePayload {
      __typename: 'CreateAuxEnginePayload';

      /**
       * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
       */
      clientMutationId: string | null;

      /**
       * The `AuxEngine` that was created by this mutation.
       */
      auxEngine: IAuxEngine | null;

      /**
       * Our root query field type. Allows us to run any query from our mutation payload.
       */
      query: IQuery | null;

      /**
       * An edge for our `AuxEngine`. May be used by Relay 1.
       */
      auxEngineEdge: IAuxEnginesEdge | null;
    }

    interface IAuxEngineEdgeOnCreateAuxEnginePayloadArguments {
      /**
       * The method to use when ordering `AuxEngine`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<AuxEnginesOrderBy> | null;
    }

    /**
     * All input for the create `AuxiliaryGenerator` mutation.
     */
    interface ICreateAuxiliaryGeneratorInput {
      /**
       * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
       */
      clientMutationId?: string | null;

      /**
       * The `AuxiliaryGenerator` to be created by this mutation.
       */
      auxiliaryGenerator: IAuxiliaryGeneratorInput;
    }

    /**
     * An input for mutations affecting `AuxiliaryGenerator`
     */
    interface IAuxiliaryGeneratorInput {
      lrno?: string | null;
      number?: number | null;
      kwEach?: any | null;
      voltage1?: number | null;
      voltage2?: number | null;
      frequency?: number | null;
      acdc?: string | null;
      mainEngineDriven?: string | null;
      seq?: string | null;
      createDate?: any | null;
    }

    /**
     * The output of our create `AuxiliaryGenerator` mutation.
     */
    interface ICreateAuxiliaryGeneratorPayload {
      __typename: 'CreateAuxiliaryGeneratorPayload';

      /**
       * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
       */
      clientMutationId: string | null;

      /**
       * The `AuxiliaryGenerator` that was created by this mutation.
       */
      auxiliaryGenerator: IAuxiliaryGenerator | null;

      /**
       * Our root query field type. Allows us to run any query from our mutation payload.
       */
      query: IQuery | null;

      /**
       * An edge for our `AuxiliaryGenerator`. May be used by Relay 1.
       */
      auxiliaryGeneratorEdge: IAuxiliaryGeneratorsEdge | null;
    }

    interface IAuxiliaryGeneratorEdgeOnCreateAuxiliaryGeneratorPayloadArguments {
      /**
       * The method to use when ordering `AuxiliaryGenerator`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<AuxiliaryGeneratorsOrderBy> | null;
    }

    /**
     * All input for the create `BoilersExpanded` mutation.
     */
    interface ICreateBoilersExpandedInput {
      /**
       * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
       */
      clientMutationId?: string | null;

      /**
       * The `BoilersExpanded` to be created by this mutation.
       */
      boilersExpanded: IBoilersExpandedInput;
    }

    /**
     * An input for mutations affecting `BoilersExpanded`
     */
    interface IBoilersExpandedInput {
      lrno?: string | null;
      sequence?: string | null;
      builder?: string | null;
      design?: string | null;
      effectiveDate?: string | null;
      numberOfBoilers?: string | null;
      boilerTypeCode?: string | null;
      boilerTypeDecode?: string | null;
      firingTypeCode?: string | null;
      firingTypeDecode?: string | null;
      createDate?: any | null;
    }

    /**
     * The output of our create `BoilersExpanded` mutation.
     */
    interface ICreateBoilersExpandedPayload {
      __typename: 'CreateBoilersExpandedPayload';

      /**
       * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
       */
      clientMutationId: string | null;

      /**
       * The `BoilersExpanded` that was created by this mutation.
       */
      boilersExpanded: IBoilersExpanded | null;

      /**
       * Our root query field type. Allows us to run any query from our mutation payload.
       */
      query: IQuery | null;

      /**
       * An edge for our `BoilersExpanded`. May be used by Relay 1.
       */
      boilersExpandedEdge: IBoilersExpandedsEdge | null;
    }

    interface IBoilersExpandedEdgeOnCreateBoilersExpandedPayloadArguments {
      /**
       * The method to use when ordering `BoilersExpanded`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<BoilersExpandedsOrderBy> | null;
    }

    /**
     * All input for the create `BuilderHistory` mutation.
     */
    interface ICreateBuilderHistoryInput {
      /**
       * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
       */
      clientMutationId?: string | null;

      /**
       * The `BuilderHistory` to be created by this mutation.
       */
      builderHistory: IBuilderHistoryInput;
    }

    /**
     * An input for mutations affecting `BuilderHistory`
     */
    interface IBuilderHistoryInput {
      builderCode?: string | null;
      builderHistory?: string | null;
      createDate?: any | null;
    }

    /**
     * The output of our create `BuilderHistory` mutation.
     */
    interface ICreateBuilderHistoryPayload {
      __typename: 'CreateBuilderHistoryPayload';

      /**
       * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
       */
      clientMutationId: string | null;

      /**
       * The `BuilderHistory` that was created by this mutation.
       */
      builderHistory: IBuilderHistory | null;

      /**
       * Our root query field type. Allows us to run any query from our mutation payload.
       */
      query: IQuery | null;

      /**
       * An edge for our `BuilderHistory`. May be used by Relay 1.
       */
      builderHistoryEdge: IBuilderHistoriesEdge | null;
    }

    interface IBuilderHistoryEdgeOnCreateBuilderHistoryPayloadArguments {
      /**
       * The method to use when ordering `BuilderHistory`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<BuilderHistoriesOrderBy> | null;
    }

    /**
     * All input for the create `Capacity` mutation.
     */
    interface ICreateCapacityInput {
      /**
       * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
       */
      clientMutationId?: string | null;

      /**
       * The `Capacity` to be created by this mutation.
       */
      capacity: ICapacityInput;
    }

    /**
     * An input for mutations affecting `Capacity`
     */
    interface ICapacityInput {
      lrno?: string | null;
      bale?: number | null;
      horsepower?: number | null;
      numberOfBarges?: number | null;
      bollardPull?: number | null;
      numberOfCars?: number | null;
      gasCapacity?: number | null;
      grainCapacity?: number | null;
      indicatedHorsepower?: number | null;
      liquidCapacity?: number | null;
      numberOfPassengers?: number | null;
      numberRefrigeratedContainers?: number | null;
      numberOfTeu?: number | null;
      numberOfTrucks?: number | null;
      numberOfVehicles?: number | null;
      numberOfRailWagons?: number | null;
      createDate?: any | null;
    }

    /**
     * The output of our create `Capacity` mutation.
     */
    interface ICreateCapacityPayload {
      __typename: 'CreateCapacityPayload';

      /**
       * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
       */
      clientMutationId: string | null;

      /**
       * The `Capacity` that was created by this mutation.
       */
      capacity: ICapacity | null;

      /**
       * Our root query field type. Allows us to run any query from our mutation payload.
       */
      query: IQuery | null;

      /**
       * An edge for our `Capacity`. May be used by Relay 1.
       */
      capacityEdge: ICapacitiesEdge | null;
    }

    interface ICapacityEdgeOnCreateCapacityPayloadArguments {
      /**
       * The method to use when ordering `Capacity`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<CapacitiesOrderBy> | null;
    }

    /**
     * All input for the create `ClassHistory` mutation.
     */
    interface ICreateClassHistoryInput {
      /**
       * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
       */
      clientMutationId?: string | null;

      /**
       * The `ClassHistory` to be created by this mutation.
       */
      classHistory: IClassHistoryInput;
    }

    /**
     * An input for mutations affecting `ClassHistory`
     */
    interface IClassHistoryInput {
      lrno?: string | null;
      sequence?: string | null;
      currentIndicator?: string | null;
      effectiveDate?: string | null;
      class?: string | null;
      classId?: string | null;
      classCode?: string | null;
      createDate?: any | null;
      classIndicator?: string | null;
    }

    /**
     * The output of our create `ClassHistory` mutation.
     */
    interface ICreateClassHistoryPayload {
      __typename: 'CreateClassHistoryPayload';

      /**
       * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
       */
      clientMutationId: string | null;

      /**
       * The `ClassHistory` that was created by this mutation.
       */
      classHistory: IClassHistory | null;

      /**
       * Our root query field type. Allows us to run any query from our mutation payload.
       */
      query: IQuery | null;

      /**
       * An edge for our `ClassHistory`. May be used by Relay 1.
       */
      classHistoryEdge: IClassHistoriesEdge | null;
    }

    interface IClassHistoryEdgeOnCreateClassHistoryPayloadArguments {
      /**
       * The method to use when ordering `ClassHistory`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<ClassHistoriesOrderBy> | null;
    }

    /**
     * All input for the create `ClassWithdrawn` mutation.
     */
    interface ICreateClassWithdrawnInput {
      /**
       * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
       */
      clientMutationId?: string | null;

      /**
       * The `ClassWithdrawn` to be created by this mutation.
       */
      classWithdrawn: IClassWithdrawnInput;
    }

    /**
     * An input for mutations affecting `ClassWithdrawn`
     */
    interface IClassWithdrawnInput {
      lrno?: string | null;
      class?: string | null;
      withdrawnDate?: string | null;
      reason?: string | null;
      createDate?: any | null;
    }

    /**
     * The output of our create `ClassWithdrawn` mutation.
     */
    interface ICreateClassWithdrawnPayload {
      __typename: 'CreateClassWithdrawnPayload';

      /**
       * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
       */
      clientMutationId: string | null;

      /**
       * The `ClassWithdrawn` that was created by this mutation.
       */
      classWithdrawn: IClassWithdrawn | null;

      /**
       * Our root query field type. Allows us to run any query from our mutation payload.
       */
      query: IQuery | null;

      /**
       * An edge for our `ClassWithdrawn`. May be used by Relay 1.
       */
      classWithdrawnEdge: IClassWithdrawnsEdge | null;
    }

    interface IClassWithdrawnEdgeOnCreateClassWithdrawnPayloadArguments {
      /**
       * The method to use when ordering `ClassWithdrawn`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<ClassWithdrawnsOrderBy> | null;
    }

    /**
     * All input for the create `CompanyFullDetailsAndParentCode` mutation.
     */
    interface ICreateCompanyFullDetailsAndParentCodeInput {
      /**
       * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
       */
      clientMutationId?: string | null;

      /**
       * The `CompanyFullDetailsAndParentCode` to be created by this mutation.
       */
      companyFullDetailsAndParentCode: ICompanyFullDetailsAndParentCodeInput;
    }

    /**
     * An input for mutations affecting `CompanyFullDetailsAndParentCode`
     */
    interface ICompanyFullDetailsAndParentCodeInput {
      owcode?: string | null;
      shortCompanyName?: string | null;
      countryName?: string | null;
      townName?: string | null;
      telephone?: string | null;
      telex?: string | null;
      emailaddress?: string | null;
      website?: string | null;
      careOfCode?: string | null;
      roomFloorBuilding1?: string | null;
      roomFloorBuilding2?: string | null;
      roomFloorBuilding3?: string | null;
      poBox?: string | null;
      streetNumber?: string | null;
      street?: string | null;
      prePostcode?: string | null;
      postPostcode?: string | null;
      lastChangeDate?: string | null;
      parentCompany?: string | null;
      nationalityofRegistration?: string | null;
      nationalityofControl?: string | null;
      companyStatus?: string | null;
      fullCompanyName?: string | null;
      fullAddress?: string | null;
      facsimile?: string | null;
      createDate?: any | null;
    }

    /**
     * The output of our create `CompanyFullDetailsAndParentCode` mutation.
     */
    interface ICreateCompanyFullDetailsAndParentCodePayload {
      __typename: 'CreateCompanyFullDetailsAndParentCodePayload';

      /**
       * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
       */
      clientMutationId: string | null;

      /**
       * The `CompanyFullDetailsAndParentCode` that was created by this mutation.
       */
      companyFullDetailsAndParentCode: ICompanyFullDetailsAndParentCode | null;

      /**
       * Our root query field type. Allows us to run any query from our mutation payload.
       */
      query: IQuery | null;

      /**
       * An edge for our `CompanyFullDetailsAndParentCode`. May be used by Relay 1.
       */
      companyFullDetailsAndParentCodeEdge: ICompanyFullDetailsAndParentCodesEdge | null;
    }

    interface ICompanyFullDetailsAndParentCodeEdgeOnCreateCompanyFullDetailsAndParentCodePayloadArguments {
      /**
       * The method to use when ordering `CompanyFullDetailsAndParentCode`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<CompanyFullDetailsAndParentCodesOrderBy> | null;
    }

    /**
     * All input for the create `CompanyVesselRelationship` mutation.
     */
    interface ICreateCompanyVesselRelationshipInput {
      /**
       * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
       */
      clientMutationId?: string | null;

      /**
       * The `CompanyVesselRelationship` to be created by this mutation.
       */
      companyVesselRelationship: ICompanyVesselRelationshipInput;
    }

    /**
     * An input for mutations affecting `CompanyVesselRelationship`
     */
    interface ICompanyVesselRelationshipInput {
      lrno?: string | null;
      registeredOwnerCode?: string | null;
      registeredOwner?: string | null;
      shipManagerCode?: string | null;
      shipManager?: string | null;
      operatorCode?: string | null;
      operator?: string | null;
      groupBeneficialOwnerCode?: string | null;
      groupBeneficialOwner?: string | null;
      docCode?: string | null;
      docCompany?: string | null;
      technicalManagerCode?: string | null;
      technicalManager?: string | null;
      operatorGroupCode?: string | null;
      operatorGroup?: string | null;
      shipManagerGroup?: string | null;
      docGroupCode?: string | null;
      docGroup?: string | null;
      technicalManagerGroupCode?: string | null;
      technicalManagerGroup?: string | null;
      shipManagerGroupCode?: string | null;
      createDate?: any | null;
    }

    /**
     * The output of our create `CompanyVesselRelationship` mutation.
     */
    interface ICreateCompanyVesselRelationshipPayload {
      __typename: 'CreateCompanyVesselRelationshipPayload';

      /**
       * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
       */
      clientMutationId: string | null;

      /**
       * The `CompanyVesselRelationship` that was created by this mutation.
       */
      companyVesselRelationship: ICompanyVesselRelationship | null;

      /**
       * Our root query field type. Allows us to run any query from our mutation payload.
       */
      query: IQuery | null;

      /**
       * An edge for our `CompanyVesselRelationship`. May be used by Relay 1.
       */
      companyVesselRelationshipEdge: ICompanyVesselRelationshipsEdge | null;
    }

    interface ICompanyVesselRelationshipEdgeOnCreateCompanyVesselRelationshipPayloadArguments {
      /**
       * The method to use when ordering `CompanyVesselRelationship`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<CompanyVesselRelationshipsOrderBy> | null;
    }

    /**
     * All input for the create `CrewList` mutation.
     */
    interface ICreateCrewListInput {
      /**
       * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
       */
      clientMutationId?: string | null;

      /**
       * The `CrewList` to be created by this mutation.
       */
      crewList: ICrewListInput;
    }

    /**
     * An input for mutations affecting `CrewList`
     */
    interface ICrewListInput {
      id?: number | null;
      lrno?: string | null;
      shipname?: string | null;
      crewListDate?: string | null;
      nationality?: string | null;
      totalCrew?: number | null;
      totalRatings?: number | null;
      totalOfficers?: number | null;
      createDate?: any | null;
    }

    /**
     * The output of our create `CrewList` mutation.
     */
    interface ICreateCrewListPayload {
      __typename: 'CreateCrewListPayload';

      /**
       * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
       */
      clientMutationId: string | null;

      /**
       * The `CrewList` that was created by this mutation.
       */
      crewList: ICrewList | null;

      /**
       * Our root query field type. Allows us to run any query from our mutation payload.
       */
      query: IQuery | null;

      /**
       * An edge for our `CrewList`. May be used by Relay 1.
       */
      crewListEdge: ICrewListsEdge | null;
    }

    interface ICrewListEdgeOnCreateCrewListPayloadArguments {
      /**
       * The method to use when ordering `CrewList`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<CrewListsOrderBy> | null;
    }

    /**
     * All input for the create `DocHistory` mutation.
     */
    interface ICreateDocHistoryInput {
      /**
       * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
       */
      clientMutationId?: string | null;

      /**
       * The `DocHistory` to be created by this mutation.
       */
      docHistory: IDocHistoryInput;
    }

    /**
     * An input for mutations affecting `DocHistory`
     */
    interface IDocHistoryInput {
      lrno?: string | null;
      sequence?: string | null;
      effectiveDate?: string | null;
      docCompany?: string | null;
      docCompanyCode?: string | null;
      companyStatus?: string | null;
      createDate?: any | null;
    }

    /**
     * The output of our create `DocHistory` mutation.
     */
    interface ICreateDocHistoryPayload {
      __typename: 'CreateDocHistoryPayload';

      /**
       * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
       */
      clientMutationId: string | null;

      /**
       * The `DocHistory` that was created by this mutation.
       */
      docHistory: IDocHistory | null;

      /**
       * Our root query field type. Allows us to run any query from our mutation payload.
       */
      query: IQuery | null;

      /**
       * An edge for our `DocHistory`. May be used by Relay 1.
       */
      docHistoryEdge: IDocHistoriesEdge | null;
    }

    interface IDocHistoryEdgeOnCreateDocHistoryPayloadArguments {
      /**
       * The method to use when ordering `DocHistory`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<DocHistoriesOrderBy> | null;
    }

    /**
     * All input for the create `FlagHistory` mutation.
     */
    interface ICreateFlagHistoryInput {
      /**
       * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
       */
      clientMutationId?: string | null;

      /**
       * The `FlagHistory` to be created by this mutation.
       */
      flagHistory: IFlagHistoryInput;
    }

    /**
     * An input for mutations affecting `FlagHistory`
     */
    interface IFlagHistoryInput {
      lrno?: string | null;
      sequence?: string | null;
      effectiveDate?: string | null;
      flag?: string | null;
      flagCode?: string | null;
      createDate?: any | null;
    }

    /**
     * The output of our create `FlagHistory` mutation.
     */
    interface ICreateFlagHistoryPayload {
      __typename: 'CreateFlagHistoryPayload';

      /**
       * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
       */
      clientMutationId: string | null;

      /**
       * The `FlagHistory` that was created by this mutation.
       */
      flagHistory: IFlagHistory | null;

      /**
       * Our root query field type. Allows us to run any query from our mutation payload.
       */
      query: IQuery | null;

      /**
       * An edge for our `FlagHistory`. May be used by Relay 1.
       */
      flagHistoryEdge: IFlagHistoriesEdge | null;
    }

    interface IFlagHistoryEdgeOnCreateFlagHistoryPayloadArguments {
      /**
       * The method to use when ordering `FlagHistory`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<FlagHistoriesOrderBy> | null;
    }

    /**
     * All input for the create `GroupBeneficialOwnerHistory` mutation.
     */
    interface ICreateGroupBeneficialOwnerHistoryInput {
      /**
       * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
       */
      clientMutationId?: string | null;

      /**
       * The `GroupBeneficialOwnerHistory` to be created by this mutation.
       */
      groupBeneficialOwnerHistory: IGroupBeneficialOwnerHistoryInput;
    }

    /**
     * An input for mutations affecting `GroupBeneficialOwnerHistory`
     */
    interface IGroupBeneficialOwnerHistoryInput {
      lrno?: string | null;
      sequence?: string | null;
      effectiveDate?: string | null;
      groupBeneficialOwner?: string | null;
      groupBeneficialOwnerCode?: string | null;
      companyStatus?: string | null;
      createDate?: any | null;
    }

    /**
     * The output of our create `GroupBeneficialOwnerHistory` mutation.
     */
    interface ICreateGroupBeneficialOwnerHistoryPayload {
      __typename: 'CreateGroupBeneficialOwnerHistoryPayload';

      /**
       * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
       */
      clientMutationId: string | null;

      /**
       * The `GroupBeneficialOwnerHistory` that was created by this mutation.
       */
      groupBeneficialOwnerHistory: IGroupBeneficialOwnerHistory | null;

      /**
       * Our root query field type. Allows us to run any query from our mutation payload.
       */
      query: IQuery | null;

      /**
       * An edge for our `GroupBeneficialOwnerHistory`. May be used by Relay 1.
       */
      groupBeneficialOwnerHistoryEdge: IGroupBeneficialOwnerHistoriesEdge | null;
    }

    interface IGroupBeneficialOwnerHistoryEdgeOnCreateGroupBeneficialOwnerHistoryPayloadArguments {
      /**
       * The method to use when ordering `GroupBeneficialOwnerHistory`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<GroupBeneficialOwnerHistoriesOrderBy> | null;
    }

    /**
     * All input for the create `MainEngine` mutation.
     */
    interface ICreateMainEngineInput {
      /**
       * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
       */
      clientMutationId?: string | null;

      /**
       * The `MainEngine` to be created by this mutation.
       */
      mainEngine: IMainEngineInput;
    }

    /**
     * An input for mutations affecting `MainEngine`
     */
    interface IMainEngineInput {
      lrno?: string | null;
      position?: string | null;
      engineType?: string | null;
      engineDesigner?: string | null;
      engineBuilder?: string | null;
      engineModel?: string | null;
      numberOfCylinders?: number | null;
      bore?: number | null;
      stroke?: number | null;
      strokeType?: string | null;
      powerBhp?: number | null;
      powerKw?: number | null;
      rpm?: number | null;
      engineBuilderCode?: string | null;
      engineMakerCode?: string | null;
      cylinderArrangementCode?: string | null;
      cylinderArrangementDecode?: string | null;
      bhpOfMainOilEngines?: number | null;
      createDate?: any | null;
    }

    /**
     * The output of our create `MainEngine` mutation.
     */
    interface ICreateMainEnginePayload {
      __typename: 'CreateMainEnginePayload';

      /**
       * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
       */
      clientMutationId: string | null;

      /**
       * The `MainEngine` that was created by this mutation.
       */
      mainEngine: IMainEngine | null;

      /**
       * Our root query field type. Allows us to run any query from our mutation payload.
       */
      query: IQuery | null;

      /**
       * An edge for our `MainEngine`. May be used by Relay 1.
       */
      mainEngineEdge: IMainEnginesEdge | null;
    }

    interface IMainEngineEdgeOnCreateMainEnginePayloadArguments {
      /**
       * The method to use when ordering `MainEngine`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<MainEnginesOrderBy> | null;
    }

    /**
     * All input for the create `MainGenerator` mutation.
     */
    interface ICreateMainGeneratorInput {
      /**
       * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
       */
      clientMutationId?: string | null;

      /**
       * The `MainGenerator` to be created by this mutation.
       */
      mainGenerator: IMainGeneratorInput;
    }

    /**
     * An input for mutations affecting `MainGenerator`
     */
    interface IMainGeneratorInput {
      lrno?: string | null;
      sequenceNumber?: string | null;
      generatorPosition?: string | null;
      number?: number | null;
      kw?: number | null;
      voltage?: number | null;
      acDcIndicator?: string | null;
      frequency?: number | null;
      generatorMaker?: string | null;
      createDate?: any | null;
    }

    /**
     * The output of our create `MainGenerator` mutation.
     */
    interface ICreateMainGeneratorPayload {
      __typename: 'CreateMainGeneratorPayload';

      /**
       * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
       */
      clientMutationId: string | null;

      /**
       * The `MainGenerator` that was created by this mutation.
       */
      mainGenerator: IMainGenerator | null;

      /**
       * Our root query field type. Allows us to run any query from our mutation payload.
       */
      query: IQuery | null;

      /**
       * An edge for our `MainGenerator`. May be used by Relay 1.
       */
      mainGeneratorEdge: IMainGeneratorsEdge | null;
    }

    interface IMainGeneratorEdgeOnCreateMainGeneratorPayloadArguments {
      /**
       * The method to use when ordering `MainGenerator`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<MainGeneratorsOrderBy> | null;
    }

    /**
     * All input for the create `NameHistory` mutation.
     */
    interface ICreateNameHistoryInput {
      /**
       * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
       */
      clientMutationId?: string | null;

      /**
       * The `NameHistory` to be created by this mutation.
       */
      nameHistory: INameHistoryInput;
    }

    /**
     * An input for mutations affecting `NameHistory`
     */
    interface INameHistoryInput {
      lrno?: string | null;
      sequence?: string | null;
      vesselName?: string | null;
      effectiveDate?: string | null;
      createDate?: any | null;
    }

    /**
     * The output of our create `NameHistory` mutation.
     */
    interface ICreateNameHistoryPayload {
      __typename: 'CreateNameHistoryPayload';

      /**
       * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
       */
      clientMutationId: string | null;

      /**
       * The `NameHistory` that was created by this mutation.
       */
      nameHistory: INameHistory | null;

      /**
       * Our root query field type. Allows us to run any query from our mutation payload.
       */
      query: IQuery | null;

      /**
       * An edge for our `NameHistory`. May be used by Relay 1.
       */
      nameHistoryEdge: INameHistoriesEdge | null;
    }

    interface INameHistoryEdgeOnCreateNameHistoryPayloadArguments {
      /**
       * The method to use when ordering `NameHistory`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<NameHistoriesOrderBy> | null;
    }

    /**
     * All input for the create `OperatorHistory` mutation.
     */
    interface ICreateOperatorHistoryInput {
      /**
       * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
       */
      clientMutationId?: string | null;

      /**
       * The `OperatorHistory` to be created by this mutation.
       */
      operatorHistory: IOperatorHistoryInput;
    }

    /**
     * An input for mutations affecting `OperatorHistory`
     */
    interface IOperatorHistoryInput {
      lrno?: string | null;
      sequence?: string | null;
      effectiveDate?: string | null;
      operator?: string | null;
      operatorCode?: string | null;
      companyStatus?: string | null;
      createDate?: any | null;
    }

    /**
     * The output of our create `OperatorHistory` mutation.
     */
    interface ICreateOperatorHistoryPayload {
      __typename: 'CreateOperatorHistoryPayload';

      /**
       * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
       */
      clientMutationId: string | null;

      /**
       * The `OperatorHistory` that was created by this mutation.
       */
      operatorHistory: IOperatorHistory | null;

      /**
       * Our root query field type. Allows us to run any query from our mutation payload.
       */
      query: IQuery | null;

      /**
       * An edge for our `OperatorHistory`. May be used by Relay 1.
       */
      operatorHistoryEdge: IOperatorHistoriesEdge | null;
    }

    interface IOperatorHistoryEdgeOnCreateOperatorHistoryPayloadArguments {
      /**
       * The method to use when ordering `OperatorHistory`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<OperatorHistoriesOrderBy> | null;
    }

    /**
     * All input for the create `PAndIHistory` mutation.
     */
    interface ICreatePAndIHistoryInput {
      /**
       * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
       */
      clientMutationId?: string | null;

      /**
       * The `PAndIHistory` to be created by this mutation.
       */
      pAndIHistory: IPAndIHistoryInput;
    }

    /**
     * An input for mutations affecting `PAndIHistory`
     */
    interface IPAndIHistoryInput {
      lrno?: string | null;
      sequence?: string | null;
      pandIClubCode?: string | null;
      pandIClubDecode?: string | null;
      effectiveDate?: string | null;
      source?: string | null;
      createDate?: any | null;
    }

    /**
     * The output of our create `PAndIHistory` mutation.
     */
    interface ICreatePAndIHistoryPayload {
      __typename: 'CreatePAndIHistoryPayload';

      /**
       * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
       */
      clientMutationId: string | null;

      /**
       * The `PAndIHistory` that was created by this mutation.
       */
      pAndIHistory: IPAndIHistory | null;

      /**
       * Our root query field type. Allows us to run any query from our mutation payload.
       */
      query: IQuery | null;

      /**
       * An edge for our `PAndIHistory`. May be used by Relay 1.
       */
      pAndIHistoryEdge: IPAndIHistoriesEdge | null;
    }

    interface IPAndIHistoryEdgeOnCreatePAndIHistoryPayloadArguments {
      /**
       * The method to use when ordering `PAndIHistory`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<PAndIHistoriesOrderBy> | null;
    }

    /**
     * All input for the create `RegisteredOwnerHistory` mutation.
     */
    interface ICreateRegisteredOwnerHistoryInput {
      /**
       * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
       */
      clientMutationId?: string | null;

      /**
       * The `RegisteredOwnerHistory` to be created by this mutation.
       */
      registeredOwnerHistory: IRegisteredOwnerHistoryInput;
    }

    /**
     * An input for mutations affecting `RegisteredOwnerHistory`
     */
    interface IRegisteredOwnerHistoryInput {
      lrno?: string | null;
      sequence?: string | null;
      effectiveDate?: string | null;
      owner?: string | null;
      ownerCode?: string | null;
      companyStatus?: string | null;
      createDate?: any | null;
    }

    /**
     * The output of our create `RegisteredOwnerHistory` mutation.
     */
    interface ICreateRegisteredOwnerHistoryPayload {
      __typename: 'CreateRegisteredOwnerHistoryPayload';

      /**
       * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
       */
      clientMutationId: string | null;

      /**
       * The `RegisteredOwnerHistory` that was created by this mutation.
       */
      registeredOwnerHistory: IRegisteredOwnerHistory | null;

      /**
       * Our root query field type. Allows us to run any query from our mutation payload.
       */
      query: IQuery | null;

      /**
       * An edge for our `RegisteredOwnerHistory`. May be used by Relay 1.
       */
      registeredOwnerHistoryEdge: IRegisteredOwnerHistoriesEdge | null;
    }

    interface IRegisteredOwnerHistoryEdgeOnCreateRegisteredOwnerHistoryPayloadArguments {
      /**
       * The method to use when ordering `RegisteredOwnerHistory`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<RegisteredOwnerHistoriesOrderBy> | null;
    }

    /**
     * All input for the create `ShipData` mutation.
     */
    interface ICreateShipDataInput {
      /**
       * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
       */
      clientMutationId?: string | null;

      /**
       * The `ShipData` to be created by this mutation.
       */
      shipData: IShipDataInput;
    }

    /**
     * An input for mutations affecting `ShipData`
     */
    interface IShipDataInput {
      hash: string;
      lrimoShipNo?: string | null;
      shipName?: string | null;
      shipStatus?: string | null;
      shipStatusEffectiveDate?: string | null;
      shiptypeLevel5?: string | null;
      shiptypeGroup?: string | null;
      yearOfBuild?: string | null;
      grossTonnage?: number | null;
      netTonnage?: number | null;
      deadweight?: number | null;
      flagName?: string | null;
      callSign?: string | null;
      maritimeMobileServiceIdentityMmsiNumber?: string | null;
      portofRegistry?: string | null;
      officialNumber?: string | null;
      pandIClub?: string | null;
      operator?: string | null;
      operatorCompanyCode?: string | null;
      operatorCountryOfControl?: string | null;
      operatorCountryofDomicileName?: string | null;
      operatorCountryofDomicileCode?: string | null;
      operatorCountryOfRegistration?: string | null;
      groupBeneficialOwner?: string | null;
      groupBeneficialOwnerCompanyCode?: string | null;
      groupBeneficialOwnerCountryOfControl?: string | null;
      groupBeneficialOwnerCountryofDomicile?: string | null;
      groupBeneficialOwnerCountryofDomicileCode?: string | null;
      groupBeneficialOwnerCountryOfRegistration?: string | null;
      shipManager?: string | null;
      shipManagerCompanyCode?: string | null;
      shipManagerCountryOfControl?: string | null;
      shipManagerCountryofDomicileName?: string | null;
      shipManagerCountryofDomicileCode?: string | null;
      shipManagerCountryOfRegistration?: string | null;
      docCompany?: string | null;
      documentofComplianceDocCompanyCode?: string | null;
      docCountryOfControl?: string | null;
      docCompanyCountryofDomicile?: string | null;
      docCompanyCountryofDomicilecode?: string | null;
      docCountryOfRegistration?: string | null;
      registeredOwner?: string | null;
      registeredOwnerCode?: string | null;
      registeredOwnerCountryOfControl?: string | null;
      registeredOwnerCountryofDomicile?: string | null;
      registeredOwnerCountryofDomicileCode?: string | null;
      registeredOwnerCountryOfRegistration?: string | null;
      technicalManager?: string | null;
      technicalManagerCode?: string | null;
      technicalManagerCountryOfControl?: string | null;
      technicalManagerCountryOfDomicile?: string | null;
      technicalManagerCountryOfDomicileCode?: string | null;
      technicalManagerCountryOfRegistration?: string | null;
      bareboatCharterCompany?: string | null;
      bareboatCharterCompanyCode?: string | null;
      bareboatCharterCountryofControl?: string | null;
      bareboatCharterCountryofControlCode?: string | null;
      bareboatCharterCountryofDomicileCode?: string | null;
      bareboatCharterCountryofDomicile?: string | null;
      bareboatCharterCountryofRegistration?: string | null;
      bareboatCharterCountryofRegistrationCode?: string | null;
      shipbuilder?: string | null;
      shipbuilderFullStyle?: string | null;
      countryOfBuild?: string | null;
      yardNumber?: string | null;
      newconstructionEntryDate?: string | null;
      contractDate?: string | null;
      keelLaidDate?: string | null;
      launchDate?: string | null;
      deliveryDate?: string | null;
      estimatedCompletionDate?: string | null;
      draught?: any | null;
      depth?: any | null;
      lengthOverallLoa?: any | null;
      lengthBetweenPerpendicularsLbp?: any | null;
      breadthExtreme?: any | null;
      breadthMoulded?: any | null;
      craneSwl?: any | null;
      numberofDecks?: number | null;
      numberofTanks?: number | null;
      numberofHatches?: number | null;
      numberofHolds?: number | null;
      numberofCrew?: number | null;
      numberofCars?: number | null;
      passengersBerthed?: number | null;
      teu?: number | null;
      imoChemicalClassI?: string | null;
      imoChemicalClassIi?: string | null;
      imoChemicalClassIii?: string | null;
      classNarrative?: string | null;
      safetyManagementCertificateAuditor?: string | null;
      safetyManagementCertificateConventionorVol?: string | null;
      safetyManagementCertificateDateExpires?: string | null;
      safetyManagementCertificateDateIssued?: string | null;
      safetyManagementCertificateDocCompany?: string | null;
      safetyManagementCertificateFlag?: string | null;
      safetyManagementCertificateIssuer?: string | null;
      safetyManagementCertificateOtherDescription?: string | null;
      safetyManagementCertificateShipName?: string | null;
      safetyManagementCertificateShipType?: string | null;
      safetyManagementCertificateSource?: string | null;
      flagDisputed?: number | null;
      flagSanctionedCountry?: number | null;
      historicalFlagSanctionedCountry?: number | null;
      historicalOwnerinOfacSanctionedCountry?: number | null;
      overallComplianceStatus?: number | null;
      ownerinFatfJurisdiction?: number | null;
      ownerinOfacSanctionedCountry?: number | null;
      owneronBesSanctionList?: number | null;
      owneronEuSanctionList?: number | null;
      owneronOfacSanctionList?: number | null;
      owneronUnSanctionList?: number | null;
      parentinFatfJurisdiction?: number | null;
      parentinOfacSanctionedCountry?: number | null;
      sanctionedCountryPortCallLast12M?: number | null;
      sanctionedCountryPortCallLast3M?: number | null;
      sanctionedCountryPortCallLast6M?: number | null;
      shiponEuSanctionList?: number | null;
      shiponOfacNonSdnSanctionList?: number | null;
      shiponOfacSanctionList?: number | null;
      shiponUnSanctionList?: number | null;
      createDate?: any | null;
    }

    /**
     * The output of our create `ShipData` mutation.
     */
    interface ICreateShipDataPayload {
      __typename: 'CreateShipDataPayload';

      /**
       * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
       */
      clientMutationId: string | null;

      /**
       * The `ShipData` that was created by this mutation.
       */
      shipData: IShipData | null;

      /**
       * Our root query field type. Allows us to run any query from our mutation payload.
       */
      query: IQuery | null;

      /**
       * An edge for our `ShipData`. May be used by Relay 1.
       */
      shipDataEdge: IShipDataEdge | null;
    }

    interface IShipDataEdgeOnCreateShipDataPayloadArguments {
      /**
       * The method to use when ordering `ShipData`.
       * @default ["PRIMARY_KEY_ASC"]
       */
      orderBy?: Array<ShipDataOrderBy> | null;
    }

    /**
     * All input for the create `ShipManagerHistory` mutation.
     */
    interface ICreateShipManagerHistoryInput {
      /**
       * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
       */
      clientMutationId?: string | null;

      /**
       * The `ShipManagerHistory` to be created by this mutation.
       */
      shipManagerHistory: IShipManagerHistoryInput;
    }

    /**
     * An input for mutations affecting `ShipManagerHistory`
     */
    interface IShipManagerHistoryInput {
      lrno?: string | null;
      sequence?: string | null;
      effectiveDate?: string | null;
      shipManager?: string | null;
      shipManagerCode?: string | null;
      companyStatus?: string | null;
      createDate?: any | null;
    }

    /**
     * The output of our create `ShipManagerHistory` mutation.
     */
    interface ICreateShipManagerHistoryPayload {
      __typename: 'CreateShipManagerHistoryPayload';

      /**
       * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
       */
      clientMutationId: string | null;

      /**
       * The `ShipManagerHistory` that was created by this mutation.
       */
      shipManagerHistory: IShipManagerHistory | null;

      /**
       * Our root query field type. Allows us to run any query from our mutation payload.
       */
      query: IQuery | null;

      /**
       * An edge for our `ShipManagerHistory`. May be used by Relay 1.
       */
      shipManagerHistoryEdge: IShipManagerHistoriesEdge | null;
    }

    interface IShipManagerHistoryEdgeOnCreateShipManagerHistoryPayloadArguments {
      /**
       * The method to use when ordering `ShipManagerHistory`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<ShipManagerHistoriesOrderBy> | null;
    }

    /**
     * All input for the create `SpecialFeature` mutation.
     */
    interface ICreateSpecialFeatureInput {
      /**
       * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
       */
      clientMutationId?: string | null;

      /**
       * The `SpecialFeature` to be created by this mutation.
       */
      specialFeature: ISpecialFeatureInput;
    }

    /**
     * An input for mutations affecting `SpecialFeature`
     */
    interface ISpecialFeatureInput {
      lrno?: string | null;
      sequence?: string | null;
      specialFeature?: string | null;
      specialFeatureCode?: string | null;
      createDate?: any | null;
    }

    /**
     * The output of our create `SpecialFeature` mutation.
     */
    interface ICreateSpecialFeaturePayload {
      __typename: 'CreateSpecialFeaturePayload';

      /**
       * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
       */
      clientMutationId: string | null;

      /**
       * The `SpecialFeature` that was created by this mutation.
       */
      specialFeature: ISpecialFeature | null;

      /**
       * Our root query field type. Allows us to run any query from our mutation payload.
       */
      query: IQuery | null;

      /**
       * An edge for our `SpecialFeature`. May be used by Relay 1.
       */
      specialFeatureEdge: ISpecialFeaturesEdge | null;
    }

    interface ISpecialFeatureEdgeOnCreateSpecialFeaturePayloadArguments {
      /**
       * The method to use when ordering `SpecialFeature`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<SpecialFeaturesOrderBy> | null;
    }

    /**
     * All input for the create `StatusHistory` mutation.
     */
    interface ICreateStatusHistoryInput {
      /**
       * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
       */
      clientMutationId?: string | null;

      /**
       * The `StatusHistory` to be created by this mutation.
       */
      statusHistory: IStatusHistoryInput;
    }

    /**
     * An input for mutations affecting `StatusHistory`
     */
    interface IStatusHistoryInput {
      lrno?: string | null;
      status?: string | null;
      sequence?: string | null;
      statusDate?: string | null;
      statusCode?: string | null;
      createDate?: any | null;
    }

    /**
     * The output of our create `StatusHistory` mutation.
     */
    interface ICreateStatusHistoryPayload {
      __typename: 'CreateStatusHistoryPayload';

      /**
       * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
       */
      clientMutationId: string | null;

      /**
       * The `StatusHistory` that was created by this mutation.
       */
      statusHistory: IStatusHistory | null;

      /**
       * Our root query field type. Allows us to run any query from our mutation payload.
       */
      query: IQuery | null;

      /**
       * An edge for our `StatusHistory`. May be used by Relay 1.
       */
      statusHistoryEdge: IStatusHistoriesEdge | null;
    }

    interface IStatusHistoryEdgeOnCreateStatusHistoryPayloadArguments {
      /**
       * The method to use when ordering `StatusHistory`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<StatusHistoriesOrderBy> | null;
    }

    /**
     * All input for the create `SurveyDateHistory` mutation.
     */
    interface ICreateSurveyDateHistoryInput {
      /**
       * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
       */
      clientMutationId?: string | null;

      /**
       * The `SurveyDateHistory` to be created by this mutation.
       */
      surveyDateHistory: ISurveyDateHistoryInput;
    }

    /**
     * An input for mutations affecting `SurveyDateHistory`
     */
    interface ISurveyDateHistoryInput {
      lrno?: string | null;
      classSocietyCode?: string | null;
      specialSurvey?: string | null;
      continuousSurvey?: string | null;
      tailshaftSurvey?: string | null;
      dockingSurvey?: string | null;
      classSociety?: string | null;
      createDate?: any | null;
    }

    /**
     * The output of our create `SurveyDateHistory` mutation.
     */
    interface ICreateSurveyDateHistoryPayload {
      __typename: 'CreateSurveyDateHistoryPayload';

      /**
       * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
       */
      clientMutationId: string | null;

      /**
       * The `SurveyDateHistory` that was created by this mutation.
       */
      surveyDateHistory: ISurveyDateHistory | null;

      /**
       * Our root query field type. Allows us to run any query from our mutation payload.
       */
      query: IQuery | null;

      /**
       * An edge for our `SurveyDateHistory`. May be used by Relay 1.
       */
      surveyDateHistoryEdge: ISurveyDateHistoriesEdge | null;
    }

    interface ISurveyDateHistoryEdgeOnCreateSurveyDateHistoryPayloadArguments {
      /**
       * The method to use when ordering `SurveyDateHistory`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<SurveyDateHistoriesOrderBy> | null;
    }

    /**
     * All input for the create `SurveyDate` mutation.
     */
    interface ICreateSurveyDateInput {
      /**
       * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
       */
      clientMutationId?: string | null;

      /**
       * The `SurveyDate` to be created by this mutation.
       */
      surveyDate: ISurveyDateInput;
    }

    /**
     * An input for mutations affecting `SurveyDate`
     */
    interface ISurveyDateInput {
      lrno?: string | null;
      classSocietyCode?: string | null;
      specialSurvey?: string | null;
      specialSurveyLakes?: string | null;
      continuousHullSurvey?: string | null;
      continuousMachinerySurvey?: string | null;
      tailShaftSurvey?: string | null;
      dockingSurvey?: string | null;
      annualSurvey?: string | null;
      classSociety?: string | null;
      createDate?: any | null;
    }

    /**
     * The output of our create `SurveyDate` mutation.
     */
    interface ICreateSurveyDatePayload {
      __typename: 'CreateSurveyDatePayload';

      /**
       * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
       */
      clientMutationId: string | null;

      /**
       * The `SurveyDate` that was created by this mutation.
       */
      surveyDate: ISurveyDate | null;

      /**
       * Our root query field type. Allows us to run any query from our mutation payload.
       */
      query: IQuery | null;

      /**
       * An edge for our `SurveyDate`. May be used by Relay 1.
       */
      surveyDateEdge: ISurveyDatesEdge | null;
    }

    interface ISurveyDateEdgeOnCreateSurveyDatePayloadArguments {
      /**
       * The method to use when ordering `SurveyDate`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<SurveyDatesOrderBy> | null;
    }

    /**
     * All input for the create `TechnicalManagerHistory` mutation.
     */
    interface ICreateTechnicalManagerHistoryInput {
      /**
       * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
       */
      clientMutationId?: string | null;

      /**
       * The `TechnicalManagerHistory` to be created by this mutation.
       */
      technicalManagerHistory: ITechnicalManagerHistoryInput;
    }

    /**
     * An input for mutations affecting `TechnicalManagerHistory`
     */
    interface ITechnicalManagerHistoryInput {
      lrno?: string | null;
      sequence?: string | null;
      effectiveDate?: string | null;
      technicalManager?: string | null;
      technicalManagerCode?: string | null;
      companyStatus?: string | null;
      createDate?: any | null;
    }

    /**
     * The output of our create `TechnicalManagerHistory` mutation.
     */
    interface ICreateTechnicalManagerHistoryPayload {
      __typename: 'CreateTechnicalManagerHistoryPayload';

      /**
       * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
       */
      clientMutationId: string | null;

      /**
       * The `TechnicalManagerHistory` that was created by this mutation.
       */
      technicalManagerHistory: ITechnicalManagerHistory | null;

      /**
       * Our root query field type. Allows us to run any query from our mutation payload.
       */
      query: IQuery | null;

      /**
       * An edge for our `TechnicalManagerHistory`. May be used by Relay 1.
       */
      technicalManagerHistoryEdge: ITechnicalManagerHistoriesEdge | null;
    }

    interface ITechnicalManagerHistoryEdgeOnCreateTechnicalManagerHistoryPayloadArguments {
      /**
       * The method to use when ordering `TechnicalManagerHistory`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<TechnicalManagerHistoriesOrderBy> | null;
    }

    /**
     * All input for the create `UnverifiedOwnership` mutation.
     */
    interface ICreateUnverifiedOwnershipInput {
      /**
       * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
       */
      clientMutationId?: string | null;

      /**
       * The `UnverifiedOwnership` to be created by this mutation.
       */
      unverifiedOwnership: IUnverifiedOwnershipInput;
    }

    /**
     * An input for mutations affecting `UnverifiedOwnership`
     */
    interface IUnverifiedOwnershipInput {
      lrno?: string | null;
      annotid?: number | null;
      bareBoatChartererCode?: string | null;
      bareBoatCharterer?: string | null;
      commercialManagerCode?: string | null;
      commercialManager?: string | null;
      commercialOperatorCode?: string | null;
      commercialOperator?: string | null;
      registeredOwnerCode?: string | null;
      registeredOwner?: string | null;
      technicalManagerCode?: string | null;
      technicalManager?: string | null;
      ownershipTakeOverDate?: string | null;
      newFlagCode?: string | null;
      newFlag?: string | null;
      createDate?: any | null;
    }

    /**
     * The output of our create `UnverifiedOwnership` mutation.
     */
    interface ICreateUnverifiedOwnershipPayload {
      __typename: 'CreateUnverifiedOwnershipPayload';

      /**
       * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
       */
      clientMutationId: string | null;

      /**
       * The `UnverifiedOwnership` that was created by this mutation.
       */
      unverifiedOwnership: IUnverifiedOwnership | null;

      /**
       * Our root query field type. Allows us to run any query from our mutation payload.
       */
      query: IQuery | null;

      /**
       * An edge for our `UnverifiedOwnership`. May be used by Relay 1.
       */
      unverifiedOwnershipEdge: IUnverifiedOwnershipsEdge | null;
    }

    interface IUnverifiedOwnershipEdgeOnCreateUnverifiedOwnershipPayloadArguments {
      /**
       * The method to use when ordering `UnverifiedOwnership`.
       * @default ["NATURAL"]
       */
      orderBy?: Array<UnverifiedOwnershipsOrderBy> | null;
    }

    /**
     * All input for the `updateShipData` mutation.
     */
    interface IUpdateShipDataInput {
      /**
       * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
       */
      clientMutationId?: string | null;

      /**
       * The globally unique `ID` which will identify a single `ShipData` to be updated.
       */
      nodeId: string;

      /**
       * An object where the defined keys will be set on the `ShipData` being updated.
       */
      shipDataPatch: IShipDataPatch;
    }

    /**
     * Represents an update to a `ShipData`. Fields that are set will be updated.
     */
    interface IShipDataPatch {
      hash?: string | null;
      lrimoShipNo?: string | null;
      shipName?: string | null;
      shipStatus?: string | null;
      shipStatusEffectiveDate?: string | null;
      shiptypeLevel5?: string | null;
      shiptypeGroup?: string | null;
      yearOfBuild?: string | null;
      grossTonnage?: number | null;
      netTonnage?: number | null;
      deadweight?: number | null;
      flagName?: string | null;
      callSign?: string | null;
      maritimeMobileServiceIdentityMmsiNumber?: string | null;
      portofRegistry?: string | null;
      officialNumber?: string | null;
      pandIClub?: string | null;
      operator?: string | null;
      operatorCompanyCode?: string | null;
      operatorCountryOfControl?: string | null;
      operatorCountryofDomicileName?: string | null;
      operatorCountryofDomicileCode?: string | null;
      operatorCountryOfRegistration?: string | null;
      groupBeneficialOwner?: string | null;
      groupBeneficialOwnerCompanyCode?: string | null;
      groupBeneficialOwnerCountryOfControl?: string | null;
      groupBeneficialOwnerCountryofDomicile?: string | null;
      groupBeneficialOwnerCountryofDomicileCode?: string | null;
      groupBeneficialOwnerCountryOfRegistration?: string | null;
      shipManager?: string | null;
      shipManagerCompanyCode?: string | null;
      shipManagerCountryOfControl?: string | null;
      shipManagerCountryofDomicileName?: string | null;
      shipManagerCountryofDomicileCode?: string | null;
      shipManagerCountryOfRegistration?: string | null;
      docCompany?: string | null;
      documentofComplianceDocCompanyCode?: string | null;
      docCountryOfControl?: string | null;
      docCompanyCountryofDomicile?: string | null;
      docCompanyCountryofDomicilecode?: string | null;
      docCountryOfRegistration?: string | null;
      registeredOwner?: string | null;
      registeredOwnerCode?: string | null;
      registeredOwnerCountryOfControl?: string | null;
      registeredOwnerCountryofDomicile?: string | null;
      registeredOwnerCountryofDomicileCode?: string | null;
      registeredOwnerCountryOfRegistration?: string | null;
      technicalManager?: string | null;
      technicalManagerCode?: string | null;
      technicalManagerCountryOfControl?: string | null;
      technicalManagerCountryOfDomicile?: string | null;
      technicalManagerCountryOfDomicileCode?: string | null;
      technicalManagerCountryOfRegistration?: string | null;
      bareboatCharterCompany?: string | null;
      bareboatCharterCompanyCode?: string | null;
      bareboatCharterCountryofControl?: string | null;
      bareboatCharterCountryofControlCode?: string | null;
      bareboatCharterCountryofDomicileCode?: string | null;
      bareboatCharterCountryofDomicile?: string | null;
      bareboatCharterCountryofRegistration?: string | null;
      bareboatCharterCountryofRegistrationCode?: string | null;
      shipbuilder?: string | null;
      shipbuilderFullStyle?: string | null;
      countryOfBuild?: string | null;
      yardNumber?: string | null;
      newconstructionEntryDate?: string | null;
      contractDate?: string | null;
      keelLaidDate?: string | null;
      launchDate?: string | null;
      deliveryDate?: string | null;
      estimatedCompletionDate?: string | null;
      draught?: any | null;
      depth?: any | null;
      lengthOverallLoa?: any | null;
      lengthBetweenPerpendicularsLbp?: any | null;
      breadthExtreme?: any | null;
      breadthMoulded?: any | null;
      craneSwl?: any | null;
      numberofDecks?: number | null;
      numberofTanks?: number | null;
      numberofHatches?: number | null;
      numberofHolds?: number | null;
      numberofCrew?: number | null;
      numberofCars?: number | null;
      passengersBerthed?: number | null;
      teu?: number | null;
      imoChemicalClassI?: string | null;
      imoChemicalClassIi?: string | null;
      imoChemicalClassIii?: string | null;
      classNarrative?: string | null;
      safetyManagementCertificateAuditor?: string | null;
      safetyManagementCertificateConventionorVol?: string | null;
      safetyManagementCertificateDateExpires?: string | null;
      safetyManagementCertificateDateIssued?: string | null;
      safetyManagementCertificateDocCompany?: string | null;
      safetyManagementCertificateFlag?: string | null;
      safetyManagementCertificateIssuer?: string | null;
      safetyManagementCertificateOtherDescription?: string | null;
      safetyManagementCertificateShipName?: string | null;
      safetyManagementCertificateShipType?: string | null;
      safetyManagementCertificateSource?: string | null;
      flagDisputed?: number | null;
      flagSanctionedCountry?: number | null;
      historicalFlagSanctionedCountry?: number | null;
      historicalOwnerinOfacSanctionedCountry?: number | null;
      overallComplianceStatus?: number | null;
      ownerinFatfJurisdiction?: number | null;
      ownerinOfacSanctionedCountry?: number | null;
      owneronBesSanctionList?: number | null;
      owneronEuSanctionList?: number | null;
      owneronOfacSanctionList?: number | null;
      owneronUnSanctionList?: number | null;
      parentinFatfJurisdiction?: number | null;
      parentinOfacSanctionedCountry?: number | null;
      sanctionedCountryPortCallLast12M?: number | null;
      sanctionedCountryPortCallLast3M?: number | null;
      sanctionedCountryPortCallLast6M?: number | null;
      shiponEuSanctionList?: number | null;
      shiponOfacNonSdnSanctionList?: number | null;
      shiponOfacSanctionList?: number | null;
      shiponUnSanctionList?: number | null;
      createDate?: any | null;
    }

    /**
     * The output of our update `ShipData` mutation.
     */
    interface IUpdateShipDataPayload {
      __typename: 'UpdateShipDataPayload';

      /**
       * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
       */
      clientMutationId: string | null;

      /**
       * The `ShipData` that was updated by this mutation.
       */
      shipData: IShipData | null;

      /**
       * Our root query field type. Allows us to run any query from our mutation payload.
       */
      query: IQuery | null;

      /**
       * An edge for our `ShipData`. May be used by Relay 1.
       */
      shipDataEdge: IShipDataEdge | null;
    }

    interface IShipDataEdgeOnUpdateShipDataPayloadArguments {
      /**
       * The method to use when ordering `ShipData`.
       * @default ["PRIMARY_KEY_ASC"]
       */
      orderBy?: Array<ShipDataOrderBy> | null;
    }

    /**
     * All input for the `updateShipDataByHash` mutation.
     */
    interface IUpdateShipDataByHashInput {
      /**
       * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
       */
      clientMutationId?: string | null;

      /**
       * An object where the defined keys will be set on the `ShipData` being updated.
       */
      shipDataPatch: IShipDataPatch;
      hash: string;
    }

    /**
     * All input for the `deleteShipData` mutation.
     */
    interface IDeleteShipDataInput {
      /**
       * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
       */
      clientMutationId?: string | null;

      /**
       * The globally unique `ID` which will identify a single `ShipData` to be deleted.
       */
      nodeId: string;
    }

    /**
     * The output of our delete `ShipData` mutation.
     */
    interface IDeleteShipDataPayload {
      __typename: 'DeleteShipDataPayload';

      /**
       * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
       */
      clientMutationId: string | null;

      /**
       * The `ShipData` that was deleted by this mutation.
       */
      shipData: IShipData | null;
      deletedShipDataId: string | null;

      /**
       * Our root query field type. Allows us to run any query from our mutation payload.
       */
      query: IQuery | null;

      /**
       * An edge for our `ShipData`. May be used by Relay 1.
       */
      shipDataEdge: IShipDataEdge | null;
    }

    interface IShipDataEdgeOnDeleteShipDataPayloadArguments {
      /**
       * The method to use when ordering `ShipData`.
       * @default ["PRIMARY_KEY_ASC"]
       */
      orderBy?: Array<ShipDataOrderBy> | null;
    }

    /**
     * All input for the `deleteShipDataByHash` mutation.
     */
    interface IDeleteShipDataByHashInput {
      /**
       * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
       */
      clientMutationId?: string | null;
      hash: string;
    }
  }
  // tslint:enable
}
