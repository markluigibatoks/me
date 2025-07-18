//This is a quick solution but needs to be addressed soon. Keep this minimal and make sure to come back here and move the function to where it correctly belong.

class QuickHacks {
  
  constructor() {
    this.footerLogo = document.querySelector('#footer-logo')
    this.copyright = document.querySelector('#copyright')
    this.footerBody = document.querySelector('#footer-body')

    this.relocate()

    this.events()
  }

  events() {
    window.addEventListener('resize', () => {
      this.relocate();
    })
  }

  relocate() {
    const currentWidth = window.innerWidth
    const isLargeViewport = currentWidth >= 1024

    if(isLargeViewport) {
      this.footerLogo.after(this.copyright);
    } else {
      this.footerBody.after(this.copyright);
    }
  }
}

export default QuickHacks