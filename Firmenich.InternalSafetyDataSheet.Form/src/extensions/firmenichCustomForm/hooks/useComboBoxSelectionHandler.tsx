import { IComboBoxOption } from "office-ui-fabric-react";
import { IFirmenichCustomFormState } from "../components/IFirmenichCustomForm";
import { Utils } from "../utils/Utils";

interface IComboBoxSelectionHandlerHook {
  state: IFirmenichCustomFormState;
  updateState: (state: IFirmenichCustomFormState) => void;
}

export const useComboBoxSelectionHandler = ({ state, updateState }: IComboBoxSelectionHandlerHook) => {
  const getNewItemsSelectedText = (itemsSelectedText: string, valueSelected: string) => {
    return itemsSelectedText.length === 0 ? valueSelected : itemsSelectedText.concat(valueSelected);
  };

  const getRemovedItemsSelectedText = (itemsSelectedText: string, valueSelected: string) => {
    return itemsSelectedText.length === 0 ? "" : itemsSelectedText.replace(valueSelected, "");
  };

  const getUpdatedItemsSelectedText = (itemsSelectedText: string, valueSelected: string, selected: boolean) => {
    if (selected) {
      return getNewItemsSelectedText(itemsSelectedText, valueSelected);
    } else {
      return getRemovedItemsSelectedText(itemsSelectedText, valueSelected);
    }
  };

  const updateSelectedText = (selectedOption: IComboBoxOption, fieldName: string): void => {
    const itemsTextSelected = Utils.CheckCommas(state[fieldName]) || "";
    const valueSelected = `${selectedOption.text}, `;

    const updatedItemsSelectedText = getUpdatedItemsSelectedText(
      itemsTextSelected,
      valueSelected,
      selectedOption.selected
    );

    updateState({ ...state, [fieldName]: updatedItemsSelectedText });
  };


  const updateSelectedItems = (selectedOption: IComboBoxOption, itemsFilterSelectedText: string, itemsFilter: string) => {
    const { itemsPicsSelected, urlsPicturesSelected } = state;
    const { key, text, selected } = selectedOption;

    const selectedValue = `${text}, `;
    const selectedItem = state[itemsFilter].find((item) => item.ID === key);


    let itemsSelectedText = state[itemsFilterSelectedText];
    let selectedPictures = [...urlsPicturesSelected];
    let selectedItems = [...itemsPicsSelected];

    if (selected) {
      itemsSelectedText = itemsSelectedText.length === 0
        ? selectedValue
        : `${itemsSelectedText}${selectedValue}`;
      // : itemsSelectedText.concat(selectedValue);

      selectedItems = [...selectedItems, selectedItem];

      const picture = selectedItem.Picture;

      if (picture !== null && !selectedPictures.includes(picture)) {
        selectedPictures = [...selectedPictures, picture];
      }
    } else {
      itemsSelectedText = itemsSelectedText.replace(selectedValue, "");

      selectedItems = selectedItems.filter((item) => item.ID !== key);

      const picture = selectedItem.Picture;
      const noOtherSelectedPictures = !selectedItems.some((item) => item.Picture === picture);

      if (picture !== null && noOtherSelectedPictures) {
        selectedPictures = selectedPictures.filter((pic) => pic !== picture);
      }
    }

    const updatedState = {
      ...state,
      [itemsFilterSelectedText]: itemsSelectedText,
      urlsPicturesSelected: selectedPictures,
      itemsPicsSelected: selectedItems
    };

    updateState(updatedState);
  };

  return {
    updateSelectedText,
    updateSelectedItems
  };
};
