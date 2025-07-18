import Drawer from "./scripts/Drawer"
import QuickHacks from "./scripts/QuickHacks"

document.addEventListener('DOMContentLoaded', function () {
  new Drawer('#drawer', '#drawer-toggle', '#drawer-close')
  new QuickHacks()
});
