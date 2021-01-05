function getemoji() {
    var fetch = document.getElementById("output");
  var command = document.getElementById("input").value;
  var prefix  = "$emoji%"
let res = ""
switch(command) {
    case (prefix + "grinning.face"):
        res = "😀";
        break;
    case (prefix + "grinning.face.with.big.eyes"):
        res = "😃";
        break;
    case (prefix + "grinning.face.with.smiling.eyes"):
        res = "😄";
        break;
    case (prefix + "beaming.face.with.smiling.eyes"):
        res = "😁";
        break;
    case (prefix + "grinning.squinting.face"):
        res = "😆";
        break;
    case (prefix + "grinning.face.with.sweat"):
        res = "😅";
        break;
    case (prefix + "rolling.on.the.floor.laughing"):
        res = "🤣";
        break;
    case (prefix + "face.with.tears.of.joy"):
        res = "😂";
        break;
    case (prefix + "slightly.smiling.face"):
        res = "🙂";
        break;
    case (prefix + "upside.down.face"):
        res = "🙃";
        break;
    case (prefix + "winking.face"):
        res = "😉";
        break;
    case (prefix + "smiling.face.with.smiling.eyes"):
        res = "😊";
        break;
    case (prefix + "smiling.face.with.halo"):
        res = "😇";
        break;
    case (prefix + "smiling.face.with.hearts"):
        res = "🥰";
        break;
    case (prefix + "smiling.face.with.heart.eyes"):
        res = "😍";
        break;
    case (prefix + "star.struck"):
        res = "🤩";
        break;
    case (prefix + "face.blowing.a.kiss"):
        res = "😘";
        break;
    case (prefix + "kissing.face"):
        res = "😗";
        break;
    case (prefix + "smiling.face"):
        res = "☺";
        break;
    case (prefix + "kissing.face.with.closed.eyes"):
        res = "😚";
        break;
    case (prefix + "kissing.face.with.smiling.eyes"):
        res = "😙";
        break;
    case (prefix + "smiling.face.with.tear"):
        res = "🥲";
        break;
    case (prefix + "face.savoring.food"):
        res = "😋";
        break;
    case (prefix + "face.with.tongue"):
        res = "😛";
        break;
    case (prefix + "winking.face.with.tongue"):
        res = "😜";
        break;
    case (prefix + "zany.face"):
        res = "🤪";
        break;
    case (prefix + "squinting.face.with.tongue"):
        res = "😝";
        break;
    case (prefix + "money.mouth.face"):
        res = "🤑";
        break;
    case (prefix + "hugging.face"):
        res = "🤗";
        break;
    case (prefix + "face.with.hand.over.mouth"):
        res = "🤭";
        break;
    case (prefix + "shushing.face"):
        res = "🤫";
        break;
    case (prefix + "thinking.face"):
        res = "🤔";
        break;
    case (prefix + "zipper.mouth.face"):
        res = "🤐";
        break;
    case (prefix + "face.with.raised.eyebrow"):
        res = "🤨";
        break;
    case (prefix + "neutral.face"):
        res = "😐";
        break;
    case (prefix + "expressionless.face"):
        res = "😑";
        break;
    case (prefix + "face.without.mouth"):
        res = "😶";
        break;
    case (prefix + "smirking.face"):
        res = "😏";
        break;
    case (prefix + "unamused.face"):
        res = "😒";
        break;
    case (prefix + "face.with.rolling.eyes"):
        res = "🙄";
        break;
    case (prefix + "grimacing.face"):
        res = "😬";
        break;
    case (prefix + "lying.face"):
        res = "🤥";
        break;
    case (prefix + "relieved.face"):
        res = "😌";
        break;
    case (prefix + "pensive.face"):
        res = "😔";
        break;
    default: 
    return;
}
fetch.innerHTML = res;
}