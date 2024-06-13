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

export const shadeColor = (color: string, percent: number) => {
  // Remove the leading '#' if it exists
  color = color?.replace(/^#/, "");

  // If the color is in shorthand form (e.g., '03F'), convert it to full form (e.g., '0033FF')
  if (color.length === 3)
    color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];

  // Split the color into its red, green, and blue components
  let [r, g, b]: any = color.match(/.{2}/g);

  // Convert the hex values to integers and adjust by the percentage
  [r, g, b] = [
    parseInt(r, 16) + percent,
    parseInt(g, 16) + percent,
    parseInt(b, 16) + percent,
  ];

  // Ensure the values are within the valid range [0, 255], then convert back to hex
  r = Math.max(Math.min(255, r), 0).toString(16);
  g = Math.max(Math.min(255, g), 0).toString(16);
  b = Math.max(Math.min(255, b), 0).toString(16);

  // If necessary, pad the hex values with leading zeros to ensure they are two characters long
  const rr = (r.length < 2 ? "0" : "") + r;
  const gg = (g.length < 2 ? "0" : "") + g;
  const bb = (b.length < 2 ? "0" : "") + b;

  // Return the new color in hex format
  return `#${rr}${gg}${bb}`;
};
