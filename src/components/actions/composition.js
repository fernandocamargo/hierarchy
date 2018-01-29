import { compose, withProps, withHandlers } from 'recompose';

import prevent from 'utils/dom/event/prevent';

export const mapEvents = {
  toggle: ({ features: { toggle } }) => prevent(toggle),
  add: ({ features: { add } }) => prevent(add),
  remove: ({ features: { remove } }) => prevent(remove),
};

export const isEnabled = ({ enabled = true }) => enabled;

export const getProps = ({ features, toggle, add, remove }) => ({
  features: [
    {
      className: 'add',
      title: 'Add random employee',
      action: add,
    },
    {
      className: 'remove',
      title: 'Remove employee',
      action: remove,
    },
    {
      className: 'toggle',
      title: 'Toggle',
      action: toggle,
      enabled: !!features.toggle,
    },
  ].filter(isEnabled),
});

export default compose(withHandlers(mapEvents), withProps(getProps));
