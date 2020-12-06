interface IHexToRgb {
    r: number,
    g: number,
    b: number
}

const componentToHex = (component: number): string => {
    // Hex color code a base 16 number
    const hex = component.toString(16)
    return hex.length === 1 ? '0' + hex : hex
}

export const rgbToHex = (red: number, green: number, blue: number): string =>
    `#${componentToHex(red)}${componentToHex(green)}${componentToHex(blue)}`


export const hexToRgb = (hex: string): IHexToRgb | null => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

export const setTextColor = (hexColor: string): string => {
    const r = parseInt(hexColor.substr(1, 2), 16);
    const g = parseInt(hexColor.substr(3, 2), 16);
    const b = parseInt(hexColor.substr(4, 2), 16);
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    //matches scss variable $bg-dark-color : $bg-light-color
    return (yiq >= 128) ? '#333' : '#eee';
}