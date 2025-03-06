import React from "react";
import { useQuery } from "@tanstack/react-query";
// import { convertObjectToQueryParams } from "~/store/utils";
import { useSearchParams } from "react-router-dom";
import convertObjectToQueryParams from "../convertObjectToQueryParams";

const LIMIT_DEFAULT = 10;

type QueryType = {
  [x: string]: string | number;
};
type CountQueryType = {
  [x: string]: string | number;
};
type RequestFunction = (arg0: string) => any;

interface Args {
  queryKey: string;
  fields: string[];
  requestFunc: RequestFunction;
  requestCountFunc: RequestFunction;
}

export interface ComponentProps {
  count: number;
  data: any[];
  dataIsLoading: boolean;
}

const withData = (
  WrappedComponent: React.ElementType,
  { queryKey, fields, requestFunc, requestCountFunc }: Args
) => {
  const hocComponent = ({ ...props }: any) => {
    let [searchParams] = useSearchParams();

    const limit = Number(searchParams.get("limit")) || LIMIT_DEFAULT;
    const page = Number(searchParams.get("page")) || 1;
    const sort = searchParams.get("sort") || "desc";
    const orderBy = searchParams.get("orderBy") || "id";

    // predefined query params
    const requestQueryParams: QueryType = {
      sort: sort || "desc",
      orderBy: orderBy || "id",
      skip: page > 1 ? (page - 1) * limit : 0,
      limit,
    };

    const countQueryParams: CountQueryType = {};

    // read fields from query params
    for (let field of fields) {
      if (searchParams.get(field)) {
        requestQueryParams[field] = searchParams.get(field) || "";
        countQueryParams[field] = searchParams.get(field) || "";
      }
    }

    const dataQuery = useQuery({
      queryKey: [queryKey, requestQueryParams],
      queryFn: () =>
        requestFunc(convertObjectToQueryParams(requestQueryParams)),
    });

    const countQuery = useQuery({
      queryKey: [queryKey + "_count", countQueryParams],
      queryFn: () =>
        requestCountFunc(convertObjectToQueryParams(countQueryParams)),
    });

    return (
      <WrappedComponent
        count={(countQuery.data && countQuery.data.count) || 5}
        data={dataQuery.data || []}
        dataIsLoading={dataQuery.isLoading}
        {...props}
      />
    );
  };

  hocComponent.propTypes = {};

  return hocComponent;
};

export default withData;
