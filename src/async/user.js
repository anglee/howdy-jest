const users = {
  4: 'Mark',
  5: 'Paul',
};
export const getUserName = (id) => Promise.resolve(users[id]);