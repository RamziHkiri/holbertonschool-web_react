import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('getFullYear', () => {
  it('returns the current year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toEqual(currentYear);
  });
});

describe('getFooterCopy', () => {
  it('returns the correct string when the argument is true or false', () => {
    const result1 = getFooterCopy(true);
    expect(result1).toEqual('Holberton School');
  });

  it('returns the correct string when the argument is false', () => {
    const result = getFooterCopy(false);
    expect(result).toEqual('Holberton School main dashboard');
  });
});

describe('getLatestNotification', () => {
  it('returns the correct string', () => {
    const expectedString = '<strong>Urgent requirement</strong> - complete by EOD';
    expect(getLatestNotification()).toEqual(expectedString);
  });
});
