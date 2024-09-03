export function parsePuzzle(puzzle: string): string[][] {
    const parsedSudoku: string[][] = [];

    for (let i = 0; i < 9; i++) {
        const row: string[] = [];
        for (let j = 0; j < 9; j++) {
        const index = i * 9 + j;
        row.push(puzzle[index]);
        }
        parsedSudoku.push(row);
    }

    return parsedSudoku;
}