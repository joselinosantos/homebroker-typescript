import { View } from "./view.js";
export class MensagemView extends View {
    template(model, tipo) {
        return `
      <p class="alert alert-${tipo}">${model}</p>
      `;
    }
}
