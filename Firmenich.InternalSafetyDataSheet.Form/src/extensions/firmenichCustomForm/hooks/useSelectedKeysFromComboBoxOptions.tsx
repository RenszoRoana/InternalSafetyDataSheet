/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import { IComboBoxOption } from "office-ui-fabric-react";

type UseSelectedKeysFromComboBoxOptions = (itemsSelectedText: string, itemsIComboBoxOption: IComboBoxOption[]) => number[]

export const useSelectedKeysFromComboBoxOptions: UseSelectedKeysFromComboBoxOptions = (itemsSelectedText, itemsIComboBoxOption) => {
  const [selectedKeys, setSelectedKeys] = React.useState<number[]>([]);

  const getSelectedKeysFromComboBoxOptions = (comboBoxOption: IComboBoxOption[], selectedText: string): number[] => {
    const parseToArray = selectedText.split(", ");

    const result = comboBoxOption
      .filter((comboBoxItem) => parseToArray.find((selectedTextItem) => selectedTextItem === comboBoxItem.text))
      .map((comboBoxItem) => comboBoxItem.key);

    return result as number[];
  };

  React.useEffect(() => {
    const newSelectedKeys = getSelectedKeysFromComboBoxOptions(itemsIComboBoxOption, itemsSelectedText);
    setSelectedKeys(newSelectedKeys);
  }, [itemsSelectedText]);

  return selectedKeys;
};
