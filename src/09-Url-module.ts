function runUrlDemo(): void {
  // ?? How to create Url object from Url string
  const apiUrl = new URL(
    "https://api.abcdhub.com/users?page=2&limit=10&sort=latest",
  );
  console.log(apiUrl.href);
}

runUrlDemo();
