import {
  compose,
  shouldUpdate,
  lifecycle,
  withHandlers,
  withProps,
} from 'recompose';
import { DragSource, DropTarget } from 'react-dnd';

import bind from 'utils/function/bind';
import only from 'utils/object/only';

export const onlyWhen = (current, next) =>
  current.dragging !== next.dragging ||
  current.name !== next.name ||
  current.position !== next.position ||
  current.employees !== next.employees ||
  current.expanded !== next.expanded ||
  current.path !== next.path;

export const mapEvents = {
  toggle: ({ path, actions: { toggle } }) => bind(toggle).with(path),
  add: ({ path, actions: { add } }) => bind(add).with(path),
  remove: ({ path, actions: { remove } }) => bind(remove).with(path),
};

export const getProps = ({
  employees,
  expanded,
  actions,
  toggle,
  add,
  remove,
}) => ({
  actions: {
    features: {
      toggle: only(toggle).when(!!employees.length),
      add,
      remove,
    },
  },
  nodes: expanded && { nodes: employees, actions },
});

export default compose(
  DropTarget(
    'node',
    {
      /*
      hover({ path: { nodes: n1 } }, monitor, component) {
        const { path: { nodes: n2 } } = monitor.getItem();
        return;
      },
      */
    },
    connect => ({
      droppable: connect.dropTarget(),
    }),
  ),
  DragSource(
    'node',
    {
      beginDrag(node) {
        return node;
      },
    },
    (connect, monitor) => ({
      draggable: connect.dragSource(),
      preview: connect.dragPreview(),
      dragging: monitor.isDragging(),
    }),
  ),
  shouldUpdate(onlyWhen),
  withHandlers(mapEvents),
  withProps(getProps),
  lifecycle({
    componentDidMount() {
      return Object.assign(new Image(), {
        src:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAaklEQVR4Ae3NQQqAIBSE4bmNSJcXxXOFoW6tRUUulfcW0vyznw9LxTZEVBQEWJ37A+1e0iAi2mdeHqgdkOWBog2EDnDygEV673cYQIPwyNccDH5bk9k0QGAcnokAAQIECDwRIDAUAQJsgU4o2sid5ZUWVgAAAABJRU5ErkJggg==',
        onload: ({ currentTarget }) => this.props.preview(currentTarget),
      });
    },
  }),
);
