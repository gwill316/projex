/* Load the PolymerElement base class and html helper function */
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
/* Load shared styles. All view elements use these styles */
import './shared-styles.js';

/* Extend the base PolymerElement class */
class MyNewView extends PolymerElement {
  /* Define a template for the new element */
  static get template() {
    return html`
<iron-pages
    selected="[[page]]"
    attr-for-selected="name"
    role="main">
  <my-view1 name="view1"></my-view1>
  <my-view2 name="view2"></my-view2>
  <my-view3 name="view3"></my-view3>
  <my-view404 name="view404"></my-view404>
<my-new-view name="new-view"></my-new-view>
</iron-pages>
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <div class="circle">1</div>
        <h1>New View</h1>
        <p>New view!</p>
      </div>
    `;
  }
}
/* Register the new element with the browser */
window.customElements.define('my-new-view', MyNewView);
