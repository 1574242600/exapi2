import toFileString from "../../searchParams/file";

test("toFileString()", () => {
    const text = toFileString("qwq", true, true, true);
    expect(text).toBe("fs_from=qwq&fs_similar=1&fs_exp=1&fs_covers=1");
});