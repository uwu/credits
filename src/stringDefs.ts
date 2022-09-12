// Contains strings used inside index.js
// Kept here to reduce clutter
// Just stored in a POJO
// ported from string_defs.py

import {
  splitWordTemplate,
  fuckUpText,
  workOutDate,
  // @ts-expect-error this file isnt here yet
} from "./animationFunctions.js";

export const ocean_b_0 = `Now for the official national~ weather~ service~ forecast
~~~~for~~ Eastern Massachusetts~ inside of~~ I-~~~~4~~~~9~~~~~~~5~~,
~~~~~~~~    including Boston,

issued at 7~~~~:2~~1~~~~ PM~~~~, ~~~~~~~~~~~~~~Thursday, October~~ 2~~2~~nd.`;

export const ocean_b_1 = `Tonight:

~~~~~Mostly cloudy with isolated~ showers~ until~~ mid~~~~night,
~~~~~~~~~then mostly clear~~ after~~ mid~night.
~~~~~~~~~Lows in the lower 4~~~~0~~~~s.
~~~~~~~~~West winds 10~ to~~ 1~~5~~ miles~~ an~~ hour
~~~~~with~ gusts~~ up~ to~ 2~~~~5~~~~ miles~~ an~~ hour~~.
~~~~~~~~~~Chance of rain:~~~~ 2~~0~~~~ per~cent.`;

export const ocean_b_2 = `Friday:

~~Sunny.
~~~~~~~~~~~~~~~~Lush colour with highs in the low~er 5~~~0~s.
  "~~~~~~~~~~Northwest~~ winds~~ 10~~-~1~~5~~ miles~~ an~~ hour
  "~~~~with gusts up to~~ 2~~~~5~~~~ miles~~ an~~ hour~~.
  "~~~~~~~~~~~~~~~~Friday night,~~ mostly~ clear.
  "~~~~~~~~~~~~~~Lows in the mid-3~~~~0~~s.
  "~~~~~~~~~~~~~~~~North winds 10-1~~~5~~ miles~~ an~~ hour~~.`;

export const ocean_b_3 = `Saturday:

~~~~~~~~Partly sunny.
~~~~~~~~High-@igh-@igh-@igh-@igh-@igh-@igh-@igh-@igh-@igh-@igh-@igh-@igh-@igh-@igh-@igh-@igh-@igh-@igh-i`;

export const ocean_c_0 = `Here~ are~ the 7~~~~ P~~~~M~~~~ ob~ser~va~tions for~~ the
~~~Bos~ton~~ metro~po~li~tan~~~ ar~ea.\n
~~~~~~~~~~~~~~~At Logan~~~~ Airport,~~~~~~ it was clou~~~~dy.
~~~~~~~~~~~~~~~The tem~per~a~ture was 6~~~~8~~~~ de~grees,
~~~~~~~~the dew point,~~ 4~~~~7~~ -
~~~~~~and~ the~ re~la~tive~~ hu~mi~di~ty,~~~~ 4~~~~6~~~~ per~~cent.
~~~~~~~~~~~~~~~~The~ wind~ was~ south~~west~ at 1~~~~3~ miles~~~~ an~~~~ ho~ur.
~~~~~~~~~~~~The~ pres~~sure~~ was~~ 2~~~~9~~~~.~~~~~~~~9~~~~~~9~~~~~~ in~ches and ri~sing.
~~~~~~~~Elsewher${fuckUpText("rrrrrrrrr\n", 800)}`;

export const ocean_c_1 =
  fuckUpText(
    `Here~ are~ the 7~~~~ P~~~~M~~~~ ob~ser~va~tions for~~ the
~~~Bos~ton~~ metro~po~li~tan~~~ ar~ea.

~~~~~~~~~~~~~~~At Logan~~~~ Airport,~~~~~~ it was clou~~~~dy.
~~~~~~~~~~~~~~~The tem~per~a~ture was 6~~~~8~~~~ de~grees,
~~~~~~~~the dew point,~~ 4~~~~7~~ -
~~~~~~and~ the~ re~la~tive~~ hu~mi~di~ty,~~~~ 4~~~~6~~~~ per~~cent.
~~~~~~~~~~~~~~~~The~ wind~ was~ south~~west~ at 1~~~~3~ miles~~~~ an~~~~ ho~ur.
~~~~~~~~~~~~The~ pres~~sure~~ was~~ 2~~~~9~~~~.~~~~~~~~9~~~~~~9~~~~~~ in~ches and ri~sing.
~~~~~~~~Elsewher`,
    100
  ) + fuckUpText("rrrrrrrrr\n", 900);

export const ocean_c_2 =
  fuckUpText(
    `Here~ are~ the 7~~~~ P~~~~M~~~~ ob~ser~va~tions for~~ the
~~~Bos~ton~~ metro~po~li~tan~~~ ar~ea.

~~~~~~~~~~~~~~~At Logan~~~~ Airport,~~~~~~ it was clou~~~~dy.
~~~~~~~~~~~~~~~The tem~per~a~ture was 6~~~~8~~~~ de~grees,
~~~~~~~~the dew point,~~ 4~~~~7~~ -
~~~~~~and~ the~ re~la~tive~~ hu~mi~di~ty,~~~~ 4~~~~6~~~~ per~~cent.
~~~~~~~~~~~~~~~~The~ wind~ was~ south~~west~ at 1~~~~3~ miles~~~~ an~~~~ ho~ur.
~~~~~~~~~~~~The~ pres~~sure~~ was~~ 2~~~~9~~~~.~~~~~~~~9~~~~~~9~~~~~~ in~ches and ri~sing.
~~~~~~~~Elsewher`,
    200
  ) + fuckUpText("rrrrrrrrr\n", 1000);

export const ocean_c_3 =
  fuckUpText(
    `Here~ are~ the 7~~~~ P~~~~M~~~~ ob~ser~va~tions for~~ the
~~~Bos~ton~~ metro~po~li~tan~~~ ar~ea.

~~~~~~~~~~~~~~~At Logan~~~~ Airport,~~~~~~ it was clou~~~~dy.
~~~~~~~~~~~~~~~The tem~per~a~ture was 6~~~~8~~~~ de~grees,
~~~~~~~~the dew point,~~ 4~~~~7~~ -
~~~~~~and~ the~ re~la~tive~~ hu~mi~di~ty,~~~~ 4~~~~6~~~~ per~~cent.
~~~~~~~~~~~~~~~~The~ wind~ was~ south~~west~ at 1~~~~3~ miles~~~~ an~~~~ ho~ur.
~~~~~~~~~~~~The~ pres~~sure~~ was~~ 2~~~~9~~~~.~~~~~~~~9~~~~~~9~~~~~~ in~ches and ri~sing.
~~~~~~~~Elsewher`,
    250
  ) + fuckUpText("rrrrrrrrr\n", 1000);

export const funding_0 = splitWordTemplate(
  `Fun####ding#### for#### this#### pro####gram#### was#### made#### pos####si####ble###~
  by###
    by###
      by###
        by###
          by#
Fun#
   by
     by
       by
         by
Funding#
       by
         by
           by
             by
Funding for
Funding for thi#i#i#i#i#
Funding for this pro####gram###
Funding for this pro####gram###
                   pro
                     pro
                       pro
Funding for this pro#gram.#~
Fun####ding#### for#
           by#
             by#
Funding made#### pos####si####ble#### by#### view####ers#### like#### you.###~
####like#### you.##
####like#### you.##
####like#### you.##
####like#### you.##
####like#### you.##
####like#### you.
 Fu
  Fu`
).repeat(2);

export const funding_1 = splitWordTemplate(`Broad####cast####
Broadcast Cor####por##a####tion.~#####
Cor####po##ra####tion.#####
Cor####po##ra####tion.#####
 Cor###po
  Cor###po
    Co
      Co
Cor####po##ra####tion.#####
Cor####po##ra####tion.#####
Cor####po##ra####tion.#####
 Cor###po
  Cor###po
    Co
      Co
Cor####po##ra###tion.#
 Co
  Co
Cor####po##ra###tion.#
 Co
  Co
Cor####po##ra###tion.#
 Co
  Co
Cor####po##ra###tion.#
 Co
  Co
Cor####po##ra###tion.#
 Co
  Co
Cor####po##ra###tion.#
 Co
  Co
 Cor###po
  Cor###po
    Cor###po
      Cor###po
...#######
 Cor###po#
     cor##
  cor###po#
    cor###po#
 cor##
      cor###po#
  cor###po#
         cor##
     cor###po#
 cor##
   cor##
     cor##
       co#
     co#
 cor###po#
   cor##
 cor###po#
   cor###po#
     cor##
       cor##
         cor###po#
${fuckUpText(
  ` cor###po#
   cor#
 cor###po#
   cor#
     cor#`,
  100,
  "# "
)}
 ...#
 ${fuckUpText(
   ` co#
  co#
 cor###po#
   cor##
     cor###po#
   cor###po#
            cor##
      cor###po#`,
   280,
   "# "
 )}${fuckUpText(
  `             cor###po#
    cor##
                  cor###po#
  cor#
          cor#
                    cor#`,
  500,
  "# "
)}${fuckUpText(
  ` co#
                co#
     cor###po#
                        cor#
  cor###po#
           cor###po#
             cor#
  cor###po#`,
  650,
  "# "
)} ???###p?#
   ??r#
           ???###??#
                       co?#
                                       ???#
....#....#....#....#....#....#....#....#...#...#...#...#..#..
              <##C##O##N##N##E##C##T##I##O##N## ##L##O##S##T##>########################################################################################################################################################################################################################################################################################################################################################################################################################################"`);

export const funding_2 =
  splitWordTemplate(`--####--####-- ####-i####-a-####---- ####-up####-o-#
-n####nu####-l ####fi####nan####cial ####sup####por#
${"An####nu####al ####fi####nan####cial ####sup####por#\n".repeat(5)}An####nu###
An####nu###
`);

export const fundingx2_0 = splitWordTemplate(`" By
  ci
    po
      po
  cor#
    cor#
        by#
          by#
rr#rr#rr#ro#oo#oo#aa#aa#aa#\n
  wers#
 ble#
       b
         b
           F#
         f
       fi
     i
na#aa#aa#aa#aa#aa#aa#aa#
 Fun
Fun####ding#
 Fu#
  Fun#
 fu#
Fun####ding#
 Fu#
  Fun#
 fu#
Fun####ding#
 Fu#
  Fun#
 fu#
Fun####ding#
F
    Fi
   Fin
          Fina
      Finan
po
po
cor#
by#
  por
Por#tio##
Por#tio##
Por#tion# nn#nn#nn
b
 b
by###
---- by###
-------- by###
------------ by###
---------------- by#######
>>#>>###
By#
  by#
fi#nan#
 b#
  b#
   nc#
    nc#
Corr#rr#rr#
View####ers#### like#### you.#
      like#### you.#
    like## you.#
Fun####ding###
Fun####ding###
  Fun###
    Fu#
Fun####ding###
  fu#
    fu#
      fu#
        fu#
          fu#
Cor####por####a####tion
The#### cor####por####a####tion#### for#### pub####lic##
 broad####cast####ing#### and#### bi####-an####nual#### fii#ii#i
of#
nan#
for#
fin####an####cial#### su#
for#### fin####an####cial#### ass#ss#ss
in#
view####ers###
you#####
| ########This######## is######## P####B####S!############~
`);

export const fundingx2_1 =
  splitWordTemplate(
    [...Array(26).keys()].map((i) =>
      `${workOutDate(64 * 3390 + i * 64)}#### Unknown###`.replace(".", ".####")
    ).join("\n")
  ) + "\n| ########This######## is######## P####B####S!############~\n";

// TODO: funding_*, fdg_single_0, fdg_down_*
