/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import { FormCustomizerContext } from "@microsoft/sp-listview-extensibility";
import { ComboBox, DefaultButton, IComboBoxStyles, Label, PrimaryButton, Stack, TextField } from "office-ui-fabric-react";

import { useComboBoxOptions } from "../hooks/useComboBoxOptions";
import { useComboBoxSelectionHandler } from "../hooks/useComboBoxSelectionHandler";
import { useInternalSafetyDataSheet } from "../hooks/useInternalSafetyDataSheet";

import { Utils } from "../utils/Utils";
import { DisplayMode, IFirmenichCustomFormState } from "./IFirmenichCustomForm";

import styles from "./FirmenichCustomForm.module.scss";

export interface ICustomFormProps {
  context: FormCustomizerContext;
  state: IFirmenichCustomFormState;
  displayMode: number;
  updateState: (state) => void;
  onSave: () => void;
  onClose: () => void;
};

const comboBoxStyles: Partial<IComboBoxStyles> = { root: { maxWidth: 300 } };


export const CustomForm: React.FC<ICustomFormProps> = ({ state, updateState, displayMode, context, onSave, onClose }) => {
  const { onSaveForm } = useInternalSafetyDataSheet({ state, context, displayMode, onSave });
  const { updateSelectedText, updateSelectedItems } = useComboBoxSelectionHandler({ state, updateState });
  const {
    selectedDangersKeys, selectedAspectKeys, selectedOdeurKeys, selectedCouleurKeys, selectedDangerxiKeys, selectedProtectionKeys
  } = useComboBoxOptions({ state, updateState });

  const viewMode = displayMode === DisplayMode.ViewMode;


  return (
    <Stack verticalAlign="center" horizontalAlign="center">
      <Stack tokens={{ padding: 20 }} styles={{ root: { maxWidth: 1200, minWidth: 900 } }}>
        <Stack>
          <h1>{Utils.DisplayFormTitle(displayMode)}</h1>
        </Stack>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={4}>
            <TextField
              label="Produit"
              value={state.Prodnom}
              disabled={viewMode}
              onChange={(e, Prodnom) => { updateState({ Prodnom: Prodnom }); }}
            />
          </Stack.Item>
          <Stack.Item grow={2}>
            <TextField
              label="Nº d'item"
              value={state.Title}
              disabled={viewMode}
              onChange={(e, Title) => { updateState({ Title: Title }); }}
            />
          </Stack.Item>
        </Stack>
        <br />
        <br />

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={3}>
            <TextField
              label="Mention d'avertissement"
              value={state.Mention}
              disabled={viewMode}
              onChange={(e, Mention) => { updateState({ Mention: Mention }); }}
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
              ariaLabel="Without visible label"
              value={state.itemsDangersSelectedText}
              disabled={viewMode}
              onChange={(e, itemsDangersSelectedText) => { updateState({ itemsDangersSelectedText: itemsDangersSelectedText }); }}
            />
          </Stack.Item>
          {!viewMode && (
            <Stack.Item grow={0}>
              <ComboBox
                multiSelect
                className={styles.comboBoxTEEEEEEST}
                options={state.dangersIComboBoxOption}
                styles={comboBoxStyles}
                buttonIconProps={{ iconName: "More" }}
                selectedKey={selectedDangersKeys}
                onChange={(event, selectedOption) => updateSelectedText(selectedOption, "itemsDangersSelectedText")}
              />
            </Stack.Item>
          )}
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={7}>
            <TextField
              label="Nom chimique ou composition"
              value={state.Nomchimique}
              disabled={viewMode}
              onChange={(e, Nomchimique) => {
                updateState({ ...state, Nomchimique: Nomchimique });
              }}
            />
          </Stack.Item>
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={5}>
            <TextField
              label="Nº CAS"
              value={state.NoCAS}
              disabled={viewMode}
              onChange={(e, NoCAS) => {
                updateState({ ...state, NoCAS: NoCAS });
              }}
            />
          </Stack.Item>
          <Stack.Item grow={1}>
            <TextField
              label="Nº UN"
              value={state.CodeONU}
              disabled={viewMode}
              onChange={(e, CodeONU) => {
                updateState({ ...state, CodeONU: CodeONU });
              }}
            />
          </Stack.Item>
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={5}>
            <TextField
              label="Formule brute"
              value={state.Nomchim}
              disabled={viewMode}
              onChange={(e, Nomchim) => {
                updateState({ ...state, Nomchim: Nomchim });
              }}
            />
          </Stack.Item>
          <Stack.Item grow={1}>
            <TextField
              label="MM"
              value={state.Poidsmol}
              disabled={viewMode}
              onChange={(e, Poidsmol) => {
                updateState({ ...state, Poidsmol: Poidsmol });
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
                value={state.itemsAspectSelectedText}
                disabled={viewMode}
                onChange={(e, text) => {
                  updateState({ ...state, itemsAspectSelectedText: text });
                }}
              />
            </Stack.Item>
            {!viewMode && (
              <Stack.Item grow={0}>
                <ComboBox
                  multiSelect
                  className={styles.comboBoxTEEEEEEST}
                  options={state.aspectIComboBoxOption}
                  styles={comboBoxStyles}
                  buttonIconProps={{ iconName: "More" }}
                  selectedKey={selectedAspectKeys}
                  onChange={(event, selectedOption) => updateSelectedText(selectedOption, "itemsAspectSelectedText")}
                />
              </Stack.Item>
            )}
          </Stack.Item>
          <Stack.Item grow={1}>
            <Label>Couleur</Label>
            <Stack.Item grow={0}>
              <TextField
                ariaLabel="Without visible label"
                value={state.itemsCouleurSelectedText}
                disabled={viewMode}
                onChange={(e, text) => {
                  updateState({ ...state, itemsCouleurSelectedText: text });
                }}
              />
            </Stack.Item>
            {!viewMode && (
              <Stack.Item grow={0}>
                <ComboBox
                  multiSelect
                  className={styles.comboBoxTEEEEEEST}
                  options={state.couleurIComboBoxOption}
                  styles={comboBoxStyles}
                  buttonIconProps={{ iconName: "More" }}
                  selectedKey={selectedCouleurKeys}
                  onChange={(event, selectedOption) => updateSelectedText(selectedOption, "itemsCouleurSelectedText")}
                />
              </Stack.Item>
            )}
          </Stack.Item>
        </Stack>

        <Label>Odeur</Label>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={6}>
            <TextField
              ariaLabel="Without visible label"
              value={state.itemsOdeurSelectedText}
              disabled={viewMode}
              onChange={(e, text) => {
                updateState({ ...state, itemsOdeurSelectedText: text });
              }}
            />
          </Stack.Item>
          {!viewMode && (
            <Stack.Item grow={0}>
              <ComboBox
                multiSelect
                className={styles.comboBoxTEEEEEEST}
                options={state.odeurIComboBoxOption}
                styles={comboBoxStyles}
                buttonIconProps={{ iconName: "More" }}
                selectedKey={selectedOdeurKeys}
                onChange={(event, selectedOption) => updateSelectedText(selectedOption, "itemsOdeurSelectedText")}
              />
            </Stack.Item>
          )}
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={7}>
            <TextField
              label="Commentaires additionnels"
              value={state.Comment1}
              disabled={viewMode}
              onChange={(e, Comment1) => {
                updateState({ ...state, Comment1: Comment1 });
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
              value={Utils.FormatDisplayMessage(state.Pointec)}
              disabled={viewMode}
              onChange={(e, Pointec) => {
                updateState({ ...state, Pointec: Pointec });
              }}
            />
          </Stack.Item>
          <Stack.Item grow={2}>
            <TextField
              label="Point de fusion (º C)"
              value={Utils.FormatDisplayMessage(state.Pointfus)}
              disabled={viewMode}
              onChange={(e, Pointfus) => {
                updateState({ ...state, Pointfus: Pointfus });
              }}
            />
          </Stack.Item>
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={4}>
            <TextField
              label="Point d'auto inflammation (º C)"
              value={Utils.FormatDisplayMessage(state.Pointinf)}
              disabled={viewMode}
              onChange={(e, Pointinf) => {
                updateState({ ...state, Pointinf: Pointinf });
              }}
            />
          </Stack.Item>
          <Stack.Item grow={2}>
            <TextField
              label="Point d'ebullition (º C)"
              value={Utils.FormatDisplayMessage(state.Pointeb)}
              disabled={viewMode}
              onChange={(e, Pointeb) => {
                updateState({ ...state, Pointeb: Pointeb });
              }}
            />
          </Stack.Item>
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={4}>
            <TextField
              label="Limite inférieure d’inflammation"
              value={state.Infinflammation}
              disabled={viewMode}
              onChange={(e, Infinflammation) => {
                updateState({ ...state, Infinflammation: Infinflammation });
              }}
            />
          </Stack.Item>
          <Stack.Item grow={2}>
            <TextField
              label="Densité"
              value={Utils.FormatDisplayMessage(state.Densite)} // Actual internal name Densit_x00e9_,
              disabled={viewMode}
              onChange={(e, Densite) => {
                updateState({ ...state, Densite: Densite });
              }}
            />
          </Stack.Item>
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={4}>
            <TextField
              label="Limite supérieure d’inflammation"
              // value={state.Supinflammation}
              value={Utils.FormatDisplayMessage(state.Supinflammation)}
              disabled={viewMode}
              onChange={(e, Supinflammation) => {
                updateState({ ...state, Supinflammation: Supinflammation });
              }}
            />
          </Stack.Item>
          <Stack.Item grow={2}>
            <TextField
              label="Densité vapeur (air 20ºC =1)"
              value={Utils.FormatDisplayMessage(state.Densvap)}
              disabled={viewMode}
              onChange={(e, Densvap) => {
                updateState({ ...state, Densvap: Densvap });
              }}
            />
          </Stack.Item>
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={4}>
            <TextField
              label="Tension de vapeur"
              value={Utils.FormatDisplayMessage(state.Tensvap)}
              disabled={viewMode}
              onChange={(e, Tensvap) => {
                updateState({ ...state, Tensvap: Tensvap });
              }}
            />
          </Stack.Item>
          <Stack.Item grow={2}>
            <TextField
              label="Solubilité dans l'eau"
              value={state.Solvants.toString()}
              disabled={viewMode}
              onChange={(e, SolubiliteDansLeau) => {
                updateState({ ...state, SolubiliteDansLeau: SolubiliteDansLeau });
              }}
            />
          </Stack.Item>
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={4}>
            <TextField
              label="VME (ppm) (mg/m3)"
              value={Utils.FormatDisplayMessage(state.Vmeppm)}
              disabled={viewMode}
              onChange={(e, Vmeppm) => {
                updateState({ ...state, Vmeppm: Vmeppm });
              }}
            />
          </Stack.Item>
          <Stack.Item grow={2}>
            <TextField
              label="CL50 (inhal-mg/l)"
              value={Utils.FormatDisplayMessage(state.CL50inhal)}
              disabled={viewMode}
              onChange={(e, CL50inhal) => {
                updateState({ ...state, CL50inhal: CL50inhal });
              }}
            />
          </Stack.Item>
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={4}>
            <TextField
              label="VLE (ppm) (mg/m3)"
              value={Utils.FormatDisplayMessage(state.Vleppm)}
              disabled={viewMode}
              onChange={(e, Vleppm) => {
                updateState({ ...state, Vleppm: Vleppm });
              }}
            />
          </Stack.Item>
          <Stack.Item grow={2}>
            <TextField
              label="DL50 (dermal-mg/kg)"
              value={Utils.FormatDisplayMessage(state.DL50dermal)}
              disabled={viewMode}
              onChange={(e, DL50dermal) => {
                updateState({ ...state, DL50dermal: DL50dermal });
              }}
            />
          </Stack.Item>
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={4}>
            <TextField
              label="CE50 (mg/l) (48h)"
              value={Utils.FormatDisplayMessage(state.CE50mg)}
              disabled={viewMode}
              onChange={(e, CE50mg) => {
                updateState({ ...state, CE50mg: CE50mg });
              }}
            />
          </Stack.Item>
          <Stack.Item grow={2}>
            <TextField
              label="DL50 (oral-g/kg)"
              value={Utils.FormatDisplayMessage(state.DL50)} // Internal name _x0044_L50
              disabled={viewMode}
              onChange={(e, DL50) => {
                updateState({ ...state, DL50: DL50 });
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
              value={state.itemsDangexiFilterSelectedText}
              disabled={viewMode}
              onChange={(e, text) => {
                updateState({ ...state, itemsDangexiFilterSelectedText: text });
              }}
            />
          </Stack.Item>
          {!viewMode && (
            <Stack.Item grow={0}>
              <ComboBox
                multiSelect
                className={styles.comboBoxTEEEEEEST}
                options={state.dangexiFilterIComboBoxOption}
                styles={comboBoxStyles}
                buttonIconProps={{ iconName: "More" }}
                selectedKey={selectedDangerxiKeys}
                onChange={(event, selectedOption) => updateSelectedItems(selectedOption, "itemsDangexiFilterSelectedText", "itemsDangexiFilter")}
              />
            </Stack.Item>
          )}
        </Stack>

        {!(!!state.itemsDangersComplementSelectedText && displayMode === DisplayMode.ViewMode) && (
          <>
            <Label>Complément</Label>
            <Stack horizontal tokens={{ childrenGap: 20 }}>
              <Stack.Item grow={6}>
                <TextField
                  ariaLabel="Without visible label"
                  value={state.itemsDangersComplementSelectedText}
                  disabled={viewMode}
                  onChange={(e, text) => {
                    updateState({ ...state, itemsDangersComplementSelectedText: text });
                  }}
                />
              </Stack.Item>
              {!viewMode && (
                <Stack.Item grow={0}>
                  <ComboBox
                    multiSelect
                    className={styles.comboBoxTEEEEEEST}
                    options={state.dangersComplementIComboBoxOption}
                    styles={comboBoxStyles}
                    buttonIconProps={{ iconName: "More" }}
                    onChange={(event, selectedOption) => updateSelectedText(selectedOption, "itemsDangersComplementSelectedText")}
                  />
                </Stack.Item>
              )}
            </Stack>
          </>
        )}

        <Label>Toxicité</Label>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={6}>
            <TextField
              ariaLabel="Without visible label"
              value={state.itemsToxicFilterSelectedText} // Internal name Toxicit_x00e9_
              disabled={viewMode}
              onChange={(e, text) => {
                updateState({ ...state, itemsToxicFilterSelectedText: text });
              }}
            />
          </Stack.Item>
          {!viewMode && (
            <Stack.Item grow={0}>
              <ComboBox
                multiSelect
                className={styles.comboBoxTEEEEEEST}
                options={state.toxicFilterIComboBoxOption}
                styles={comboBoxStyles}
                buttonIconProps={{ iconName: "More" }}
                onChange={(event, selectedOption) => updateSelectedItems(selectedOption, "itemsToxicFilterSelectedText", "itemsToxicFilter")}
              />
            </Stack.Item>
          )}
        </Stack>

        {!(!!state.itemsToxiciteComplementSelectedText && displayMode === DisplayMode.ViewMode) && (
          <>
            <Label>Complément</Label>
            <Stack horizontal tokens={{ childrenGap: 20 }}>
              <Stack.Item grow={6}>
                <TextField
                  ariaLabel="Without visible label"
                  value={state.itemsToxiciteComplementSelectedText}
                  disabled={viewMode}
                  onChange={(e, text) => {
                    updateState({ ...state, itemsToxiciteComplementSelectedText: text });
                  }}
                />
              </Stack.Item>
              {!viewMode && (
                <Stack.Item grow={0}>
                  <ComboBox
                    multiSelect
                    className={styles.comboBoxTEEEEEEST}
                    options={state.toxiciteComplementIComboBoxOption}
                    styles={comboBoxStyles}
                    buttonIconProps={{ iconName: "More" }}
                    onChange={(event, selectedOption) => updateSelectedText(selectedOption, "itemsToxiciteComplementSelectedText")}
                  // onChange={(e, selectedOption) => {
                  //   let itemsToxiciteComplementFilterSelected: string = state.itemsToxiciteComplementSelectedText;
                  //   const valueSelected: string = selectedOption.text.concat(", ");
                  //   if (selectedOption.selected) {
                  //     itemsToxiciteComplementFilterSelected = itemsToxiciteComplementFilterSelected.length === 0 ? valueSelected : itemsToxiciteComplementFilterSelected.concat(valueSelected);
                  //   }
                  //   else {
                  //     itemsToxiciteComplementFilterSelected = itemsToxiciteComplementFilterSelected.length === 0 ? "" : itemsToxiciteComplementFilterSelected.replace(valueSelected, "");
                  //   }
                  //   updateState({ ...state, itemsToxiciteComplementSelectedText: itemsToxiciteComplementFilterSelected });
                  // }}
                  />
                </Stack.Item>
              )}
            </Stack>
          </>
        )}

        <Label>EPI additionnels requis</Label>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={6}>
            <TextField
              ariaLabel="Without visible label"
              value={state.itemsProtectionSelectedText}
              disabled={viewMode}
              onChange={(e, itemsProtectionSelectedText) => {
                updateState({ ...state, itemsProtectionSelectedText: itemsProtectionSelectedText });
              }}
            />
          </Stack.Item>
          {!viewMode && (
            <Stack.Item grow={0}>
              <ComboBox
                multiSelect
                className={styles.comboBoxTEEEEEEST}
                options={state.protectionIComboBoxOption}
                styles={comboBoxStyles}
                buttonIconProps={{ iconName: "More" }}
                selectedKey={selectedProtectionKeys}
                onChange={(event, selectedOption) => updateSelectedText(selectedOption, "itemsProtectionSelectedText")}
              // onChange={(e, selectedOption) => {
              //   let itemsProtectionFilterSelected: string = state.itemsProtectionSelectedText;
              //   const valueSelected: string = selectedOption.text.concat(", ");
              //   if (selectedOption.selected) {
              //     itemsProtectionFilterSelected = itemsProtectionFilterSelected.length === 0 ? valueSelected : itemsProtectionFilterSelected.concat(valueSelected);
              //   }
              //   else {
              //     itemsProtectionFilterSelected = itemsProtectionFilterSelected.length === 0 ? "" : itemsProtectionFilterSelected.replace(valueSelected, "");
              //   }
              //   updateState({ ...state, itemsProtectionSelectedText: itemsProtectionFilterSelected });
              // }}
              />
            </Stack.Item>
          )}
        </Stack>

        <Label>Mesures particulières</Label>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={6}>
            <TextField
              ariaLabel="Without visible label"
              value={state.itemsMesuresParticuileresSelectedText}
              disabled={viewMode}
              onChange={(e, text) => {
                updateState({ ...state, itemsMesuresParticuileresSelectedText: text });
              }}
            />
          </Stack.Item>
          {!viewMode && (
            <Stack.Item grow={0}>
              <ComboBox
                multiSelect
                className={styles.comboBoxTEEEEEEST}
                options={state.mesuresParticuileresIComboBoxOption}
                styles={comboBoxStyles}
                buttonIconProps={{ iconName: "More" }}
                onChange={(event, selectedOption) => updateSelectedText(selectedOption, "itemsMesuresParticuileresSelectedText")}
              //   onChange={(e, selectedOption) => {
              //     let itemsMesuresParticuileresFilterSelected: string = state.itemsMesuresParticuileresSelectedText;
              //     const valueSelected: string = selectedOption.text.concat(", ");
              //     if (selectedOption.selected) {
              //       itemsMesuresParticuileresFilterSelected = itemsMesuresParticuileresFilterSelected.length === 0 ? valueSelected : itemsMesuresParticuileresFilterSelected.concat(valueSelected);
              //     }
              //     else {
              //       itemsMesuresParticuileresFilterSelected = itemsMesuresParticuileresFilterSelected.length === 0 ? "" : itemsMesuresParticuileresFilterSelected.replace(valueSelected, "");
              //     }
              //     updateState({...state, itemsMesuresParticuileresSelectedText: itemsMesuresParticuileresFilterSelected });
              //   }}
              />
            </Stack.Item>
          )}
        </Stack>

        <Label>Environment</Label>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={6}>
            <TextField
              ariaLabel="Without visible label"
              value={state.itemsEnvironmentFilterSelectedText}
              disabled={viewMode}
              onChange={(e, text) => {
                updateState({ ...state, itemsEnvironmentFilterSelectedText: text });
              }}
            />
          </Stack.Item>
          {!viewMode && (
            <Stack.Item grow={0}>
              <ComboBox
                multiSelect
                className={styles.comboBoxTEEEEEEST}
                options={state.environmentFilterIComboBoxOption}
                styles={comboBoxStyles}
                buttonIconProps={{ iconName: "More" }}
                onChange={(event, selectedOption) => updateSelectedItems(selectedOption, "itemsEnvironmentFilterSelectedText", "itemsEnvironmentFilter")}
              // onChange={(e, selectedOption) => {
              //   let itemsEnvironmentFilterSelected: string = state.itemsEnvironmentFilterSelectedText;
              //   const valueSelected: string = selectedOption.text.concat(", ");
              //   const item: any = state.itemsEnvironmentFilter.filter(item => item.ID === selectedOption.key);

              //   let arrayPictures: string[] = state.urlsPicturesSelected;
              //   let itemsPicsSelected: any[] = state.itemsPicsSelected;

              //   if (selectedOption.selected) {
              //     itemsEnvironmentFilterSelected = itemsEnvironmentFilterSelected.length === 0 ? valueSelected : itemsEnvironmentFilterSelected.concat(valueSelected);

              //     itemsPicsSelected.push(item[0]);

              //     if (item[0].Picture !== null) {
              //       if (arrayPictures.length === 0 || arrayPictures.indexOf(item[0].Picture) === -1) {
              //         arrayPictures.push(item[0].Picture);
              //       }
              //     }
              //   }
              //   else {
              //     itemsEnvironmentFilterSelected = itemsEnvironmentFilterSelected.length === 0 ? "" : itemsEnvironmentFilterSelected.replace(valueSelected, "");

              //     itemsPicsSelected = itemsPicsSelected.filter(i => i.Id !== selectedOption.key && i.Title !== selectedOption.text);

              //     if (item[0].Picture !== null && itemsPicsSelected.filter(i => i.Picture === item[0].Picture).length === 0) {
              //       arrayPictures = arrayPictures.filter(i => i !== item[0].Picture);
              //     }
              //   }
              //   updateState({
              //     ...state,
              //     itemsEnvironmentFilterSelectedText: itemsEnvironmentFilterSelected,
              //     urlsPicturesSelected: arrayPictures,
              //     itemsPicsSelected: itemsPicsSelected
              //   });
              // }}
              />
            </Stack.Item>
          )}
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
              label="Epandage"
              ariaLabel="Without visible label"
              value={state.EpandageText}
              disabled={viewMode}
              onChange={(e, text) => {
                updateState({ ...state, EpandageText: text });
              }}
            />
          </Stack.Item>
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={7}>
            <TextField
              label="Feu"
              ariaLabel="Without visible label"
              value={state.AccifeuEdited}
              disabled={viewMode}
              onChange={(e, text) => {
                updateState({ ...state, AccifeuEdited: text });
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
              value={state.itemsCorpsecrespSelectedText}
              disabled={viewMode}
              onChange={(e, text) => {
                updateState({ ...state, itemsCorpsecrespSelectedText: text });
              }}
            />
          </Stack.Item>
          {!viewMode && (
            <Stack.Item grow={0}>
              <ComboBox
                multiSelect
                className={styles.comboBoxTEEEEEEST}
                options={state.corpsecrespIComboBoxOption}
                styles={comboBoxStyles}
                buttonIconProps={{ iconName: "More" }}
                onChange={(event, selectedOption) => updateSelectedText(selectedOption, "itemsCorpsecrespSelectedText")}
              // onChange={(e, selectedOption) => {
              //   let itemsCorpsecrespTextSelected: string = state.itemsCorpsecrespSelectedText;
              //   const valueSelected: string = selectedOption.text.concat(", ");
              //   if (selectedOption.selected) {
              //     itemsCorpsecrespTextSelected = itemsCorpsecrespTextSelected.length === 0 ? valueSelected : itemsCorpsecrespTextSelected.concat(valueSelected);
              //   }
              //   else {
              //     itemsCorpsecrespTextSelected = itemsCorpsecrespTextSelected.length === 0 ? "" : itemsCorpsecrespTextSelected.replace(valueSelected, "");
              //   }
              //   updateState({ ...state, itemsCorpsecrespSelectedText: itemsCorpsecrespTextSelected });
              // }}
              />
            </Stack.Item>
          )}
        </Stack>

        <Label>Peau</Label>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={6}>
            <TextField
              ariaLabel="Without visible label"
              value={state.itemsCorpsecpeauSelectedText}
              disabled={viewMode}
              onChange={(e, text) => {
                updateState({ ...state, itemsCorpsecpeauSelectedText: text });
              }}
            />
          </Stack.Item>
          {!viewMode && (
            <Stack.Item grow={0}>
              <ComboBox
                multiSelect
                className={styles.comboBoxTEEEEEEST}
                options={state.corpsecpeauIComboBoxOption}
                styles={comboBoxStyles}
                buttonIconProps={{ iconName: "More" }}
                onChange={(event, selectedOption) => updateSelectedText(selectedOption, "itemsCorpsecpeauSelectedText")}
              // onChange={(e, selectedOption) => {
              //   let itemsCorpsecpeauTextSelected: string = state.itemsCorpsecpeauSelectedText;
              //   const valueSelected: string = selectedOption.text.concat(", ");
              //   if (selectedOption.selected) {
              //     itemsCorpsecpeauTextSelected = itemsCorpsecpeauTextSelected.length === 0 ? valueSelected : itemsCorpsecpeauTextSelected.concat(valueSelected);
              //   }
              //   else {
              //     itemsCorpsecpeauTextSelected = itemsCorpsecpeauTextSelected.length === 0 ? "" : itemsCorpsecpeauTextSelected.replace(valueSelected, "");
              //   }
              //   updateState({ ...state, itemsCorpsecpeauSelectedText: itemsCorpsecpeauTextSelected });
              // }}
              />
            </Stack.Item>
          )}
        </Stack>

        <Label>Yeux</Label>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={6}>
            <TextField
              ariaLabel="Without visible label"
              value={state.itemsCorpsecyeuxSelectedText}
              disabled={viewMode}
              onChange={(e, text) => {
                updateState({ ...state, itemsCorpsecyeuxSelectedText: text });
              }}
            />
          </Stack.Item>
          {!viewMode && (
            <Stack.Item grow={0}>
              <ComboBox
                multiSelect
                className={styles.comboBoxTEEEEEEST}
                options={state.corpsecyeuxIComboBoxOption}
                styles={comboBoxStyles}
                buttonIconProps={{ iconName: "More" }}
                onChange={(event, selectedOption) => updateSelectedText(selectedOption, "itemsCorpsecyeuxSelectedText")}
              // onChange={(e, selectedOption) => {
              //   let itemsCorpsecyeuxTextSelected: string = state.itemsCorpsecyeuxSelectedText;
              //   const valueSelected: string = selectedOption.text.concat(", ");
              //   if (selectedOption.selected) {
              //     itemsCorpsecyeuxTextSelected = itemsCorpsecyeuxTextSelected.length === 0 ? valueSelected : itemsCorpsecyeuxTextSelected.concat(valueSelected);
              //   }
              //   else {
              //     itemsCorpsecyeuxTextSelected = itemsCorpsecyeuxTextSelected.length === 0 ? "" : itemsCorpsecyeuxTextSelected.replace(valueSelected, "");
              //   }
              //   updateState({ ...state, itemsCorpsecyeuxSelectedText: itemsCorpsecyeuxTextSelected });
              // }}
              />
            </Stack.Item>
          )}
        </Stack>
        <br />
        <br />

        <Label>References</Label>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={6}>
            <TextField
              ariaLabel="Without visible label"
              value={state.itemsReferenceSelectedText}
              disabled={viewMode}
              onChange={(e, text) => {
                updateState({ ...state, itemsReferenceSelectedText: text });
              }}
            />
          </Stack.Item>
          {!viewMode && (
            <Stack.Item grow={0}>
              <ComboBox
                multiSelect
                className={styles.comboBoxTEEEEEEST}
                options={state.referenceIComboBoxOption}
                styles={comboBoxStyles}
                buttonIconProps={{ iconName: "More" }}
                onChange={(event, selectedOption) => updateSelectedText(selectedOption, "itemsReferenceSelectedText")}
              // onChange={(e, selectedOption) => {
              //   let itemsReferenceFilterSelected: string = state.itemsReferenceSelectedText;
              //   const valueSelected: string = selectedOption.text.concat(", ");
              //   if (selectedOption.selected) {
              //     itemsReferenceFilterSelected = itemsReferenceFilterSelected.length === 0 ? valueSelected : itemsReferenceFilterSelected.concat(valueSelected);
              //   }
              //   else {
              //     itemsReferenceFilterSelected = itemsReferenceFilterSelected.length === 0 ? "" : itemsReferenceFilterSelected.replace(valueSelected, "");
              //   }
              //   updateState({ ...state, itemsReferenceSelectedText: itemsReferenceFilterSelected });
              // }}
              />
            </Stack.Item>
          )}
        </Stack>
        <br />
        <br />

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={7}>
            <TextField
              label="Rédaction"
              ariaLabel="Without visible label"
              value={state.Modifdoc}
              disabled={viewMode}
              onChange={(e, text) => {
                updateState({ ...state, Modifdoc: text });
              }}
            />
          </Stack.Item>
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={7}>
            <TextField
              label="Approuvé le"
              ariaLabel="Without visible label"
              value={state.Visadate}
              disabled={viewMode}
              onChange={(e, text) => {
                updateState({ ...state, Visadate: text });
              }}
            />
          </Stack.Item>
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item grow={7}>
            <TextField
              label="PAR"
              ariaLabel="Without visible label"
              value={state.Visapers}
              disabled={viewMode}
              onChange={(e, text) => {
                updateState({ ...state, Visapers: text });
              }}
            />
          </Stack.Item>
        </Stack>
        <br />
        <br />

        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <PrimaryButton
            text={Utils.DisplayButtonTextMessage(displayMode)}
            onClick={onSaveForm}
          />
          <DefaultButton
            text="Close"
            onClick={onClose}
          />
        </Stack>
      </Stack>

    </Stack>
  );
};

