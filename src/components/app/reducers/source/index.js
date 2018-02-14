import property from 'utils/object/property';
import single from 'utils/array/single';
import head from 'utils/array/head';
import fill from 'utils/object/fill';
import removeAt from 'utils/immutability/remove-at';

export { default as set } from 'utils/object/identity';

export const create = property('source', {});

export const add = ({ source }, { name, ...profile }) =>
  fill(source.concat('employees'), {
    $push: [
      {
        [name]: profile,
      },
    ],
  });

export const remove = ({ source }) =>
  single(source)
    ? { $unset: [head(source)] }
    : fill(source.slice(0, -2), {
        $splice: removeAt(head(source.slice(-2))),
      });
