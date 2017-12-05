/*!
 * portf
 * My portfolio
 * https://github.com/yakovlevgleb/portf
 * @author Gleb Yakovlev
 * @version 1.0.2
 * Copyright 2017. MIT licensed.
 */
let tl = new TimelineLite();
tl
  .fromTo('.intro', 1.3, {scale: 0.01},{scale: 1})
  .staggerFrom('.preview', 0.3, {scale:0, autoAlpha:0}, 0.1, "stagger");
