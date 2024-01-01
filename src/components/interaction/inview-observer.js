class InviewTarget {
  constructor(targets) {
    this.targets = targets;
    this.threshold = 0.5;
    this.observer = null;
  }

  observeElement() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: this.threshold,
      }
    );

    if (this.targets.length > 1) {
      this.targets.forEach((target) => this.observer.observe(target));
    } else {
      this.observer.observe(this.targets);
    }
  }

  disconnect() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

export default InviewTarget;
