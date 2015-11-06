callback({
  "levelNumber": 20,
  "size": 161,
  "steps": 86,
  "successRatio": 1,
  "type": "specific",
  "author": "mschordan",
  "hash": "1337872c25460bc8243acfd6b3c06441",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\r\n-- 20-Multiplication-Workshop - SIZE 161/15 - SPEED 70/109 --\r\n\r\n-- This solution is level-specific (quality-limited input) and assumes input\r\n-- values of 0-9.\r\n-- Based on 168.71.specific-Mygod.asm\r\n-- Based on 157.72.specific-mschordan.asm.\r\n\r\n\r\n    BUMPUP   9\r\n    BUMPUP   9\r\n\r\n    INBOX   \r\n    JUMPZ    out1\r\n    COPYTO   0\r\n\r\n    INBOX   \r\n    JUMPZ    out\r\n    COPYTO   1\r\n    SUB      0\r\n    JUMPN    neg\r\n\r\n    BUMPDN   0\r\n    JUMPZ    a1\r\n    SUB      9\r\n    JUMPN    a2\r\n    JUMPZ    a3\r\n    SUB      9\r\n    JUMPN    a4\r\n    JUMPZ    a5\r\n    SUB      9\r\n    JUMPN    a6\r\n    JUMPZ    a7\r\n    SUB      9\r\n    JUMPN    a8\r\n\r\n    COPYFROM 1\r\n    ADD      1\r\n    ADD      1\r\n    COPYTO   3\r\n    ADD      3\r\n    ADD      3\r\nout:\r\n    OUTBOX\r\na:\r\n    INBOX   \r\n    JUMPZ    out1\r\n    COPYTO   0\r\n    INBOX   \r\n    JUMPZ    out\r\n    COPYTO   1\r\n    SUB      0\r\n    JUMPN    neg\r\n\r\n    BUMPDN   0\r\n    JUMPZ    a1\r\n    SUB      9\r\n    JUMPN    a2\r\n    JUMPZ    a3\r\n    SUB      9\r\n    JUMPN    a4\r\n    JUMPZ    a5\r\n    SUB      9\r\n    JUMPN    a6\r\n    JUMPZ    a7\r\n    SUB      9\r\n    JUMPN    a8\r\n\r\n    COPYFROM 1\r\n    ADD      1\r\n    ADD      1\r\n    COPYTO   3\r\n    ADD      3\r\n    ADD      3\r\n    JUMP     out\r\n\r\nneg:\r\n    BUMPDN   1\r\n    JUMPZ    b1\r\n    SUB      9\r\n    JUMPN    b2\r\n    JUMPZ    b3\r\n    SUB      9\r\n    JUMPN    b4\r\n    JUMPZ    b5\r\n    SUB      9\r\n    JUMPN    b6\r\n    JUMPZ    b7\r\n    SUB      9\r\n    JUMPN    b8\r\n\r\n    COPYFROM 0\r\n    ADD      0\r\n    ADD      0\r\n    COPYTO   3\r\n    ADD      3\r\n    ADD      3\r\n    JUMP     out\r\n\r\nout1:\r\n    OUTBOX  \r\n    INBOX   \r\n    JUMP     a\r\n\r\na1:\r\n    COPYFROM 1\r\n    JUMP     out\r\na2:\r\n    COPYFROM 1\r\n    ADD      1\r\n    JUMP     out\r\na3:\r\n    COPYFROM 1\r\n    ADD      1\r\n    ADD      1\r\n    JUMP     out\r\na4:\r\n    COPYFROM 1\r\n    ADD      1\r\n    ADD      1\r\n    ADD      1\r\n    JUMP     out\r\na5:\r\n    COPYFROM 1\r\n    ADD      1\r\n    ADD      1\r\n    ADD      1\r\n    ADD      1\r\n    JUMP     out\r\na6:\r\n    COPYFROM 1\r\n    ADD      1\r\n    ADD      1\r\n    COPYTO   3\r\n    ADD      3\r\n    JUMP     out\r\na7:\r\n    COPYFROM 1\r\n    ADD      1\r\n    ADD      1\r\n    COPYTO   3\r\n    ADD      3\r\n    ADD      1\r\n    JUMP     out\r\na8:\r\n    COPYFROM 1\r\n    ADD      1\r\n    ADD      1\r\n    ADD      1\r\n    COPYTO   3\r\n    ADD      3\r\n    JUMP     out\r\n\r\nb1:\r\n    COPYFROM 0\r\n    JUMP     out\r\nb2:\r\n    COPYFROM 0\r\n    ADD      0\r\n    JUMP     out\r\nb3:\r\n    COPYFROM 0\r\n    ADD      0\r\n    ADD      0\r\n    JUMP     out\r\nb4:\r\n    COPYFROM 0\r\n    ADD      0\r\n    ADD      0\r\n    ADD      0\r\n    JUMP     out\r\nb5:\r\n    COPYFROM 0\r\n    ADD      0\r\n    ADD      0\r\n    ADD      0\r\n    ADD      0\r\n    JUMP     out\r\nb6:\r\n    COPYFROM 0\r\n    ADD      0\r\n    ADD      0\r\n    COPYTO   3\r\n    ADD      3\r\n    JUMP     out\r\nb7:\r\n    COPYFROM 0\r\n    ADD      0\r\n    ADD      0\r\n    COPYTO   3\r\n    ADD      3\r\n    ADD      0\r\n    JUMP     out\r\nb8:\r\n    COPYFROM 0\r\n    ADD      0\r\n    ADD      0\r\n    ADD      0\r\n    COPYTO   3\r\n    ADD      3\r\n    JUMP     out\r\n\r\n"
});