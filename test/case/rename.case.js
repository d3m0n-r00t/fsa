//in
[
    "date > tmp/1",
    "INIT",
    "COMMIT",
    "mv tmp/1 tmp/11",
    "STATUS",
    "COMMIT",
    "STATUS",
    "mkdir tmp/sub",
    "touch tmp/sub/2",
    "COMMIT",
    "mv tmp/sub/2 tmp/sub/22",
    "STATUS",
    "COMMIT",
    "STATUS"
]
//out
{"modified":[],"added":["11"],"deleted":["1"]}
{"modified":[],"added":[],"deleted":[]}
{"modified":[],"added":["sub/22"],"deleted":["sub/2"]}
{"modified":[],"added":[],"deleted":[]}