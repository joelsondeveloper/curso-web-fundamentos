function setupTestimonials(config) {
        const wrapper = document.querySelector(config.wrapper);
        if (!wrapper) return;
        
        const items = wrapper.querySelectorAll(config.items);
        if (items.length == 0) return;

        if (window.matchMedia("(width >= 60rem)").matches){

          wrapper.classList.add("js-enabled");
          wrapper.style.setProperty("--qtd", items.length);

          items.forEach((item, index) => {
            const clone = item.cloneNode(true);
            wrapper.appendChild(clone);
          });
        }

      }