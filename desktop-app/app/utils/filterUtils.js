import {FILTER_FIELDS} from '../reducers/browser';

export const isDeviceEligible = (device, filterCriteria) => {
  console.log('device, filterCriteria', device, filterCriteria);
  if (Object.keys(filterCriteria[FILTER_FIELDS.OS]).length > 0) {
    console.log(
      'OS',
      device.os,
      filterCriteria[FILTER_FIELDS.OS].indexOf(device.os)
    );
    if (filterCriteria[FILTER_FIELDS.OS].indexOf(device.os) === -1) {
      return false;
    }
  }

  if (Object.keys(filterCriteria[FILTER_FIELDS.DEVICE_TYPE]).length > 0) {
    if (filterCriteria[FILTER_FIELDS.DEVICE_TYPE].indexOf(device.type) === -1) {
      return false;
    }
  }

  return true;
};
