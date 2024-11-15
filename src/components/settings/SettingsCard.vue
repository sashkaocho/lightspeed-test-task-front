<script setup lang="ts">
const isWidgetEnabled = defineModel("isWidgetEnabled")
const showedProductsLength = defineModel("showedProductsLength")
</script>

<template>
  <div class="a-card a-card--compact">
    <div class="a-card__paddings">
      <div class="iconable-block iconable-block--hide-in-mobile">
        <div class="iconable-block__content">
          <div class="toggle-row">
            <div class="form-area">
              <div
                class="form-area__title toggle-row__title form-area__title--medium"
              >
                <span class="gwt-InlineLabel form-area__title-text"
                  >Enable widget</span
                >
                <label class="checkbox">
                  <input
                    type="checkbox"
                    checked=""
                    name=""
                    v-model="isWidgetEnabled"
                  />
                  <div data-on="enabled" data-off="disabled">
                    <div></div>
                  </div>
                </label>
              </div>

              <div>
                <span class="gwt-InlineHTML">
                  Enable widget on cart page, where user can see recently
                  updated products list
                </span>
              </div>

              <div class="fieldset fieldset--select pt-5">
                <div class="field field--medium">
                  <select class="field__select" v-model="showedProductsLength">
                    <option value="2">2</option>
                    <option value="4">4</option>
                    <option value="6">6</option>
                    <option selected value="8">8</option>
                    <option value="10">10</option>
                  </select>

                  <div class="field__placeholder">
                    {{ showedProductsLength }}
                  </div>

                  <span class="field-state--success"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26px"
                      height="26px"
                      viewBox="0 0 26 26"
                    >
                      <path
                        d="M5 12l5.02 4.9L21.15 4c.65-.66 1.71-.66 2.36 0 .65.67.65 1.74 0 2.4l-12.3 14.1c-.33.33-.76.5-1.18.5-.43 0-.86-.17-1.18-.5l-6.21-6.1c-.65-.66-.65-1.74 0-2.41.65-.65 1.71-.65 2.36.01z"
                      ></path></svg
                  ></span>
                  <span class="field-state--close"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16px"
                      height="16px"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M15.6,15.5c-0.53,0.53-1.38,0.53-1.91,0L8.05,9.87L2.31,15.6c-0.53,0.53-1.38,0.53-1.91,0 c-0.53-0.53-0.53-1.38,0-1.9l5.65-5.64L0.4,2.4c-0.53-0.53-0.53-1.38,0-1.91c0.53-0.53,1.38-0.53,1.91,0l5.64,5.63l5.74-5.73 c0.53-0.53,1.38-0.53,1.91,0c0.53,0.53,0.53,1.38,0,1.91L9.94,7.94l5.66,5.65C16.12,14.12,16.12,14.97,15.6,15.5z"
                      ></path></svg
                  ></span>
                  <span class="field__arrow"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 26 26"
                    >
                      <path
                        d="M7.85 10l5.02 4.9 5.27-4.9c.65-.66 1.71-.66 2.36 0 .65.67.65 1.74 0 2.4l-6.45 6.1c-.33.33-.76.5-1.18.5-.43 0-.86-.17-1.18-.5l-6.21-6.1c-.65-.66-.65-1.74 0-2.41.66-.65 1.72-.65 2.37.01z"
                      ></path></svg
                  ></span>
                </div>
              </div>
              <div class="pt-2">
                <span class="gwt-InlineHTML">
                  Select number of recently updated products shown in widget
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
