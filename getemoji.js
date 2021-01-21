function getemoji() {
    var fetch = document.getElementById("output");
  var command = document.getElementById("input").value;
  var prefix  = "$emoji%"
let res = ""
//face-smiling
if(command===(prefix+"grinning.face")) {fetch.innerHTML="😀"}
else if(command===(prefix+"grinning.face.with.big.eyes")) {fetch.innerHTML="😃"}
else if(command===(prefix+" grinning.face.with.smiling.eyes")) {fetch.innerHTML="😄"}
else if(command===(prefix+"beaming.face.with.smiling.eyes")) {fetch.innerHTML="😁"}
else if(command===(prefix+"grinning.squinting.face")) {fetch.innerHTML="😆"}
else if(command===(prefix+"grinning.face.with.sweat")) {fetch.innerHTML="😅"}
else if(command===(prefix+"rolling.on.the.floor.laughing")) {fetch.innerHTML="🤣"}
else if(command===(prefix+"face.with.tears.of.joy")) {fetch.innerHTML="😂"}
else if(command===(prefix+"slightly.smiling.face")) {fetch.innerHTML="🙂"}
else if(command===(prefix+"upside-down.face")) {fetch.innerHTML="🙃"}
else if(command===(prefix+"winking.face")) {fetch.innerHTML="😉"}
else if(command===(prefix+"smiling.face.with.smiling.eyes")) {fetch.innerHTML="😊"}
else if(command===(prefix+"smiling.face.with.halo")) {fetch.innerHTML="😇"}
//face-affection
else if(command===(prefix+"smiling.face.with.hearts")) {fetch.innerHTML="🥰"}
else if(command===(prefix+"smiling.face.with.heart.eyes")) {fetch.innerHTML="😍"}
else if(command===(prefix+"star.struck")) {fetch.innerHTML="🤩"}
else if(command===(prefix+"face.blowing.a.kiss")) {fetch.innerHTML="😘"}
else if(command===(prefix+"kissing.face")) {fetch.innerHTML="😗"}
else if(command===(prefix+"smiling.face")) {fetch.innerHTML="☺"}
else if(command===(prefix+"kissing.face.with.closed.eyes")) {fetch.innerHTML="😚"}
else if(command===(prefix+"kissing.face.with.smiling.eyes")) {fetch.innerHTML="😙"}
else if(command===(prefix+"smiling.face.with.tear")) {fetch.innerHTML="🥲"}
//face-tongue
else if(command===(prefix+"face.savoring.food")) {fetch.innerHTML="😋"}
else if(command===(prefix+"face.with.tongue")) {fetch.innerHTML="😛"}
else if(command===(prefix+"winking.face.with.tongue")) {fetch.innerHTML="😜"}
else if(command===(prefix+"zany.face")) {fetch.innerHTML="🤪"}
else if(command===(prefix+"squinting.face.with.tongue")) {fetch.innerHTML="😝"}
else if(command===(prefix+"money.mouth.face")) {fetch.innerHTML="🤑"}
//face-hand
else if(command===(prefix+"hugging.face")) {fetch.innerHTML="🤗"}
else if(command===(prefix+"face.with.hand.over.mouth")) {fetch.innerHTML="🤭"}
else if(command===(prefix+"shushing.face")) {fetch.innerHTML="🤫"}
else if(command===(prefix+"thinking.face")) {fetch.innerHTML="🤔"}
//face-neutral-skeptical
else if(command===(prefix+"zipper.mouth.face")) {fetch.innerHTML="🤐"}
else if(command===(prefix+"face.with.raised.eyebrow")) {fetch.innerHTML="🤨"}
else if(command===(prefix+"neutral.face")) {fetch.innerHTML="😐"}
else if(command===(prefix+"expressionless.face")) {fetch.innerHTML="😑"}
else if(command===(prefix+"face.without.mouth")) {fetch.innerHTML="😶"}
else if(command===(prefix+"smirking.face")) {fetch.innerHTML="😏"}
else if(command===(prefix+"unamused.face")) {fetch.innerHTML="😒"}
else if(command===(prefix+"face.with.rolling.eyes")) {fetch.innerHTML="🙄"}
else if(command===(prefix+"grimacing.face")) {fetch.innerHTML="😬"}
else if(command===(prefix+"lying.face")) {fetch.innerHTML="🤥"}
//face-sleepy
else if(command===(prefix+"relieved.face")) {fetch.innerHTML="😌"}
else if(command===(prefix+"pensive.face")) {fetch.innerHTML="😔"}
else if(command===(prefix+"sleepy.face")) {fetch.innerHTML="😪"}
else if(command===(prefix+"drooling.face")) {fetch.innerHTML="🤤"}
else if(command===(prefix+"sleeping.face")) {fetch.innerHTML="😴"}
//face-unwell
else if(command===(prefix+"face.with.medical.mask")) {fetch.innerHTML="😷"}
else if(command===(prefix+"face.with.thermometer")) {fetch.innerHTML="🤒"}
else if(command===(prefix+"face.with.head.bandage")) {fetch.innerHTML="🤕"}
else if(command===(prefix+"nauseated.face")) {fetch.innerHTML="🤢"}
else if(command===(prefix+"face.vomiting")) {fetch.innerHTML="🤮"}
else if(command===(prefix+"sneezing.face")) {fetch.innerHTML="🤧"}
else if(command===(prefix+"hot.face")) {fetch.innerHTML="🥵"}
else if(command===(prefix+"cold.face")) {fetch.innerHTML="🥶"}
else if(command===(prefix+"woozy.face")) {fetch.innerHTML="🥴"}
else if(command===(prefix+"knocked.out.face")) {fetch.innerHTML="😵"}
else if(command===(prefix+"exploding.head")) {fetch.innerHTML="🤯"}
//face-hat
else if(command===(prefix+"cowboy.hat.face")) {fetch.innerHTML="🤠"}
else if(command===(prefix+"partying.face")) {fetch.innerHTML="🥳"}
else if(command===(prefix+"disguised.face")) {fetch.innerHTML="🥸"}
//face-glasses
else if(command===(prefix+"smiling.face.with.sunglasses")) {fetch.innerHTML="😎"}
else if(command===(prefix+"nerd.face")) {fetch.innerHTML="🤓"}
else if(command===(prefix+"face.with.monocle")) {fetch.innerHTML="🧐"}
//face-concerned
else if(command===(prefix+"confused.face")) {fetch.innerHTML="😕"}
else if(command===(prefix+"worried.face")) {fetch.innerHTML="😟"}
else if(command===(prefix+"slightly.frowning.face")) {fetch.innerHTML="🙁"}
else if(command===(prefix+"frowning.face")) {fetch.innerHTML="☹"}
else if(command===(prefix+"face.with.open.mouth")) {fetch.innerHTML="😮"}
else if(command===(prefix+"hushed.face")) {fetch.innerHTML="😯"}
else if(command===(prefix+"astonished.face")) {fetch.innerHTML="😲"}
else if(command===(prefix+"flushed.face")) {fetch.innerHTML="😳"}
else if(command===(prefix+"pleading.face")) {fetch.innerHTML="🥺"}
else if(command===(prefix+"frowning.face.with.open.mouth")) {fetch.innerHTML="😦"}
else if(command===(prefix+"anguished.face")) {fetch.innerHTML="😧"}
else if(command===(prefix+"fearful.face")) {fetch.innerHTML="😨"}
else if(command===(prefix+"anxious.face.with.sweat")) {fetch.innerHTML="😰"}
else if(command===(prefix+"sad.but.relieved.face")) {fetch.innerHTML="😥"}
else if(command===(prefix+"crying.face")) {fetch.innerHTML="😢"}
else if(command===(prefix+"loudly.crying.face")) {fetch.innerHTML="😭"}
else if(command===(prefix+"face.screaming.in.fear")) {fetch.innerHTML="😱"}
else if(command===(prefix+"confounded.face")) {fetch.innerHTML="😖"}
else if(command===(prefix+"persevering.face")) {fetch.innerHTML="😣"}
else if(command===(prefix+"disappointed.face")) {fetch.innerHTML="😞"}
else if(command===(prefix+"downcast.face.with.sweat")) {fetch.innerHTML="😓"}
else if(command===(prefix+"weary.face")) {fetch.innerHTML="😩"}
else if(command===(prefix+"tired.face")) {fetch.innerHTML="😫"}
else if(command===(prefix+"yawning.face")) {fetch.innerHTML="🥱"}
//face-negative
else if(command===(prefix+"face.with.steam.from.nose")) {fetch.innerHTML="😤"}
else if(command===(prefix+"pouting.face")) {fetch.innerHTML="😡"}
else if(command===(prefix+"angry.face")) {fetch.innerHTML="😠"}
else if(command===(prefix+"face.with.symbols.on.mouth")) {fetch.innerHTML="🤬"}
else if(command===(prefix+"smiling.face.with.horns")) {fetch.innerHTML="😈"}
else if(command===(prefix+"angry.face.with.horns")) {fetch.innerHTML="👿"}
else if(command===(prefix+"skull")) {fetch.innerHTML="💀"}
else if(command===(prefix+"skull.and.crossbones")) {fetch.innerHTML="☠"}
//face-costume
else if(command===(prefix+"pile.of.poo")) {fetch.innerHTML="💩"}
else if(command===(prefix+"clown.face")) {fetch.innerHTML="🤡"}
else if(command===(prefix+"ogre")) {fetch.innerHTML="👹"}
else if(command===(prefix+"goblin")) {fetch.innerHTML="👺"}
else if(command===(prefix+"ghost")) {fetch.innerHTML="👻"}
else if(command===(prefix+"alien")) {fetch.innerHTML="👽"}
else if(command===(prefix+"alien.monster")) {fetch.innerHTML="👾"}
else if(command===(prefix+"robot")) {fetch.innerHTML="🤖"}
//cat-face
else if(command===(prefix+"grinning.cat")) {fetch.innerHTML="😺"}
else if(command===(prefix+"grinning.cat.with.smiling.eyes")) {fetch.innerHTML="😸"}
else if(command===(prefix+"cat.with.tears.of.joy")) {fetch.innerHTML="😹"}
else if(command===(prefix+"smiling.cat.with.heart.eyes")) {fetch.innerHTML="😻"}
else if(command===(prefix+"cat.with.wry.smile")) {fetch.innerHTML="😼"}
else if(command===(prefix+"kissing.cat")) {fetch.innerHTML="😽"}
else if(command===(prefix+"weary.cat")) {fetch.innerHTML="🙀"}
else if(command===(prefix+"crying.cat")) {fetch.innerHTML="😿"}
else if(command===(prefix+"pouting.cat")) {fetch.innerHTML="😾"}
//monkey-face
else if(command===(prefix+"see.no.evil.monkey")) {fetch.innerHTML="🙈"}
else if(command===(prefix+"hear.no.evil.monkey")) {fetch.innerHTML="🙉"}
else if(command===(prefix+"speak.no.evil.monkey")) {fetch.innerHTML="🙊"}
//emotion
else if(command===(prefix+"kiss.mark")) {fetch.innerHTML="💋"}
else if(command===(prefix+"love.letter")) {fetch.innerHTML="💌"}
else if(command===(prefix+"heart.with.arrow")) {fetch.innerHTML="💘"}
else if(command===(prefix+"heart.with.ribbon")) {fetch.innerHTML="💝"}
else if(command===(prefix+"sparkling.heart")) {fetch.innerHTML="💖"}
else if(command===(prefix+"growing.heart")) {fetch.innerHTML="💗"}
else if(command===(prefix+"beating.heart")) {fetch.innerHTML="💓"}
else if(command===(prefix+"revolving.hearts")) {fetch.innerHTML="💞"}
else if(command===(prefix+"two.hearts")) {fetch.innerHTML="💕"}
else if(command===(prefix+"heart.decoration")) {fetch.innerHTML="💟"}
else if(command===(prefix+"heart.exclamation")) {fetch.innerHTML="❣"}
else if(command===(prefix+"broken.heart")) {fetch.innerHTML="💔"}
else if(command===(prefix+"red.heart")) {fetch.innerHTML="❤"}
else if(command===(prefix+"orange.heart")) {fetch.innerHTML="🧡"}
else if(command===(prefix+"yellow.heart")) {fetch.innerHTML="💛"}
else if(command===(prefix+"green.heart")) {fetch.innerHTML="💚"}
else if(command===(prefix+"blue.heart")) {fetch.innerHTML="💙"}
else if(command===(prefix+"purple.heart")) {fetch.innerHTML="💜"}
else if(command===(prefix+"brown.heart")) {fetch.innerHTML="🤎"}
else if(command===(prefix+"black.heart")) {fetch.innerHTML="🖤"}
else if(command===(prefix+"white.heart")) {fetch.innerHTML="🤍"}
else if(command===(prefix+"hundred.points")) {fetch.innerHTML="💯"}
else if(command===(prefix+"anger.symbol")) {fetch.innerHTML="💢"}
else if(command===(prefix+"collision")) {fetch.innerHTML="💥"}
else if(command===(prefix+"dizzy")) {fetch.innerHTML="💫"}
else if(command===(prefix+"sweat.droplets")) {fetch.innerHTML="💦"}
else if(command===(prefix+"dashing.away")) {fetch.innerHTML="💨"}
else if(command===(prefix+"hole")) {fetch.innerHTML="🕳"}
else if(command===(prefix+"bomb")) {fetch.innerHTML="💣"}
else if(command===(prefix+"speech.balloon")) {fetch.innerHTML="💬"}
else if(command===(prefix+"eye.in.speech.bubble")) {fetch.innerHTML="👁️‍🗨️"}
else if(command===(prefix+"left.speech.bubble")) {fetch.innerHTML="🗨"}
else if(command===(prefix+"right.anger.bubble")) {fetch.innerHTML="🗯"}
else if(command===(prefix+"thought.balloon")) {fetch.innerHTML="💭"}
else if(command===(prefix+"zzz")) {fetch.innerHTML="💤"}
//hand-fingers-open
else if(command===(prefix+"waving.hand")) {fetch.innerHTML="👋"}
else if(command===(prefix+"raised.back.of.hand")) {fetch.innerHTML="🤚"}
else if(command===(prefix+"hand.with.fingers.splayed")) {fetch.innerHTML="🖐"}
else if(command===(prefix+"raised.hand")) {fetch.innerHTML="✋"}
else if(command===(prefix+"vulcan.salute")) {fetch.innerHTML="🖖"}
//hand-fingers-partial
else if(command===(prefix+"ok.hand")) {fetch.innerHTML="👌"}
else if(command===(prefix+"pinched.fingers")) {fetch.innerHTML="🤌"}
else if(command===(prefix+"pinching.hand")) {fetch.innerHTML="🤏"}
else if(command===(prefix+"victory.hand")) {fetch.innerHTML="✌"}
else if(command===(prefix+"crossed.fingers")) {fetch.innerHTML="🤞"}
else if(command===(prefix+"love.you.gesture")) {fetch.innerHTML="🤟"}
else if(command===(prefix+"sign.of.the.horns")) {fetch.innerHTML="🤘"}
else if(command===(prefix+"call.me.hand")) {fetch.innerHTML="🤙"}
//hand-single-finger
else if(command===(prefix+"backhand.index.pointing.left")) {fetch.innerHTML="👈"}
else if(command===(prefix+"backhand.index.pointing.right")) {fetch.innerHTML="👉"}
else if(command===(prefix+"backhand.index.pointing.up")) {fetch.innerHTML="👆"}
else if(command===(prefix+"middle.finger")) {fetch.innerHTML="🖕"}
else if(command===(prefix+"backhand.index.pointing.down")) {fetch.innerHTML="👇"}
else if(command===(prefix+"index.pointing.up")) {fetch.innerHTML="☝"}
//hand-fingers-closed
else if(command===(prefix+"thumbs.up")) {fetch.innerHTML="👍"}
else if(command===(prefix+"thumbs.down")) {fetch.innerHTML="👎"}
else if(command===(prefix+"raised.fist")) {fetch.innerHTML="✊"}
else if(command===(prefix+"oncoming.fist")) {fetch.innerHTML="👊"}
else if(command===(prefix+"left.facing.fist")) {fetch.innerHTML="🤛"}
else if(command===(prefix+"right.facing.fist")) {fetch.innerHTML="🤜"}
//hands
else if(command===(prefix+"clapping.hands")) {fetch.innerHTML="👏"}
else if(command===(prefix+"raising.hands")) {fetch.innerHTML="🙌"}
else if(command===(prefix+"open.hands")) {fetch.innerHTML="👐"}
else if(command===(prefix+"palms.up.together")) {fetch.innerHTML="🤲"}
else if(command===(prefix+"handshake")) {fetch.innerHTML="🤝"}
else if(command===(prefix+"folded.hands")) {fetch.innerHTML="🙏"}
//hand-prop
else if(command===(prefix+"writing.hand")) {fetch.innerHTML="✍"}
else if(command===(prefix+"nail.polish")) {fetch.innerHTML="💅"}
else if(command===(prefix+"selfie")) {fetch.innerHTML="🤳"}
//body-parts
else if(command===(prefix+"flexed.biceps")) {fetch.innerHTML="💪"}
else if(command===(prefix+"mechanical.arm")) {fetch.innerHTML="🦾"}
else if(command===(prefix+"mechanical.leg")) {fetch.innerHTML="🦿"}
else if(command===(prefix+"leg")) {fetch.innerHTML="🦵"}
else if(command===(prefix+"foot")) {fetch.innerHTML="🦶"}
else if(command===(prefix+"ear")) {fetch.innerHTML="👂"}
else if(command===(prefix+"ear.with.hearing.aid")) {fetch.innerHTML="🦻"}
else if(command===(prefix+"nose")) {fetch.innerHTML="👃"}
else if(command===(prefix+"brain")) {fetch.innerHTML="🧠"}
else if(command===(prefix+"anatomical.heart")) {fetch.innerHTML="🫀"}
else if(command===(prefix+"lungs")) {fetch.innerHTML="🫁"}
else if(command===(prefix+"tooth")) {fetch.innerHTML="🦷"}
else if(command===(prefix+"bone")) {fetch.innerHTML="🦴"}
else if(command===(prefix+"eyes")) {fetch.innerHTML="👀"}
else if(command===(prefix+"eye")) {fetch.innerHTML="👁"}
else if(command===(prefix+"tongue")) {fetch.innerHTML="👅"}
else if(command===(prefix+"mouth")) {fetch.innerHTML="👄"}
//person
else if(command===(prefix+"baby")) {fetch.innerHTML="👶"}
else if(command===(prefix+"child")) {fetch.innerHTML="🧒"}
else if(command===(prefix+"boy")) {fetch.innerHTML="👦"}
else if(command===(prefix+"girl")) {fetch.innerHTML="👧"}
else if(command===(prefix+"person")) {fetch.innerHTML="🧑"}
}