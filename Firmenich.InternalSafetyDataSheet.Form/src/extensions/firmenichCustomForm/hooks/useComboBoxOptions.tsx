import { IFirmenichCustomFormState } from "../components/IFirmenichCustomForm";
import { useSelectedKeysFromComboBoxOptions } from "./useSelectedKeysFromComboBoxOptions";
import { useSelectedItemsUpdater } from "./useSelectedItemsUpdater";

type StateUpdater<T> = (state: T) => void;

interface IComboBoxOptionsHook {
  state: IFirmenichCustomFormState;
  updateState: StateUpdater<{ [key: string]: string }>
}

export const useComboBoxOptions = ({ state, updateState }: IComboBoxOptionsHook) => {
  const selectedDangersKeys = useSelectedKeysFromComboBoxOptions(state.itemsDangersSelectedText, state.dangersIComboBoxOption);
  useSelectedItemsUpdater("itemsDangersSelectedText", state.Dangers, state.itemsDangersSelectedText, updateState);


  const selectedAspectKeys = useSelectedKeysFromComboBoxOptions(state.itemsAspectSelectedText, state.aspectIComboBoxOption);
  useSelectedItemsUpdater("itemsAspectSelectedText", state.Aspect, state.itemsAspectSelectedText, updateState);


  const selectedCouleurKeys = useSelectedKeysFromComboBoxOptions(state.itemsCouleurSelectedText, state.couleurIComboBoxOption);
  useSelectedItemsUpdater("itemsCouleurSelectedText", state.Couleur, state.itemsCouleurSelectedText, updateState);

  const selectedOdeurKeys = useSelectedKeysFromComboBoxOptions(state.itemsOdeurSelectedText, state.odeurIComboBoxOption);
  useSelectedItemsUpdater("itemsOdeurSelectedText", state.Odeur, state.itemsOdeurSelectedText, updateState);

  return {
    selectedDangersKeys,
    selectedAspectKeys,
    selectedCouleurKeys,
    selectedOdeurKeys,
  };
};

