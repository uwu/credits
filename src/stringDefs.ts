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
    fuckUpText(`Here~ are~ the 7~~~~ P~~~~M~~~~ ob~ser~va~tions for~~ the
~~~Bos~ton~~ metro~po~li~tan~~~ ar~ea.

~~~~~~~~~~~~~~~At Logan~~~~ Airport,~~~~~~ it was clou~~~~dy.
~~~~~~~~~~~~~~~The tem~per~a~ture was 6~~~~8~~~~ de~grees,
~~~~~~~~the dew point,~~ 4~~~~7~~ -
~~~~~~and~ the~ re~la~tive~~ hu~mi~di~ty,~~~~ 4~~~~6~~~~ per~~cent.
~~~~~~~~~~~~~~~~The~ wind~ was~ south~~west~ at 1~~~~3~ miles~~~~ an~~~~ ho~ur.
~~~~~~~~~~~~The~ pres~~sure~~ was~~ 2~~~~9~~~~.~~~~~~~~9~~~~~~9~~~~~~ in~ches and ri~sing.
~~~~~~~~Elsewher`, 200)
    + fuckUpText("rrrrrrrrr\n", 1000);

export const ocean_c_3 = 
    fuckUpText(`Here~ are~ the 7~~~~ P~~~~M~~~~ ob~ser~va~tions for~~ the
~~~Bos~ton~~ metro~po~li~tan~~~ ar~ea.

~~~~~~~~~~~~~~~At Logan~~~~ Airport,~~~~~~ it was clou~~~~dy.
~~~~~~~~~~~~~~~The tem~per~a~ture was 6~~~~8~~~~ de~grees,
~~~~~~~~the dew point,~~ 4~~~~7~~ -
~~~~~~and~ the~ re~la~tive~~ hu~mi~di~ty,~~~~ 4~~~~6~~~~ per~~cent.
~~~~~~~~~~~~~~~~The~ wind~ was~ south~~west~ at 1~~~~3~ miles~~~~ an~~~~ ho~ur.
~~~~~~~~~~~~The~ pres~~sure~~ was~~ 2~~~~9~~~~.~~~~~~~~9~~~~~~9~~~~~~ in~ches and ri~sing.
~~~~~~~~Elsewher`, 250)
    + fuckUpText("rrrrrrrrr\n", 1000);

// TODO: funding, fdg_single, fdg_down