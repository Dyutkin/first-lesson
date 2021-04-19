export enum MainPageActionType {
  getSliderData = "GET_SLIDER_DATA",
}

export const getSliderDataStore = (data: any) => {
  return {
    type: MainPageActionType.getSliderData,
    payload: data,
  };
};
