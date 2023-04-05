import * as React from "react";

import { IInternalSafetyDataSheetItem } from "../../../Interfaces/IIterfaces";
import InternalSafetyDataSheetService from "../../../Services/InternalSafetyDataSheetService";
import { DisplayMode } from "../components/IFirmenichCustomForm";

export const useCustomForm = ({ context, displayMode, state, onSave }) => {
  const [viewMode, setViewMode] = React.useState<boolean>(false);

  const internalSafetyDataSheetService = new InternalSafetyDataSheetService(context.pageContext.web.absoluteUrl);

  const getNewISDS = async () => {
    return {
      Title: state.Title,
      RaonaAcciepand: state.itemsAcciepandSelectedText,
    };
  };

  const onSaveForm = async () => {
    if (displayMode === DisplayMode.NewMode) {
      try {
        const newItem: IInternalSafetyDataSheetItem = await getNewISDS();
        await internalSafetyDataSheetService.AddInternalSafetyDataSheetItem("InternalSafetyDataSheet", newItem);
      } catch (error) {
        console.log(error);
      }
    }
    if (displayMode === DisplayMode.EditMode) {
      try {
        const updateItem: IInternalSafetyDataSheetItem = await getNewISDS();
        await internalSafetyDataSheetService.UpdateInternalSafetyDataSheetItem("InternalSafetyDataSheet", context.itemId, updateItem);
        onSave();
      } catch (error) {
        console.error(error);
      }
    }
    if (displayMode === DisplayMode.ViewMode) {
      window.print();
    }
  };

  React.useEffect(() => {
    console.log("ESTADO", state);
  }, [state]);

  React.useEffect(() => {
    if (displayMode === DisplayMode.ViewMode) {
      setViewMode(true);
    }
  }, [displayMode]);

  return {
    viewMode,
    onSaveForm,
  };
};