import { FIND_TIME_STAMP } from '../../constants/types';

export const findTimeStamp = (time_stamp) => {
  return {
    type: FIND_TIME_STAMP,
    payload: time_stamp
  };
};