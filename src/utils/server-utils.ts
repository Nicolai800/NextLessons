import "server-only";

export const serverSideFunction = () => {
  console.log(
    ` use muiltiplate libraries,
        use enviroment variables,
        interact with database,
        process confidential information`
  );
  return "server result";
};
