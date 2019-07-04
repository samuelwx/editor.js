/**
 * Describes methods for work with Selections
 */
export interface Selection {
  /**
   * Looks ahead from selection and find passed tag with class name
   * @param {string} tagName - tag to find
   * @param {string} className - tag's class name
   * @return {HTMLElement|null}
   */
  findParentTag(tagName: string, className?: string): HTMLElement|null;

  /**
   * Expand selection to passed tag
   * @param {HTMLElement} node - tag that should contain selection
   */
  expandToTag(node: HTMLElement): void;
  
  /**
   * Gets the block in which the selection resides
   * @param {Selection} selection
   * @return {Element}
   */
  getParentBlock(selection: object): HTMLElement|null;
  
  /**
   * Check if selection intersects with any of the nodes in NodeList
   * @param {Selection} selection
   * @param {NodeList} nodes
   * @return {boolean}
   */
  hasOverlap(selection: object, nodes: NodeList): Node|null;
}
