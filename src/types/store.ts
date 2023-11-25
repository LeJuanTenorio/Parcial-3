export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  array:[];
};

export enum CellAction {
  "ADDCELL"= "ADCELL",
}

export interface AddCellAction {
  action: CellAction.ADDCELL;
  payload: any[];
}

export type Actions = AddCellAction;
