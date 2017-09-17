<template>
  <transition name="modal">
    <div class="modal-mask" v-if="show">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header"></slot>
          </div>
          <div class="modal-body">
            <slot name="body"></slot>
          </div>
          <div class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>

const noFnc = () => 0;

export default {
  template: '#modal-template',
  props: {
    autoClose: {
      type: [Number, String],
      default: '',
    },
    onClose: {
      type: Function,
      default: noFnc,
    },
  },
  data() {
    return {
      show: false,
      timeout: 0,
      cbThen: noFnc,
    };
  },
  methods: {
    hideModal({ autoClose }) {
      this.show = false;
      if (this.onClose !== noFnc) this.onClose(this, { autoClose: autoClose || false });
    },
    showModal(args) {
      this.show = true;
      if (args && args.autoClose) {
        this.$emit('autoClose', { autoClose: args.autoClose });
        this.timeout = args.autoClose;
      }
      this.$nextTick().then(this.checkAutoClose());
    },
    checkAutoClose() {
      // if autoClose is set up and no timeout was specified on showModal call
      if (this.autoClose && !this.timeout) {
        this.timeout = this.autoClose;
        if (typeof this.autoClose === 'string') {
          this.timeout = Number.parseInt(this.autoClose, 10);
          if (Number.isNan(this.timeout)) {
            switch (this.autoClose) {
              case 'medium':
                this.timeout = 3500;
                break;
              case 'long':
                this.timeout = 5000;
                break;
              default:
                this.timeout = 2000;
                break;
            }
          }
        }
      }
      if (this.timeout > 0) {
        setTimeout(this.hideModal.bind(this, { autoClose: true }), this.timeout);
      }
    },
  },
};

</script>
<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 94%;
  max-width: 460px;
  margin: 0px auto;
  padding: 10px 5px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
