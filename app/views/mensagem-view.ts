import { View } from "./view.js";

export class MensagemView extends View<string, string> {

  protected template(model: string, tipo: string): string {
    return `
      <p class="alert alert-${tipo}">${model}</p>
      `;
  }

}
