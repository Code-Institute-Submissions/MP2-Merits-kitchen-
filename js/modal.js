"use strict";
class Modal extends HTMLElement {
  constructor() {
    super();
    this._cancelButton;
    this._confirmButton;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
            <style>
                #backdrop {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100vh;
                    background: rgba(0, 0, 0, 0.75);
                    z-index: 10;
                    opacity: 0;
                    pointer-events: none;
                }
                
                :host([opened]) #backdrop,
                :host([opened]) #modal {
                    opacity: 1;
                    pointer-events: all;
                }
                
                :host([opened]) #modal {
                    top: 15vh;
                }
                
                #modal {
                    z-index: 100;
                    position: fixed;
                    top: 10vh;
                    left: 25%;
                    width: 50%;
                    background: white;
                    border-radius: 5px;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    opacity: 0;
                    pointer-events: none;
                    transition: all 0.3s ease-out;
                }
                header {
                    padding: 1rem;
                    border-bottom: 1px solid #ccc;
                }
                ::slotted(h1) {
                    font-size: 1.25rem;
                    margin: 0;
                }
                #main {
                    padding: 1rem;
                }
                #actions {
                    border-top: 1px solid #ccc;
                    padding: 1rem;
                    display: flex;
                    justify-content: flex-end;
                }
                #actions button {
                    margin: 0 0.25rem;
                    border-radius:6px;
                    display:inline-block;
                    cursor:pointer;
                    color:#ffffff;
                    font-family:Arial;
                    font-size:15px;
                    font-weight:bold;
                    padding:6px 24px;
                    text-decoration:none;
                }
                #cancel {
                    box-shadow:inset 0px 1px 0px 0px #f7c5c0;
                    background: #fc8d83 linear-gradient(to bottom, #fc8d83 5%, #e4685d 100%);
                    border:1px solid #d83526;
                    text-shadow:0px 1px 0px #b23e35
                }
                #cancel:hover {
                    background: #e4685d linear-gradient(to bottom, #e4685d 5%, #fc8d83 100%);
                }
                #cancel:active {
                    position:relative;
                    top:1px;
                }
                #confirm {
                    box-shadow:inset 0px 1px 0px 0px #d9fbbe;
                    background: #b8e356 linear-gradient(to bottom, #b8e356 5%, #a5cc52 100%);
                    border:1px solid #83c41a;
                    text-shadow:0px 1px 0px #86ae47;
                }
                #confirm:hover {
                    background: #a5cc52 linear-gradient(to bottom, #a5cc52 5%, #b8e356 100%);
                }
                #confirm:active {
                    position:relative;
                    top:1px;
                }
            </style>
            <div id="backdrop"></div>
            <div id="modal">
                <header>
                    <slot name="title"></slot>
                </header>
                <section id="main">
                    <slot name="main"></slot>
                </section>
                <section id="actions">
                    <button id="cancel">Close</button>
                </section>
            </div>
            `;
    const slots = this.shadowRoot.querySelectorAll("slot");
    const backdrop = this.shadowRoot.querySelector("#backdrop");
    backdrop.addEventListener("click", this._cancelConfirm.bind(this));
  }

  connectedCallback() {
    this._cancelButton = this.shadowRoot.querySelector("#cancel");
    this._confirmButton = this.shadowRoot.querySelector("#confirm");
    this._cancelButton.addEventListener(
      "click",
      this._cancelConfirm.bind(this)
    );
    this._confirmButton.addEventListener(
      "click",
      this._confirmConfirm.bind(this)
    );
  }

  _cancelConfirm(event) {
    this.hide();
  }

  _confirmConfirm() {
    this.hide();
  }

  open() {
    this.setAttribute("opened", "");
  }

  hide() {
    if (this.hasAttribute("opened")) {
      this.removeAttribute("opened");
    }
  }
}

customElements.define("dp-modal", Modal);
