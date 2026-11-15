import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { modifier } from 'ember-modifier';
import { NEW_COMPANY_FORM_URL } from 'esug-2027-app/data/companies';

// The "New Company" button on the Companies page. It opens
// ESUG's ApptiveGrid form (the same one behind the button on
// esug.org/companies.html) in a modal <dialog>, so visitors can submit
// their company without leaving the app. The iframe is only rendered while
// the dialog is open, so the form is not loaded until it is needed and is
// reset every time the dialog opens.
export default class NewCompanyDialog extends Component {
  @tracked isOpen = false;

  dialog = null;

  registerDialog = modifier((element) => {
    this.dialog = element;
  });

  @action
  open() {
    this.isOpen = true;
    this.dialog.showModal();
  }

  @action
  close() {
    this.dialog.close();
  }

  @action
  handleClose() {
    this.isOpen = false;
  }

  // A click on the backdrop targets the <dialog> element itself; clicks on
  // its content target its children.
  @action
  handleDialogClick(event) {
    if (event.target === this.dialog) {
      this.dialog.close();
    }
  }

  <template>
    <button type="button" class="registration-button" {{on "click" this.open}}>
      New Company
    </button>

    {{! template-lint-disable no-invalid-interactive }}
    {{! Clicking the backdrop (the dialog element itself) closes the dialog;
      the Close button and the Escape key are the accessible ways to close it. }}
    <dialog
      class="form-dialog"
      aria-labelledby="new-company-dialog-title"
      {{this.registerDialog}}
      {{on "close" this.handleClose}}
      {{on "click" this.handleDialogClick}}
    >
      <div class="form-dialog-header">
        <h2 id="new-company-dialog-title" class="form-dialog-title">New Company</h2>
        <button
          type="button"
          class="form-dialog-close"
          aria-label="Close"
          {{on "click" this.close}}
        >
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
          ><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </div>
      {{#if this.isOpen}}
        <iframe
          src={{NEW_COMPANY_FORM_URL}}
          title="New Company form"
          class="form-dialog-frame"
        ></iframe>
      {{/if}}
    </dialog>
  </template>
}
