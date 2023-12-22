import { Controller } from "@hotwired/stimulus";
import tippy from "tippy.js";

export default class extends Controller {
  connect() {
    var el = document.getElementById("tooltip-1--trigger")
    if (el) {
      const instance = tippy(el, {
        theme: 'info',
        hideOnClick: false,
        trigger: 'click',
        interactive: true,
        allowHTML: true,
        content: `
          <div class="tooltip"> \
            <div>Here is some info</div> \
            <div> \
              And <a href="https://www.theverge.com/2013/5/9/4316222/simcity-lead-designer-stone-librande-talks-about-building-game" target="_blank">links work too</a>! \
            </div> \
            <button class="close-tooltip">Close</button> \
          </div>
        `,
        onShow(instance) {
          const closeTooltipButtons = Array.from(instance.popper.querySelectorAll('.close-tooltip'));
          closeTooltipButtons.forEach(button => {
            button.addEventListener('click', function () {
              instance.hide();
            });
          });
        }
      })
    }
  }
}
