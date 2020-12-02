const componentToHex = (component: number): string => {
    // Hex color code a base 16 number
    const hex = component.toString(16)
    return hex.length === 1 ? '0' + hex : hex
}

export const rgbToHex = (red: number, green: number, blue: number): string =>
    `#${componentToHex(red)}${componentToHex(green)}${componentToHex(blue)}`

export const setTextColor = (hexColor: string): string => {
    let r = parseInt(hexColor.substr(1, 2), 16);
    let g = parseInt(hexColor.substr(3, 2), 16);
    let b = parseInt(hexColor.substr(4, 2), 16);
    let yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    //matches scss variable $bg-dark-color : $bg-light-color
    return (yiq >= 128) ? '#333' : '#eee';
}