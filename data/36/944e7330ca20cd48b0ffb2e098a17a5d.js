callback({
  "levelNumber": 36,
  "size": 35,
  "steps": 64,
  "successRatio": 1,
  "type": "obsolete",
  "author": "AlanDeSmet",
  "hash": "944e7330ca20cd48b0ffb2e098a17a5d",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 36-Alphabetizer - SIZE 35/39 - SPEED 75/109 --\n\n-- This solution is superseded by 31.74-albertferras.asm being functionally same\n-- with further optimization.\n\n    COMMENT  4\na:\nb:\n    COPYFROM 23\n    COPYTO   22\nc:\n    INBOX   \n    COPYTO   [22]\n    JUMPZ    d\n    BUMPUP   22\n    JUMP     c\nd:\n    COMMENT  0\n    COPYFROM 23\n    COPYTO   22\ne:\n    COPYFROM [22]\n    JUMPZ    j\n    INBOX   \n    COPYTO   21\n    JUMPZ    a\n    SUB      [22]\n    JUMPZ    f\n    JUMPN    l\n    JUMP     g\nf:\n    COPYFROM 21\n    OUTBOX  \n    BUMPUP   22\n    JUMP     e\ng:\n    COMMENT  1\nh:\n    COPYFROM [22]\n    JUMPZ    i\n    OUTBOX  \n    BUMPUP   22\n    JUMP     h\ni:\nj:\nk:\n    INBOX   \n    JUMP     k\n    COMMENT  3\nl:\n    COMMENT  2\n    COPYFROM 21\n    OUTBOX  \nm:\n    INBOX   \n    JUMPZ    b\n    OUTBOX  \n    JUMP     m\n\n\nDEFINE COMMENT 0\neJwLZ2BgkBASrRUVjmnqF3Vf2CkesqpR6trq3TKCK0rkm+a+VQyoXK3EMOeFsuCKx6ohq2ZrTF4ZqOO+\n0M1gcjVQK8N5F9HaCEfR2gQ7yYZVVmt631junJZhzbHoka3oaknH2eu73GQ3/vYWXPHTx33hdl+jSeW+\nMU17vC9Vtbt7l/W7eJeBzLgXdq58Trhg1e1wyYaY8MkrZ0YsaReN4in3j2nKZ0g6mGeVcrQQpM6ypq2o\ntoqlsKOsrYi/pL8iuOhWQ3CRVs+E4j8z3MpvrWOsnL/JrPbeRr0G0dXaje4LtRsTWnMbJBs21V2qOlrO\nAjZDuYXBYVGLfe6TZtHaJ80ci0BifYsDvNmXeXv8XXnSbekmDrepOy75sO1bEvnz0ME8syPnyr8cYZlf\ncVhy3Z6DSltO7dHbG73t8wG5rZ8PJGzZsE99U+LmtE0Byxdt5l0atqNr8Zndgiu2H36+fdNRrV0Mo2AU\nDAEAAF0amCQ;\n\nDEFINE COMMENT 1\neJxjZWBgOF520OF42fywo+XWWRlNEbcZRsEoGAUjBgAAlX8IdA;\n\nDEFINE COMMENT 2\neJyTYmBgWJ0ZEaiSc8lHsLjPa2ttn5dCa0zItY7M2HPd39Pb+2Y3svUXTuzqnbySr2fJ1iudG/bJtVUd\nXdXIcIq/pOn03Lyqo0+zN+xTz1bbrpJzb+PcvJgNhypiNpTWJm5OaH2/92JX3QmnCYLXGEbBKBgFgxIA\nALPqM4E;\n\nDEFINE COMMENT 3\neJxjYBgFo2AUjGQAAAQEAAE;\n\nDEFINE COMMENT 4\neJwzZmBg2C2Ta2Qqv0JPSlNN11Nfz5jJyNqmzrjL/b9RiN889czYs7qlaQ1GRwurTS5V2Zgotv030upp\nM3jf3yM2eSVQO8O0SEWt8y6y6v0uKTq9roWmrh5HnQ968nhu9JcNTQ/ekrokRLRWIzihdX3A6x5nz70z\nQ53aFoD1Lfhjc3h5pfWRfZXWLPsZHLI3RNQbrsvsLl67ZTJInuNqpXX8mb22S04ddJhzdk289LkNSZcv\nGKUIXPqe7n+Jo+Tyhel10ufUOpec2jCh9EjVdIZRMApGAckAACnAUx0;\n\nDEFINE LABEL 21\neJxzZGBgyLY6V/7J/GQJk9HJEh69/opbGrMbl6k879RXLJ1SqFA3q1Dh3NJ1iqKr01VkN4Zpae0qMzM6\nIOZUuB+olcEgQFSxyN/Z6bOf3t7PfqnbVENEax+HCFbdDvcu64nlKGlMPFlSmXKpakN6Zndexo+pH9JX\n7ADpU265Vru8aXJ1QX1IjV1VQuvxMusZHWW8S93KI9b+rFbbrt24ZvfDlvd7hbve7/XtWbPbo+/xlpb+\n6Wv2TLpWu3Ny4cSdk3mX/p70eMu+iZ8PgMyb0ybb/G/ivWYQ+8Z82WbxBYIrbs9T2z57ntKW8AU/pl5e\n+LjtwqLpdZ1LOUqal7sXV64G+nnt5GrDddPrGEbBKBjBAAAzKXor;\n\nDEFINE LABEL 22\neJxTZ2Bg2GE6vW6rWcTarWa5r4BcBjMzjpL3Fgx5Nx2qMjndqzKdPRny/nmdLPnnldrB6LVhArPnlsls\nHj+mSjscnPPcumkuSI9UxHvjOeH29nPCjVJmRniXTYl63tkT+77/WLzRpMbEzO6/SbcaQOqM/QO8TdL6\nvEDswGKjFP4SrR7PssLko+WKEQ2VEYG1Vdf8VzVe85foiAlhGAWjYBTQHAAAToc78w;\n\nDEFINE LABEL 23\neJyTYWBg6C59Hj2jQDHifu7z6FeZZukf0g/mbU7jKf+aOr3ua6pWj0ma0ST9DJb5cXmZO/1K/hxzK7c/\nubX2z7EnzXp777TJbgzt1OsX6wypedhilr686X2ic8WKGKCxDDfbGRwUWkP8zGrvNfOXiK5+kXXpGsMo\nGAWjYFABAKoAM8A;\n\n"
});