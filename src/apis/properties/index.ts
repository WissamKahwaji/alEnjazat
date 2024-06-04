import API_ROUTES from "../../constants/apiRoutes";
import publicInstance from "../publicInstance";
import { PropertyInfo } from "./type";

const getPropertyInfo = async () => {
  const res = await publicInstance.get<PropertyInfo[]>(
    API_ROUTES.PROPERTY.GET.All
  );
  return res.data;
};
const getPropertyById = async (id: string | undefined) => {
  const res = await publicInstance.get<PropertyInfo>(
    API_ROUTES.PROPERTY.GET.BY_ID(id)
  );
  return res.data;
};

export { getPropertyInfo, getPropertyById };
