const data = [
  { name: "a", id: 1 },
  { name: "b", id: 2 },
  { name: "c", id: 3 },
  { name: "d", id: 4 },
  { name: "x", id: 5 },
  { name: "y", id: 6 },
  { name: "z", id: 7 },
];

let Query = {
  name: [],
  id: [1,2,3],
  search: "a",
};

function CheckUser(user, query, key) {
  let foud = false;

  query[key].forEach((que) => {
    if (user[key] === que) {
      foud = true;
    }
  });

  return foud;
}


function QueryUser() {
  let output = data;

  Object.keys(Query).forEach((ele) => {
    if (typeof Query[ele] === "string" && Query[ele]) {
      output = data.filter((item) => item["name"].includes(Query[ele]));
    }

    if (typeof Query[ele] !== "string" && Query[ele].length > 0) {
      output = output.filter((item) => CheckUser(item, Query, ele));
    }
  });

  return output;
}

console.log(QueryUser());
