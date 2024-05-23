export const redirectPath = (pathname, router) => {
  const url = new URL("http://localhost:3000/login");
  url.searchParams.set("redirectTo", pathname);
  router.push(url.toString());
  router.refresh();
};
