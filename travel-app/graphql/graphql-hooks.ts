import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
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
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  place?: Maybe<Place>;
  /** Get all the places from around the world  */
  places: Array<Place>;
};


export type QueryPlaceArgs = {
  id: Scalars['Float'];
};

/** Destination or place of interest */
export type Place = {
  __typename?: 'Place';
  id: Scalars['ID'];
  title: Scalars['String'];
  /** The place description */
  description?: Maybe<Scalars['String']>;
  /** Place Image URL */
  imageUrl?: Maybe<Scalars['String']>;
  creationDate?: Maybe<Scalars['DateTime']>;
};


export type Mutation = {
  __typename?: 'Mutation';
  createPlace: Place;
};


export type MutationCreatePlaceArgs = {
  place: PlaceInput;
};

export type PlaceInput = {
  id?: Maybe<Scalars['Float']>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
};

export type CreatePlaceMutationVariables = Exact<{
  title: Scalars['String'];
  description: Scalars['String'];
  imageUrl: Scalars['String'];
}>;


export type CreatePlaceMutation = (
  { __typename?: 'Mutation' }
  & { createPlace: (
    { __typename?: 'Place' }
    & Pick<Place, 'id' | 'title' | 'description' | 'imageUrl' | 'creationDate'>
  ) }
);

export type GetPlaceQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type GetPlaceQuery = (
  { __typename?: 'Query' }
  & { place?: Maybe<(
    { __typename?: 'Place' }
    & Pick<Place, 'title' | 'description'>
  )> }
);

export type PlacesQueryVariables = Exact<{ [key: string]: never; }>;


export type PlacesQuery = (
  { __typename?: 'Query' }
  & { places: Array<(
    { __typename?: 'Place' }
    & Pick<Place, 'id' | 'title' | 'description' | 'imageUrl' | 'creationDate'>
  )> }
);


export const CreatePlaceDocument = gql`
    mutation CreatePlace($title: String!, $description: String!, $imageUrl: String!) {
  createPlace(
    place: {title: $title, description: $description, imageUrl: $imageUrl}
  ) {
    id
    title
    description
    imageUrl
    creationDate
  }
}
    `;
export type CreatePlaceMutationFn = Apollo.MutationFunction<CreatePlaceMutation, CreatePlaceMutationVariables>;

/**
 * __useCreatePlaceMutation__
 *
 * To run a mutation, you first call `useCreatePlaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePlaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPlaceMutation, { data, loading, error }] = useCreatePlaceMutation({
 *   variables: {
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      imageUrl: // value for 'imageUrl'
 *   },
 * });
 */
export function useCreatePlaceMutation(baseOptions?: Apollo.MutationHookOptions<CreatePlaceMutation, CreatePlaceMutationVariables>) {
        return Apollo.useMutation<CreatePlaceMutation, CreatePlaceMutationVariables>(CreatePlaceDocument, baseOptions);
      }
export type CreatePlaceMutationHookResult = ReturnType<typeof useCreatePlaceMutation>;
export type CreatePlaceMutationResult = Apollo.MutationResult<CreatePlaceMutation>;
export type CreatePlaceMutationOptions = Apollo.BaseMutationOptions<CreatePlaceMutation, CreatePlaceMutationVariables>;
export const GetPlaceDocument = gql`
    query GetPlace($id: Float!) {
  place(id: $id) {
    title
    description
  }
}
    `;

/**
 * __useGetPlaceQuery__
 *
 * To run a query within a React component, call `useGetPlaceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlaceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlaceQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPlaceQuery(baseOptions: Apollo.QueryHookOptions<GetPlaceQuery, GetPlaceQueryVariables>) {
        return Apollo.useQuery<GetPlaceQuery, GetPlaceQueryVariables>(GetPlaceDocument, baseOptions);
      }
export function useGetPlaceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPlaceQuery, GetPlaceQueryVariables>) {
          return Apollo.useLazyQuery<GetPlaceQuery, GetPlaceQueryVariables>(GetPlaceDocument, baseOptions);
        }
export type GetPlaceQueryHookResult = ReturnType<typeof useGetPlaceQuery>;
export type GetPlaceLazyQueryHookResult = ReturnType<typeof useGetPlaceLazyQuery>;
export type GetPlaceQueryResult = Apollo.QueryResult<GetPlaceQuery, GetPlaceQueryVariables>;
export const PlacesDocument = gql`
    query Places {
  places {
    id
    title
    description
    imageUrl
    creationDate
  }
}
    `;

/**
 * __usePlacesQuery__
 *
 * To run a query within a React component, call `usePlacesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlacesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlacesQuery({
 *   variables: {
 *   },
 * });
 */
export function usePlacesQuery(baseOptions?: Apollo.QueryHookOptions<PlacesQuery, PlacesQueryVariables>) {
        return Apollo.useQuery<PlacesQuery, PlacesQueryVariables>(PlacesDocument, baseOptions);
      }
export function usePlacesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlacesQuery, PlacesQueryVariables>) {
          return Apollo.useLazyQuery<PlacesQuery, PlacesQueryVariables>(PlacesDocument, baseOptions);
        }
export type PlacesQueryHookResult = ReturnType<typeof usePlacesQuery>;
export type PlacesLazyQueryHookResult = ReturnType<typeof usePlacesLazyQuery>;
export type PlacesQueryResult = Apollo.QueryResult<PlacesQuery, PlacesQueryVariables>;