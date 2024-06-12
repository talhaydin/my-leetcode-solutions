// to create inverted color

export const invertColor = (hexColor: any) => {
  // convert the hexadecimal color to its RGB components
  let red = parseInt(hexColor.substr(1, 2), 16);
  let green = parseInt(hexColor.substr(3, 2), 16);
  let blue = parseInt(hexColor.substr(5, 2), 16);

  // invert the RGB components using bitwise operators
  red = 255 - red;
  green = 255 - green;
  blue = 255 - blue;

  // convert the inverted RGB components back to hexadecimal format
  const invertedHexColor =
    "#" + ((red << 16) | (green << 8) | blue).toString(16).padStart(6, "0");

  return invertedHexColor;
};
