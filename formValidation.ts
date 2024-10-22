
// formValidation.ts
export function validateEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

export function validateRequiredFields(...fields: string[]): boolean {
    return fields.every(field => field.trim() !== "");
}
