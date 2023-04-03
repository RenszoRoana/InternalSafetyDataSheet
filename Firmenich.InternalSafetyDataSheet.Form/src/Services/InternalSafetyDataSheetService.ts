import { IItem, IList, ISiteUser, IWeb, Web} from "@pnp/sp/presets/all";
import { ISiteUserInfo } from "@pnp/sp/site-users/types";
import IInternalSafetyDataSheetItem from "../Interfaces/IIterfaces";

export default class InternalSafetyDataSheetService{
    private web:IWeb;

    constructor(url: string){
        this.web = Web(url);
    }

    public async GetItems(listName: string):Promise<any[]>{  
        var items : any[] = await this.web.lists.getByTitle(listName).items();
        return items;       
    }

    public async GetItemsCurrentList(listGuid: string):Promise<any[]>{  
        var items : any[] = await this.web.lists.getById(listGuid).items.getAll();
        return items;       
    }
    
    public async GetItemsById(listName: string, itemId: number):Promise<IItem>{  
        var item : any = await this.web.lists.getByTitle(listName).items.getById(itemId).get();
        return item;       
    }


    public async AddInternalSafetyDataSheetItem(listName: string, internalSafetyDataSheetItem : IInternalSafetyDataSheetItem){
        try {
            console.log(internalSafetyDataSheetItem);
            await this.web.lists.getByTitle(listName).items.add({
                Title: internalSafetyDataSheetItem.Title,
                RaonaAcciepand: {
                    results: [internalSafetyDataSheetItem.RaonaAcciepand]
                }
            });
        } catch (error) {
            throw error;
        }        
    }

    public async UpdateInternalSafetyDataSheetItem(listName: string, itemId: number , internalSafetyDataSheetItem : IInternalSafetyDataSheetItem){
        try {
            console.log(internalSafetyDataSheetItem);
            await this.web.lists.getByTitle(listName).items.getById(itemId).update({
                Title: internalSafetyDataSheetItem.Title,
                RaonaAcciepand: {
                    results: [internalSafetyDataSheetItem.RaonaAcciepand]
                }
            });
        } catch (error) {
            throw error;
        }        
    }

    public async GetUserMail(userId: number): Promise<string>{
        var user : ISiteUserInfo = await this.web.getUserById(userId).get();        
        console.log(user);
        return user.Email;
    }
}