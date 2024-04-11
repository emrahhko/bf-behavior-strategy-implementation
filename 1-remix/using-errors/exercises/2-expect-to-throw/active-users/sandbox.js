const listActiveUsers = (users) => {
    const activeUsers = findActiveUsers(users);
    return activeUsers.map((user) => user.userName);
};


const findActiveUsers = (users) => {
  if (!Array.isArray(users)) {
    throw new TypeError('users is not an array');
  }
  if (users.some((user) => !user || typeof user !== 'object')) {
    throw new TypeError('users is not an array of objects');
  }
  if (users.some((user) => !('active' in user))) {
    throw new TypeError('users is not an array of user objects');
  }

  return users.filter((user) => user.active === true);
};

const people = [
    { userName: 'a', name: '', active: true },
    { userName: 'b', name: '', active: false },
    { userName: 'c', name: '', active: false },
    { userName: 'e', name: '', active: true },
];

const found = findActiveUsers(people);
console.log('found:', found);

// debugger;
const listed = listActiveUsers(people);
console.log('listed:', listed);
