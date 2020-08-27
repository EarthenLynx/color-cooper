/*
 * Methods for RGB - Values
 * Includes:
 * 1) Logical check whether color is rgb - formatted
 * 2) Convert rgb values to hex values. Accepts 3 vars
 * 3) Convert rgb String into an array that can be worked with.
 * 4) Convert rgb Array into string thaz can be passed back
 * 5) Increase brightness of rgb array
 */

// 1) Check if string is rgb - format
export function rgbCheck(color) {
    // Source for RegExp: https://gist.github.com/sethlopezme/d072b945969a3cc2cc11
    let regExpRgb = /^rgb\((0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)\)$/;
    return regExpRgb.test(color);
  }
  
  // 2) Convert rgb strings to hex string
  export function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  
  // 3) Convert rgb string to rgb arr
  export function rgbStrToArr(rgbStr) {
    let rgbCols = rgbStr.slice(4, (rgbStr.length - 1));
    let rgbArr = rgbCols.split(',');
    let rgbArrNum = rgbArr.map(Number);
    return rgbArrNum;
  }
  
  // 4) Convert rgb arr to rgb string
  export function rgbArrToStr(rgbArr) {
    let rgbCols = rgbArr.join(',');
    let rgbStr = 'rgb(' + rgbCols + ')';
    return rgbStr;
  }
  
  // 5) Brightens the array by a relative percentage of its own value
  export function brightenRgbArr(rgbArr, percent) {
    let newArr = [];
    for (let i = 0; i < rgbArr.length; i++) {
      newArr.push(Math.round(rgbArr[i] + (254 + (percent * 2) - rgbArr[i]) * percent / 100));
    }
    return newArr;
  }
  
  // 6) Darkens the array by a relative percentage of its own value
  export function darkenRgbArr(rgbArr, percent) {
    let newArr = [];
    for (let i = 0; i < rgbArr.length; i++) {
      newArr.push(Math.round(rgbArr[i] - ((percent * 2) + rgbArr[i]) * percent / 100));
    }
    return newArr;
  }
  
  
  /*
   * Methods for hex - colors
   * 1) Logical check for whether color is hex
   * 2) Convert hex color to rgb color
   */
  
  // 1) Check if string has hex - format
  export function hexCheck(color) {
    let regExpHex = /^#[0-9a-f]{3,6}$/i;
    return regExpHex.test(color);
  }
  
  // 2) Convert hex string to rgb string
  // Adverbiation to: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb#5624139
  export function hexToRgb(hex) {
    let hexInt = parseInt(hex.slice(1, hex.length), 16);
    let rgbArr = [(hexInt >> 16) & 255, (hexInt >> 8) & 255, hexInt & 255].join(',');
    let rgbStr = 'rgb(' + rgbArr + ')';
    return rgbStr;
  }
  
  /*
   * General methods for colors
   * 1) Create a random (hex) - color
   * 2) Check whether a rgb color is dark or bright
   */
  
  // Create a random hex number
  export function createRandomColor() {
    let rNum = Math.ceil(Math.random() * 16777215).toString(16);
    return '#'.concat(rNum);
  }
  
  // Check for color darkness. Returns false of dark, true of bright
  export function checkForBrightness(arr) {
    let sortedArr = arr.sort;
    return (sortedArr[0] < 150 && sortedArr[1] < 80 && sortedArr[2] < 80) ?
      false : true
  }
  