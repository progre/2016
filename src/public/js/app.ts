/// <reference path="./typings.d.ts" />
const stampList = [
    { "id": "stamp001", "image": "/images/stamp/stamp001.png", "src": "https://twitter.com/moune_you/status/659208188995092480/photo/1", "src2": "https://twitter.com/rgx_6/status/522360412960862209/photo/1" },
    { "id": "stamp002", "image": "/images/stamp/stamp002.png", "src": "https://twitter.com/moune_you/status/659209940246986752/photo/1", "src2": "https://twitter.com/rgx_6/status/522360848170233856/photo/1" },
    { "id": "stamp003", "image": "/images/stamp/stamp003.png", "src": "https://twitter.com/moune_you/status/659210559078842370/photo/1", "src2": "https://twitter.com/rgx_6/status/522361121047461888/photo/1" },
    { "id": "stamp004", "image": "/images/stamp/stamp004.png", "src": "https://twitter.com/moune_you/status/659210930513833984/photo/1", "src2": "https://twitter.com/rgx_6/status/522361355886551042/photo/1" },
    { "id": "stamp005", "image": "/images/stamp/stamp005.png", "src": "https://twitter.com/moune_you/status/659211303026692096/photo/1", "src2": "https://twitter.com/rgx_6/status/522361504457175040/photo/1" },
    { "id": "stamp006", "image": "/images/stamp/stamp006.png", "src": "https://twitter.com/moune_you/status/659211380667518976/photo/1", "src2": "https://twitter.com/rgx_6/status/522361648976117760/photo/1" },
    { "id": "stamp007", "image": "/images/stamp/stamp007.png", "src": "https://twitter.com/moune_you/status/659211433243115521/photo/1", "src2": "https://twitter.com/rgx_6/status/522361819633967105/photo/1" },
    { "id": "stamp008", "image": "/images/stamp/stamp008.png", "src": "https://twitter.com/moune_you/status/659211483318849536/photo/1", "src2": "https://twitter.com/rgx_6/status/522361967839678465/photo/1" },
    { "id": "stamp009", "image": "/images/stamp/stamp009.png", "src": "https://twitter.com/moune_you/status/659211544731873280/photo/1", "src2": "https://twitter.com/rgx_6/status/522362176044937220/photo/1" },
    { "id": "stamp010", "image": "/images/stamp/stamp010.png", "src": "https://twitter.com/moune_you/status/659211625962999808/photo/1", "src2": "https://twitter.com/rgx_6/status/522404331186696192/photo/1", "isCover": true },
    { "id": "stamp011", "image": "/images/stamp/stamp011.png", "src": "https://twitter.com/moune_you/status/659211677305442304/photo/1", "src2": "https://twitter.com/rgx_6/status/522404544106352640/photo/1", "isCover": true },
    { "id": "stamp012", "image": "/images/stamp/stamp012.png", "src": "https://twitter.com/moune_you/status/659211738894602240/photo/1", "src2": "https://twitter.com/rgx_6/status/522417840448491521/photo/1" },
    { "id": "stamp013", "image": "/images/stamp/stamp013.png", "src": "https://twitter.com/moune_you/status/659211787040980992/photo/1", "src2": "https://twitter.com/rgx_6/status/522405226620284928/photo/1" },
    { "id": "stamp014", "image": "/images/stamp/stamp014.png", "src": "https://twitter.com/moune_you/status/659211835040624640/photo/1", "src2": "https://twitter.com/rgx_6/status/522766964427460608/photo/1" },
    { "id": "stamp015", "image": "/images/stamp/stamp015.png", "src": "https://twitter.com/moune_you/status/659211891697291264/photo/1", "src2": "https://twitter.com/rgx_6/status/522767277603561472/photo/1" },
    { "id": "stamp016", "image": "/images/stamp/stamp016.png", "src": "https://twitter.com/moune_you/status/659211942419156992/photo/1", "src2": "https://twitter.com/rgx_6/status/522767450757419009/photo/1" },
    { "id": "stamp017", "image": "/images/stamp/stamp017.png", "src": "https://twitter.com/moune_you/status/659212000707264512/photo/1", "src2": "https://twitter.com/rgx_6/status/522767635335745536/photo/1" },
    { "id": "stamp018", "image": "/images/stamp/stamp018.png", "src": "https://twitter.com/moune_you/status/659212053719027712/photo/1", "src2": "https://twitter.com/rgx_6/status/524590277718056960/photo/1" },
    { "id": "stamp019", "image": "/images/stamp/stamp019.png", "src": "https://twitter.com/moune_you/status/659212110354771968/photo/1", "src2": "https://twitter.com/rgx_6/status/524590716224151552/photo/1" },
    { "id": "stamp020", "image": "/images/stamp/stamp020.png", "src": "https://twitter.com/moune_you/status/659212198988779520/photo/1", "src2": "https://twitter.com/rgx_6/status/524590966997385216/photo/1" },
    { "id": "stamp021", "image": "/images/stamp/stamp021.png", "src": "https://twitter.com/moune_you/status/659212258585669634/photo/1", "src2": "https://twitter.com/rgx_6/status/524591261454323715/photo/1" },
    { "id": "stamp022", "image": "/images/stamp/stamp022.png", "src": "https://twitter.com/moune_you/status/659212317263966208/photo/1", "src2": "https://twitter.com/rgx_6/status/526770459207938048/photo/1" },
    { "id": "stamp023", "image": "/images/stamp/stamp023.png", "src": "https://twitter.com/moune_you/status/659212377909411844/photo/1", "src2": "https://twitter.com/rgx_6/status/526770723155496962/photo/1", "isCover": true },
    { "id": "stamp024", "image": "/images/stamp/stamp024.png", "src": "https://twitter.com/moune_you/status/659212434834481153/photo/1", "src2": "https://twitter.com/rgx_6/status/526770879250694144/photo/1" },
    { "id": "stamp025", "image": "/images/stamp/stamp025.png", "src": "https://twitter.com/moune_you/status/659212507018457090/photo/1", "src2": "https://twitter.com/rgx_6/status/526771052546777088/photo/1" },
    { "id": "stamp026", "image": "/images/stamp/stamp026.png", "src": "https://twitter.com/moune_you/status/659212572281827328/photo/1", "src2": "https://twitter.com/rgx_6/status/529625956441288706/photo/1" },
    { "id": "stamp027", "image": "/images/stamp/stamp027.png", "src": "https://twitter.com/moune_you/status/659212662425829376/photo/1", "src2": "https://twitter.com/rgx_6/status/529626148628488192/photo/1" },
    { "id": "stamp028", "image": "/images/stamp/stamp028.png", "src": "https://twitter.com/moune_you/status/659212771444199424/photo/1", "src2": "https://twitter.com/rgx_6/status/529626319496036352/photo/1" },
    { "id": "stamp029", "image": "/images/stamp/stamp029.png", "src": "https://twitter.com/moune_you/status/659212819313725440/photo/1", "src2": "https://twitter.com/rgx_6/status/529626494377533440/photo/1" },
    { "id": "stamp030", "image": "/images/stamp/stamp030.png", "src": "https://twitter.com/moune_you/status/659212878453456896/photo/1", "src2": "https://twitter.com/rgx_6/status/532561590793420802/photo/1" },
    { "id": "stamp031", "image": "/images/stamp/stamp031.png", "src": "https://twitter.com/moune_you/status/659212932274786304/photo/1", "src2": "https://twitter.com/rgx_6/status/532561768707403777/photo/1" },
    { "id": "stamp032", "image": "/images/stamp/stamp032.png", "src": "https://twitter.com/moune_you/status/659212995399020544/photo/1", "src2": "https://twitter.com/rgx_6/status/532562016733380608/photo/1" },
    { "id": "stamp033", "image": "/images/stamp/stamp033.png", "src": "https://twitter.com/moune_you/status/659213051468451840/photo/1", "src2": "https://twitter.com/rgx_6/status/532562160593813504/photo/1", "isCover": true },
    { "id": "stamp034", "image": "/images/stamp/stamp034.png", "src": "https://twitter.com/moune_you/status/659213115456815104/photo/1", "src2": "https://twitter.com/rgx_6/status/540174691927719936/photo/1" },
    { "id": "stamp035", "image": "/images/stamp/stamp035.png", "src": "https://twitter.com/moune_you/status/659213171958284289/photo/1", "src2": "https://twitter.com/rgx_6/status/540175173198938112/photo/1" },
    { "id": "stamp036", "image": "/images/stamp/stamp036.png", "src": "https://twitter.com/moune_you/status/659213240077955073/photo/1", "src2": "https://twitter.com/rgx_6/status/540175330086879232/photo/1" },
    { "id": "stamp037", "image": "/images/stamp/stamp037.png", "src": "https://twitter.com/moune_you/status/659213304938696705/photo/1", "src2": "https://twitter.com/rgx_6/status/540175466594705408/photo/1" },
    { "id": "stamp038", "image": "/images/stamp/stamp038.png", "src": "https://twitter.com/moune_you/status/659213356771872768/photo/1", "src2": "https://twitter.com/rgx_6/status/541281324816818176/photo/1" },
    { "id": "stamp039", "image": "/images/stamp/stamp039.png", "src": "https://twitter.com/moune_you/status/659213405841047553/photo/1", "src2": "https://twitter.com/rgx_6/status/541281473890754561/photo/1" },
    { "id": "stamp040", "image": "/images/stamp/stamp040.png", "src": "https://twitter.com/moune_you/status/659213460169846785/photo/1", "src2": "https://twitter.com/rgx_6/status/541281607789707264/photo/1" },
    { "id": "stamp041", "image": "/images/stamp/stamp041.png", "src": "https://twitter.com/moune_you/status/659213523759685632/photo/1", "src2": "https://twitter.com/rgx_6/status/541281753340456963/photo/1" },
    { "id": "stamp042", "image": "/images/stamp/stamp042.png", "src": "https://twitter.com/moune_you/status/659213572191350784/photo/1", "src2": "https://twitter.com/rgx_6/status/541281894722060289/photo/1" },
    { "id": "stamp043", "image": "/images/stamp/stamp043.png", "src": "https://twitter.com/moune_you/status/659213629040934912/photo/1", "src2": "https://twitter.com/rgx_6/status/555737453898637312/photo/1" },
    { "id": "stamp044", "image": "/images/stamp/stamp044.png", "src": "https://twitter.com/moune_you/status/659213695361257472/photo/1", "src2": "https://twitter.com/rgx_6/status/555737648849899520/photo/1" },
    { "id": "stamp045", "image": "/images/stamp/stamp045.png", "src": "https://twitter.com/moune_you/status/659213765183803392/photo/1", "src2": "https://twitter.com/rgx_6/status/555737812398395393/photo/1" },
    { "id": "stamp046", "image": "/images/stamp/stamp046.png", "src": "https://twitter.com/moune_you/status/659213826668105728/photo/1", "src2": "https://twitter.com/rgx_6/status/555738151398813696/photo/1" },
    { "id": "stamp047", "image": "/images/stamp/stamp047.png", "src": "https://twitter.com/moune_you/status/659213879726096384/photo/1", "src2": "https://twitter.com/rgx_6/status/575304073785671680/photo/1" },
    { "id": "stamp048", "image": "/images/stamp/stamp048.png", "src": "https://twitter.com/moune_you/status/659213936563105792/photo/1", "src2": "https://twitter.com/rgx_6/status/618694933206077440/photo/1" },
    { "id": "stamp049", "image": "/images/stamp/stamp049.png", "src": "https://twitter.com/moune_you/status/659213986425012225/photo/1", "src2": "https://twitter.com/rgx_6/status/618694968207519744/photo/1" },
    { "id": "stamp050", "image": "/images/stamp/stamp050.png", "src": "https://twitter.com/moune_you/status/659214044075720705/photo/1", "src2": "https://twitter.com/rgx_6/status/618694999526371328/photo/1" },
    { "id": "stamp051", "image": "/images/stamp/stamp051.png", "src": "https://twitter.com/moune_you/status/659214111113220096/photo/1", "src2": "https://twitter.com/rgx_6/status/618695029763145728/photo/1" },
    { "id": "stamp052", "image": "/images/stamp/stamp052.png", "src": "https://twitter.com/moune_you/status/659214164091473921/photo/1", "src2": "https://twitter.com/rgx_6/status/636183662896087040/photo/1" },
    { "id": "stamp053", "image": "/images/stamp/stamp053.png", "src": "https://twitter.com/moune_you/status/659214211961085952/photo/1", "src2": "https://twitter.com/rgx_6/status/636183721901580288/photo/1" },
    { "id": "stamp054", "image": "/images/stamp/stamp054.png", "src": "https://twitter.com/moune_you/status/659214258803085312/photo/1", "src2": "https://twitter.com/rgx_6/status/636183761818775552/photo/1" },
    { "id": "stamp055", "image": "/images/stamp/stamp055.png", "src": "https://twitter.com/moune_you/status/662630651082895362/photo/1" },
    { "id": "stamp056", "image": "/images/stamp/stamp056.png", "src": "https://twitter.com/moune_you/status/662630698985979904/photo/1", "isCover": true },
    { "id": "stamp057", "image": "/images/stamp/stamp057.png", "src": "https://twitter.com/moune_you/status/662630745714749441/photo/1" },
    { "id": "stamp058", "image": "/images/stamp/stamp058.png", "src": "https://twitter.com/moune_you/status/662630798546202624/photo/1", "isCover": true }
];


$(() => {
    reload($("#img1")).css("z-index", -100);
    reload($("#img2")).css("z-index", -101);
    fade();
});

function fade() {
    setTimeout(() => {
        $("#img2").css("z-index", -101).show();
        $("#img1").css("z-index", -100);
        $("#img1").fadeOut(() => {
            reload($("#img1"));
        });
        setTimeout(() => {
            $("#img1").css("z-index", -101).show();
            $("#img2").css("z-index", -100);
            $("#img2").fadeOut(() => {
                reload($("#img2"));
            });
            fade();
        }, 5000);
    }, 5000);
}

function reload(img: JQuery) {
    let idx = Math.random() * stampList.length | 0;
    if (idx === stampList.length) {
        idx = 0;
    }
    return img.attr("src", `https://mouneyou.rgx6.com${stampList[idx].image}`);
}
