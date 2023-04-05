/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormDisplayMode } from "@microsoft/sp-core-library";
import { FormCustomizerContext } from "@microsoft/sp-listview-extensibility";
import { IComboBoxOption } from "office-ui-fabric-react";

export enum DisplayMode {
    NewMode = 8,
    EditMode = 6,
    ViewMode = 4,
}


export interface IFirmenichCustomFormProps {
    context: FormCustomizerContext;
    displayMode: FormDisplayMode;
    onSave: () => void;
    onClose: () => void;
}

export interface IFirmenichCustomFormState {
    Title: string;
    Prodnom: string;
    Mention: string;
    Nomchimique: string;
    NoCAS: string;
    CodeOnu: string;
    NomChim: string;
    Poidsmol: string;
    Comment1: string;
    Pointec: string;
    Pointfus: string;
    Pointif: string;
    Pointeb: string;
    Infinflammation: string;
    Densite: string;
    Supinflammation: string;
    Densvap: string;
    Tensvap: string;
    Vmeppm: string;
    CL50inhal: string;
    Vleppm: string;
    DL50dermal: string;
    CE50mg: string;
    DL50: string;
    EpandageText: string;
    AccifeuEdited: string;
    Modifdoc: string;
    Visadate: string;
    Visapers: string;

    itemsPicsSelected: any[];
    urlsPicturesSelected: string[];

    itemsAcciepand: any[];
    acciepandIComboBoxOption: IComboBoxOption[];
    itemsAcciepandSelectedText: string;

    itemsAccifeu: any[];
    accifeuIComboBoxOption: IComboBoxOption[];
    itemsAccifeuSelectedText: string;

    itemsAspect: any[];
    aspectIComboBoxOption: IComboBoxOption[];
    itemsAspectSelectedText: string;

    itemsClastoxic: any[];
    clastoxicIComboBoxOption: IComboBoxOption[];
    itemsClastoxicSelectedText: string;

    itemsCorpsecpeau: any[];
    corpsecpeauIComboBoxOption: IComboBoxOption[];
    itemsCorpsecpeauSelectedText: string;

    itemsCorpsecresp: any[];
    corpsecrespIComboBoxOption: IComboBoxOption[];
    itemsCorpsecrespSelectedText: string;

    itemsCorpsecyeux: any[];
    corpsecyeuxIComboBoxOption: IComboBoxOption[];
    itemsCorpsecyeuxSelectedText: string;

    itemsCouleur: any[];
    couleurIComboBoxOption: IComboBoxOption[];
    itemsCouleurSelectedText: string;

    itemsDangers: any[];
    dangersIComboBoxOption: IComboBoxOption[];
    itemsDangersSelectedText: string;

    itemsDangersComplement: any[];
    dangersComplementIComboBoxOption: IComboBoxOption[];
    itemsDangersComplementSelectedText: string;

    itemsDangexiFilter: any[];
    dangexiFilterIComboBoxOption: IComboBoxOption[];
    itemsDangexiFilterSelectedText: string;

    itemsEnvironmentFilter: any[];
    environmentFilterIComboBoxOption: IComboBoxOption[];
    itemsEnvironmentFilterSelectedText: string;

    itemsMesuresParticuileres: any[];
    mesuresParticuileresIComboBoxOption: IComboBoxOption[];
    itemsMesuresParticuileresSelectedText: string;

    itemsOdeur: any[];
    odeurIComboBoxOption: IComboBoxOption[];
    itemsOdeurSelectedText: string;

    itemsProtection: any[];
    protectionIComboBoxOption: IComboBoxOption[];
    itemsProtectionSelectedText: string;

    itemsRecipients: any[];

    itemsReference: any[];
    referenceIComboBoxOption: IComboBoxOption[];
    itemsReferenceSelectedText: string;

    itemsRepository: any[];
    repositoryIComboBoxOption: IComboBoxOption[];
    itemsRepositorySelectedText: string;

    itemsReusableContent: any[];
    reusableContentIComboBoxOption: IComboBoxOption[];
    itemsReusableContentSelectedText: string;

    itemsSolvants: any[];
    solvantsIComboBoxOption: IComboBoxOption[];
    itemsSolvantsSelectedText: string;

    itemsStabilis: any[];
    stabilisIComboBoxOption: IComboBoxOption[];
    itemsStabilisSelectedText: string;

    itemsToxicFilter: any[];
    toxicFilterIComboBoxOption: IComboBoxOption[];
    itemsToxicFilterSelectedText: string;

    itemsToxiciteComplement: any[];
    toxiciteComplementIComboBoxOption: IComboBoxOption[];
    itemsToxiciteComplementSelectedText: string;
}