// import { exampleComponent } from "./exampleComponent.js";
import { thumbnailsInit, thumbnailsCleanup } from "./thumbnails.js";
import { figureInit, figureCleanup } from "./rotateFigure.js";
import { tableRowsInit, tableRowsCleanup } from "./table.js";
import { buttonsInit, buttonsCleanup } from "./buttons.js";
import { headingsInit, headingsCleanup } from "./headings.js";
import { formInit, formCleanup } from "./contactForm.js";
import { initVimeoPlayer, vimeoCleanup } from "./video.js";

export const componentsInit = (page) => {
  headingsInit(page);
  thumbnailsInit(page);
  figureInit(page);
  tableRowsInit(page);
  buttonsInit(page);
  formInit(page);
  initVimeoPlayer(page);
};

export const componentsCleanup = (page) => {
  headingsCleanup(page);
  tableRowsCleanup(page);
  thumbnailsCleanup(page);
  figureCleanup(page);
  buttonsCleanup(page);
  formCleanup(page);
  vimeoCleanup(page);
};
