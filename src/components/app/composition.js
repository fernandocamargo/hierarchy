import { compose, withHandlers, withProps } from 'recompose';

export const mapEvents = {
  toggle: () => (...params) => console.log('toggle();', ...params),
  add: () => (...params) => console.log('add();', ...params),
  remove: () => (...params) => console.log('remove();', ...params),
  paste: () => ({ clipboardData }) =>
    console.log('paste();', clipboardData.getData('Text')),
  drop: () => (...params) => console.log('drop();', ...params),
};

export const getProps = ({ toggle, add, remove, drop }) => ({
  actions: { toggle, add, remove },
  uploader: {
    onDrop: drop,
    accept: '.json',
    className: 'component editor',
    activeClassName: 'intention',
    acceptClassName: 'accepting',
    rejectClassName: 'rejecting',
    disableClick: true,
    multiple: false,
  },
});

export default compose(withHandlers(mapEvents), withProps(getProps));
