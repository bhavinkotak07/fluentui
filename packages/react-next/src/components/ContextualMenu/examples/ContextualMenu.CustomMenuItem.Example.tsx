import * as React from 'react';
import {
  ContextualMenuItemType,
  IContextualMenuProps,
  IContextualMenuItemProps,
} from '@fluentui/react-next/lib/ContextualMenu';
import { DefaultButton } from '@fluentui/react-next/lib/compat/Button';
import { useConst } from '@uifabric/react-hooks';

export const ContextualMenuWithCustomMenuItemExample: React.FunctionComponent = () => {
  const menuProps: IContextualMenuProps = useConst(() => ({
    shouldFocusOnMount: true,
    contextualMenuItemAs: (props: IContextualMenuItemProps) => <div>Custom rendered {props.item.text}</div>,
    items: [
      { key: 'newItem', text: 'New' },
      { key: 'divider_1', itemType: ContextualMenuItemType.Divider },
      { key: 'rename', text: 'Rename' },
      { key: 'edit', text: 'Edit' },
      { key: 'properties', text: 'Properties' },
      { key: 'disabled', text: 'Disabled item', disabled: true },
    ],
  }));

  return <DefaultButton text="Click for ContextualMenu" menuProps={menuProps} />;
};
