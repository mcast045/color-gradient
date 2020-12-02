export const getGradient = (): string | null => localStorage.getItem('gradient')

export const removeGradient = (): void => localStorage.removeItem('gradient')

export const saveGradient = (rgbValues: number[]): void => {
    const gradient = getGradient()
    if (!gradient) localStorage.setItem('gradient', JSON.stringify(rgbValues))
    else {
        const oldGradient = JSON.parse(gradient)
        const latestGradient = oldGradient.slice(oldGradient.length - 6)
        if (latestGradient.every((value: number, i: number) => value === rgbValues[i]))
            return

        const updatedGradient = ([...oldGradient, ...rgbValues])
        //Allow up to 5 saved Gradients
        if (updatedGradient.length < 31)
            localStorage.setItem('gradient', JSON.stringify(updatedGradient))
    }
}
