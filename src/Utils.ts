export const range = (startAt = 0, size: number) => {
    return [...Array(size).keys()].map(i => i + startAt);
};