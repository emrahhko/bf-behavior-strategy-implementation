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


describe('findActiveUsers: returns all users with .active === true', () => {
    describe('filters out the inactive users from a valid array', () => {
        it('returns an empty array for an empty array', () => {
            const actual = findActiveUsers([]);
            expect(actual).toEqual([]);
        });
        it('returns an empty array when there are only inactive users', () => {
            const actual = findActiveUsers([
                { userName: 'John1', name: 'John', active: false },
                { userName: 'Jeanne1', name: 'Jeanne', active: false },
            ]);
            expect(actual).toEqual([]);
        });
        it('returns all users when all users are active', () => {
            const actual = findActiveUsers([
                { userName: 'Joe1', name: 'Joe', active: true },
                { userName: 'Kate1', name: 'Kate', active: true },
            ]);
            expect(actual).toEqual([
                { userName: 'Joe1', name: 'Joe', active: true },
                { userName: 'Kate1', name: 'Kate', active: true },
            ]);
        });
        it('correctly filters an array of mixed users', () => {
            const actual = findActiveUsers([
                { userName: 'Hugo1', name: 'Hugo', active: true },
                { userName: 'Lol1', name: 'Lol', active: false },
                { userName: 'Franck1', name: 'Franck', active: false },
                { userName: 'Kris1', name: 'Kris', active: true },
            ]);
            expect(actual).toEqual([
                { userName: 'Hugo1', name: 'Hugo', active: true },
                { userName: 'Kris1', name: 'Kris', active: true },
            ]);
        });
    });
    describe('uses the argument correctly', () => {
        it('does not modify the argument', () => {
            const usersArg = [
                { userName: 'Cage1', name: 'Cage', active: true },
                { userName: 'Jon1', name: 'Jon', active: false },
            ];
            findActiveUsers(usersArg);
            expect(usersArg).toEqual([
                { userName: 'Cage1', name: 'Cage', active: true },
                { userName: 'Jon1', name: 'Jon', active: false },
            ]);
        });
        it('returns a new array', () => {
            const usersArg = [
                { userName: 'Dan1', name: 'Dan', active: true },
                { userName: 'Kall1', name: 'Kall', active: false },
            ];
            const returned = findActiveUsers(usersArg);
            const areNotTheSameArray = usersArg !== returned;
            expect(areNotTheSameArray).toEqual(true);
        });
    });
    describe('guards against invalid arguments', () => {
        it('throws an error if the argument is not an array', () => {
            const notPassingAnArray = () => findActiveUsers('hello');
            expect(notPassingAnArray).toThrowError(TypeError);
            expect(notPassingAnArray).toThrowError('users is not an array');
        });
        it('throws an error if the array contains non-objects (A)', () => {
            const notPassingAnArray = () => findActiveUsers(['hello', true]);
            expect(notPassingAnArray).toThrowError(TypeError);
            expect(notPassingAnArray).toThrowError(
                'users is not an array of objects',
            );
        });
        it('throws an error if the array contains non-objects (B)', () => {
            const notPassingAnArray = () => findActiveUsers([{}, null, {}]);
            expect(notPassingAnArray).toThrowError(TypeError);
            expect(notPassingAnArray).toThrowError(
                'users is not an array of objects',
            );
        });
        it('throws an error if the array is not all user objects', () => {
            const notPassingAnArray = () =>
                findActiveUsers([
                    { userName: '', name: '', active: true },
                    {},
                    { userName: '', name: '', active: false },
                ]);
            expect(notPassingAnArray).toThrowError(TypeError);
            expect(notPassingAnArray).toThrowError(
                'users is not an array of user objects',
            );
        });
    });
});
