import where from 'utils/object/where';
import read from 'utils/file-reader/read';
import transfer from 'utils/data/transfer';

export default () => ({
  then: callback => (files, data) => [
    files.map(read().then(callback)),
    data.filter(where('type', 'text/plain')).map(transfer().then(callback)),
  ],
});
