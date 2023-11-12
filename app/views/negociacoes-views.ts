import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes, any> {
  protected template(model: Negociacoes): string {
    const lista = model.lista();
    if (lista.length > 0) {
      return `
      <table class="table table-striped table-dark table-hover">
          <thead>
              <tr>
                  <th>DATA</th>
                  <th>QUANTIDADE</th>
                  <th>VALOR</th>
              </tr>
          </thead>
          <tbody>
          ${lista
            .map((negociacao) => {
              return `<tr>
            <td>${this.formatar(negociacao.data)}</td>
            <td>${negociacao.quantidade}</td>
            <td>R$ ${negociacao.valor}</td>
            </tr>`;
            })
            .join("")}
          </tbody>
      </table>
  `;
    } else {
      return "Nenhuma negociação adicionada";
    }
  }

  private formatar(data: Date): string {
    return new Intl.DateTimeFormat().format(data);
  }
}
