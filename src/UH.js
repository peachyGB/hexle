import React from "react";
import zeroF from "./img/zeroF.png";
import hexFormat from "./img/HexFormat.png";
import colorVennDiagram from "./img/ColorVennDiagram.png";

function UH() {
  return (
    <div>
      <h1>Understanding Hex</h1>

      <h2>Hexicecimal</h2>
      <p>
        In everyday math we count in base 10 using the digits 0-9. We count up 0
        to 9 and add another column of numbers when we want to count past 9. In
        base 2 (aka binary) we count up from 0 to 1 then add a new column to
        represent numbers beyond 1.
        <br />
        <br />
        Hexicecimal works in the same way but counting 0 to 15. Since there are
        only 10 numerical symbols in our lexicon, (0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
        letters are used in place of double digit numbers (a represents 10, b
        represents 11, ... f represents 15) 01 = 1,
      </p>
      <img src={zeroF} alt="counting in base 16" />
      <h2>Hex Code</h2>
      <p>
        While a hex code may look confusing it can be broken down into smaller
        more digestable parts. The numbers are divided into 3 sets. The first
        set represents how much red is in the color, the second set represents
        the amount of green, and the third set represents the amount of blue. By
        adjusting these values you can select the hex code for over 16 million
        colors.
      </p>
      <img src={hexFormat} alt="hex code broken into RGB sections" />
      <img src={colorVennDiagram} alt="venn diagram of prime colors" />
    </div>
  );
}

export default UH;
