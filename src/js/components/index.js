// import { exampleComponent } from "./exampleComponent.js";
import { thumbnailsInit, thumbnailsCleanup } from "./thumbnails.js";
import { figureInit, figureCleanup } from "./rotateFigure.js";
import { tableRowsInit, tableRowsCleanup } from "./table.js";
import { buttonsInit, buttonsCleanup } from "./buttons.js";

export const componentsInit = (page) => {
  thumbnailsInit(page);
  figureInit(page);
  tableRowsInit(page);
  buttonsInit(page);
  console.log("components init");
};

export const componentsCleanup = (page) => {
  thumbnailsCleanup(page);
  figureCleanup(page);
  buttonsCleanup(page);
  console.log("components cleanup");
};
