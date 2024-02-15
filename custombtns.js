class CustomButton extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
        <style>
        .period {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100px;
            padding: 15px 25px;
            font-size: 18px   
           }
        </style>
        <div class="period"><slot></slot></div>
      `;
  }
}

customElements.define("custom-button", CustomButton);
