import * as React from 'react';
import { Log, FormDisplayMode } from '@microsoft/sp-core-library';
import { FormCustomizerContext } from '@microsoft/sp-listview-extensibility';

import styles from './FirmenichCustomForm.module.scss';
import InternalSafetyDataSheetService from '../../../Services/InternalSafetyDataSheetService';
import { ComboBox, DefaultButton, IComboBoxOption, IComboBoxStyles, Label, PrimaryButton, SelectableOptionMenuItemType, Stack, TextField } from 'office-ui-fabric-react';
import IInternalSafetyDataSheetItem from '../../../Interfaces/IIterfaces';
import { IItem } from '@pnp/sp/items';

require("./FirmenichCustomForm.css");

export interface IFirmenichCustomFormProps {
  context: FormCustomizerContext;
  displayMode: FormDisplayMode;
  onSave: () => void;
  onClose: () => void;
}

export interface IFirmenichCustomFormState {
  title: string;
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
  acciepanIComboBoxOption: IComboBoxOption[];
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

const comboBoxStyles: Partial<IComboBoxStyles> = { root: { maxWidth: 300 } };

const LOG_SOURCE: string = 'FirmenichCustomForm';

export default class FirmenichCustomForm extends React.Component<IFirmenichCustomFormProps, IFirmenichCustomFormState> {
  private internalSafetyDataSheetService:InternalSafetyDataSheetService;

  constructor(props: IFirmenichCustomFormProps){
    super(props);

    this.internalSafetyDataSheetService = new InternalSafetyDataSheetService(this.props.context.pageContext.web.absoluteUrl);

    console.log(this.props.context.list.guid);
    console.log(this.props.context.itemId);

    this.state = {
      title: "",
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

      itemsPicsSelected:[],
      urlsPicturesSelected:[],

      itemsAcciepand: [],
      acciepanIComboBoxOption: [{ key: 'Header1', text: ' - Items - ', itemType: SelectableOptionMenuItemType.Header }],
      itemsAcciepandSelectedText: "",

      itemsAccifeu: [],
      accifeuIComboBoxOption: [{ key: 'Header1', text: ' - Items - ', itemType: SelectableOptionMenuItemType.Header }],
      itemsAccifeuSelectedText: "",

      itemsAspect: [],
      aspectIComboBoxOption: [{ key: 'Header1', text: ' - Items - ', itemType: SelectableOptionMenuItemType.Header }],
      itemsAspectSelectedText: "",

      itemsClastoxic: [],
      clastoxicIComboBoxOption: [{ key: 'Header1', text: ' - Items - ', itemType: SelectableOptionMenuItemType.Header }],
      itemsClastoxicSelectedText: "",
      
      itemsCorpsecpeau: [],
      corpsecpeauIComboBoxOption: [{ key: 'Header1', text: ' - Items - ', itemType: SelectableOptionMenuItemType.Header }],
      itemsCorpsecpeauSelectedText: "",
       
      itemsCorpsecresp: [],
      corpsecrespIComboBoxOption: [{ key: 'Header1', text: ' - Items - ', itemType: SelectableOptionMenuItemType.Header }],
      itemsCorpsecrespSelectedText: "",
      
      itemsCorpsecyeux: [],
      corpsecyeuxIComboBoxOption: [{ key: 'Header1', text: ' - Items - ', itemType: SelectableOptionMenuItemType.Header }],
      itemsCorpsecyeuxSelectedText: "",

      itemsCouleur: [],
      couleurIComboBoxOption: [{ key: 'Header1', text: ' - Items - ', itemType: SelectableOptionMenuItemType.Header }],
      itemsCouleurSelectedText: "",

      itemsDangers: [],
      dangersIComboBoxOption: [{ key: 'Header1', text: ' - Items - ', itemType: SelectableOptionMenuItemType.Header }],
      itemsDangersSelectedText: "",
      
      itemsDangersComplement: [],
      dangersComplementIComboBoxOption: [{ key: 'Header1', text: ' - Items - ', itemType: SelectableOptionMenuItemType.Header }],
      itemsDangersComplementSelectedText: "",

      itemsDangexiFilter: [],
      dangexiFilterIComboBoxOption: [{ key: 'Header1', text: ' - Items - ', itemType: SelectableOptionMenuItemType.Header }],
      itemsDangexiFilterSelectedText: "",
      
      itemsEnvironmentFilter: [],
      environmentFilterIComboBoxOption: [{ key: 'Header1', text: ' - Items - ', itemType: SelectableOptionMenuItemType.Header }],
      itemsEnvironmentFilterSelectedText: "",
      
      itemsMesuresParticuileres: [],
      mesuresParticuileresIComboBoxOption: [{ key: 'Header1', text: ' - Items - ', itemType: SelectableOptionMenuItemType.Header }],
      itemsMesuresParticuileresSelectedText: "",

      itemsOdeur: [],
      odeurIComboBoxOption: [{ key: 'Header1', text: ' - Items - ', itemType: SelectableOptionMenuItemType.Header }],
      itemsOdeurSelectedText: "",
      
      itemsProtection: [],
      protectionIComboBoxOption: [{ key: 'Header1', text: ' - Items - ', itemType: SelectableOptionMenuItemType.Header }],
      itemsProtectionSelectedText: "",

      itemsRecipients: [],
      
      itemsReference: [],
      referenceIComboBoxOption: [{ key: 'Header1', text: ' - Items - ', itemType: SelectableOptionMenuItemType.Header }],
      itemsReferenceSelectedText: "",

      itemsRepository: [],
      repositoryIComboBoxOption: [{ key: 'Header1', text: ' - Items - ', itemType: SelectableOptionMenuItemType.Header }],
      itemsRepositorySelectedText: "",

      itemsReusableContent: [],
      reusableContentIComboBoxOption: [{ key: 'Header1', text: ' - Items - ', itemType: SelectableOptionMenuItemType.Header }],
      itemsReusableContentSelectedText: "",
      
      itemsSolvants: [],
      solvantsIComboBoxOption: [{ key: 'Header1', text: ' - Items - ', itemType: SelectableOptionMenuItemType.Header }],
      itemsSolvantsSelectedText: "",

      itemsStabilis: [],
      stabilisIComboBoxOption: [{ key: 'Header1', text: ' - Items - ', itemType: SelectableOptionMenuItemType.Header }],
      itemsStabilisSelectedText: "",

      itemsToxicFilter: [],
      toxicFilterIComboBoxOption: [{ key: 'Header1', text: ' - Items - ', itemType: SelectableOptionMenuItemType.Header }],
      itemsToxicFilterSelectedText: "",
      
      itemsToxiciteComplement: [],
      toxiciteComplementIComboBoxOption: [{ key: 'Header1', text: ' - Items - ', itemType: SelectableOptionMenuItemType.Header }],
      itemsToxiciteComplementSelectedText: "",
      
      
    };

    this._onSaveForm = this._onSaveForm.bind(this);
    this._onSaveNewForm = this._onSaveNewForm.bind(this);
    this._printPreview = this._printPreview.bind(this);
    this.getNewISDS = this.getNewISDS.bind(this);
    this.loadComboBoxOptions = this.loadComboBoxOptions.bind(this);
  }
  

  public async componentDidMount(): Promise<void> {
    Log.info(LOG_SOURCE, 'React Element: FirmenichCustomForm mounted');

    var listItem : IItem = await this.internalSafetyDataSheetService.GetItemsById("Internal Safety DataSheets",148);
    console.log(listItem);

    // var items : any[] = await this.internalSafetyDataSheetService.GetItemsCurrentList(this.props.context.list.guid.toString());
    // console.log(items);

    var itemsRecipients : any[] = await this.internalSafetyDataSheetService.GetItems("Recipients");    

    var itemsAcciepand : any[] = await this.internalSafetyDataSheetService.GetItems("Acciepand");
    var acciepanIComboBoxOption : IComboBoxOption[] = await this.loadComboBoxOptions(itemsAcciepand, this.state.acciepanIComboBoxOption);
      
    var itemsAccifeu : any[] = await this.internalSafetyDataSheetService.GetItems("Accifeu");
    var accifeuIComboBoxOption : IComboBoxOption[] = await this.loadComboBoxOptions(itemsAccifeu, this.state.accifeuIComboBoxOption);
    
    var itemsAspect : any[] = await this.internalSafetyDataSheetService.GetItems("Aspect");
    var aspectIComboBoxOption : IComboBoxOption[] = await this.loadComboBoxOptions(itemsAspect, this.state.aspectIComboBoxOption);

    var itemsClastoxic : any[] = await this.internalSafetyDataSheetService.GetItems("Clastoxic");
    var clastoxicIComboBoxOption : IComboBoxOption[] = await this.loadComboBoxOptions(itemsClastoxic, this.state.clastoxicIComboBoxOption);

    var itemsCorpsecpeau : any[] = await this.internalSafetyDataSheetService.GetItems("Corpsecpeau");
    var corpsecpeauIComboBoxOption : IComboBoxOption[] = await this.loadComboBoxOptions(itemsCorpsecpeau, this.state.corpsecpeauIComboBoxOption);

    var itemsCorpsecresp : any[] = await this.internalSafetyDataSheetService.GetItems("Corpsecresp");
    var corpsecrespIComboBoxOption : IComboBoxOption[] = await this.loadComboBoxOptions(itemsCorpsecresp, this.state.corpsecrespIComboBoxOption);
    
    var itemsCorpsecyeux : any[] = await this.internalSafetyDataSheetService.GetItems("Corpsecyeux");
    var corpsecyeuxIComboBoxOption : IComboBoxOption[] = await this.loadComboBoxOptions(itemsCorpsecyeux, this.state.corpsecyeuxIComboBoxOption);
    
    var itemsCouleur : any[] = await this.internalSafetyDataSheetService.GetItems("Couleur");
    var couleurIComboBoxOption : IComboBoxOption[] = await this.loadComboBoxOptions(itemsCouleur, this.state.couleurIComboBoxOption);
    
    var itemsDangers : any[] = await this.internalSafetyDataSheetService.GetItems("Dangers");
    var dangersIComboBoxOption : IComboBoxOption[] = await this.loadComboBoxOptions(itemsDangers, this.state.dangersIComboBoxOption);
    
    var itemsDangersComplement : any[] = await this.internalSafetyDataSheetService.GetItems("DangersComplement");
    var dangersComplementIComboBoxOption : IComboBoxOption[] = await this.loadComboBoxOptions(itemsDangersComplement, this.state.dangersComplementIComboBoxOption);

    var itemsDangexiFilter : any[] = await this.internalSafetyDataSheetService.GetItems("DangexiFilter");
    var dangexiFilterIComboBoxOption : IComboBoxOption[] = await this.loadComboBoxOptions(itemsDangexiFilter, this.state.dangexiFilterIComboBoxOption);
    
    var itemsEnvironmentFilter : any[] = await this.internalSafetyDataSheetService.GetItems("EnvironmentFilter");
    var environmentFilterIComboBoxOption : IComboBoxOption[] = await this.loadComboBoxOptions(itemsEnvironmentFilter, this.state.environmentFilterIComboBoxOption);

    var itemsMesuresParticuileres : any[] = await this.internalSafetyDataSheetService.GetItems("MesuresParticuileres");
    var mesuresParticuileresIComboBoxOption : IComboBoxOption[] = await this.loadComboBoxOptions(itemsMesuresParticuileres, this.state.mesuresParticuileresIComboBoxOption);
    
    var itemsOdeur : any[] = await this.internalSafetyDataSheetService.GetItems("Odeur");
    var odeurIComboBoxOption : IComboBoxOption[] = await this.loadComboBoxOptions(itemsOdeur, this.state.odeurIComboBoxOption);
    
    var itemsProtection : any[] = await this.internalSafetyDataSheetService.GetItems("Protection");
    var protectionIComboBoxOption : IComboBoxOption[] = await this.loadComboBoxOptions(itemsProtection, this.state.protectionIComboBoxOption);
    
    var itemsReference : any[] = await this.internalSafetyDataSheetService.GetItems("Reference");
    var referenceIComboBoxOption : IComboBoxOption[] = await this.loadComboBoxOptions(itemsReference, this.state.referenceIComboBoxOption);
    
    var itemsRepository : any[] = await this.internalSafetyDataSheetService.GetItems("Repository");
    var repositoryIComboBoxOption : IComboBoxOption[] = await this.loadComboBoxOptions(itemsRepository, this.state.repositoryIComboBoxOption);
    
    var itemsReusableContent : any[] = await this.internalSafetyDataSheetService.GetItems("Reusable Content");
    var reusableContentIComboBoxOption : IComboBoxOption[] = await this.loadComboBoxOptions(itemsReusableContent, this.state.reusableContentIComboBoxOption);
    
    var itemsSolvants : any[] = await this.internalSafetyDataSheetService.GetItems("Solvants");
    var solvantsIComboBoxOption : IComboBoxOption[] = await this.loadComboBoxOptions(itemsSolvants, this.state.solvantsIComboBoxOption);
    
    var itemsStabilis : any[] = await this.internalSafetyDataSheetService.GetItems("Stabilis");
    var stabilisIComboBoxOption : IComboBoxOption[] = await this.loadComboBoxOptions(itemsStabilis, this.state.stabilisIComboBoxOption);
    
    var itemsToxicFilter : any[] = await this.internalSafetyDataSheetService.GetItems("ToxicFilter");
    var toxicFilterIComboBoxOption : IComboBoxOption[] = await this.loadComboBoxOptions(itemsToxicFilter, this.state.toxicFilterIComboBoxOption);
    
    var itemsToxiciteComplement : any[] = await this.internalSafetyDataSheetService.GetItems("ToxiciteComplement");
    var toxiciteComplementIComboBoxOption : IComboBoxOption[] = await this.loadComboBoxOptions(itemsToxiciteComplement, this.state.toxiciteComplementIComboBoxOption);

    this.setState({
      itemsAcciepand: itemsAcciepand,
      acciepanIComboBoxOption: acciepanIComboBoxOption,

      itemsAccifeu: itemsAccifeu,
      accifeuIComboBoxOption: accifeuIComboBoxOption,

      itemsAspect: itemsAspect,
      aspectIComboBoxOption: aspectIComboBoxOption,

      itemsClastoxic: itemsClastoxic,
      clastoxicIComboBoxOption: clastoxicIComboBoxOption,

      itemsCorpsecpeau: itemsCorpsecpeau,
      corpsecpeauIComboBoxOption: corpsecpeauIComboBoxOption,

      itemsCorpsecresp: itemsCorpsecresp,
      corpsecrespIComboBoxOption: corpsecrespIComboBoxOption,

      itemsCorpsecyeux: itemsCorpsecyeux,
      corpsecyeuxIComboBoxOption: corpsecyeuxIComboBoxOption,

      itemsCouleur: itemsCouleur,
      couleurIComboBoxOption: couleurIComboBoxOption,

      itemsDangers: itemsDangers,
      dangersIComboBoxOption: dangersIComboBoxOption,
      
      itemsDangersComplement: itemsDangersComplement,
      dangersComplementIComboBoxOption: dangersComplementIComboBoxOption,

      itemsDangexiFilter: itemsDangexiFilter,
      dangexiFilterIComboBoxOption: dangexiFilterIComboBoxOption,
      
      itemsEnvironmentFilter: itemsEnvironmentFilter,
      environmentFilterIComboBoxOption: environmentFilterIComboBoxOption,
      
      itemsMesuresParticuileres: itemsMesuresParticuileres,
      mesuresParticuileresIComboBoxOption: mesuresParticuileresIComboBoxOption,

      itemsOdeur: itemsOdeur,
      odeurIComboBoxOption: odeurIComboBoxOption,
      
      itemsProtection: itemsProtection,
      protectionIComboBoxOption: protectionIComboBoxOption,

      itemsRecipients: itemsRecipients,
      
      itemsReference: itemsReference,
      referenceIComboBoxOption: referenceIComboBoxOption,

      itemsRepository: itemsRepository,
      repositoryIComboBoxOption: repositoryIComboBoxOption,

      itemsReusableContent: itemsReusableContent,
      reusableContentIComboBoxOption: reusableContentIComboBoxOption,
      
      itemsSolvants: itemsSolvants,
      solvantsIComboBoxOption: solvantsIComboBoxOption,

      itemsStabilis: itemsStabilis,
      stabilisIComboBoxOption: stabilisIComboBoxOption,

      itemsToxicFilter: itemsToxicFilter,
      toxicFilterIComboBoxOption: toxicFilterIComboBoxOption,

      itemsToxiciteComplement: itemsToxiciteComplement,
      toxiciteComplementIComboBoxOption: toxiciteComplementIComboBoxOption,
    });

    // var test : string = await this.internalSafetyDataSheetService.GetUserMail(23);
    // console.log(test);
  }

  private async loadComboBoxOptions(items: any[], baseComboBoxOption: IComboBoxOption[]): Promise<IComboBoxOption[]> {        
    items.forEach(element => {
      var nwOption : IComboBoxOption = {key:element['ID'] , text: element['Title']};
      baseComboBoxOption.push(nwOption);
    });
    return baseComboBoxOption;
  }

  public componentWillUnmount(): void {
    Log.info(LOG_SOURCE, 'React Element: FirmenichCustomForm unmounted');
  }

  public render(): React.ReactElement<{}> {
    
    let viewForm : JSX.Element = (
      <div>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={4}>
            <TextField 
              label='Produit'
              value={this.state.Prodnom}
              disabled={true}
            />
          </Stack.Item>
          <Stack.Item grow={2}>
            <TextField 
              label="Nº d'item"
              value={this.state.title}
              disabled={true}               
            />
          </Stack.Item>
        </Stack>
        <br />
        <br />

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={3}>
            <TextField 
              label="Mention d'advertissement"
              value={this.state.Mention} 
              disabled={true}
            />
          </Stack.Item>
          <Stack.Item grow={3}>
            {/* UBICAR AQUÍ LAS IMAGENES */}
          </Stack.Item>
        </Stack>
        <br />
        <br /> 

        <Label>Dangers principaux</Label>       
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={7}>
            <TextField
              // label='Dangers principaux'
              ariaLabel="Without visible label" 
              value={this.state.itemsDangersSelectedText} 
              disabled={true}
            />
          </Stack.Item>          
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={7}>
            <TextField 
              label="Nom chimique ou composition"
              value={this.state.Nomchimique} 
              disabled={true}
            />
          </Stack.Item>          
        </Stack> 

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={5}>
            <TextField 
              label='Nº CAS'
              value={this.state.NoCAS} 
              disabled={true}
            />
          </Stack.Item>
          <Stack.Item grow={1}>
            <TextField 
              label="Nº UN"
              value={this.state.CodeOnu} 
              disabled={true}
            />
          </Stack.Item>
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={5}>
            <TextField 
              label='Formule brute'
              value={this.state.NomChim} 
              onChange={(e, NomChim) => {           
                this.setState({NomChim: NomChim}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={1}>
            <TextField 
              label="MM"
              value={this.state.Poidsmol} 
              onChange={(e, Poidsmol) => {           
                this.setState({Poidsmol: Poidsmol}); 
              }}
            />
          </Stack.Item>
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={5}>
            <Label>Etat physique</Label>                       
            <Stack.Item grow={0}>
              <TextField 
                ariaLabel="Without visible label" 
                value={this.state.itemsAspectSelectedText} 
                onChange={(e, text) => {
                  this.setState({itemsAspectSelectedText: text}); 
                }}
              />
            </Stack.Item>
            <Stack.Item grow={0}>
              <ComboBox
                multiSelect
                className={styles.comboBoxTEEEEEEST}
                options={this.state.aspectIComboBoxOption}
                styles={comboBoxStyles}
                buttonIconProps={{ iconName: 'More' }}
                onChange={(e, selectedOption) => {   
                  var itemsAspectTextSelected : string = this.state.itemsAspectSelectedText;
                  var valueSelected : string = selectedOption.text.concat(", ");
                  if(selectedOption.selected){
                    itemsAspectTextSelected = itemsAspectTextSelected.length == 0 ? valueSelected : itemsAspectTextSelected.concat(valueSelected);                
                  }
                  else{
                    itemsAspectTextSelected = itemsAspectTextSelected.length == 0 ? "" : itemsAspectTextSelected.replace(valueSelected, "");
                  }
                  this.setState({itemsAspectSelectedText: itemsAspectTextSelected});                
                }}
              />
            </Stack.Item> 
          </Stack.Item>          
          <Stack.Item grow={1}>
            <Label>Couleur</Label>
            <Stack.Item grow={0}>
              <TextField 
                ariaLabel="Without visible label" 
                value={this.state.itemsCouleurSelectedText} 
                onChange={(e, text) => {
                  this.setState({itemsCouleurSelectedText: text}); 
                }}
              />
            </Stack.Item>
            <Stack.Item grow={0}>
              <ComboBox
                multiSelect
                className={styles.comboBoxTEEEEEEST}
                options={this.state.couleurIComboBoxOption}
                styles={comboBoxStyles}
                buttonIconProps={{ iconName: 'More' }}
                onChange={(e, selectedOption) => {   
                  var itemsCouleurTextSelected : string = this.state.itemsCouleurSelectedText;
                  var valueSelected : string = selectedOption.text.concat(", ");
                  if(selectedOption.selected){
                    itemsCouleurTextSelected = itemsCouleurTextSelected.length == 0 ? valueSelected : itemsCouleurTextSelected.concat(valueSelected);                
                  }
                  else{
                    itemsCouleurTextSelected = itemsCouleurTextSelected.length == 0 ? "" : itemsCouleurTextSelected.replace(valueSelected, "");
                  }
                  this.setState({itemsCouleurSelectedText: itemsCouleurTextSelected});                
                }}
              />
            </Stack.Item>
          </Stack.Item>
        </Stack>

        <Label>Odeur</Label>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={6}>
            <TextField 
              ariaLabel="Without visible label" 
              value={this.state.itemsOdeurSelectedText} 
              onChange={(e, text) => {
                this.setState({itemsOdeurSelectedText: text}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={0}>
            <ComboBox
              multiSelect
              className={styles.comboBoxTEEEEEEST}
              options={this.state.odeurIComboBoxOption}
              styles={comboBoxStyles}
              buttonIconProps={{ iconName: 'More' }}
              onChange={(e, selectedOption) => {   
                var itemsOdeurFilterSelected : string = this.state.itemsOdeurSelectedText;
                var valueSelected : string = selectedOption.text.concat(", ");
                if(selectedOption.selected){
                  itemsOdeurFilterSelected = itemsOdeurFilterSelected.length == 0 ? valueSelected : itemsOdeurFilterSelected.concat(valueSelected);                
                }
                else{
                  itemsOdeurFilterSelected = itemsOdeurFilterSelected.length == 0 ? "" : itemsOdeurFilterSelected.replace(valueSelected, "");
                }
                this.setState({itemsOdeurSelectedText: itemsOdeurFilterSelected});                
              }}
            />
          </Stack.Item>
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={7}>
            <TextField 
              label="Commentaires additionnels"
              value={this.state.Comment1} 
              onChange={(e, Comment1) => {           
                this.setState({Comment1: Comment1}); 
              }}
            />
          </Stack.Item>          
        </Stack>
        <br />
        <br />

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={7}>
            <Label>Propriétés physiques et valeurs toxicologiques</Label>
          </Stack.Item>          
        </Stack>
        
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={4}>
            <TextField 
              label="Point d'eclair (º C)"
              value={this.state.Pointec} 
              onChange={(e, Pointec) => {           
                this.setState({Pointec: Pointec}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={2}>
            <TextField 
              label="Point de fusion (º C)"
              value={this.state.Pointfus} 
              onChange={(e, Pointfus) => {           
                this.setState({Pointfus: Pointfus}); 
              }}
            />
          </Stack.Item>
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={4}>
            <TextField 
              label="Point d'auto inflammation (º C)"
              value={this.state.Pointif} 
              onChange={(e, Pointif) => {           
                this.setState({Pointif: Pointif}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={2}>
            <TextField 
              label="Point d'ebullition (º C)"
              value={this.state.Pointeb} 
              onChange={(e, Pointeb) => {           
                this.setState({Pointeb: Pointeb}); 
              }}
            />
          </Stack.Item>
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={4}>
            <TextField 
              label="Limite inférieure d’inflammation"
              value={this.state.Infinflammation} 
              onChange={(e, Infinflammation) => {           
                this.setState({Infinflammation: Infinflammation}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={2}>
            <TextField 
              label="Densité"
              value={this.state.Densite} 
              onChange={(e, Densite) => {           
                this.setState({Densite: Densite}); 
              }}
            />
          </Stack.Item>
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={4}>
            <TextField 
              label="Limite supérieure d’inflammation"
              value={this.state.Supinflammation } 
              onChange={(e, Supinflammation ) => {           
                this.setState({Supinflammation : Supinflammation }); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={2}>
            <TextField 
              label="Densité vapeur (air 20ºC =1)"
              value={this.state.Densvap} 
              onChange={(e, Densvap) => {           
                this.setState({Densvap: Densvap}); 
              }}
            />
          </Stack.Item>
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={4}>
            <TextField 
              label="Tension de vapeur"
              value={this.state.Tensvap } 
              onChange={(e, Tensvap ) => {           
                this.setState({Tensvap : Tensvap }); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={2}>
            <Label>Aquí tiene que ir Solvants (campo Choice no lista maestra)</Label>
          </Stack.Item>
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={4}>
            <TextField 
              label="VME (ppm) (mg/m3)"
              value={this.state.Vmeppm } 
              onChange={(e, Vmeppm ) => {           
                this.setState({Vmeppm : Vmeppm }); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={2}>
            <TextField 
              label="CL50 (inhal-mg/l)"
              value={this.state.CL50inhal} 
              onChange={(e, CL50inhal) => {           
                this.setState({CL50inhal: CL50inhal}); 
              }}
            />
          </Stack.Item>
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={4}>
            <TextField 
              label="VLE (ppm) (mg/m3)"
              value={this.state.Vleppm } 
              onChange={(e, Vleppm ) => {           
                this.setState({Vleppm : Vleppm }); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={2}>
            <TextField 
              label="DL50 (dermal-mg/kg)"
              value={this.state.DL50dermal} 
              onChange={(e, DL50dermal) => {           
                this.setState({DL50dermal: DL50dermal}); 
              }}
            />
          </Stack.Item>
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={4}>
            <TextField 
              label="CE50 (mg/l) (48h)"
              value={this.state.CE50mg } 
              onChange={(e, CE50mg ) => {           
                this.setState({CE50mg : CE50mg }); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={2}>
            <TextField 
              label="DL50 (oral-g/kg)"
              value={this.state.DL50} 
              onChange={(e, DL50) => {           
                this.setState({DL50: DL50}); 
              }}
            />
          </Stack.Item>
        </Stack>
        <br />
        <br />

        <Label>Dangers d’incendie et d’explosion</Label>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={6}>
            <TextField 
              ariaLabel="Without visible label" 
              value={this.state.itemsDangexiFilterSelectedText} 
              onChange={(e, text) => {
                this.setState({itemsDangexiFilterSelectedText: text}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={0}>
            <ComboBox
              multiSelect
              className={styles.comboBoxTEEEEEEST}
              options={this.state.dangexiFilterIComboBoxOption}
              styles={comboBoxStyles}
              buttonIconProps={{ iconName: 'More' }}
              onChange={(e, selectedOption) => {   
                var itemsDangexiTextSelected : string = this.state.itemsDangexiFilterSelectedText;
                var valueSelected : string = selectedOption.text.concat(", ");
                var item : any = this.state.itemsDangexiFilter.filter( item => item.ID == selectedOption.key); 
                
                var arrayPictures : string[] = this.state.urlsPicturesSelected;
                var itemsPicsSelected : any[] = this.state.itemsPicsSelected
                
                if(selectedOption.selected){
                  itemsDangexiTextSelected = itemsDangexiTextSelected.length == 0 ? valueSelected : itemsDangexiTextSelected.concat(valueSelected); 
                  
                  itemsPicsSelected.push(item[0]);

                  if(item[0]['Picture'] != null){
                    if(arrayPictures.length == 0 || arrayPictures.indexOf(item[0]['Picture']) == -1){
                      arrayPictures.push(item[0]['Picture']);
                    } 
                  } 
                }
                else{itemsDangexiTextSelected
                  itemsDangexiTextSelected = itemsDangexiTextSelected.length == 0 ? "" : itemsDangexiTextSelected.replace(valueSelected, "");

                  itemsPicsSelected = itemsPicsSelected.filter( i => i.Id !== selectedOption.key && i['Title'] !== selectedOption.text);

                  if(item[0]['Picture'] != null && itemsPicsSelected.filter( i => i['Picture'] == item[0]['Picture']).length == 0){
                    arrayPictures =  arrayPictures.filter( i => i !== item[0]['Picture']);
                  }
                }

                this.setState({
                  itemsDangexiFilterSelectedText: itemsDangexiTextSelected,
                  urlsPicturesSelected: arrayPictures,
                  itemsPicsSelected: itemsPicsSelected
                });                
              }}
            />
          </Stack.Item>
        </Stack>
             
        <Label>Complément</Label>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={6}>
            <TextField 
              ariaLabel="Without visible label" 
              value={this.state.itemsDangersComplementSelectedText} 
              onChange={(e, text) => {
                this.setState({itemsDangersComplementSelectedText: text}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={0}>
            <ComboBox
              multiSelect
              className={styles.comboBoxTEEEEEEST}
              options={this.state.dangersComplementIComboBoxOption}
              styles={comboBoxStyles}
              buttonIconProps={{ iconName: 'More' }}
              onChange={(e, selectedOption) => {   
                var itemsDangersComplementTextSelected : string = this.state.itemsDangersComplementSelectedText;
                var valueSelected : string = selectedOption.text.concat(", ");
                if(selectedOption.selected){
                  itemsDangersComplementTextSelected = itemsDangersComplementTextSelected.length == 0 ? valueSelected : itemsDangersComplementTextSelected.concat(valueSelected);                
                }
                else{
                  itemsDangersComplementTextSelected = itemsDangersComplementTextSelected.length == 0 ? "" : itemsDangersComplementTextSelected.replace(valueSelected, "");
                }
                this.setState({itemsDangersComplementSelectedText: itemsDangersComplementTextSelected});                
              }}
            />
          </Stack.Item>
        </Stack>

        <Label>Toxicité</Label>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={6}>
            <TextField 
              ariaLabel="Without visible label" 
              value={this.state.itemsToxicFilterSelectedText} 
              onChange={(e, text) => {
                this.setState({itemsToxicFilterSelectedText: text}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={0}>
            <ComboBox
              multiSelect
              className={styles.comboBoxTEEEEEEST}
              options={this.state.toxicFilterIComboBoxOption}
              styles={comboBoxStyles}
              buttonIconProps={{ iconName: 'More' }}
              onChange={(e, selectedOption) => {   
                var itemsToxicFilterFilterSelected : string = this.state.itemsToxicFilterSelectedText;
                var valueSelected : string = selectedOption.text.concat(", "); 
                var item : any = this.state.itemsToxicFilter.filter( item => item.ID == selectedOption.key); 
                
                var arrayPictures : string[] = this.state.urlsPicturesSelected;
                var itemsPicsSelected : any[] = this.state.itemsPicsSelected

                if(selectedOption.selected){                  
                  itemsToxicFilterFilterSelected = itemsToxicFilterFilterSelected.length == 0 ? valueSelected : itemsToxicFilterFilterSelected.concat(valueSelected); 

                  itemsPicsSelected.push(item[0]);

                  if(item[0]['Picture'] != null){
                    if(arrayPictures.length == 0 || arrayPictures.indexOf(item[0]['Picture']) == -1){
                      arrayPictures.push(item[0]['Picture']);
                    } 
                  }                    
                }
                else{
                  itemsToxicFilterFilterSelected = itemsToxicFilterFilterSelected.length == 0 ? "" : itemsToxicFilterFilterSelected.replace(valueSelected, "");
                  
                  itemsPicsSelected = itemsPicsSelected.filter( i => i.Id !== selectedOption.key && i['Title'] !== selectedOption.text);

                  if(item[0]['Picture'] != null && itemsPicsSelected.filter( i => i['Picture'] == item[0]['Picture']).length == 0){
                    arrayPictures =  arrayPictures.filter( i => i !== item[0]['Picture']);
                  }

                }                


                this.setState({
                  itemsToxicFilterSelectedText: itemsToxicFilterFilterSelected,
                  urlsPicturesSelected: arrayPictures,
                  itemsPicsSelected: itemsPicsSelected
                });
                          
              }}
            />
          </Stack.Item>
        </Stack>

        <Label>Complément</Label>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={6}>
            <TextField 
              ariaLabel="Without visible label" 
              value={this.state.itemsToxiciteComplementSelectedText} 
              onChange={(e, text) => {
                this.setState({itemsToxiciteComplementSelectedText: text}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={0}>
            <ComboBox
              multiSelect
              className={styles.comboBoxTEEEEEEST}
              options={this.state.toxiciteComplementIComboBoxOption}
              styles={comboBoxStyles}
              buttonIconProps={{ iconName: 'More' }}
              onChange={(e, selectedOption) => {   
                var itemsToxiciteComplementFilterSelected : string = this.state.itemsToxiciteComplementSelectedText;
                var valueSelected : string = selectedOption.text.concat(", ");
                if(selectedOption.selected){
                  itemsToxiciteComplementFilterSelected = itemsToxiciteComplementFilterSelected.length == 0 ? valueSelected : itemsToxiciteComplementFilterSelected.concat(valueSelected);                
                }
                else{
                  itemsToxiciteComplementFilterSelected = itemsToxiciteComplementFilterSelected.length == 0 ? "" : itemsToxiciteComplementFilterSelected.replace(valueSelected, "");
                }
                this.setState({itemsToxiciteComplementSelectedText: itemsToxiciteComplementFilterSelected});                
              }}
            />
          </Stack.Item>
        </Stack>

        <Label>EPI additionnels requis</Label>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={6}>
            <TextField 
              ariaLabel="Without visible label" 
              value={this.state.itemsProtectionSelectedText} 
              onChange={(e, text) => {
                this.setState({itemsProtectionSelectedText: text}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={0}>
            <ComboBox
              multiSelect
              className={styles.comboBoxTEEEEEEST}
              options={this.state.protectionIComboBoxOption}
              styles={comboBoxStyles}
              buttonIconProps={{ iconName: 'More' }}
              onChange={(e, selectedOption) => {   
                var itemsProtectionFilterSelected : string = this.state.itemsProtectionSelectedText;
                var valueSelected : string = selectedOption.text.concat(", ");
                if(selectedOption.selected){
                  itemsProtectionFilterSelected = itemsProtectionFilterSelected.length == 0 ? valueSelected : itemsProtectionFilterSelected.concat(valueSelected);                
                }
                else{
                  itemsProtectionFilterSelected = itemsProtectionFilterSelected.length == 0 ? "" : itemsProtectionFilterSelected.replace(valueSelected, "");
                }
                this.setState({itemsProtectionSelectedText: itemsProtectionFilterSelected});                
              }}
            />
          </Stack.Item>
        </Stack>

        <Label>Mesures particulières</Label>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={6}>
            <TextField 
              ariaLabel="Without visible label" 
              value={this.state.itemsMesuresParticuileresSelectedText} 
              onChange={(e, text) => {
                this.setState({itemsMesuresParticuileresSelectedText: text}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={0}>
            <ComboBox
              multiSelect
              className={styles.comboBoxTEEEEEEST}
              options={this.state.mesuresParticuileresIComboBoxOption}
              styles={comboBoxStyles}
              buttonIconProps={{ iconName: 'More' }}
              onChange={(e, selectedOption) => {   
                var itemsMesuresParticuileresFilterSelected : string = this.state.itemsMesuresParticuileresSelectedText;
                var valueSelected : string = selectedOption.text.concat(", ");
                if(selectedOption.selected){
                  itemsMesuresParticuileresFilterSelected = itemsMesuresParticuileresFilterSelected.length == 0 ? valueSelected : itemsMesuresParticuileresFilterSelected.concat(valueSelected);                
                }
                else{
                  itemsMesuresParticuileresFilterSelected = itemsMesuresParticuileresFilterSelected.length == 0 ? "" : itemsMesuresParticuileresFilterSelected.replace(valueSelected, "");
                }
                this.setState({itemsMesuresParticuileresSelectedText: itemsMesuresParticuileresFilterSelected});                
              }}
            />
          </Stack.Item>
        </Stack>

        <Label>Environment</Label>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={6}>
            <TextField 
              ariaLabel="Without visible label" 
              value={this.state.itemsEnvironmentFilterSelectedText} 
              onChange={(e, text) => {
                this.setState({itemsEnvironmentFilterSelectedText: text}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={0}>
            <ComboBox
              multiSelect
              className={styles.comboBoxTEEEEEEST}
              options={this.state.environmentFilterIComboBoxOption}
              styles={comboBoxStyles}
              buttonIconProps={{ iconName: 'More' }}
              onChange={(e, selectedOption) => {   
                var itemsEnvironmentFilterSelected : string = this.state.itemsEnvironmentFilterSelectedText;
                var valueSelected : string = selectedOption.text.concat(", ");
                var item : any = this.state.itemsEnvironmentFilter.filter( item => item.ID == selectedOption.key); 
                
                var arrayPictures : string[] = this.state.urlsPicturesSelected;
                var itemsPicsSelected : any[] = this.state.itemsPicsSelected

                if(selectedOption.selected){
                  itemsEnvironmentFilterSelected = itemsEnvironmentFilterSelected.length == 0 ? valueSelected : itemsEnvironmentFilterSelected.concat(valueSelected);  

                  itemsPicsSelected.push(item[0]);

                  if(item[0]['Picture'] != null){
                    if(arrayPictures.length == 0 || arrayPictures.indexOf(item[0]['Picture']) == -1){
                      arrayPictures.push(item[0]['Picture']);
                    } 
                  }               
                }
                else{
                  itemsEnvironmentFilterSelected = itemsEnvironmentFilterSelected.length == 0 ? "" : itemsEnvironmentFilterSelected.replace(valueSelected, "");

                  itemsPicsSelected = itemsPicsSelected.filter( i => i.Id !== selectedOption.key && i['Title'] !== selectedOption.text);

                  if(item[0]['Picture'] != null && itemsPicsSelected.filter( i => i['Picture'] == item[0]['Picture']).length == 0){
                    arrayPictures =  arrayPictures.filter( i => i !== item[0]['Picture']);
                  }
                }
                this.setState({
                  itemsEnvironmentFilterSelectedText: itemsEnvironmentFilterSelected,
                  urlsPicturesSelected: arrayPictures,
                  itemsPicsSelected: itemsPicsSelected
                });                
              }}
            />
          </Stack.Item>
        </Stack>
        <br />
        <br />

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={7}>
            <Label>Comportement en cas d’accident</Label>
          </Stack.Item>          
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={7}>
            <TextField 
              label='Epandage'
              ariaLabel="Without visible label" 
              value={this.state.EpandageText} 
              onChange={(e, text) => {
                this.setState({EpandageText: text}); 
              }}
            />
          </Stack.Item>          
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={7}>
            <TextField 
              label='Feu'
              ariaLabel="Without visible label" 
              value={this.state.AccifeuEdited} 
              onChange={(e, text) => {
                this.setState({AccifeuEdited: text}); 
              }}
            />
          </Stack.Item>          
        </Stack>
        <br />
        <br />

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={7}>
            <Label>Premiers secours</Label>
          </Stack.Item>          
        </Stack>

        <Label>Inhalation</Label>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={6}>
            <TextField 
              ariaLabel="Without visible label" 
              value={this.state.itemsCorpsecrespSelectedText} 
              onChange={(e, text) => {
                this.setState({itemsCorpsecrespSelectedText: text}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={0}>
            <ComboBox
              multiSelect
              className={styles.comboBoxTEEEEEEST}
              options={this.state.corpsecrespIComboBoxOption}
              styles={comboBoxStyles}
              buttonIconProps={{ iconName: 'More' }}
              onChange={(e, selectedOption) => {   
                var itemsCorpsecrespTextSelected : string = this.state.itemsCorpsecrespSelectedText;
                var valueSelected : string = selectedOption.text.concat(", ");
                if(selectedOption.selected){
                  itemsCorpsecrespTextSelected = itemsCorpsecrespTextSelected.length == 0 ? valueSelected : itemsCorpsecrespTextSelected.concat(valueSelected);                
                }
                else{
                  itemsCorpsecrespTextSelected = itemsCorpsecrespTextSelected.length == 0 ? "" : itemsCorpsecrespTextSelected.replace(valueSelected, "");
                }
                this.setState({itemsCorpsecrespSelectedText: itemsCorpsecrespTextSelected});                
              }}
            />
          </Stack.Item>
        </Stack>

        <Label>Peau</Label>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={6}>
            <TextField 
              ariaLabel="Without visible label" 
              value={this.state.itemsCorpsecpeauSelectedText} 
              onChange={(e, text) => {
                this.setState({itemsCorpsecpeauSelectedText: text}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={0}>
            <ComboBox
              multiSelect
              className={styles.comboBoxTEEEEEEST}
              options={this.state.corpsecpeauIComboBoxOption}
              styles={comboBoxStyles}
              buttonIconProps={{ iconName: 'More' }}
              onChange={(e, selectedOption) => {   
                var itemsCorpsecpeauTextSelected : string = this.state.itemsCorpsecpeauSelectedText;
                var valueSelected : string = selectedOption.text.concat(", ");
                if(selectedOption.selected){
                  itemsCorpsecpeauTextSelected = itemsCorpsecpeauTextSelected.length == 0 ? valueSelected : itemsCorpsecpeauTextSelected.concat(valueSelected);                
                }
                else{
                  itemsCorpsecpeauTextSelected = itemsCorpsecpeauTextSelected.length == 0 ? "" : itemsCorpsecpeauTextSelected.replace(valueSelected, "");
                }
                this.setState({itemsCorpsecpeauSelectedText: itemsCorpsecpeauTextSelected});                
              }}
            />
          </Stack.Item>
        </Stack>
        
        <Label>Yeux</Label>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={6}>
            <TextField 
              ariaLabel="Without visible label" 
              value={this.state.itemsCorpsecyeuxSelectedText} 
              onChange={(e, text) => {
                this.setState({itemsCorpsecyeuxSelectedText: text}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={0}>
            <ComboBox
              multiSelect
              className={styles.comboBoxTEEEEEEST}
              options={this.state.corpsecyeuxIComboBoxOption}
              styles={comboBoxStyles}
              buttonIconProps={{ iconName: 'More' }}
              onChange={(e, selectedOption) => {   
                var itemsCorpsecyeuxTextSelected : string = this.state.itemsCorpsecyeuxSelectedText;
                var valueSelected : string = selectedOption.text.concat(", ");
                if(selectedOption.selected){
                  itemsCorpsecyeuxTextSelected = itemsCorpsecyeuxTextSelected.length == 0 ? valueSelected : itemsCorpsecyeuxTextSelected.concat(valueSelected);                
                }
                else{
                  itemsCorpsecyeuxTextSelected = itemsCorpsecyeuxTextSelected.length == 0 ? "" : itemsCorpsecyeuxTextSelected.replace(valueSelected, "");
                }
                this.setState({itemsCorpsecyeuxSelectedText: itemsCorpsecyeuxTextSelected});                
              }}
            />
          </Stack.Item>
        </Stack>
        <br />
        <br />

        <Label>References</Label>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={6}>
            <TextField 
              ariaLabel="Without visible label" 
              value={this.state.itemsReferenceSelectedText} 
              onChange={(e, text) => {
                this.setState({itemsReferenceSelectedText: text}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={0}>
            <ComboBox
              multiSelect
              className={styles.comboBoxTEEEEEEST}
              options={this.state.referenceIComboBoxOption}
              styles={comboBoxStyles}
              buttonIconProps={{ iconName: 'More' }}
              onChange={(e, selectedOption) => {   
                var itemsReferenceFilterSelected : string = this.state.itemsReferenceSelectedText;
                var valueSelected : string = selectedOption.text.concat(", ");
                if(selectedOption.selected){
                  itemsReferenceFilterSelected = itemsReferenceFilterSelected.length == 0 ? valueSelected : itemsReferenceFilterSelected.concat(valueSelected);                
                }
                else{
                  itemsReferenceFilterSelected = itemsReferenceFilterSelected.length == 0 ? "" : itemsReferenceFilterSelected.replace(valueSelected, "");
                }
                this.setState({itemsReferenceSelectedText: itemsReferenceFilterSelected});                
              }}
            />
          </Stack.Item>
        </Stack>
        <br />
        <br />

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={7}>
            <TextField 
              label='Rédaction'
              ariaLabel="Without visible label" 
              value={this.state.Modifdoc} 
              onChange={(e, text) => {
                this.setState({Modifdoc: text}); 
              }}
            />
          </Stack.Item>          
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={7}>
            <TextField 
              label='Approuvé le'
              ariaLabel="Without visible label" 
              value={this.state.Visadate} 
              onChange={(e, text) => {
                this.setState({Visadate: text}); 
              }}
            />
          </Stack.Item>          
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={7}>
            <TextField 
              label='PAR'
              ariaLabel="Without visible label" 
              value={this.state.Visapers} 
              onChange={(e, text) => {
                this.setState({Visapers: text}); 
              }}
            />
          </Stack.Item>          
        </Stack>
      </div>);

    let editForm : JSX.Element = (
      <div>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={4}>
            <TextField 
              label='Produit'
              value={this.state.Prodnom} 
              onChange={(e, Prodnom) => {           
                this.setState({Prodnom: Prodnom}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={2}>
            <TextField 
              label="Nº d'item"
              value={this.state.title} 
              onChange={(e, title) => {           
                this.setState({title: title}); 
              }}
            />
          </Stack.Item>
        </Stack>
        <br />
        <br />

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={3}>
            <TextField 
              label="Mention d'advertissement"
              value={this.state.Mention} 
              onChange={(e, Mention) => {           
                this.setState({Mention: Mention}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={3}>
            {/* UBICAR AQUÍ LAS IMAGENES */}
          </Stack.Item>
        </Stack>
        <br />
        <br /> 

        <Label>Dangers principaux</Label>       
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={6}>
            <TextField
              // label='Dangers principaux'
              ariaLabel="Without visible label" 
              value={this.state.itemsDangersSelectedText} 
              onChange={(e, text) => {
                this.setState({itemsDangersSelectedText: text}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={0}>
            <ComboBox
              multiSelect
              className={styles.comboBoxTEEEEEEST}
              options={this.state.dangersIComboBoxOption}
              styles={comboBoxStyles}
              buttonIconProps={{ iconName: 'More' }}
              onChange={(e, selectedOption) => {   
                var itemsDangersTextSelected : string = this.state.itemsDangersSelectedText;
                var valueSelected : string = selectedOption.text.concat(", ");
                if(selectedOption.selected){
                  itemsDangersTextSelected = itemsDangersTextSelected.length == 0 ? valueSelected : itemsDangersTextSelected.concat(valueSelected);                
                }
                else{
                  itemsDangersTextSelected = itemsDangersTextSelected.length == 0 ? "" : itemsDangersTextSelected.replace(valueSelected, "");
                }
                this.setState({itemsDangersSelectedText: itemsDangersTextSelected});                
              }}
            />
          </Stack.Item>
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={7}>
            <TextField 
              label="Nom chimique ou composition"
              value={this.state.Nomchimique} 
              onChange={(e, Nomchimique) => {           
                this.setState({Nomchimique: Nomchimique}); 
              }}
            />
          </Stack.Item>          
        </Stack> 

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={5}>
            <TextField 
              label='Nº CAS'
              value={this.state.NoCAS} 
              onChange={(e, NoCAS) => {           
                this.setState({NoCAS: NoCAS}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={1}>
            <TextField 
              label="Nº UN"
              value={this.state.CodeOnu} 
              onChange={(e, CodeOnu) => {           
                this.setState({CodeOnu: CodeOnu}); 
              }}
            />
          </Stack.Item>
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={5}>
            <TextField 
              label='Formule brute'
              value={this.state.NomChim} 
              onChange={(e, NomChim) => {           
                this.setState({NomChim: NomChim}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={1}>
            <TextField 
              label="MM"
              value={this.state.Poidsmol} 
              onChange={(e, Poidsmol) => {           
                this.setState({Poidsmol: Poidsmol}); 
              }}
            />
          </Stack.Item>
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={5}>
            <Label>Etat physique</Label>                       
            <Stack.Item grow={0}>
              <TextField 
                ariaLabel="Without visible label" 
                value={this.state.itemsAspectSelectedText} 
                onChange={(e, text) => {
                  this.setState({itemsAspectSelectedText: text}); 
                }}
              />
            </Stack.Item>
            <Stack.Item grow={0}>
              <ComboBox
                multiSelect
                className={styles.comboBoxTEEEEEEST}
                options={this.state.aspectIComboBoxOption}
                styles={comboBoxStyles}
                buttonIconProps={{ iconName: 'More' }}
                onChange={(e, selectedOption) => {   
                  var itemsAspectTextSelected : string = this.state.itemsAspectSelectedText;
                  var valueSelected : string = selectedOption.text.concat(", ");
                  if(selectedOption.selected){
                    itemsAspectTextSelected = itemsAspectTextSelected.length == 0 ? valueSelected : itemsAspectTextSelected.concat(valueSelected);                
                  }
                  else{
                    itemsAspectTextSelected = itemsAspectTextSelected.length == 0 ? "" : itemsAspectTextSelected.replace(valueSelected, "");
                  }
                  this.setState({itemsAspectSelectedText: itemsAspectTextSelected});                
                }}
              />
            </Stack.Item> 
          </Stack.Item>          
          <Stack.Item grow={1}>
            <Label>Couleur</Label>
            <Stack.Item grow={0}>
              <TextField 
                ariaLabel="Without visible label" 
                value={this.state.itemsCouleurSelectedText} 
                onChange={(e, text) => {
                  this.setState({itemsCouleurSelectedText: text}); 
                }}
              />
            </Stack.Item>
            <Stack.Item grow={0}>
              <ComboBox
                multiSelect
                className={styles.comboBoxTEEEEEEST}
                options={this.state.couleurIComboBoxOption}
                styles={comboBoxStyles}
                buttonIconProps={{ iconName: 'More' }}
                onChange={(e, selectedOption) => {   
                  var itemsCouleurTextSelected : string = this.state.itemsCouleurSelectedText;
                  var valueSelected : string = selectedOption.text.concat(", ");
                  if(selectedOption.selected){
                    itemsCouleurTextSelected = itemsCouleurTextSelected.length == 0 ? valueSelected : itemsCouleurTextSelected.concat(valueSelected);                
                  }
                  else{
                    itemsCouleurTextSelected = itemsCouleurTextSelected.length == 0 ? "" : itemsCouleurTextSelected.replace(valueSelected, "");
                  }
                  this.setState({itemsCouleurSelectedText: itemsCouleurTextSelected});                
                }}
              />
            </Stack.Item>
          </Stack.Item>
        </Stack>

        <Label>Odeur</Label>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={6}>
            <TextField 
              ariaLabel="Without visible label" 
              value={this.state.itemsOdeurSelectedText} 
              onChange={(e, text) => {
                this.setState({itemsOdeurSelectedText: text}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={0}>
            <ComboBox
              multiSelect
              className={styles.comboBoxTEEEEEEST}
              options={this.state.odeurIComboBoxOption}
              styles={comboBoxStyles}
              buttonIconProps={{ iconName: 'More' }}
              onChange={(e, selectedOption) => {   
                var itemsOdeurFilterSelected : string = this.state.itemsOdeurSelectedText;
                var valueSelected : string = selectedOption.text.concat(", ");
                if(selectedOption.selected){
                  itemsOdeurFilterSelected = itemsOdeurFilterSelected.length == 0 ? valueSelected : itemsOdeurFilterSelected.concat(valueSelected);                
                }
                else{
                  itemsOdeurFilterSelected = itemsOdeurFilterSelected.length == 0 ? "" : itemsOdeurFilterSelected.replace(valueSelected, "");
                }
                this.setState({itemsOdeurSelectedText: itemsOdeurFilterSelected});                
              }}
            />
          </Stack.Item>
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={7}>
            <TextField 
              label="Commentaires additionnels"
              value={this.state.Comment1} 
              onChange={(e, Comment1) => {           
                this.setState({Comment1: Comment1}); 
              }}
            />
          </Stack.Item>          
        </Stack>
        <br />
        <br />

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={7}>
            <Label>Propriétés physiques et valeurs toxicologiques</Label>
          </Stack.Item>          
        </Stack>
        
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={4}>
            <TextField 
              label="Point d'eclair (º C)"
              value={this.state.Pointec} 
              onChange={(e, Pointec) => {           
                this.setState({Pointec: Pointec}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={2}>
            <TextField 
              label="Point de fusion (º C)"
              value={this.state.Pointfus} 
              onChange={(e, Pointfus) => {           
                this.setState({Pointfus: Pointfus}); 
              }}
            />
          </Stack.Item>
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={4}>
            <TextField 
              label="Point d'auto inflammation (º C)"
              value={this.state.Pointif} 
              onChange={(e, Pointif) => {           
                this.setState({Pointif: Pointif}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={2}>
            <TextField 
              label="Point d'ebullition (º C)"
              value={this.state.Pointeb} 
              onChange={(e, Pointeb) => {           
                this.setState({Pointeb: Pointeb}); 
              }}
            />
          </Stack.Item>
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={4}>
            <TextField 
              label="Limite inférieure d’inflammation"
              value={this.state.Infinflammation} 
              onChange={(e, Infinflammation) => {           
                this.setState({Infinflammation: Infinflammation}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={2}>
            <TextField 
              label="Densité"
              value={this.state.Densite} 
              onChange={(e, Densite) => {           
                this.setState({Densite: Densite}); 
              }}
            />
          </Stack.Item>
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={4}>
            <TextField 
              label="Limite supérieure d’inflammation"
              value={this.state.Supinflammation } 
              onChange={(e, Supinflammation ) => {           
                this.setState({Supinflammation : Supinflammation }); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={2}>
            <TextField 
              label="Densité vapeur (air 20ºC =1)"
              value={this.state.Densvap} 
              onChange={(e, Densvap) => {           
                this.setState({Densvap: Densvap}); 
              }}
            />
          </Stack.Item>
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={4}>
            <TextField 
              label="Tension de vapeur"
              value={this.state.Tensvap } 
              onChange={(e, Tensvap ) => {           
                this.setState({Tensvap : Tensvap }); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={2}>
            <Label>Aquí tiene que ir Solvants (campo Choice no lista maestra)</Label>
          </Stack.Item>
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={4}>
            <TextField 
              label="VME (ppm) (mg/m3)"
              value={this.state.Vmeppm } 
              onChange={(e, Vmeppm ) => {           
                this.setState({Vmeppm : Vmeppm }); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={2}>
            <TextField 
              label="CL50 (inhal-mg/l)"
              value={this.state.CL50inhal} 
              onChange={(e, CL50inhal) => {           
                this.setState({CL50inhal: CL50inhal}); 
              }}
            />
          </Stack.Item>
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={4}>
            <TextField 
              label="VLE (ppm) (mg/m3)"
              value={this.state.Vleppm } 
              onChange={(e, Vleppm ) => {           
                this.setState({Vleppm : Vleppm }); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={2}>
            <TextField 
              label="DL50 (dermal-mg/kg)"
              value={this.state.DL50dermal} 
              onChange={(e, DL50dermal) => {           
                this.setState({DL50dermal: DL50dermal}); 
              }}
            />
          </Stack.Item>
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={4}>
            <TextField 
              label="CE50 (mg/l) (48h)"
              value={this.state.CE50mg } 
              onChange={(e, CE50mg ) => {           
                this.setState({CE50mg : CE50mg }); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={2}>
            <TextField 
              label="DL50 (oral-g/kg)"
              value={this.state.DL50} 
              onChange={(e, DL50) => {           
                this.setState({DL50: DL50}); 
              }}
            />
          </Stack.Item>
        </Stack>
        <br />
        <br />

        <Label>Dangers d’incendie et d’explosion</Label>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={6}>
            <TextField 
              ariaLabel="Without visible label" 
              value={this.state.itemsDangexiFilterSelectedText} 
              onChange={(e, text) => {
                this.setState({itemsDangexiFilterSelectedText: text}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={0}>
            <ComboBox
              multiSelect
              className={styles.comboBoxTEEEEEEST}
              options={this.state.dangexiFilterIComboBoxOption}
              styles={comboBoxStyles}
              buttonIconProps={{ iconName: 'More' }}
              onChange={(e, selectedOption) => {   
                var itemsDangexiTextSelected : string = this.state.itemsDangexiFilterSelectedText;
                var valueSelected : string = selectedOption.text.concat(", ");
                var item : any = this.state.itemsDangexiFilter.filter( item => item.ID == selectedOption.key); 
                
                var arrayPictures : string[] = this.state.urlsPicturesSelected;
                var itemsPicsSelected : any[] = this.state.itemsPicsSelected
                
                if(selectedOption.selected){
                  itemsDangexiTextSelected = itemsDangexiTextSelected.length == 0 ? valueSelected : itemsDangexiTextSelected.concat(valueSelected); 
                  
                  itemsPicsSelected.push(item[0]);

                  if(item[0]['Picture'] != null){
                    if(arrayPictures.length == 0 || arrayPictures.indexOf(item[0]['Picture']) == -1){
                      arrayPictures.push(item[0]['Picture']);
                    } 
                  } 
                }
                else{itemsDangexiTextSelected
                  itemsDangexiTextSelected = itemsDangexiTextSelected.length == 0 ? "" : itemsDangexiTextSelected.replace(valueSelected, "");

                  itemsPicsSelected = itemsPicsSelected.filter( i => i.Id !== selectedOption.key && i['Title'] !== selectedOption.text);

                  if(item[0]['Picture'] != null && itemsPicsSelected.filter( i => i['Picture'] == item[0]['Picture']).length == 0){
                    arrayPictures =  arrayPictures.filter( i => i !== item[0]['Picture']);
                  }
                }

                this.setState({
                  itemsDangexiFilterSelectedText: itemsDangexiTextSelected,
                  urlsPicturesSelected: arrayPictures,
                  itemsPicsSelected: itemsPicsSelected
                });                
              }}
            />
          </Stack.Item>
        </Stack>
             
        <Label>Complément</Label>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={6}>
            <TextField 
              ariaLabel="Without visible label" 
              value={this.state.itemsDangersComplementSelectedText} 
              onChange={(e, text) => {
                this.setState({itemsDangersComplementSelectedText: text}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={0}>
            <ComboBox
              multiSelect
              className={styles.comboBoxTEEEEEEST}
              options={this.state.dangersComplementIComboBoxOption}
              styles={comboBoxStyles}
              buttonIconProps={{ iconName: 'More' }}
              onChange={(e, selectedOption) => {   
                var itemsDangersComplementTextSelected : string = this.state.itemsDangersComplementSelectedText;
                var valueSelected : string = selectedOption.text.concat(", ");
                if(selectedOption.selected){
                  itemsDangersComplementTextSelected = itemsDangersComplementTextSelected.length == 0 ? valueSelected : itemsDangersComplementTextSelected.concat(valueSelected);                
                }
                else{
                  itemsDangersComplementTextSelected = itemsDangersComplementTextSelected.length == 0 ? "" : itemsDangersComplementTextSelected.replace(valueSelected, "");
                }
                this.setState({itemsDangersComplementSelectedText: itemsDangersComplementTextSelected});                
              }}
            />
          </Stack.Item>
        </Stack>

        <Label>Toxicité</Label>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={6}>
            <TextField 
              ariaLabel="Without visible label" 
              value={this.state.itemsToxicFilterSelectedText} 
              onChange={(e, text) => {
                this.setState({itemsToxicFilterSelectedText: text}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={0}>
            <ComboBox
              multiSelect
              className={styles.comboBoxTEEEEEEST}
              options={this.state.toxicFilterIComboBoxOption}
              styles={comboBoxStyles}
              buttonIconProps={{ iconName: 'More' }}
              onChange={(e, selectedOption) => {   
                var itemsToxicFilterFilterSelected : string = this.state.itemsToxicFilterSelectedText;
                var valueSelected : string = selectedOption.text.concat(", "); 
                var item : any = this.state.itemsToxicFilter.filter( item => item.ID == selectedOption.key); 
                
                var arrayPictures : string[] = this.state.urlsPicturesSelected;
                var itemsPicsSelected : any[] = this.state.itemsPicsSelected

                if(selectedOption.selected){                  
                  itemsToxicFilterFilterSelected = itemsToxicFilterFilterSelected.length == 0 ? valueSelected : itemsToxicFilterFilterSelected.concat(valueSelected); 

                  itemsPicsSelected.push(item[0]);

                  if(item[0]['Picture'] != null){
                    if(arrayPictures.length == 0 || arrayPictures.indexOf(item[0]['Picture']) == -1){
                      arrayPictures.push(item[0]['Picture']);
                    } 
                  }                    
                }
                else{
                  itemsToxicFilterFilterSelected = itemsToxicFilterFilterSelected.length == 0 ? "" : itemsToxicFilterFilterSelected.replace(valueSelected, "");
                  
                  itemsPicsSelected = itemsPicsSelected.filter( i => i.Id !== selectedOption.key && i['Title'] !== selectedOption.text);

                  if(item[0]['Picture'] != null && itemsPicsSelected.filter( i => i['Picture'] == item[0]['Picture']).length == 0){
                    arrayPictures =  arrayPictures.filter( i => i !== item[0]['Picture']);
                  }

                }                


                this.setState({
                  itemsToxicFilterSelectedText: itemsToxicFilterFilterSelected,
                  urlsPicturesSelected: arrayPictures,
                  itemsPicsSelected: itemsPicsSelected
                });
                          
              }}
            />
          </Stack.Item>
        </Stack>

        <Label>Complément</Label>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={6}>
            <TextField 
              ariaLabel="Without visible label" 
              value={this.state.itemsToxiciteComplementSelectedText} 
              onChange={(e, text) => {
                this.setState({itemsToxiciteComplementSelectedText: text}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={0}>
            <ComboBox
              multiSelect
              className={styles.comboBoxTEEEEEEST}
              options={this.state.toxiciteComplementIComboBoxOption}
              styles={comboBoxStyles}
              buttonIconProps={{ iconName: 'More' }}
              onChange={(e, selectedOption) => {   
                var itemsToxiciteComplementFilterSelected : string = this.state.itemsToxiciteComplementSelectedText;
                var valueSelected : string = selectedOption.text.concat(", ");
                if(selectedOption.selected){
                  itemsToxiciteComplementFilterSelected = itemsToxiciteComplementFilterSelected.length == 0 ? valueSelected : itemsToxiciteComplementFilterSelected.concat(valueSelected);                
                }
                else{
                  itemsToxiciteComplementFilterSelected = itemsToxiciteComplementFilterSelected.length == 0 ? "" : itemsToxiciteComplementFilterSelected.replace(valueSelected, "");
                }
                this.setState({itemsToxiciteComplementSelectedText: itemsToxiciteComplementFilterSelected});                
              }}
            />
          </Stack.Item>
        </Stack>

        <Label>EPI additionnels requis</Label>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={6}>
            <TextField 
              ariaLabel="Without visible label" 
              value={this.state.itemsProtectionSelectedText} 
              onChange={(e, text) => {
                this.setState({itemsProtectionSelectedText: text}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={0}>
            <ComboBox
              multiSelect
              className={styles.comboBoxTEEEEEEST}
              options={this.state.protectionIComboBoxOption}
              styles={comboBoxStyles}
              buttonIconProps={{ iconName: 'More' }}
              onChange={(e, selectedOption) => {   
                var itemsProtectionFilterSelected : string = this.state.itemsProtectionSelectedText;
                var valueSelected : string = selectedOption.text.concat(", ");
                if(selectedOption.selected){
                  itemsProtectionFilterSelected = itemsProtectionFilterSelected.length == 0 ? valueSelected : itemsProtectionFilterSelected.concat(valueSelected);                
                }
                else{
                  itemsProtectionFilterSelected = itemsProtectionFilterSelected.length == 0 ? "" : itemsProtectionFilterSelected.replace(valueSelected, "");
                }
                this.setState({itemsProtectionSelectedText: itemsProtectionFilterSelected});                
              }}
            />
          </Stack.Item>
        </Stack>

        <Label>Mesures particulières</Label>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={6}>
            <TextField 
              ariaLabel="Without visible label" 
              value={this.state.itemsMesuresParticuileresSelectedText} 
              onChange={(e, text) => {
                this.setState({itemsMesuresParticuileresSelectedText: text}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={0}>
            <ComboBox
              multiSelect
              className={styles.comboBoxTEEEEEEST}
              options={this.state.mesuresParticuileresIComboBoxOption}
              styles={comboBoxStyles}
              buttonIconProps={{ iconName: 'More' }}
              onChange={(e, selectedOption) => {   
                var itemsMesuresParticuileresFilterSelected : string = this.state.itemsMesuresParticuileresSelectedText;
                var valueSelected : string = selectedOption.text.concat(", ");
                if(selectedOption.selected){
                  itemsMesuresParticuileresFilterSelected = itemsMesuresParticuileresFilterSelected.length == 0 ? valueSelected : itemsMesuresParticuileresFilterSelected.concat(valueSelected);                
                }
                else{
                  itemsMesuresParticuileresFilterSelected = itemsMesuresParticuileresFilterSelected.length == 0 ? "" : itemsMesuresParticuileresFilterSelected.replace(valueSelected, "");
                }
                this.setState({itemsMesuresParticuileresSelectedText: itemsMesuresParticuileresFilterSelected});                
              }}
            />
          </Stack.Item>
        </Stack>

        <Label>Environment</Label>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={6}>
            <TextField 
              ariaLabel="Without visible label" 
              value={this.state.itemsEnvironmentFilterSelectedText} 
              onChange={(e, text) => {
                this.setState({itemsEnvironmentFilterSelectedText: text}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={0}>
            <ComboBox
              multiSelect
              className={styles.comboBoxTEEEEEEST}
              options={this.state.environmentFilterIComboBoxOption}
              styles={comboBoxStyles}
              buttonIconProps={{ iconName: 'More' }}
              onChange={(e, selectedOption) => {   
                var itemsEnvironmentFilterSelected : string = this.state.itemsEnvironmentFilterSelectedText;
                var valueSelected : string = selectedOption.text.concat(", ");
                var item : any = this.state.itemsEnvironmentFilter.filter( item => item.ID == selectedOption.key); 
                
                var arrayPictures : string[] = this.state.urlsPicturesSelected;
                var itemsPicsSelected : any[] = this.state.itemsPicsSelected

                if(selectedOption.selected){
                  itemsEnvironmentFilterSelected = itemsEnvironmentFilterSelected.length == 0 ? valueSelected : itemsEnvironmentFilterSelected.concat(valueSelected);  

                  itemsPicsSelected.push(item[0]);

                  if(item[0]['Picture'] != null){
                    if(arrayPictures.length == 0 || arrayPictures.indexOf(item[0]['Picture']) == -1){
                      arrayPictures.push(item[0]['Picture']);
                    } 
                  }               
                }
                else{
                  itemsEnvironmentFilterSelected = itemsEnvironmentFilterSelected.length == 0 ? "" : itemsEnvironmentFilterSelected.replace(valueSelected, "");

                  itemsPicsSelected = itemsPicsSelected.filter( i => i.Id !== selectedOption.key && i['Title'] !== selectedOption.text);

                  if(item[0]['Picture'] != null && itemsPicsSelected.filter( i => i['Picture'] == item[0]['Picture']).length == 0){
                    arrayPictures =  arrayPictures.filter( i => i !== item[0]['Picture']);
                  }
                }
                this.setState({
                  itemsEnvironmentFilterSelectedText: itemsEnvironmentFilterSelected,
                  urlsPicturesSelected: arrayPictures,
                  itemsPicsSelected: itemsPicsSelected
                });                
              }}
            />
          </Stack.Item>
        </Stack>
        <br />
        <br />

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={7}>
            <Label>Comportement en cas d’accident</Label>
          </Stack.Item>          
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={7}>
            <TextField 
              label='Epandage'
              ariaLabel="Without visible label" 
              value={this.state.EpandageText} 
              onChange={(e, text) => {
                this.setState({EpandageText: text}); 
              }}
            />
          </Stack.Item>          
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={7}>
            <TextField 
              label='Feu'
              ariaLabel="Without visible label" 
              value={this.state.AccifeuEdited} 
              onChange={(e, text) => {
                this.setState({AccifeuEdited: text}); 
              }}
            />
          </Stack.Item>          
        </Stack>
        <br />
        <br />

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={7}>
            <Label>Premiers secours</Label>
          </Stack.Item>          
        </Stack>

        <Label>Inhalation</Label>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={6}>
            <TextField 
              ariaLabel="Without visible label" 
              value={this.state.itemsCorpsecrespSelectedText} 
              onChange={(e, text) => {
                this.setState({itemsCorpsecrespSelectedText: text}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={0}>
            <ComboBox
              multiSelect
              className={styles.comboBoxTEEEEEEST}
              options={this.state.corpsecrespIComboBoxOption}
              styles={comboBoxStyles}
              buttonIconProps={{ iconName: 'More' }}
              onChange={(e, selectedOption) => {   
                var itemsCorpsecrespTextSelected : string = this.state.itemsCorpsecrespSelectedText;
                var valueSelected : string = selectedOption.text.concat(", ");
                if(selectedOption.selected){
                  itemsCorpsecrespTextSelected = itemsCorpsecrespTextSelected.length == 0 ? valueSelected : itemsCorpsecrespTextSelected.concat(valueSelected);                
                }
                else{
                  itemsCorpsecrespTextSelected = itemsCorpsecrespTextSelected.length == 0 ? "" : itemsCorpsecrespTextSelected.replace(valueSelected, "");
                }
                this.setState({itemsCorpsecrespSelectedText: itemsCorpsecrespTextSelected});                
              }}
            />
          </Stack.Item>
        </Stack>

        <Label>Peau</Label>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={6}>
            <TextField 
              ariaLabel="Without visible label" 
              value={this.state.itemsCorpsecpeauSelectedText} 
              onChange={(e, text) => {
                this.setState({itemsCorpsecpeauSelectedText: text}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={0}>
            <ComboBox
              multiSelect
              className={styles.comboBoxTEEEEEEST}
              options={this.state.corpsecpeauIComboBoxOption}
              styles={comboBoxStyles}
              buttonIconProps={{ iconName: 'More' }}
              onChange={(e, selectedOption) => {   
                var itemsCorpsecpeauTextSelected : string = this.state.itemsCorpsecpeauSelectedText;
                var valueSelected : string = selectedOption.text.concat(", ");
                if(selectedOption.selected){
                  itemsCorpsecpeauTextSelected = itemsCorpsecpeauTextSelected.length == 0 ? valueSelected : itemsCorpsecpeauTextSelected.concat(valueSelected);                
                }
                else{
                  itemsCorpsecpeauTextSelected = itemsCorpsecpeauTextSelected.length == 0 ? "" : itemsCorpsecpeauTextSelected.replace(valueSelected, "");
                }
                this.setState({itemsCorpsecpeauSelectedText: itemsCorpsecpeauTextSelected});                
              }}
            />
          </Stack.Item>
        </Stack>
        
        <Label>Yeux</Label>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={6}>
            <TextField 
              ariaLabel="Without visible label" 
              value={this.state.itemsCorpsecyeuxSelectedText} 
              onChange={(e, text) => {
                this.setState({itemsCorpsecyeuxSelectedText: text}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={0}>
            <ComboBox
              multiSelect
              className={styles.comboBoxTEEEEEEST}
              options={this.state.corpsecyeuxIComboBoxOption}
              styles={comboBoxStyles}
              buttonIconProps={{ iconName: 'More' }}
              onChange={(e, selectedOption) => {   
                var itemsCorpsecyeuxTextSelected : string = this.state.itemsCorpsecyeuxSelectedText;
                var valueSelected : string = selectedOption.text.concat(", ");
                if(selectedOption.selected){
                  itemsCorpsecyeuxTextSelected = itemsCorpsecyeuxTextSelected.length == 0 ? valueSelected : itemsCorpsecyeuxTextSelected.concat(valueSelected);                
                }
                else{
                  itemsCorpsecyeuxTextSelected = itemsCorpsecyeuxTextSelected.length == 0 ? "" : itemsCorpsecyeuxTextSelected.replace(valueSelected, "");
                }
                this.setState({itemsCorpsecyeuxSelectedText: itemsCorpsecyeuxTextSelected});                
              }}
            />
          </Stack.Item>
        </Stack>
        <br />
        <br />

        <Label>References</Label>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={6}>
            <TextField 
              ariaLabel="Without visible label" 
              value={this.state.itemsReferenceSelectedText} 
              onChange={(e, text) => {
                this.setState({itemsReferenceSelectedText: text}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={0}>
            <ComboBox
              multiSelect
              className={styles.comboBoxTEEEEEEST}
              options={this.state.referenceIComboBoxOption}
              styles={comboBoxStyles}
              buttonIconProps={{ iconName: 'More' }}
              onChange={(e, selectedOption) => {   
                var itemsReferenceFilterSelected : string = this.state.itemsReferenceSelectedText;
                var valueSelected : string = selectedOption.text.concat(", ");
                if(selectedOption.selected){
                  itemsReferenceFilterSelected = itemsReferenceFilterSelected.length == 0 ? valueSelected : itemsReferenceFilterSelected.concat(valueSelected);                
                }
                else{
                  itemsReferenceFilterSelected = itemsReferenceFilterSelected.length == 0 ? "" : itemsReferenceFilterSelected.replace(valueSelected, "");
                }
                this.setState({itemsReferenceSelectedText: itemsReferenceFilterSelected});                
              }}
            />
          </Stack.Item>
        </Stack>
        <br />
        <br />

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={7}>
            <TextField 
              label='Rédaction'
              ariaLabel="Without visible label" 
              value={this.state.Modifdoc} 
              onChange={(e, text) => {
                this.setState({Modifdoc: text}); 
              }}
            />
          </Stack.Item>          
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={7}>
            <TextField 
              label='Approuvé le'
              ariaLabel="Without visible label" 
              value={this.state.Visadate} 
              onChange={(e, text) => {
                this.setState({Visadate: text}); 
              }}
            />
          </Stack.Item>          
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={7}>
            <TextField 
              label='PAR'
              ariaLabel="Without visible label" 
              value={this.state.Visapers} 
              onChange={(e, text) => {
                this.setState({Visapers: text}); 
              }}
            />
          </Stack.Item>          
        </Stack>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
        <PrimaryButton
          text="Update"
          onClick={this._onSaveForm}
        />
        <DefaultButton
          text="Cancel"
          onClick={this.props.onClose}
        />
      </Stack> 
      </div>);

    let newForm : JSX.Element = (
      <div>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={4}>
            <TextField 
              label='Produit'
              value={this.state.Prodnom} 
              onChange={(e, Prodnom) => {           
                this.setState({Prodnom: Prodnom}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={2}>
            <TextField 
              label="Nº d'item"
              value={this.state.title} 
              onChange={(e, title) => {           
                this.setState({title: title}); 
              }}
            />
          </Stack.Item>
        </Stack>
        <br />
        <br />

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={3}>
            <TextField 
              label="Mention d'advertissement"
              value={this.state.Mention} 
              onChange={(e, Mention) => {           
                this.setState({Mention: Mention}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={3}>
            {/* UBICAR AQUÍ LAS IMAGENES */}
          </Stack.Item>
        </Stack>
        <br />
        <br /> 

        <Label>Dangers principaux</Label>       
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={6}>
            <TextField
              // label='Dangers principaux'
              ariaLabel="Without visible label" 
              value={this.state.itemsDangersSelectedText} 
              onChange={(e, text) => {
                this.setState({itemsDangersSelectedText: text}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={0}>
            <ComboBox
              multiSelect
              className={styles.comboBoxTEEEEEEST}
              options={this.state.dangersIComboBoxOption}
              styles={comboBoxStyles}
              buttonIconProps={{ iconName: 'More' }}
              onChange={(e, selectedOption) => {   
                var itemsDangersTextSelected : string = this.state.itemsDangersSelectedText;
                var valueSelected : string = selectedOption.text.concat(", ");
                if(selectedOption.selected){
                  itemsDangersTextSelected = itemsDangersTextSelected.length == 0 ? valueSelected : itemsDangersTextSelected.concat(valueSelected);                
                }
                else{
                  itemsDangersTextSelected = itemsDangersTextSelected.length == 0 ? "" : itemsDangersTextSelected.replace(valueSelected, "");
                }
                this.setState({itemsDangersSelectedText: itemsDangersTextSelected});                
              }}
            />
          </Stack.Item>
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={7}>
            <TextField 
              label="Nom chimique ou composition"
              value={this.state.Nomchimique} 
              onChange={(e, Nomchimique) => {           
                this.setState({Nomchimique: Nomchimique}); 
              }}
            />
          </Stack.Item>          
        </Stack> 

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={5}>
            <TextField 
              label='Nº CAS'
              value={this.state.NoCAS} 
              onChange={(e, NoCAS) => {           
                this.setState({NoCAS: NoCAS}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={1}>
            <TextField 
              label="Nº UN"
              value={this.state.CodeOnu} 
              onChange={(e, CodeOnu) => {           
                this.setState({CodeOnu: CodeOnu}); 
              }}
            />
          </Stack.Item>
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={5}>
            <TextField 
              label='Formule brute'
              value={this.state.NomChim} 
              onChange={(e, NomChim) => {           
                this.setState({NomChim: NomChim}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={1}>
            <TextField 
              label="MM"
              value={this.state.Poidsmol} 
              onChange={(e, Poidsmol) => {           
                this.setState({Poidsmol: Poidsmol}); 
              }}
            />
          </Stack.Item>
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={5}>
            <Label>Etat physique</Label>                       
            <Stack.Item grow={0}>
              <TextField 
                ariaLabel="Without visible label" 
                value={this.state.itemsAspectSelectedText} 
                onChange={(e, text) => {
                  this.setState({itemsAspectSelectedText: text}); 
                }}
              />
            </Stack.Item>
            <Stack.Item grow={0}>
              <ComboBox
                multiSelect
                className={styles.comboBoxTEEEEEEST}
                options={this.state.aspectIComboBoxOption}
                styles={comboBoxStyles}
                buttonIconProps={{ iconName: 'More' }}
                onChange={(e, selectedOption) => {   
                  var itemsAspectTextSelected : string = this.state.itemsAspectSelectedText;
                  var valueSelected : string = selectedOption.text.concat(", ");
                  if(selectedOption.selected){
                    itemsAspectTextSelected = itemsAspectTextSelected.length == 0 ? valueSelected : itemsAspectTextSelected.concat(valueSelected);                
                  }
                  else{
                    itemsAspectTextSelected = itemsAspectTextSelected.length == 0 ? "" : itemsAspectTextSelected.replace(valueSelected, "");
                  }
                  this.setState({itemsAspectSelectedText: itemsAspectTextSelected});                
                }}
              />
            </Stack.Item> 
          </Stack.Item>          
          <Stack.Item grow={1}>
            <Label>Couleur</Label>
            <Stack.Item grow={0}>
              <TextField 
                ariaLabel="Without visible label" 
                value={this.state.itemsCouleurSelectedText} 
                onChange={(e, text) => {
                  this.setState({itemsCouleurSelectedText: text}); 
                }}
              />
            </Stack.Item>
            <Stack.Item grow={0}>
              <ComboBox
                multiSelect
                className={styles.comboBoxTEEEEEEST}
                options={this.state.couleurIComboBoxOption}
                styles={comboBoxStyles}
                buttonIconProps={{ iconName: 'More' }}
                onChange={(e, selectedOption) => {   
                  var itemsCouleurTextSelected : string = this.state.itemsCouleurSelectedText;
                  var valueSelected : string = selectedOption.text.concat(", ");
                  if(selectedOption.selected){
                    itemsCouleurTextSelected = itemsCouleurTextSelected.length == 0 ? valueSelected : itemsCouleurTextSelected.concat(valueSelected);                
                  }
                  else{
                    itemsCouleurTextSelected = itemsCouleurTextSelected.length == 0 ? "" : itemsCouleurTextSelected.replace(valueSelected, "");
                  }
                  this.setState({itemsCouleurSelectedText: itemsCouleurTextSelected});                
                }}
              />
            </Stack.Item>
          </Stack.Item>
        </Stack>

        <Label>Odeur</Label>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={6}>
            <TextField 
              ariaLabel="Without visible label" 
              value={this.state.itemsOdeurSelectedText} 
              onChange={(e, text) => {
                this.setState({itemsOdeurSelectedText: text}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={0}>
            <ComboBox
              multiSelect
              className={styles.comboBoxTEEEEEEST}
              options={this.state.odeurIComboBoxOption}
              styles={comboBoxStyles}
              buttonIconProps={{ iconName: 'More' }}
              onChange={(e, selectedOption) => {   
                var itemsOdeurFilterSelected : string = this.state.itemsOdeurSelectedText;
                var valueSelected : string = selectedOption.text.concat(", ");
                if(selectedOption.selected){
                  itemsOdeurFilterSelected = itemsOdeurFilterSelected.length == 0 ? valueSelected : itemsOdeurFilterSelected.concat(valueSelected);                
                }
                else{
                  itemsOdeurFilterSelected = itemsOdeurFilterSelected.length == 0 ? "" : itemsOdeurFilterSelected.replace(valueSelected, "");
                }
                this.setState({itemsOdeurSelectedText: itemsOdeurFilterSelected});                
              }}
            />
          </Stack.Item>
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={7}>
            <TextField 
              label="Commentaires additionnels"
              value={this.state.Comment1} 
              onChange={(e, Comment1) => {           
                this.setState({Comment1: Comment1}); 
              }}
            />
          </Stack.Item>          
        </Stack>
        <br />
        <br />

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={7}>
            <Label>Propriétés physiques et valeurs toxicologiques</Label>
          </Stack.Item>          
        </Stack>
        
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={4}>
            <TextField 
              label="Point d'eclair (º C)"
              value={this.state.Pointec} 
              onChange={(e, Pointec) => {           
                this.setState({Pointec: Pointec}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={2}>
            <TextField 
              label="Point de fusion (º C)"
              value={this.state.Pointfus} 
              onChange={(e, Pointfus) => {           
                this.setState({Pointfus: Pointfus}); 
              }}
            />
          </Stack.Item>
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={4}>
            <TextField 
              label="Point d'auto inflammation (º C)"
              value={this.state.Pointif} 
              onChange={(e, Pointif) => {           
                this.setState({Pointif: Pointif}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={2}>
            <TextField 
              label="Point d'ebullition (º C)"
              value={this.state.Pointeb} 
              onChange={(e, Pointeb) => {           
                this.setState({Pointeb: Pointeb}); 
              }}
            />
          </Stack.Item>
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={4}>
            <TextField 
              label="Limite inférieure d’inflammation"
              value={this.state.Infinflammation} 
              onChange={(e, Infinflammation) => {           
                this.setState({Infinflammation: Infinflammation}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={2}>
            <TextField 
              label="Densité"
              value={this.state.Densite} 
              onChange={(e, Densite) => {           
                this.setState({Densite: Densite}); 
              }}
            />
          </Stack.Item>
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={4}>
            <TextField 
              label="Limite supérieure d’inflammation"
              value={this.state.Supinflammation } 
              onChange={(e, Supinflammation ) => {           
                this.setState({Supinflammation : Supinflammation }); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={2}>
            <TextField 
              label="Densité vapeur (air 20ºC =1)"
              value={this.state.Densvap} 
              onChange={(e, Densvap) => {           
                this.setState({Densvap: Densvap}); 
              }}
            />
          </Stack.Item>
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={4}>
            <TextField 
              label="Tension de vapeur"
              value={this.state.Tensvap } 
              onChange={(e, Tensvap ) => {           
                this.setState({Tensvap : Tensvap }); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={2}>
            <Label>Aquí tiene que ir Solvants (campo Choice no lista maestra)</Label>
          </Stack.Item>
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={4}>
            <TextField 
              label="VME (ppm) (mg/m3)"
              value={this.state.Vmeppm } 
              onChange={(e, Vmeppm ) => {           
                this.setState({Vmeppm : Vmeppm }); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={2}>
            <TextField 
              label="CL50 (inhal-mg/l)"
              value={this.state.CL50inhal} 
              onChange={(e, CL50inhal) => {           
                this.setState({CL50inhal: CL50inhal}); 
              }}
            />
          </Stack.Item>
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={4}>
            <TextField 
              label="VLE (ppm) (mg/m3)"
              value={this.state.Vleppm } 
              onChange={(e, Vleppm ) => {           
                this.setState({Vleppm : Vleppm }); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={2}>
            <TextField 
              label="DL50 (dermal-mg/kg)"
              value={this.state.DL50dermal} 
              onChange={(e, DL50dermal) => {           
                this.setState({DL50dermal: DL50dermal}); 
              }}
            />
          </Stack.Item>
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={4}>
            <TextField 
              label="CE50 (mg/l) (48h)"
              value={this.state.CE50mg } 
              onChange={(e, CE50mg ) => {           
                this.setState({CE50mg : CE50mg }); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={2}>
            <TextField 
              label="DL50 (oral-g/kg)"
              value={this.state.DL50} 
              onChange={(e, DL50) => {           
                this.setState({DL50: DL50}); 
              }}
            />
          </Stack.Item>
        </Stack>
        <br />
        <br />

        <Label>Dangers d’incendie et d’explosion</Label>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={6}>
            <TextField 
              ariaLabel="Without visible label" 
              value={this.state.itemsDangexiFilterSelectedText} 
              onChange={(e, text) => {
                this.setState({itemsDangexiFilterSelectedText: text}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={0}>
            <ComboBox
              multiSelect
              className={styles.comboBoxTEEEEEEST}
              options={this.state.dangexiFilterIComboBoxOption}
              styles={comboBoxStyles}
              buttonIconProps={{ iconName: 'More' }}
              onChange={(e, selectedOption) => {   
                var itemsDangexiTextSelected : string = this.state.itemsDangexiFilterSelectedText;
                var valueSelected : string = selectedOption.text.concat(", ");
                var item : any = this.state.itemsDangexiFilter.filter( item => item.ID == selectedOption.key); 
                
                var arrayPictures : string[] = this.state.urlsPicturesSelected;
                var itemsPicsSelected : any[] = this.state.itemsPicsSelected
                
                if(selectedOption.selected){
                  itemsDangexiTextSelected = itemsDangexiTextSelected.length == 0 ? valueSelected : itemsDangexiTextSelected.concat(valueSelected); 
                  
                  itemsPicsSelected.push(item[0]);

                  if(item[0]['Picture'] != null){
                    if(arrayPictures.length == 0 || arrayPictures.indexOf(item[0]['Picture']) == -1){
                      arrayPictures.push(item[0]['Picture']);
                    } 
                  } 
                }
                else{itemsDangexiTextSelected
                  itemsDangexiTextSelected = itemsDangexiTextSelected.length == 0 ? "" : itemsDangexiTextSelected.replace(valueSelected, "");

                  itemsPicsSelected = itemsPicsSelected.filter( i => i.Id !== selectedOption.key && i['Title'] !== selectedOption.text);

                  if(item[0]['Picture'] != null && itemsPicsSelected.filter( i => i['Picture'] == item[0]['Picture']).length == 0){
                    arrayPictures =  arrayPictures.filter( i => i !== item[0]['Picture']);
                  }
                }

                this.setState({
                  itemsDangexiFilterSelectedText: itemsDangexiTextSelected,
                  urlsPicturesSelected: arrayPictures,
                  itemsPicsSelected: itemsPicsSelected
                });                
              }}
            />
          </Stack.Item>
        </Stack>
            
        <Label>Complément</Label>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={6}>
            <TextField 
              ariaLabel="Without visible label" 
              value={this.state.itemsDangersComplementSelectedText} 
              onChange={(e, text) => {
                this.setState({itemsDangersComplementSelectedText: text}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={0}>
            <ComboBox
              multiSelect
              className={styles.comboBoxTEEEEEEST}
              options={this.state.dangersComplementIComboBoxOption}
              styles={comboBoxStyles}
              buttonIconProps={{ iconName: 'More' }}
              onChange={(e, selectedOption) => {   
                var itemsDangersComplementTextSelected : string = this.state.itemsDangersComplementSelectedText;
                var valueSelected : string = selectedOption.text.concat(", ");
                if(selectedOption.selected){
                  itemsDangersComplementTextSelected = itemsDangersComplementTextSelected.length == 0 ? valueSelected : itemsDangersComplementTextSelected.concat(valueSelected);                
                }
                else{
                  itemsDangersComplementTextSelected = itemsDangersComplementTextSelected.length == 0 ? "" : itemsDangersComplementTextSelected.replace(valueSelected, "");
                }
                this.setState({itemsDangersComplementSelectedText: itemsDangersComplementTextSelected});                
              }}
            />
          </Stack.Item>
        </Stack>

        <Label>Toxicité</Label>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={6}>
            <TextField 
              ariaLabel="Without visible label" 
              value={this.state.itemsToxicFilterSelectedText} 
              onChange={(e, text) => {
                this.setState({itemsToxicFilterSelectedText: text}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={0}>
            <ComboBox
              multiSelect
              className={styles.comboBoxTEEEEEEST}
              options={this.state.toxicFilterIComboBoxOption}
              styles={comboBoxStyles}
              buttonIconProps={{ iconName: 'More' }}
              onChange={(e, selectedOption) => {   
                var itemsToxicFilterFilterSelected : string = this.state.itemsToxicFilterSelectedText;
                var valueSelected : string = selectedOption.text.concat(", "); 
                var item : any = this.state.itemsToxicFilter.filter( item => item.ID == selectedOption.key); 
                
                var arrayPictures : string[] = this.state.urlsPicturesSelected;
                var itemsPicsSelected : any[] = this.state.itemsPicsSelected

                if(selectedOption.selected){                  
                  itemsToxicFilterFilterSelected = itemsToxicFilterFilterSelected.length == 0 ? valueSelected : itemsToxicFilterFilterSelected.concat(valueSelected); 

                  itemsPicsSelected.push(item[0]);

                  if(item[0]['Picture'] != null){
                    if(arrayPictures.length == 0 || arrayPictures.indexOf(item[0]['Picture']) == -1){
                      arrayPictures.push(item[0]['Picture']);
                    } 
                  }                    
                }
                else{
                  itemsToxicFilterFilterSelected = itemsToxicFilterFilterSelected.length == 0 ? "" : itemsToxicFilterFilterSelected.replace(valueSelected, "");
                  
                  itemsPicsSelected = itemsPicsSelected.filter( i => i.Id !== selectedOption.key && i['Title'] !== selectedOption.text);

                  if(item[0]['Picture'] != null && itemsPicsSelected.filter( i => i['Picture'] == item[0]['Picture']).length == 0){
                    arrayPictures =  arrayPictures.filter( i => i !== item[0]['Picture']);
                  }

                }                


                this.setState({
                  itemsToxicFilterSelectedText: itemsToxicFilterFilterSelected,
                  urlsPicturesSelected: arrayPictures,
                  itemsPicsSelected: itemsPicsSelected
                });
                          
              }}
            />
          </Stack.Item>
        </Stack>

        <Label>Complément</Label>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={6}>
            <TextField 
              ariaLabel="Without visible label" 
              value={this.state.itemsToxiciteComplementSelectedText} 
              onChange={(e, text) => {
                this.setState({itemsToxiciteComplementSelectedText: text}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={0}>
            <ComboBox
              multiSelect
              className={styles.comboBoxTEEEEEEST}
              options={this.state.toxiciteComplementIComboBoxOption}
              styles={comboBoxStyles}
              buttonIconProps={{ iconName: 'More' }}
              onChange={(e, selectedOption) => {   
                var itemsToxiciteComplementFilterSelected : string = this.state.itemsToxiciteComplementSelectedText;
                var valueSelected : string = selectedOption.text.concat(", ");
                if(selectedOption.selected){
                  itemsToxiciteComplementFilterSelected = itemsToxiciteComplementFilterSelected.length == 0 ? valueSelected : itemsToxiciteComplementFilterSelected.concat(valueSelected);                
                }
                else{
                  itemsToxiciteComplementFilterSelected = itemsToxiciteComplementFilterSelected.length == 0 ? "" : itemsToxiciteComplementFilterSelected.replace(valueSelected, "");
                }
                this.setState({itemsToxiciteComplementSelectedText: itemsToxiciteComplementFilterSelected});                
              }}
            />
          </Stack.Item>
        </Stack>

        <Label>EPI additionnels requis</Label>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={6}>
            <TextField 
              ariaLabel="Without visible label" 
              value={this.state.itemsProtectionSelectedText} 
              onChange={(e, text) => {
                this.setState({itemsProtectionSelectedText: text}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={0}>
            <ComboBox
              multiSelect
              className={styles.comboBoxTEEEEEEST}
              options={this.state.protectionIComboBoxOption}
              styles={comboBoxStyles}
              buttonIconProps={{ iconName: 'More' }}
              onChange={(e, selectedOption) => {   
                var itemsProtectionFilterSelected : string = this.state.itemsProtectionSelectedText;
                var valueSelected : string = selectedOption.text.concat(", ");
                if(selectedOption.selected){
                  itemsProtectionFilterSelected = itemsProtectionFilterSelected.length == 0 ? valueSelected : itemsProtectionFilterSelected.concat(valueSelected);                
                }
                else{
                  itemsProtectionFilterSelected = itemsProtectionFilterSelected.length == 0 ? "" : itemsProtectionFilterSelected.replace(valueSelected, "");
                }
                this.setState({itemsProtectionSelectedText: itemsProtectionFilterSelected});                
              }}
            />
          </Stack.Item>
        </Stack>

        <Label>Mesures particulières</Label>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={6}>
            <TextField 
              ariaLabel="Without visible label" 
              value={this.state.itemsMesuresParticuileresSelectedText} 
              onChange={(e, text) => {
                this.setState({itemsMesuresParticuileresSelectedText: text}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={0}>
            <ComboBox
              multiSelect
              className={styles.comboBoxTEEEEEEST}
              options={this.state.mesuresParticuileresIComboBoxOption}
              styles={comboBoxStyles}
              buttonIconProps={{ iconName: 'More' }}
              onChange={(e, selectedOption) => {   
                var itemsMesuresParticuileresFilterSelected : string = this.state.itemsMesuresParticuileresSelectedText;
                var valueSelected : string = selectedOption.text.concat(", ");
                if(selectedOption.selected){
                  itemsMesuresParticuileresFilterSelected = itemsMesuresParticuileresFilterSelected.length == 0 ? valueSelected : itemsMesuresParticuileresFilterSelected.concat(valueSelected);                
                }
                else{
                  itemsMesuresParticuileresFilterSelected = itemsMesuresParticuileresFilterSelected.length == 0 ? "" : itemsMesuresParticuileresFilterSelected.replace(valueSelected, "");
                }
                this.setState({itemsMesuresParticuileresSelectedText: itemsMesuresParticuileresFilterSelected});                
              }}
            />
          </Stack.Item>
        </Stack>

        <Label>Environment</Label>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={6}>
            <TextField 
              ariaLabel="Without visible label" 
              value={this.state.itemsEnvironmentFilterSelectedText} 
              onChange={(e, text) => {
                this.setState({itemsEnvironmentFilterSelectedText: text}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={0}>
            <ComboBox
              multiSelect
              className={styles.comboBoxTEEEEEEST}
              options={this.state.environmentFilterIComboBoxOption}
              styles={comboBoxStyles}
              buttonIconProps={{ iconName: 'More' }}
              onChange={(e, selectedOption) => {   
                var itemsEnvironmentFilterSelected : string = this.state.itemsEnvironmentFilterSelectedText;
                var valueSelected : string = selectedOption.text.concat(", ");
                var item : any = this.state.itemsEnvironmentFilter.filter( item => item.ID == selectedOption.key); 
                
                var arrayPictures : string[] = this.state.urlsPicturesSelected;
                var itemsPicsSelected : any[] = this.state.itemsPicsSelected

                if(selectedOption.selected){
                  itemsEnvironmentFilterSelected = itemsEnvironmentFilterSelected.length == 0 ? valueSelected : itemsEnvironmentFilterSelected.concat(valueSelected);  

                  itemsPicsSelected.push(item[0]);

                  if(item[0]['Picture'] != null){
                    if(arrayPictures.length == 0 || arrayPictures.indexOf(item[0]['Picture']) == -1){
                      arrayPictures.push(item[0]['Picture']);
                    } 
                  }               
                }
                else{
                  itemsEnvironmentFilterSelected = itemsEnvironmentFilterSelected.length == 0 ? "" : itemsEnvironmentFilterSelected.replace(valueSelected, "");

                  itemsPicsSelected = itemsPicsSelected.filter( i => i.Id !== selectedOption.key && i['Title'] !== selectedOption.text);

                  if(item[0]['Picture'] != null && itemsPicsSelected.filter( i => i['Picture'] == item[0]['Picture']).length == 0){
                    arrayPictures =  arrayPictures.filter( i => i !== item[0]['Picture']);
                  }
                }
                this.setState({
                  itemsEnvironmentFilterSelectedText: itemsEnvironmentFilterSelected,
                  urlsPicturesSelected: arrayPictures,
                  itemsPicsSelected: itemsPicsSelected
                });                
              }}
            />
          </Stack.Item>
        </Stack>
        <br />
        <br />

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={7}>
            <Label>Comportement en cas d’accident</Label>
          </Stack.Item>          
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={7}>
            <TextField 
              label='Epandage'
              ariaLabel="Without visible label" 
              value={this.state.EpandageText} 
              onChange={(e, text) => {
                this.setState({EpandageText: text}); 
              }}
            />
          </Stack.Item>          
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={7}>
            <TextField 
              label='Feu'
              ariaLabel="Without visible label" 
              value={this.state.AccifeuEdited} 
              onChange={(e, text) => {
                this.setState({AccifeuEdited: text}); 
              }}
            />
          </Stack.Item>          
        </Stack>
        <br />
        <br />

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={7}>
            <Label>Premiers secours</Label>
          </Stack.Item>          
        </Stack>

        <Label>Inhalation</Label>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={6}>
            <TextField 
              ariaLabel="Without visible label" 
              value={this.state.itemsCorpsecrespSelectedText} 
              onChange={(e, text) => {
                this.setState({itemsCorpsecrespSelectedText: text}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={0}>
            <ComboBox
              multiSelect
              className={styles.comboBoxTEEEEEEST}
              options={this.state.corpsecrespIComboBoxOption}
              styles={comboBoxStyles}
              buttonIconProps={{ iconName: 'More' }}
              onChange={(e, selectedOption) => {   
                var itemsCorpsecrespTextSelected : string = this.state.itemsCorpsecrespSelectedText;
                var valueSelected : string = selectedOption.text.concat(", ");
                if(selectedOption.selected){
                  itemsCorpsecrespTextSelected = itemsCorpsecrespTextSelected.length == 0 ? valueSelected : itemsCorpsecrespTextSelected.concat(valueSelected);                
                }
                else{
                  itemsCorpsecrespTextSelected = itemsCorpsecrespTextSelected.length == 0 ? "" : itemsCorpsecrespTextSelected.replace(valueSelected, "");
                }
                this.setState({itemsCorpsecrespSelectedText: itemsCorpsecrespTextSelected});                
              }}
            />
          </Stack.Item>
        </Stack>

        <Label>Peau</Label>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={6}>
            <TextField 
              ariaLabel="Without visible label" 
              value={this.state.itemsCorpsecpeauSelectedText} 
              onChange={(e, text) => {
                this.setState({itemsCorpsecpeauSelectedText: text}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={0}>
            <ComboBox
              multiSelect
              className={styles.comboBoxTEEEEEEST}
              options={this.state.corpsecpeauIComboBoxOption}
              styles={comboBoxStyles}
              buttonIconProps={{ iconName: 'More' }}
              onChange={(e, selectedOption) => {   
                var itemsCorpsecpeauTextSelected : string = this.state.itemsCorpsecpeauSelectedText;
                var valueSelected : string = selectedOption.text.concat(", ");
                if(selectedOption.selected){
                  itemsCorpsecpeauTextSelected = itemsCorpsecpeauTextSelected.length == 0 ? valueSelected : itemsCorpsecpeauTextSelected.concat(valueSelected);                
                }
                else{
                  itemsCorpsecpeauTextSelected = itemsCorpsecpeauTextSelected.length == 0 ? "" : itemsCorpsecpeauTextSelected.replace(valueSelected, "");
                }
                this.setState({itemsCorpsecpeauSelectedText: itemsCorpsecpeauTextSelected});                
              }}
            />
          </Stack.Item>
        </Stack>
        
        <Label>Yeux</Label>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={6}>
            <TextField 
              ariaLabel="Without visible label" 
              value={this.state.itemsCorpsecyeuxSelectedText} 
              onChange={(e, text) => {
                this.setState({itemsCorpsecyeuxSelectedText: text}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={0}>
            <ComboBox
              multiSelect
              className={styles.comboBoxTEEEEEEST}
              options={this.state.corpsecyeuxIComboBoxOption}
              styles={comboBoxStyles}
              buttonIconProps={{ iconName: 'More' }}
              onChange={(e, selectedOption) => {   
                var itemsCorpsecyeuxTextSelected : string = this.state.itemsCorpsecyeuxSelectedText;
                var valueSelected : string = selectedOption.text.concat(", ");
                if(selectedOption.selected){
                  itemsCorpsecyeuxTextSelected = itemsCorpsecyeuxTextSelected.length == 0 ? valueSelected : itemsCorpsecyeuxTextSelected.concat(valueSelected);                
                }
                else{
                  itemsCorpsecyeuxTextSelected = itemsCorpsecyeuxTextSelected.length == 0 ? "" : itemsCorpsecyeuxTextSelected.replace(valueSelected, "");
                }
                this.setState({itemsCorpsecyeuxSelectedText: itemsCorpsecyeuxTextSelected});                
              }}
            />
          </Stack.Item>
        </Stack>
        <br />
        <br />

        <Label>References</Label>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={6}>
            <TextField 
              ariaLabel="Without visible label" 
              value={this.state.itemsReferenceSelectedText} 
              onChange={(e, text) => {
                this.setState({itemsReferenceSelectedText: text}); 
              }}
            />
          </Stack.Item>
          <Stack.Item grow={0}>
            <ComboBox
              multiSelect
              className={styles.comboBoxTEEEEEEST}
              options={this.state.referenceIComboBoxOption}
              styles={comboBoxStyles}
              buttonIconProps={{ iconName: 'More' }}
              onChange={(e, selectedOption) => {   
                var itemsReferenceFilterSelected : string = this.state.itemsReferenceSelectedText;
                var valueSelected : string = selectedOption.text.concat(", ");
                if(selectedOption.selected){
                  itemsReferenceFilterSelected = itemsReferenceFilterSelected.length == 0 ? valueSelected : itemsReferenceFilterSelected.concat(valueSelected);                
                }
                else{
                  itemsReferenceFilterSelected = itemsReferenceFilterSelected.length == 0 ? "" : itemsReferenceFilterSelected.replace(valueSelected, "");
                }
                this.setState({itemsReferenceSelectedText: itemsReferenceFilterSelected});                
              }}
            />
          </Stack.Item>
        </Stack>
        <br />
        <br />

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={7}>
            <TextField 
              label='Rédaction'
              ariaLabel="Without visible label" 
              value={this.state.Modifdoc} 
              onChange={(e, text) => {
                this.setState({Modifdoc: text}); 
              }}
            />
          </Stack.Item>          
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={7}>
            <TextField 
              label='Approuvé le'
              ariaLabel="Without visible label" 
              value={this.state.Visadate} 
              onChange={(e, text) => {
                this.setState({Visadate: text}); 
              }}
            />
          </Stack.Item>          
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={7}>
            <TextField 
              label='PAR'
              ariaLabel="Without visible label" 
              value={this.state.Visapers} 
              onChange={(e, text) => {
                this.setState({Visapers: text}); 
              }}
            />
          </Stack.Item>          
        </Stack>
        <br />
        <br />

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <PrimaryButton
            text="Save"
            onClick={this._onSaveNewForm}
          />
          <DefaultButton
            text="Cancel"
            onClick={this.props.onClose}
          />
        </Stack> 
      </div>);

    // Display = 4,
    // Edit = 6,
    // New = 8
    console.log(this.props.displayMode);
    var form : JSX.Element = null;

    var test : number = 4;
    switch (this.props.displayMode) {
    // switch (test) {
      case 4:
        form = viewForm;
        break;

      case 6:
        form = editForm;
        break;

      case 8:
        form = newForm;
        break;
    }    

    return (
      <div className={styles.firmenichCustomForm}>        
        {form}
      </div>
    );

    // return (
    //   <div className={styles.firmenichCustomForm}>        
    //     {form}
    //     {/* <Label>Acciepand</Label>    
    //     <Stack horizontal tokens={{ childrenGap: 20 }}>
    //       <Stack.Item grow={6}>
    //         <TextField 
    //           ariaLabel="Without visible label" 
    //           value={this.state.itemsAcciepandSelectedText} 
    //           onChange={(e, text) => {
    //             this.setState({itemsAcciepandSelectedText: text}); 
    //           }}
    //         />
    //       </Stack.Item>
    //       <Stack.Item grow={0}>
    //         <ComboBox
    //           multiSelect
    //           className={styles.comboBoxTEEEEEEST}
    //           options={this.state.acciepanIComboBoxOption}
    //           styles={comboBoxStyles}
    //           buttonIconProps={{ iconName: 'More' }}
    //           onChange={(e, selectedOption) => {   
    //             var itemsAcciepandTextSelected : string = this.state.itemsAcciepandSelectedText;
    //             var valueSelected : string = selectedOption.text.concat(", ");
    //             if(selectedOption.selected){
    //               itemsAcciepandTextSelected = itemsAcciepandTextSelected.length == 0 ? valueSelected : itemsAcciepandTextSelected.concat(valueSelected);                
    //             }
    //             else{
    //               itemsAcciepandTextSelected = itemsAcciepandTextSelected.length == 0 ? "" : itemsAcciepandTextSelected.replace(valueSelected, "");
    //             }
    //             this.setState({itemsAcciepandSelectedText: itemsAcciepandTextSelected});                
    //           }}
    //         />
    //       </Stack.Item>          
    //     </Stack>
    //     <Label>Accifeu</Label> 
    //     <Stack horizontal tokens={{ childrenGap: 20 }}>
    //       <Stack.Item grow={6}>
    //         <TextField 
    //           ariaLabel="Without visible label" 
    //           value={this.state.itemsAccifeuSelectedText} 
    //           onChange={(e, text) => {
    //             this.setState({itemsAccifeuSelectedText: text}); 
    //           }}
    //         />
    //       </Stack.Item>
    //       <Stack.Item grow={0}>
    //         <ComboBox
    //           multiSelect
    //           className={styles.comboBoxTEEEEEEST}
    //           options={this.state.accifeuIComboBoxOption}
    //           styles={comboBoxStyles}
    //           buttonIconProps={{ iconName: 'More' }}
    //           onChange={(e, selectedOption) => {   
    //             var itemsAccifeuTextSelected : string = this.state.itemsAccifeuSelectedText;
    //             var valueSelected : string = selectedOption.text.concat(", ");
    //             if(selectedOption.selected){
    //               itemsAccifeuTextSelected = itemsAccifeuTextSelected.length == 0 ? valueSelected : itemsAccifeuTextSelected.concat(valueSelected);                
    //             }
    //             else{
    //               itemsAccifeuTextSelected = itemsAccifeuTextSelected.length == 0 ? "" : itemsAccifeuTextSelected.replace(valueSelected, "");
    //             }
    //             this.setState({itemsAccifeuSelectedText: itemsAccifeuTextSelected});                
    //           }}
    //         />
    //       </Stack.Item>          
    //     </Stack>
    //     <Label>Aspect</Label> 
    //     <Stack horizontal tokens={{ childrenGap: 20 }}>
    //       <Stack.Item grow={6}>
    //         <TextField 
    //           ariaLabel="Without visible label" 
    //           value={this.state.itemsAspectSelectedText} 
    //           onChange={(e, text) => {
    //             this.setState({itemsAspectSelectedText: text}); 
    //           }}
    //         />
    //       </Stack.Item>
    //       <Stack.Item grow={0}>
    //         <ComboBox
    //           multiSelect
    //           className={styles.comboBoxTEEEEEEST}
    //           options={this.state.aspectIComboBoxOption}
    //           styles={comboBoxStyles}
    //           buttonIconProps={{ iconName: 'More' }}
    //           onChange={(e, selectedOption) => {   
    //             var itemsAspectTextSelected : string = this.state.itemsAspectSelectedText;
    //             var valueSelected : string = selectedOption.text.concat(", ");
    //             if(selectedOption.selected){
    //               itemsAspectTextSelected = itemsAspectTextSelected.length == 0 ? valueSelected : itemsAspectTextSelected.concat(valueSelected);                
    //             }
    //             else{
    //               itemsAspectTextSelected = itemsAspectTextSelected.length == 0 ? "" : itemsAspectTextSelected.replace(valueSelected, "");
    //             }
    //             this.setState({itemsAspectSelectedText: itemsAspectTextSelected});                
    //           }}
    //         />
    //       </Stack.Item>          
    //     </Stack>
    //     <Label>Clastoxic</Label>
    //     <Stack horizontal tokens={{ childrenGap: 20 }}>
    //       <Stack.Item grow={6}>
    //         <TextField 
    //           ariaLabel="Without visible label" 
    //           value={this.state.itemsClastoxicSelectedText} 
    //           onChange={(e, text) => {
    //             this.setState({itemsClastoxicSelectedText: text}); 
    //           }}
    //         />
    //       </Stack.Item>
    //       <Stack.Item grow={0}>
    //         <ComboBox
    //           multiSelect
    //           className={styles.comboBoxTEEEEEEST}
    //           options={this.state.clastoxicIComboBoxOption}
    //           styles={comboBoxStyles}
    //           buttonIconProps={{ iconName: 'More' }}
    //           onChange={(e, selectedOption) => {   
    //             var itemsClastoxicSelected : string = this.state.itemsClastoxicSelectedText;
    //             var valueSelected : string = selectedOption.text.concat(", ");
    //             if(selectedOption.selected){
    //               itemsClastoxicSelected = itemsClastoxicSelected.length == 0 ? valueSelected : itemsClastoxicSelected.concat(valueSelected);                
    //             }
    //             else{
    //               itemsClastoxicSelected = itemsClastoxicSelected.length == 0 ? "" : itemsClastoxicSelected.replace(valueSelected, "");
    //             }
    //             this.setState({itemsClastoxicSelectedText: itemsClastoxicSelected});                
    //           }}
    //         />
    //       </Stack.Item>
    //     </Stack>
    //     <Label>Corpsecpeau</Label>
    //     <Stack horizontal tokens={{ childrenGap: 20 }}>
    //       <Stack.Item grow={6}>
    //         <TextField 
    //           ariaLabel="Without visible label" 
    //           value={this.state.itemsCorpsecpeauSelectedText} 
    //           onChange={(e, text) => {
    //             this.setState({itemsCorpsecpeauSelectedText: text}); 
    //           }}
    //         />
    //       </Stack.Item>
    //       <Stack.Item grow={0}>
    //         <ComboBox
    //           multiSelect
    //           className={styles.comboBoxTEEEEEEST}
    //           options={this.state.corpsecpeauIComboBoxOption}
    //           styles={comboBoxStyles}
    //           buttonIconProps={{ iconName: 'More' }}
    //           onChange={(e, selectedOption) => {   
    //             var itemsCorpsecpeauTextSelected : string = this.state.itemsCorpsecpeauSelectedText;
    //             var valueSelected : string = selectedOption.text.concat(", ");
    //             if(selectedOption.selected){
    //               itemsCorpsecpeauTextSelected = itemsCorpsecpeauTextSelected.length == 0 ? valueSelected : itemsCorpsecpeauTextSelected.concat(valueSelected);                
    //             }
    //             else{
    //               itemsCorpsecpeauTextSelected = itemsCorpsecpeauTextSelected.length == 0 ? "" : itemsCorpsecpeauTextSelected.replace(valueSelected, "");
    //             }
    //             this.setState({itemsCorpsecpeauSelectedText: itemsCorpsecpeauTextSelected});                
    //           }}
    //         />
    //       </Stack.Item>
    //     </Stack>
    //     <Label>Corpsecresp</Label>
    //     <Stack horizontal tokens={{ childrenGap: 20 }}>
    //       <Stack.Item grow={6}>
    //         <TextField 
    //           ariaLabel="Without visible label" 
    //           value={this.state.itemsCorpsecrespSelectedText} 
    //           onChange={(e, text) => {
    //             this.setState({itemsCorpsecrespSelectedText: text}); 
    //           }}
    //         />
    //       </Stack.Item>
    //       <Stack.Item grow={0}>
    //         <ComboBox
    //           multiSelect
    //           className={styles.comboBoxTEEEEEEST}
    //           options={this.state.corpsecrespIComboBoxOption}
    //           styles={comboBoxStyles}
    //           buttonIconProps={{ iconName: 'More' }}
    //           onChange={(e, selectedOption) => {   
    //             var itemsCorpsecrespTextSelected : string = this.state.itemsCorpsecrespSelectedText;
    //             var valueSelected : string = selectedOption.text.concat(", ");
    //             if(selectedOption.selected){
    //               itemsCorpsecrespTextSelected = itemsCorpsecrespTextSelected.length == 0 ? valueSelected : itemsCorpsecrespTextSelected.concat(valueSelected);                
    //             }
    //             else{
    //               itemsCorpsecrespTextSelected = itemsCorpsecrespTextSelected.length == 0 ? "" : itemsCorpsecrespTextSelected.replace(valueSelected, "");
    //             }
    //             this.setState({itemsCorpsecrespSelectedText: itemsCorpsecrespTextSelected});                
    //           }}
    //         />
    //       </Stack.Item>
    //     </Stack>
    //     <Label>Corpsecyeux</Label>
    //     <Stack horizontal tokens={{ childrenGap: 20 }}>
    //       <Stack.Item grow={6}>
    //         <TextField 
    //           ariaLabel="Without visible label" 
    //           value={this.state.itemsCorpsecyeuxSelectedText} 
    //           onChange={(e, text) => {
    //             this.setState({itemsCorpsecyeuxSelectedText: text}); 
    //           }}
    //         />
    //       </Stack.Item>
    //       <Stack.Item grow={0}>
    //         <ComboBox
    //           multiSelect
    //           className={styles.comboBoxTEEEEEEST}
    //           options={this.state.corpsecyeuxIComboBoxOption}
    //           styles={comboBoxStyles}
    //           buttonIconProps={{ iconName: 'More' }}
    //           onChange={(e, selectedOption) => {   
    //             var itemsCorpsecyeuxTextSelected : string = this.state.itemsCorpsecyeuxSelectedText;
    //             var valueSelected : string = selectedOption.text.concat(", ");
    //             if(selectedOption.selected){
    //               itemsCorpsecyeuxTextSelected = itemsCorpsecyeuxTextSelected.length == 0 ? valueSelected : itemsCorpsecyeuxTextSelected.concat(valueSelected);                
    //             }
    //             else{
    //               itemsCorpsecyeuxTextSelected = itemsCorpsecyeuxTextSelected.length == 0 ? "" : itemsCorpsecyeuxTextSelected.replace(valueSelected, "");
    //             }
    //             this.setState({itemsCorpsecyeuxSelectedText: itemsCorpsecyeuxTextSelected});                
    //           }}
    //         />
    //       </Stack.Item>
    //     </Stack>
    //     <Label>Couleur</Label>
    //     <Stack horizontal tokens={{ childrenGap: 20 }}>
    //       <Stack.Item grow={6}>
    //         <TextField 
    //           ariaLabel="Without visible label" 
    //           value={this.state.itemsCouleurSelectedText} 
    //           onChange={(e, text) => {
    //             this.setState({itemsCouleurSelectedText: text}); 
    //           }}
    //         />
    //       </Stack.Item>
    //       <Stack.Item grow={0}>
    //         <ComboBox
    //           multiSelect
    //           className={styles.comboBoxTEEEEEEST}
    //           options={this.state.couleurIComboBoxOption}
    //           styles={comboBoxStyles}
    //           buttonIconProps={{ iconName: 'More' }}
    //           onChange={(e, selectedOption) => {   
    //             var itemsCouleurTextSelected : string = this.state.itemsCouleurSelectedText;
    //             var valueSelected : string = selectedOption.text.concat(", ");
    //             if(selectedOption.selected){
    //               itemsCouleurTextSelected = itemsCouleurTextSelected.length == 0 ? valueSelected : itemsCouleurTextSelected.concat(valueSelected);                
    //             }
    //             else{
    //               itemsCouleurTextSelected = itemsCouleurTextSelected.length == 0 ? "" : itemsCouleurTextSelected.replace(valueSelected, "");
    //             }
    //             this.setState({itemsCouleurSelectedText: itemsCouleurTextSelected});                
    //           }}
    //         />
    //       </Stack.Item>
    //     </Stack>        
    //     <Label>DangersComplement</Label>
    //     <Stack horizontal tokens={{ childrenGap: 20 }}>
    //       <Stack.Item grow={6}>
    //         <TextField 
    //           ariaLabel="Without visible label" 
    //           value={this.state.itemsDangersComplementSelectedText} 
    //           onChange={(e, text) => {
    //             this.setState({itemsDangersComplementSelectedText: text}); 
    //           }}
    //         />
    //       </Stack.Item>
    //       <Stack.Item grow={0}>
    //         <ComboBox
    //           multiSelect
    //           className={styles.comboBoxTEEEEEEST}
    //           options={this.state.dangersComplementIComboBoxOption}
    //           styles={comboBoxStyles}
    //           buttonIconProps={{ iconName: 'More' }}
    //           onChange={(e, selectedOption) => {   
    //             var itemsDangersComplementTextSelected : string = this.state.itemsDangersComplementSelectedText;
    //             var valueSelected : string = selectedOption.text.concat(", ");
    //             if(selectedOption.selected){
    //               itemsDangersComplementTextSelected = itemsDangersComplementTextSelected.length == 0 ? valueSelected : itemsDangersComplementTextSelected.concat(valueSelected);                
    //             }
    //             else{
    //               itemsDangersComplementTextSelected = itemsDangersComplementTextSelected.length == 0 ? "" : itemsDangersComplementTextSelected.replace(valueSelected, "");
    //             }
    //             this.setState({itemsDangersComplementSelectedText: itemsDangersComplementTextSelected});                
    //           }}
    //         />
    //       </Stack.Item>
    //     </Stack>
    //     <Label>DangexiFilter</Label>
    //     <Stack horizontal tokens={{ childrenGap: 20 }}>
    //       <Stack.Item grow={6}>
    //         <TextField 
    //           ariaLabel="Without visible label" 
    //           value={this.state.itemsDangexiFilterSelectedText} 
    //           onChange={(e, text) => {
    //             this.setState({itemsDangexiFilterSelectedText: text}); 
    //           }}
    //         />
    //       </Stack.Item>
    //       <Stack.Item grow={0}>
    //         <ComboBox
    //           multiSelect
    //           className={styles.comboBoxTEEEEEEST}
    //           options={this.state.dangexiFilterIComboBoxOption}
    //           styles={comboBoxStyles}
    //           buttonIconProps={{ iconName: 'More' }}
    //           onChange={(e, selectedOption) => {   
    //             var itemsDangexiTextSelected : string = this.state.itemsDangexiFilterSelectedText;
    //             var valueSelected : string = selectedOption.text.concat(", ");
    //             if(selectedOption.selected){
    //               itemsDangexiTextSelected = itemsDangexiTextSelected.length == 0 ? valueSelected : itemsDangexiTextSelected.concat(valueSelected);                
    //             }
    //             else{itemsDangexiTextSelected
    //               itemsDangexiTextSelected = itemsDangexiTextSelected.length == 0 ? "" : itemsDangexiTextSelected.replace(valueSelected, "");
    //             }
    //             this.setState({itemsDangexiFilterSelectedText: itemsDangexiTextSelected});                
    //           }}
    //         />
    //       </Stack.Item>
    //     </Stack>
    //     <Label>EnvironmentFilter</Label>
    //     <Stack horizontal tokens={{ childrenGap: 20 }}>
    //       <Stack.Item grow={6}>
    //         <TextField 
    //           ariaLabel="Without visible label" 
    //           value={this.state.itemsEnvironmentFilterSelectedText} 
    //           onChange={(e, text) => {
    //             this.setState({itemsEnvironmentFilterSelectedText: text}); 
    //           }}
    //         />
    //       </Stack.Item>
    //       <Stack.Item grow={0}>
    //         <ComboBox
    //           multiSelect
    //           className={styles.comboBoxTEEEEEEST}
    //           options={this.state.environmentFilterIComboBoxOption}
    //           styles={comboBoxStyles}
    //           buttonIconProps={{ iconName: 'More' }}
    //           onChange={(e, selectedOption) => {   
    //             var itemsEnvironmentFilterSelected : string = this.state.itemsEnvironmentFilterSelectedText;
    //             var valueSelected : string = selectedOption.text.concat(", ");
    //             if(selectedOption.selected){
    //               itemsEnvironmentFilterSelected = itemsEnvironmentFilterSelected.length == 0 ? valueSelected : itemsEnvironmentFilterSelected.concat(valueSelected);                
    //             }
    //             else{
    //               itemsEnvironmentFilterSelected = itemsEnvironmentFilterSelected.length == 0 ? "" : itemsEnvironmentFilterSelected.replace(valueSelected, "");
    //             }
    //             this.setState({itemsEnvironmentFilterSelectedText: itemsEnvironmentFilterSelected});                
    //           }}
    //         />
    //       </Stack.Item>
    //     </Stack>
    //     <Label>MesuresParticuileres</Label>
    //     <Stack horizontal tokens={{ childrenGap: 20 }}>
    //       <Stack.Item grow={6}>
    //         <TextField 
    //           ariaLabel="Without visible label" 
    //           value={this.state.itemsMesuresParticuileresSelectedText} 
    //           onChange={(e, text) => {
    //             this.setState({itemsMesuresParticuileresSelectedText: text}); 
    //           }}
    //         />
    //       </Stack.Item>
    //       <Stack.Item grow={0}>
    //         <ComboBox
    //           multiSelect
    //           className={styles.comboBoxTEEEEEEST}
    //           options={this.state.mesuresParticuileresIComboBoxOption}
    //           styles={comboBoxStyles}
    //           buttonIconProps={{ iconName: 'More' }}
    //           onChange={(e, selectedOption) => {   
    //             var itemsMesuresParticuileresFilterSelected : string = this.state.itemsMesuresParticuileresSelectedText;
    //             var valueSelected : string = selectedOption.text.concat(", ");
    //             if(selectedOption.selected){
    //               itemsMesuresParticuileresFilterSelected = itemsMesuresParticuileresFilterSelected.length == 0 ? valueSelected : itemsMesuresParticuileresFilterSelected.concat(valueSelected);                
    //             }
    //             else{
    //               itemsMesuresParticuileresFilterSelected = itemsMesuresParticuileresFilterSelected.length == 0 ? "" : itemsMesuresParticuileresFilterSelected.replace(valueSelected, "");
    //             }
    //             this.setState({itemsMesuresParticuileresSelectedText: itemsMesuresParticuileresFilterSelected});                
    //           }}
    //         />
    //       </Stack.Item>
    //     </Stack>
    //     <Label>Odeur</Label>
    //     <Stack horizontal tokens={{ childrenGap: 20 }}>
    //       <Stack.Item grow={6}>
    //         <TextField 
    //           ariaLabel="Without visible label" 
    //           value={this.state.itemsOdeurSelectedText} 
    //           onChange={(e, text) => {
    //             this.setState({itemsOdeurSelectedText: text}); 
    //           }}
    //         />
    //       </Stack.Item>
    //       <Stack.Item grow={0}>
    //         <ComboBox
    //           multiSelect
    //           className={styles.comboBoxTEEEEEEST}
    //           options={this.state.odeurIComboBoxOption}
    //           styles={comboBoxStyles}
    //           buttonIconProps={{ iconName: 'More' }}
    //           onChange={(e, selectedOption) => {   
    //             var itemsOdeurFilterSelected : string = this.state.itemsOdeurSelectedText;
    //             var valueSelected : string = selectedOption.text.concat(", ");
    //             if(selectedOption.selected){
    //               itemsOdeurFilterSelected = itemsOdeurFilterSelected.length == 0 ? valueSelected : itemsOdeurFilterSelected.concat(valueSelected);                
    //             }
    //             else{
    //               itemsOdeurFilterSelected = itemsOdeurFilterSelected.length == 0 ? "" : itemsOdeurFilterSelected.replace(valueSelected, "");
    //             }
    //             this.setState({itemsOdeurSelectedText: itemsOdeurFilterSelected});                
    //           }}
    //         />
    //       </Stack.Item>
    //     </Stack>
    //     <Label>Protection</Label>
    //     <Stack horizontal tokens={{ childrenGap: 20 }}>
    //       <Stack.Item grow={6}>
    //         <TextField 
    //           ariaLabel="Without visible label" 
    //           value={this.state.itemsProtectionSelectedText} 
    //           onChange={(e, text) => {
    //             this.setState({itemsProtectionSelectedText: text}); 
    //           }}
    //         />
    //       </Stack.Item>
    //       <Stack.Item grow={0}>
    //         <ComboBox
    //           multiSelect
    //           className={styles.comboBoxTEEEEEEST}
    //           options={this.state.protectionIComboBoxOption}
    //           styles={comboBoxStyles}
    //           buttonIconProps={{ iconName: 'More' }}
    //           onChange={(e, selectedOption) => {   
    //             var itemsProtectionFilterSelected : string = this.state.itemsProtectionSelectedText;
    //             var valueSelected : string = selectedOption.text.concat(", ");
    //             if(selectedOption.selected){
    //               itemsProtectionFilterSelected = itemsProtectionFilterSelected.length == 0 ? valueSelected : itemsProtectionFilterSelected.concat(valueSelected);                
    //             }
    //             else{
    //               itemsProtectionFilterSelected = itemsProtectionFilterSelected.length == 0 ? "" : itemsProtectionFilterSelected.replace(valueSelected, "");
    //             }
    //             this.setState({itemsProtectionSelectedText: itemsProtectionFilterSelected});                
    //           }}
    //         />
    //       </Stack.Item>
    //     </Stack>
    //     <Label>Reference</Label>
    //     <Stack horizontal tokens={{ childrenGap: 20 }}>
    //       <Stack.Item grow={6}>
    //         <TextField 
    //           ariaLabel="Without visible label" 
    //           value={this.state.itemsReferenceSelectedText} 
    //           onChange={(e, text) => {
    //             this.setState({itemsReferenceSelectedText: text}); 
    //           }}
    //         />
    //       </Stack.Item>
    //       <Stack.Item grow={0}>
    //         <ComboBox
    //           multiSelect
    //           className={styles.comboBoxTEEEEEEST}
    //           options={this.state.referenceIComboBoxOption}
    //           styles={comboBoxStyles}
    //           buttonIconProps={{ iconName: 'More' }}
    //           onChange={(e, selectedOption) => {   
    //             var itemsReferenceFilterSelected : string = this.state.itemsReferenceSelectedText;
    //             var valueSelected : string = selectedOption.text.concat(", ");
    //             if(selectedOption.selected){
    //               itemsReferenceFilterSelected = itemsReferenceFilterSelected.length == 0 ? valueSelected : itemsReferenceFilterSelected.concat(valueSelected);                
    //             }
    //             else{
    //               itemsReferenceFilterSelected = itemsReferenceFilterSelected.length == 0 ? "" : itemsReferenceFilterSelected.replace(valueSelected, "");
    //             }
    //             this.setState({itemsReferenceSelectedText: itemsReferenceFilterSelected});                
    //           }}
    //         />
    //       </Stack.Item>
    //     </Stack>
    //     <Label>Repository</Label>
    //     <Stack horizontal tokens={{ childrenGap: 20 }}>
    //       <Stack.Item grow={6}>
    //         <TextField 
    //           ariaLabel="Without visible label" 
    //           value={this.state.itemsRepositorySelectedText} 
    //           onChange={(e, text) => {
    //             this.setState({itemsRepositorySelectedText: text}); 
    //           }}
    //         />
    //       </Stack.Item>
    //       <Stack.Item grow={0}>
    //         <ComboBox
    //           multiSelect
    //           className={styles.comboBoxTEEEEEEST}
    //           options={this.state.repositoryIComboBoxOption}
    //           styles={comboBoxStyles}
    //           buttonIconProps={{ iconName: 'More' }}
    //           onChange={(e, selectedOption) => {   
    //             var itemsRepositoryFilterSelected : string = this.state.itemsRepositorySelectedText;
    //             var valueSelected : string = selectedOption.text.concat(", ");
    //             if(selectedOption.selected){
    //               itemsRepositoryFilterSelected = itemsRepositoryFilterSelected.length == 0 ? valueSelected : itemsRepositoryFilterSelected.concat(valueSelected);                
    //             }
    //             else{
    //               itemsRepositoryFilterSelected = itemsRepositoryFilterSelected.length == 0 ? "" : itemsRepositoryFilterSelected.replace(valueSelected, "");
    //             }
    //             this.setState({itemsRepositorySelectedText: itemsRepositoryFilterSelected});                
    //           }}
    //         />
    //       </Stack.Item>
    //     </Stack>
    //     <Label>Solvants</Label>
    //     <Stack horizontal tokens={{ childrenGap: 20 }}>
    //       <Stack.Item grow={6}>
    //         <TextField 
    //           ariaLabel="Without visible label" 
    //           value={this.state.itemsSolvantsSelectedText} 
    //           onChange={(e, text) => {
    //             this.setState({itemsSolvantsSelectedText: text}); 
    //           }}
    //         />
    //       </Stack.Item>
    //       <Stack.Item grow={0}>
    //         <ComboBox
    //           multiSelect
    //           className={styles.comboBoxTEEEEEEST}
    //           options={this.state.solvantsIComboBoxOption}
    //           styles={comboBoxStyles}
    //           buttonIconProps={{ iconName: 'More' }}
    //           onChange={(e, selectedOption) => {   
    //             var itemsSolvantsFilterSelected : string = this.state.itemsSolvantsSelectedText;
    //             var valueSelected : string = selectedOption.text.concat(", ");
    //             if(selectedOption.selected){
    //               itemsSolvantsFilterSelected = itemsSolvantsFilterSelected.length == 0 ? valueSelected : itemsSolvantsFilterSelected.concat(valueSelected);                
    //             }
    //             else{
    //               itemsSolvantsFilterSelected = itemsSolvantsFilterSelected.length == 0 ? "" : itemsSolvantsFilterSelected.replace(valueSelected, "");
    //             }
    //             this.setState({itemsSolvantsSelectedText: itemsSolvantsFilterSelected});                
    //           }}
    //         />
    //       </Stack.Item>
    //     </Stack>
    //     <Label>Stabilis</Label>
    //     <Stack horizontal tokens={{ childrenGap: 20 }}>
    //       <Stack.Item grow={6}>
    //         <TextField 
    //           ariaLabel="Without visible label" 
    //           value={this.state.itemsStabilisSelectedText} 
    //           onChange={(e, text) => {
    //             this.setState({itemsStabilisSelectedText: text}); 
    //           }}
    //         />
    //       </Stack.Item>
    //       <Stack.Item grow={0}>
    //         <ComboBox
    //           multiSelect
    //           className={styles.comboBoxTEEEEEEST}
    //           options={this.state.stabilisIComboBoxOption}
    //           styles={comboBoxStyles}
    //           buttonIconProps={{ iconName: 'More' }}
    //           onChange={(e, selectedOption) => {   
    //             var itemsStabilisFilterSelected : string = this.state.itemsStabilisSelectedText;
    //             var valueSelected : string = selectedOption.text.concat(", ");
    //             if(selectedOption.selected){
    //               itemsStabilisFilterSelected = itemsStabilisFilterSelected.length == 0 ? valueSelected : itemsStabilisFilterSelected.concat(valueSelected);                
    //             }
    //             else{
    //               itemsStabilisFilterSelected = itemsStabilisFilterSelected.length == 0 ? "" : itemsStabilisFilterSelected.replace(valueSelected, "");
    //             }
    //             this.setState({itemsStabilisSelectedText: itemsStabilisFilterSelected});                
    //           }}
    //         />
    //       </Stack.Item>
    //     </Stack>
    //     <Label>ToxicFilter</Label>
    //     <Stack horizontal tokens={{ childrenGap: 20 }}>
    //       <Stack.Item grow={6}>
    //         <TextField 
    //           ariaLabel="Without visible label" 
    //           value={this.state.itemsToxicFilterSelectedText} 
    //           onChange={(e, text) => {
    //             this.setState({itemsToxicFilterSelectedText: text}); 
    //           }}
    //         />
    //       </Stack.Item>
    //       <Stack.Item grow={0}>
    //         <ComboBox
    //           multiSelect
    //           className={styles.comboBoxTEEEEEEST}
    //           options={this.state.toxicFilterIComboBoxOption}
    //           styles={comboBoxStyles}
    //           buttonIconProps={{ iconName: 'More' }}
    //           onChange={(e, selectedOption) => {   
    //             var itemsToxicFilterFilterSelected : string = this.state.itemsToxicFilterSelectedText;
    //             var valueSelected : string = selectedOption.text.concat(", ");   
    //             var arrayPictures : string[] = this.state.urlsPicturesSelected;
    //             var itemsPicsSelected : any[] = this.state.itemsPicsSelected
    //             var item : any = this.state.itemsToxicFilter.filter( item => item.ID == selectedOption.key);             

    //             if(selectedOption.selected){                  
    //               itemsToxicFilterFilterSelected = itemsToxicFilterFilterSelected.length == 0 ? valueSelected : itemsToxicFilterFilterSelected.concat(valueSelected); 

    //               itemsPicsSelected.push(item[0]);

    //               if(item[0]['Picture'] != null){
    //                 if(arrayPictures.length == 0 || arrayPictures.indexOf(item[0]['Picture']) == -1){
    //                   arrayPictures.push(item[0]['Picture']);
    //                 } 
    //               }                    
    //             }
    //             else{
    //               itemsToxicFilterFilterSelected = itemsToxicFilterFilterSelected.length == 0 ? "" : itemsToxicFilterFilterSelected.replace(valueSelected, "");
                  
    //               itemsPicsSelected = itemsPicsSelected.filter( i => i.Id !== selectedOption.key && i['Title'] !== selectedOption.text);

    //               if(item[0]['Picture'] != null && itemsPicsSelected.filter( i => i['Picture'] == item[0]['Picture']).length == 0){
    //                 arrayPictures =  arrayPictures.filter( i => i !== item[0]['Picture']);
    //               }

    //             }                


    //             this.setState({
    //               itemsToxicFilterSelectedText: itemsToxicFilterFilterSelected,
    //               urlsPicturesSelected: arrayPictures,
    //               itemsPicsSelected: itemsPicsSelected
    //             });
                          
    //           }}
    //         />
    //       </Stack.Item>
    //     </Stack>
    //     <Label>ToxiciteComplement</Label>
    //     <Stack horizontal tokens={{ childrenGap: 20 }}>
    //       <Stack.Item grow={6}>
    //         <TextField 
    //           ariaLabel="Without visible label" 
    //           value={this.state.itemsToxiciteComplementSelectedText} 
    //           onChange={(e, text) => {
    //             this.setState({itemsToxiciteComplementSelectedText: text}); 
    //           }}
    //         />
    //       </Stack.Item>
    //       <Stack.Item grow={0}>
    //         <ComboBox
    //           multiSelect
    //           className={styles.comboBoxTEEEEEEST}
    //           options={this.state.toxiciteComplementIComboBoxOption}
    //           styles={comboBoxStyles}
    //           buttonIconProps={{ iconName: 'More' }}
    //           onChange={(e, selectedOption) => {   
    //             var itemsToxiciteComplementFilterSelected : string = this.state.itemsToxiciteComplementSelectedText;
    //             var valueSelected : string = selectedOption.text.concat(", ");
    //             if(selectedOption.selected){
    //               itemsToxiciteComplementFilterSelected = itemsToxiciteComplementFilterSelected.length == 0 ? valueSelected : itemsToxiciteComplementFilterSelected.concat(valueSelected);                
    //             }
    //             else{
    //               itemsToxiciteComplementFilterSelected = itemsToxiciteComplementFilterSelected.length == 0 ? "" : itemsToxiciteComplementFilterSelected.replace(valueSelected, "");
    //             }
    //             this.setState({itemsToxiciteComplementSelectedText: itemsToxiciteComplementFilterSelected});                
    //           }}
    //         />
    //       </Stack.Item>
    //     </Stack> */}
    //     <Stack horizontal tokens={{ childrenGap: 20 }}>
    //       {/* <PrimaryButton
    //         text="Save"
    //         onClick={this._onSaveForm}
    //       /> */}
    //     </Stack>      
    //   </div>
    // );
  }

  private async _printPreview() {    
    try 
    {       
      this.props.onClose();
    } catch (error) {
         console.log(error);
    }
  }

  private async _onSaveNewForm() {    
    try 
    {   
      var nwItem : IInternalSafetyDataSheetItem = this.getNewISDS();

      await this.internalSafetyDataSheetService.AddInternalSafetyDataSheetItem('InternalSafetyDataSheet', nwItem);

      this.props.onSave();
    } catch (error) {
         console.log(error);
    }
  }

  private async _onSaveForm() {    
    try 
    {   
      var updateItem : IInternalSafetyDataSheetItem = this.getNewISDS();

      await this.internalSafetyDataSheetService.UpdateInternalSafetyDataSheetItem('InternalSafetyDataSheet', this.props.context.itemId, updateItem);

      this.props.onSave();
    } catch (error) {
         console.log(error);
    }
  }

  private getNewISDS():IInternalSafetyDataSheetItem{       

    let newIsds:IInternalSafetyDataSheetItem= {
      Title: this.state.title,
      RaonaAcciepand: this.state.itemsAcciepandSelectedText
    }
    return newIsds;
  }
}
