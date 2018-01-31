import load from 'utils/file-reader/load';

export default () => ({
  then: callback => file =>
    Object.assign(new FileReader(), {
      onload: load(callback),
    }).readAsBinaryString(file),
});
