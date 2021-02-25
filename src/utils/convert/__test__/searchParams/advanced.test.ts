import { SearchParams } from "../../../../types";
import toAdvancedString, { 
    toBetweenString, 
    toDisableFilterString, 
    toEnableString, 
    toRatingString, 
    toShowString
} from "../../searchParams/advanced";

const advanced: SearchParams["advanced"] = {
    enable: {
        name: true,
        tags: true,
        desc: true,
        torr: true,
        dt1: true,
        dt2: true
    },
    show: {
        torr: true,
        delete: true
    },
    rating: 2,
    between: [1, 2],
    disableFilter: {
        lang: true,
        uploader: true,
        tags: true
    }
}; 

test("toAdvancedString()", () => {
    expect(toAdvancedString(advanced))
        .toBe("advsearch=1&f_sname=on&f_stags=on&f_sdesc=on&f_storr=on&f_sdt1=on&f_sdt2=on&f_sto=on&f_sh=on&f_sr=on&f_srdd=2&f_sp=on&f_spf=1&f_spt=2&f_sfl=on&f_sfu=on&f_sft=on");
});

describe("测试 toAdvancedString", () => {

    it("toEnableString()", () => {
        expect(toEnableString(advanced.enable))
            .toBe("f_sname=on&f_stags=on&f_sdesc=on&f_storr=on&f_sdt1=on&f_sdt2=on");
    });

    it("toShowString()", () => {
        expect(toShowString(advanced.show))
            .toBe("f_sto=on&f_sh=on");
    });

    it("toRatingString()", () => {
        expect(toRatingString(advanced.rating))
            .toBe("f_sr=on&f_srdd=2");
    });

    it("toBetweenString()", () => {
        expect(toBetweenString(advanced.between))
            .toBe("f_sp=on&f_spf=1&f_spt=2");
    });

    it("toDisableFilterString()", () => {
        expect(toDisableFilterString(advanced.disableFilter))
            .toBe("f_sfl=on&f_sfu=on&f_sft=on");
    });
});