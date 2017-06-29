/* Import actions */
import * as constants from '../../constants';
/* Import constants */
import { getNextTitle } from '../titles';

describe('titles actions', () => {
  it('should return the initial state', () => {
    expect(
      getNextTitle(),
    ).toEqual({
      title: constants.TITLES[0],
      type: constants.GET_NEXT_TITLE,
    });
  });

  it('Should return correct next title', () => {
    for (let i = 0; i < constants.TITLES.length - 1; i++) {
      expect(
        getNextTitle(constants.TITLES[i]),
      ).toEqual({
        title: constants.TITLES[i + 1],
        type: constants.GET_NEXT_TITLE,
      });
    }
  });

  it('Should return the first title when pass last title into reducer', () => {
    expect(
      getNextTitle(constants.TITLES[constants.TITLES.length - 1]),
    ).toEqual({
      title: constants.TITLES[0],
      type: constants.GET_NEXT_TITLE,
    });
  });
});
