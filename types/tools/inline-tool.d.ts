import {BaseTool, BaseToolConstructable} from './tool';
/**
 * Base structure for the Inline Toolbar Tool
 */
export interface InlineTool extends BaseTool {
  /**
   * Shortcut for Tool
   * @type {string}
   */
  shortcut?: string;

  /**
   * Method that accepts selected range and wrap it somehow
   * @param {Range} range - selection's range
   */
  surround(range: Range): void;

  /**
   * Get SelectionUtils and detect if Tool was applied
   * For example, after that Tool can highlight button or show some details
   * @param {Selection} selection - current Selection
   * @param {boolean} hasMath - true if current Selection overlaps with a Math element
   */
  checkState(selection: Selection, hasMath: boolean): boolean;

  /**
   * Make additional element with actions
   * For example, input for the 'link' tool or textarea for the 'comment' tool
   */
  renderActions?(): HTMLElement;

  /**
   * Function called with Inline Toolbar closing
   */
  clear?(): void;
}

export interface InlineToolConstructable extends BaseToolConstructable {}
