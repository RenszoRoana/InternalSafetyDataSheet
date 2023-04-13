/* eslint-disable @typescript-eslint/no-explicit-any */
import { IWeb, Web } from "@pnp/sp/presets/all";
import { ISiteUserInfo } from "@pnp/sp/site-users/types";
import { IInternalSafetyDataSheetItem } from "../Interfaces/IIterfaces";


export default class InternalSafetyDataSheetService {
  private _web: IWeb;

  public constructor(url: string) {
    this._web = Web(url);
  }

  public async GetItems(listName: string): Promise<any[]> {
    const items: any[] = await this._web.lists.getByTitle(listName).items();
    return items;
  }

  public async GetItemsCurrentList(listGuid: string): Promise<any[]> {
    const items: any[] = await this._web.lists.getById(listGuid).items.getAll();
    return items;
  }

  public async GetItemsById(listName: string, itemId: number): Promise<any> {
    const item = await this._web.lists.getByTitle(listName).items.getById(itemId).get();
    return item;
  }

  public async AddInternalSafetyDataSheetItem(listName: string, internalSafetyDataSheetItem: IInternalSafetyDataSheetItem): Promise<void> {
    await this._web.lists.getByTitle(listName).items.add({
      Title: internalSafetyDataSheetItem.Title,
      RaonaAcciepand: {
        results: [internalSafetyDataSheetItem.Acciepand]
      }
    });

  }

  public async UpdateInternalSafetyDataSheetItem(listName: string, itemId: number, internalSafetyDataSheetItem: IInternalSafetyDataSheetItem): Promise<void> {
    await this._web.lists.getByTitle(listName).items.getById(itemId).update({
      Title: internalSafetyDataSheetItem.Title,
      Acciepand: {
        results: [internalSafetyDataSheetItem.Acciepand]
      },
      Dangers: {
        results: [internalSafetyDataSheetItem.Dangers]
      }
    });
  }

  public async GetUserMail(userId: number): Promise<string> {
    const user: ISiteUserInfo = await this._web.getUserById(userId).get();
    console.log(user);
    return user.Email;
  }
}