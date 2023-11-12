export abstract class View<T, M> {
  protected elemento: HTMLElement;
  private escapar = false;

  constructor(seletor: string, escapar?: boolean) {
    const elemento = document.querySelector(seletor);

    if (elemento) {
      this.elemento = elemento as HTMLElement;
    } else {
      throw Error("Seletor não existe no DOM");
    }

    escapar ? (this.escapar = escapar) : undefined;
  }

  protected abstract template(model: T, tipo?: M): string;

  public update(model: T, tipo?: M): void {
    let template = this.template(model, tipo);
    if (this.escapar) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, "");
    }
    this.elemento.innerHTML = template;
  }
}
