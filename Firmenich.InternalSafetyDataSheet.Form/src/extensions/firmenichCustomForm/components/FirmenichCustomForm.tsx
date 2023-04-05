/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import { Log } from "@microsoft/sp-core-library";
import { IComboBoxOption, SelectableOptionMenuItemType } from "office-ui-fabric-react";

import { IResponseItem } from "../../../Interfaces/Item";
import InternalSafetyDataSheetService from "../../../Services/InternalSafetyDataSheetService";
import fields from "../../../config/configList.json";
import { Utils } from "../utils/Utils";
import { CustomForm } from "./CustomForm";
import { DisplayMode, IFirmenichCustomFormProps, IFirmenichCustomFormState } from "./IFirmenichCustomForm";

const LOG_SOURCE: string = "FirmenichCustomForm";

export default class FirmenichCustomForm extends React.Component<IFirmenichCustomFormProps, IFirmenichCustomFormState> {
  private _internalSafetyDataSheetService: InternalSafetyDataSheetService;

  public constructor(props: IFirmenichCustomFormProps) {
    super(props);

    this._internalSafetyDataSheetService = new InternalSafetyDataSheetService(this.props.context.pageContext.web.absoluteUrl);

    console.log("GUID", this.props.context.list.guid);
    console.log("ITEM_ID", this.props.context.itemId);

    this.state = {
      Title: "",
      Prodnom: "",
      Mention: "",
      Nomchimique: "",
      NoCAS: "",
      CodeOnu: "",
      NomChim: "",
      Poidsmol: "",
      Comment1: "",
      Pointec: "",
      Pointfus: "",
      Pointif: "",
      Pointeb: "",
      Infinflammation: "",
      Densite: "",
      Supinflammation: "",
      Densvap: "",
      Tensvap: "",
      Vmeppm: "",
      CL50inhal: "",
      Vleppm: "",
      DL50dermal: "",
      CE50mg: "",
      DL50: "",
      EpandageText: "",
      AccifeuEdited: "",
      Modifdoc: "",
      Visadate: "",
      Visapers: "",

      itemsPicsSelected: [],
      urlsPicturesSelected: [],

      itemsAcciepand: [],
      acciepandIComboBoxOption: [{ key: "Header1", text: " - Items - ", itemType: SelectableOptionMenuItemType.Header }],
      itemsAcciepandSelectedText: "",

      itemsAccifeu: [],
      accifeuIComboBoxOption: [{ key: "Header1", text: " - Items - ", itemType: SelectableOptionMenuItemType.Header }],
      itemsAccifeuSelectedText: "",

      itemsAspect: [],
      aspectIComboBoxOption: [{ key: "Header1", text: " - Items - ", itemType: SelectableOptionMenuItemType.Header }],
      itemsAspectSelectedText: "",

      itemsClastoxic: [],
      clastoxicIComboBoxOption: [{ key: "Header1", text: " - Items - ", itemType: SelectableOptionMenuItemType.Header }],
      itemsClastoxicSelectedText: "",

      itemsCorpsecpeau: [],
      corpsecpeauIComboBoxOption: [{ key: "Header1", text: " - Items - ", itemType: SelectableOptionMenuItemType.Header }],
      itemsCorpsecpeauSelectedText: "",

      itemsCorpsecresp: [],
      corpsecrespIComboBoxOption: [{ key: "Header1", text: " - Items - ", itemType: SelectableOptionMenuItemType.Header }],
      itemsCorpsecrespSelectedText: "",

      itemsCorpsecyeux: [],
      corpsecyeuxIComboBoxOption: [{ key: "Header1", text: " - Items - ", itemType: SelectableOptionMenuItemType.Header }],
      itemsCorpsecyeuxSelectedText: "",

      itemsCouleur: [],
      couleurIComboBoxOption: [{ key: "Header1", text: " - Items - ", itemType: SelectableOptionMenuItemType.Header }],
      itemsCouleurSelectedText: "",

      itemsDangers: [],
      dangersIComboBoxOption: [{ key: "Header1", text: " - Items - ", itemType: SelectableOptionMenuItemType.Header }],
      itemsDangersSelectedText: "",

      itemsDangersComplement: [],
      dangersComplementIComboBoxOption: [{ key: "Header1", text: " - Items - ", itemType: SelectableOptionMenuItemType.Header }],
      itemsDangersComplementSelectedText: "",

      itemsDangexiFilter: [],
      dangexiFilterIComboBoxOption: [{ key: "Header1", text: " - Items - ", itemType: SelectableOptionMenuItemType.Header }],
      itemsDangexiFilterSelectedText: "",

      itemsEnvironmentFilter: [],
      environmentFilterIComboBoxOption: [{ key: "Header1", text: " - Items - ", itemType: SelectableOptionMenuItemType.Header }],
      itemsEnvironmentFilterSelectedText: "",

      itemsMesuresParticuileres: [],
      mesuresParticuileresIComboBoxOption: [{ key: "Header1", text: " - Items - ", itemType: SelectableOptionMenuItemType.Header }],
      itemsMesuresParticuileresSelectedText: "",

      itemsOdeur: [],
      odeurIComboBoxOption: [{ key: "Header1", text: " - Items - ", itemType: SelectableOptionMenuItemType.Header }],
      itemsOdeurSelectedText: "",

      itemsProtection: [],
      protectionIComboBoxOption: [{ key: "Header1", text: " - Items - ", itemType: SelectableOptionMenuItemType.Header }],
      itemsProtectionSelectedText: "",

      itemsRecipients: [],

      itemsReference: [],
      referenceIComboBoxOption: [{ key: "Header1", text: " - Items - ", itemType: SelectableOptionMenuItemType.Header }],
      itemsReferenceSelectedText: "",

      itemsRepository: [],
      repositoryIComboBoxOption: [{ key: "Header1", text: " - Items - ", itemType: SelectableOptionMenuItemType.Header }],
      itemsRepositorySelectedText: "",

      itemsReusableContent: [],
      reusableContentIComboBoxOption: [{ key: "Header1", text: " - Items - ", itemType: SelectableOptionMenuItemType.Header }],
      itemsReusableContentSelectedText: "",

      itemsSolvants: [],
      solvantsIComboBoxOption: [{ key: "Header1", text: " - Items - ", itemType: SelectableOptionMenuItemType.Header }],
      itemsSolvantsSelectedText: "",

      itemsStabilis: [],
      stabilisIComboBoxOption: [{ key: "Header1", text: " - Items - ", itemType: SelectableOptionMenuItemType.Header }],
      itemsStabilisSelectedText: "",

      itemsToxicFilter: [],
      toxicFilterIComboBoxOption: [{ key: "Header1", text: " - Items - ", itemType: SelectableOptionMenuItemType.Header }],
      itemsToxicFilterSelectedText: "",

      itemsToxiciteComplement: [],
      toxiciteComplementIComboBoxOption: [{ key: "Header1", text: " - Items - ", itemType: SelectableOptionMenuItemType.Header }],
      itemsToxiciteComplementSelectedText: "",


    };

    this._loadComboBoxOptions = this._loadComboBoxOptions.bind(this);
    this._updateState = this._updateState.bind(this);
  }


  public async componentDidMount(): Promise<void> {
    Log.info(LOG_SOURCE, "React Element: FirmenichCustomForm mounted");

    const listItem: IResponseItem = await this._internalSafetyDataSheetService.GetItemsById("Internal Safety DataSheets", 148);

    // var items : any[] = await this.internalSafetyDataSheetService.GetItemsCurrentList(this.props.context.list.guid.toString());
    // console.log(items);

    const loadedOptions = await Promise.all(
      fields.map(async ({ key }) => {
        const items = await this._internalSafetyDataSheetService.GetItems(key);
        const options = await this._loadComboBoxOptions(items);
        return { key, items, options };
      })
    );

    const updatedState = loadedOptions.reduce((result, { key, items, options }) => ({
      ...result,
      [`items${Utils.RemoveSpaces(key)}`]: items,
      [`${Utils.FirstLetterToLowerCase(key)}IComboBoxOption`]: options,
    }), {});

    if (+this.props.displayMode === DisplayMode.NewMode) {
      this.setState({ ...this.state, ...updatedState });
    }

    if (+this.props.displayMode === 6) {
      this.setState({ ...this.state, ...updatedState, ...listItem });
    }

    if (this.props.displayMode === 4) {
      this.setState({ ...this.state, ...updatedState, ...listItem });
    }
  }

  public componentWillUnmount(): void {
    Log.info(LOG_SOURCE, "React Element: FirmenichCustomForm unmounted");
  }

  public render(): React.ReactElement<{}> {
    return (
      <CustomForm {...this.props} state={this.state} updateState={this._updateState} />
    );
  }

  private _updateState = (newState): void => {
    this.setState(newState);
  };

  private async _loadComboBoxOptions(items: any[]): Promise<IComboBoxOption[]> {
    const newOptions: IComboBoxOption[] = items.map((element) => ({ key: element.ID, text: element.Title }));
    return newOptions;
  }
}
