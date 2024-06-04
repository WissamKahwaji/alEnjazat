const CONTACT_US = {
  GET: "/contact",
};

const ABOUT_US = {
  GET: "/about-us",
};

const PROPERTY = {
  GET: {
    All: "/property",
    BY_ID: (id: string | undefined) => `/property/${id}`,
  },
};

const API_ROUTES = {
  CONTACT_US,
  ABOUT_US,
  PROPERTY,
};
export default API_ROUTES;
