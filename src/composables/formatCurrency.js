export function formatCurrency() {
    const format = (value) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 2

        }).format(value)
    }
    return {
        format
    }
}