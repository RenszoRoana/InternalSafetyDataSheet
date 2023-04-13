/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";

type StateUpdater<T> = (state: T) => void;

type UseSelectedItemsUpdater = (
  statePropertyKey: string,
  currentStateProperty: string | string[],
  newSelectedItemText: string,
  updateState: StateUpdater<{ [key: string]: string }>
) => void;

export const useSelectedItemsUpdater: UseSelectedItemsUpdater = (statePropertyKey, currentStateProperty, newSelectedItemText, updateState) => {
  React.useEffect(() => {
    if (currentStateProperty.length > 0) {
      updateState({ [statePropertyKey]: `${currentStateProperty.toString()}, ${newSelectedItemText}` });
    }
  }, [currentStateProperty]);
};
