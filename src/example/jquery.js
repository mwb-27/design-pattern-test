class jQuery {
  constructor(seletor) {
    const slice = Array.prototype.slice;
    const dom = slice.call(document.querySelectorAll(seletor));
    const len = dom?.length || 0;
    for (let i = 0; i < len; i++) {
      this[i] = dom[i];
    }
    this.length = len;
    this.seletor = seletor || "";
  }
  append(node) {}
  addClass() {}
  // ......
}

window.$ = (selector) => {
  // 工厂模式
  return new jQuery(selector);
};
