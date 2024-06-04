import { useQuery } from "@tanstack/react-query";
import { getPropertyById, getPropertyInfo } from ".";

const useGetPropertiesInfoQuery = () =>
  useQuery({
    queryKey: ["properties-info"],
    queryFn: () => getPropertyInfo(),
  });
const useGetPropertiesInfoByIdQuery = (id: string | undefined) =>
  useQuery({
    queryKey: ["properties-info-by-id"],
    queryFn: () => getPropertyById(id),
    enabled: !!id,
  });

export { useGetPropertiesInfoQuery, useGetPropertiesInfoByIdQuery };
