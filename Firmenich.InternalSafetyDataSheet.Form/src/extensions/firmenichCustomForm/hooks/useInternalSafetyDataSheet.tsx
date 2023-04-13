import { FormCustomizerContext } from "@microsoft/sp-listview-extensibility";

import { IInternalSafetyDataSheetItem } from "../../../Interfaces/IIterfaces";
import { DisplayMode, IFirmenichCustomFormState } from "../components/IFirmenichCustomForm";
import InternalSafetyDataSheetService from "../../../Services/InternalSafetyDataSheetService";

interface IInternalSafetyDataSheetHook {
  context: FormCustomizerContext;
  state: IFirmenichCustomFormState;
  displayMode: number;
  onSave: () => void;
}


export const useInternalSafetyDataSheet = ({ state, context, displayMode, onSave }: IInternalSafetyDataSheetHook) => {
  const internalSafetyDataSheetService = new InternalSafetyDataSheetService(context.pageContext.web.absoluteUrl);

  const getNewISDS = async () => {
    return {
      Title: state.Title,
      Acciepand: state.itemsAcciepandSelectedText,
      Dangers: state.itemsDangersSelectedText,
    };
  };

  const onSaveForm = async () => {
    if (displayMode === DisplayMode.NewMode) {
      try {
        const newItem: IInternalSafetyDataSheetItem = await getNewISDS();
        await internalSafetyDataSheetService.AddInternalSafetyDataSheetItem(context.list.title, newItem);
        onSave();
      } catch (error) {
        console.log(error);
      }
    }

    if (displayMode === DisplayMode.EditMode) {
      try {
        const updateItem: IInternalSafetyDataSheetItem = await getNewISDS();
        await internalSafetyDataSheetService.UpdateInternalSafetyDataSheetItem(context.list.title, context.itemId, updateItem);
        onSave();
      } catch (error) {
        console.error(error);
      }
    }

    if (displayMode === DisplayMode.ViewMode) {
      window.print();
    }
  };

  return { onSaveForm };
};

