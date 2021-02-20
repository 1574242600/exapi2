import toFileString from "../../searchParams/file";

test("toFileString()", () => {
    const text = toFileString(true, true, true);
    expect(text).toBe("fs_similar=1&fs_exp=1&fs_covers=1");
});