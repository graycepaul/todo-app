const progressTemplate = document.createElement("template");
progressTemplate.innerHTML = ` 
<style>
.progress{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: #B3B3EF;
  width: 100%;
}
.progress-bar {
    border: 1px solid #d0cdcd;
    width: 320px;
    height: 18px;
    border-radius: 10px;
}
.progress-bar::before {
    content: 'span';
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #B3B3EF;
    width: 33%;
    min-width: 10px;
    max-width: 100%; 
    color: transparent;
    border-radius: 10px;
}
</style>
<div class="progress">
<div class="progress-bar"></div>
<p>33% complete</p>
</div>
`;

class ProgressBar extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(progressTemplate.content.cloneNode(true));
  }
}

customElements.define("progress-bar", ProgressBar);
