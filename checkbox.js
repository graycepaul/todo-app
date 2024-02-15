class CheckboxWithLabel extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
      <style>
      label {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    
      #checkbox {
        -webkit-appearance: none;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        color: #fff;
        outline: none;
        border: 1px solid #B5EA81;
        margin-right: 15px;
      }

      #checkbox:checked::before {
        content: '';
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath fill='%23fafafa' d='M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat center center;
        background-size: contain;
        color: white;
        position: absolute;
        width: 20px;
        height: 20px; 
      }
    
      #checkbox:checked {
        background-color: #B5EA81;
        color: #fff;
      }
    
      label {
        color: #929292;
      }
    </style>
    <label>
      <input type="checkbox" id="checkbox">
      <slot></slot>
    </label>
    
</style>

    `;

    const checkbox = shadow.querySelector("#checkbox");
    checkbox.addEventListener("change", () => {
      const isChecked = checkbox.checked;
      const event = new CustomEvent("checkboxChange", { detail: isChecked });
      this.dispatchEvent(event);
    });
  }
}

customElements.define("checkbox-with-label", CheckboxWithLabel);
