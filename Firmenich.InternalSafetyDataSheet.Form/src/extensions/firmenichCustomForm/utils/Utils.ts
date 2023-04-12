import { DisplayMode } from "../components/IFirmenichCustomForm";

export class Utils {
  public static RemoveSpaces(str: string): string {
    return str.replace(/\s/g, "");
  };

  public static RemoveDuplicateItems<T>(arr: T[]): T[] {
    return [...new Set(arr)];
  };

  public static FirstLetterToLowerCase(str: string): string {
    const result = str.charAt(0).toLowerCase() + str.slice(1);
    return this.RemoveSpaces(result);
  };

  public static DisplayButtonTextMessage(displayMode: DisplayMode): string {
    const message = {
      [DisplayMode.NewMode]: "Save",
      [DisplayMode.EditMode]: "Save",
      [DisplayMode.ViewMode]: "Print Preview",
    };
    return message[displayMode] || "";
  }

  public static DisplayFormTitle(displayMode: number): string {
    const message = {
      [DisplayMode.NewMode]: "New Product",
      [DisplayMode.EditMode]: "Edit Product",
      [DisplayMode.ViewMode]: "Preview Product",
    };
    return message[displayMode] || "";
  }

  public static FormatDisplayMessage(message: string): string {
    return !!message ? message : "Non determiné";
  };

  public static CheckCommas(str: string): string {
    let newString = str.trim();
    newString = newString.endsWith(",") ? `${newString} ` : `${newString}, `;
    return newString;
  }

}