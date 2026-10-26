import { log } from "node:console";

function runUrlDemo(): void {
  // ?? How to create Url object from Url string
  const apiUrl = new URL(
    "https://api.abcdhub.com/users?page=2&limit=10&sort=latest",
  );
  // console.log(apiUrl.href); //print the full url
  // console.log(apiUrl.protocol); //prints the protocol
  // console.log(apiUrl.hostname); //prints the host name ex:www.google.com
  // console.log(apiUrl.pathname); //prints the path name here -> /users
  // console.log(apiUrl.search); //it prints the search condition.

  const page = apiUrl.searchParams.get("page");
  const limit = apiUrl.searchParams.get("limit");
  const sort = apiUrl.searchParams.get("sort");

  console.log(page, limit, sort);

  // set is used to updates the value
  apiUrl.searchParams.set("page", "4");
  apiUrl.searchParams.set("limit", "20");
  apiUrl.searchParams.set("sort", "trending");
  console.log(apiUrl.href);

  // create the new queryparams

  const queryparams = new URLSearchParams({
    search: "node js",
    page: "1",
    limit: "5",
  });

  console.log(queryparams.toString());
  
}

runUrlDemo();
