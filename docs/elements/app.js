/* eslint-disable no-undef  */
import { html, css } from 'https://unpkg.com/lit-element@^2.1.0?module'
import { KaskadiSimpleRouter } from './kaskadi-simple-router.js'
import './eojs-eep-descriptor.js'
import './eojs-eep-list.js'
class EOJSWebApp extends KaskadiSimpleRouter {
  static get styles () {
    return css`
      :host{
        --color1: #99ff99;
        --color1-dark50: #00cc00;
        --color1-dark75: #006600;
        --color2: #ffff99;
        --color2-dark50:#cccc00;
        --color2-dark75:#666600;
        --color3: #99ccff;
        --color3-dark50: #0066cc;
        --color3-dark75: #003366;
        --color4: #ddd;
        --color4-dark50: #666;
        --color4-dark75: #333;
        --border: 2px solid var(--color3-dark50);
        --font-family: Roboto;
        --font-size: 15px;
        --size-cell1: 48px;
        --size-space: 5px;
        --size-cell2: calc(var(--size-cell1) * 2 + var(--size-space));
        --size-cell3: calc(var(--size-cell1) * 3 + var(--size-space) * 2);
        --size-cell4: calc(var(--size-cell1) * 4 + var(--size-space) * 3);
        --size-cell5: calc(var(--size-cell1) * 5 + var(--size-space) * 4);
        --border-style: var(--border);
        --border-radius: var(--size-space);
      }
      eojs-eep-descriptor{
        --rorg-color: var(--color3);
        --func-color: var(--color2);
        --type-color: var(--color1);
      }
      eojs-eep-list{
        min-width:250px;
      }
      div{background:var(--color4);display:flex}
      #head{background:#333;color: var(--color4);height:var(--size-cell1)}
    `
  }
  render () {
    var url = new URL(window.location.href)
    var eep = url.searchParams.get('eep')
    return html`
      <div id="head">eonocean-js eep-info browser</div>
      <div>
        <eojs-eep-list eep="${eep}"></eojs-eep-list>
        <eojs-eep-descriptor eep="${eep}"></eojs-eep-descriptor>
      </div>`
  }
}
customElements.define('eojs-webapp', EOJSWebApp)
