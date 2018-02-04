import where from 'utils/object/where';
import read from 'utils/file-reader/read';
import transfer from 'utils/data/transfer';

export default () => ({
  then: callback => (files, data) =>
    []
      .concat(files.map(read().then(callback)))
      .concat(
        data.filter(where('kind', 'string')).map(transfer().then(callback)),
      ),
});
