const data = () =>
    {

      return new Promise((resolve)=> {
        setTimeout(() => {
          resolve([
            {
              id: "node_1",
              type: "heading",
              attrs: {
                level: 1,
              },
              children: [
                {
                  id: "node_2",
                  type: "text",
                  value: "This is the primary heading for our page",
                },
              ],
            },
            {
              id: "node_3",
              type: "heading",
              attrs: {
                level: 2,
              },
              children: [
                {
                  id: "node_4",
                  type: "text",
                  value: "Here is some accompanying info we render as a subheading",
                },
                {
                  id: "node_40",
                  type: "text",
                  value: "Here is some  info we render as a subheading",
                },
              ],
            },
            {
              id: "node_5",
              type: "unordered-list",
              children: [
                {
                  id: "node_6",
                  type: "list-item",
                  children: [
                    {
                      id: "node_7",
                      type: "text",
                      value: "Option 1",
                    },
                  ],
                },
                {
                  id: "node_8",
                  type: "list-item",
                  children: [
                    {
                      id: "node_9",
                      type: "text",
                      value: "Option 2",
                    },
                  ],
                },
                {
                  id: "node_10",
                  type: "list-item",
                  children: [
                    {
                      id: "node_11",
                      type: "text",
                      value: "Option 3",
                    },
                  ],
                },
              ],
            },
            {
              id: "node_12",
              type: "image",
              attrs: {
                width: 300,
                height: 50,
                alt: "Atlassian logo",
                src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTk1IiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMTk1IDMyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBpZD0iaG9yaXpvbnRhbC1sb2dvLWdyYWRpZW50LWJsdWUtYXRsYXNzaWFuIj4KPGcgaWQ9Ikdyb3VwIj4KPGcgaWQ9Ikdyb3VwXzIiPgo8ZyBpZD0iR3JvdXBfMyI+CjxwYXRoIGlkPSJWZWN0b3IiIGQ9Ik03LjA0MDM5IDExLjAyNThDNi42ODA5OSAxMC42Mjk0IDYuMTQxODggMTAuNjY1NSA1Ljg5MDI5IDExLjEzMzlMMC4wNjc5MDE2IDIyLjg0MzdDLTAuMTQ3NzQzIDIzLjMxMjEgMC4xNzU3MjQgMjMuODUyNiAwLjY3ODg5MyAyMy44NTI2SDguODAxNDlDOS4wNTMwNyAyMy44NTI2IDkuMzA0NjYgMjMuNzA4NSA5LjQxMjQ4IDIzLjQ1NjNDMTEuMjA5NSAxOS44MTcyIDEwLjEzMTMgMTQuMzA0NSA3LjA0MDM5IDExLjAyNThaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+CjxwYXRoIGlkPSJWZWN0b3JfMiIgZD0iTTExLjMxNzQgMC4zNjA3ODZDOC4wNDY4NCA1LjU0OTE2IDguMjYyNDggMTEuMjc4IDEwLjQxODkgMTUuNjAxNkMxMi41NzU0IDE5LjkyNTMgMTQuMjI4NiAyMy4yMDQgMTQuMzM2NSAyMy40NTYyQzE0LjQ0NDMgMjMuNzA4NSAxNC42OTU5IDIzLjg1MjYgMTQuOTQ3NCAyMy44NTI2SDIzLjA3QzIzLjU3MzIgMjMuODUyNiAyMy45MzI2IDIzLjMxMjEgMjMuNjgxIDIyLjg0MzdDMjMuNjgxIDIyLjg0MzcgMTIuNzU1MSAwLjkzNzI3MiAxMi40Njc1IDAuMzk2ODE2QzEyLjI4NzggLTAuMTA3NjA5IDExLjY0MDkgLTAuMTQzNjM5IDExLjMxNzQgMC4zNjA3ODZaIiBmaWxsPSIjMjY4NEZGIi8+CjwvZz4KPC9nPgo8ZyBpZD0iR3JvdXBfNCI+CjxnIGlkPSJHcm91cF81Ij4KPGcgaWQ9Ikdyb3VwXzYiPgo8ZyBpZD0iR3JvdXBfNyI+CjxwYXRoIGlkPSJWZWN0b3JfMyIgZD0iTTEyMS43MjcgMTguMDUxN0MxMjEuNzI3IDE0LjYyODggMTE5Ljg5NCAxMy4wMDc0IDExNC43OSAxMS44OTA1QzExMS45NTEgMTEuMjc4IDExMS4yNjggMTAuNjI5NCAxMTEuMjY4IDkuNzI4NjhDMTExLjI2OCA4LjYxMTc0IDExMi4yNzUgOC4xMDczMiAxMTQuMTQ0IDguMTA3MzJDMTE2LjQwOCA4LjEwNzMyIDExOC42MzYgOC43OTE4OSAxMjAuNzU3IDkuNzY0NzFWNS4yNjA5MkMxMTkuMjgzIDQuNTA0MjggMTE2Ljk4MyAzLjkyNzggMTE0LjI4NyAzLjkyNzhDMTA5LjIyIDMuOTI3OCAxMDYuNTk2IDYuMTI1NjUgMTA2LjU5NiA5Ljc2NDcxQzEwNi41OTYgMTIuNjQ3MSAxMDcuOTI2IDE0Ljk1MzEgMTEzLjE3MyAxNS45NjE5QzExNi4zIDE2LjYxMDUgMTE2Ljk0NyAxNy4xMTQ5IDExNi45NDcgMTguMTU5OEMxMTYuOTQ3IDE5LjE2ODYgMTE2LjMgMTkuODE3MiAxMTQuMDcyIDE5LjgxNzJDMTExLjUyIDE5LjgxNzIgMTA4LjQ2NSAxOC45NTI1IDEwNi40ODggMTcuNzYzNVYyMi40ODM0QzEwOC4wNyAyMy4yNzYxIDExMC4xNTQgMjQuMTQwOCAxMTQuMDM2IDI0LjE0MDhDMTE5LjUzNSAyNC4xNDA4IDEyMS43MjcgMjEuNjkwOCAxMjEuNzI3IDE4LjA1MTdaIiBmaWxsPSIjMDA1MkNDIi8+CjxwYXRoIGlkPSJWZWN0b3JfNCIgZD0iTTE3Ny4wMDQgNC4yMTYwM1YyMy44NTI2SDE4MS4xNzNWOC44OTk5OEwxODIuOTM0IDEyLjg2MzNMMTg4LjgyOCAyMy44NTI2SDE5NC4wNzZWNC4yMTYwM0gxODkuOTA3VjE2Ljg5ODdMMTg4LjMyNSAxMy4yMjM2TDE4My41ODEgNC4yMTYwM0gxNzcuMDA0WiIgZmlsbD0iIzAwNTJDQyIvPgo8cGF0aCBpZD0iVmVjdG9yXzUiIGQ9Ik0xNTAuNTE2IDQuMjE2MDNIMTQ1Ljk1MVYyMy44MTY2SDE1MC41MTZWNC4yMTYwM1oiIGZpbGw9IiMwMDUyQ0MiLz4KPHBhdGggaWQ9IlZlY3Rvcl82IiBkPSJNMTQwLjY2OCAxOC4wNTE3QzE0MC42NjggMTQuNjI4OCAxMzguODM1IDEzLjAwNzQgMTMzLjczMSAxMS44OTA1QzEzMC44OTIgMTEuMjc4IDEzMC4yMDkgMTAuNjI5NCAxMzAuMjA5IDkuNzI4NjhDMTMwLjIwOSA4LjYxMTc0IDEzMS4yMTYgOC4xMDczMiAxMzMuMDg0IDguMTA3MzJDMTM1LjM0OSA4LjEwNzMyIDEzNy41NzcgOC43OTE4OSAxMzkuNjk4IDkuNzY0NzFWNS4yNjA5MkMxMzguMjI0IDQuNTA0MjggMTM1LjkyNCAzLjkyNzggMTMzLjIyOCAzLjkyNzhDMTI4LjE2MSAzLjkyNzggMTI1LjUzNyA2LjEyNTY1IDEyNS41MzcgOS43NjQ3MUMxMjUuNTM3IDEyLjY0NzEgMTI2Ljg2NyAxNC45NTMxIDEzMi4xMTQgMTUuOTYxOUMxMzUuMjQxIDE2LjYxMDUgMTM1Ljg4OCAxNy4xMTQ5IDEzNS44ODggMTguMTU5OEMxMzUuODg4IDE5LjE2ODYgMTM1LjI0MSAxOS44MTcyIDEzMy4wMTMgMTkuODE3MkMxMzAuNDYxIDE5LjgxNzIgMTI3LjQwNiAxOC45NTI1IDEyNS40MjkgMTcuNzYzNVYyMi40ODM0QzEyNy4wMSAyMy4yNzYxIDEyOS4wOTUgMjQuMTQwOCAxMzIuOTc3IDI0LjE0MDhDMTM4LjUxMSAyNC4xNDA4IDE0MC42NjggMjEuNjkwOCAxNDAuNjY4IDE4LjA1MTdaIiBmaWxsPSIjMDA1MkNDIi8+CjxwYXRoIGlkPSJWZWN0b3JfNyIgZD0iTTcxLjIzMDQgNC4yMTYwM1YyMy44NTI2SDgwLjU3NUw4Mi4wNDg1IDE5LjYwMUg3NS43OTQ5VjQuMjE2MDNINzEuMjMwNFoiIGZpbGw9IiMwMDUyQ0MiLz4KPHBhdGggaWQ9IlZlY3Rvcl84IiBkPSJNNTIuNzIxIDQuMjE2OFY4LjQ2ODM5SDU3Ljc4ODZWMjMuODUzNEg2Mi4zNTMxVjguNDY4MzlINjcuNzgwMVY0LjIxNjhINTIuNzIxWiIgZmlsbD0iIzAwNTJDQyIvPgo8L2c+CjwvZz4KPHBhdGggaWQ9IlZlY3Rvcl85IiBkPSJNNDYuMDcyMSA0LjIxNjhINDAuMDdMMzMuMjQxMiAyMy44MTczSDM4LjQ1MjZMMzkuNDIzIDIwLjUwMjVDNDAuNTczMSAyMC44MjY4IDQxLjc5NTEgMjEuMDQzIDQzLjA4OSAyMS4wNDNDNDQuMzQ2OSAyMS4wNDMgNDUuNTY4OSAyMC44NjI4IDQ2Ljc1NDkgMjAuNTAyNUw0Ny43MjUzIDIzLjgxNzNINTIuOTM2N0w0Ni4wNzIxIDQuMjE2OFpNNDMuMDUzMSAxNy4wMDc2QzQyLjE5MDUgMTcuMDA3NiA0MS4zMjc5IDE2Ljg2MzUgNDAuNTM3MiAxNi42NDczTDQzLjA1MzEgOC4wNzIwNUw0NS41Njg5IDE2LjY0NzNDNDQuNzc4MiAxNi44NjM1IDQzLjk1MTYgMTcuMDA3NiA0My4wNTMxIDE3LjAwNzZaIiBmaWxsPSIjMDA1MkNDIi8+CjxwYXRoIGlkPSJWZWN0b3JfMTAiIGQ9Ik05Ni43NDg0IDQuMjE2MDNIOTAuNzQ2M0w4My45MTc2IDIzLjgxNjZIODkuMTI5TDkwLjA5OTQgMjAuNTAxOEM5MS4yNDk1IDIwLjgyNiA5Mi40NzE1IDIxLjA0MjIgOTMuNzY1MyAyMS4wNDIyQzk1LjAyMzMgMjEuMDQyMiA5Ni4yNDUzIDIwLjg2MjEgOTcuNDMxMyAyMC41MDE4TDk4LjQwMTcgMjMuODE2NkgxMDMuNjEzTDk2Ljc0ODQgNC4yMTYwM1pNOTMuNzI5NCAxNy4wMDY4QzkyLjg2NjggMTcuMDA2OCA5Mi4wMDQzIDE2Ljg2MjcgOTEuMjEzNiAxNi42NDY1TDkzLjcyOTQgOC4wNzEyOEw5Ni4yNDUyIDE2LjY0NjVDOTUuNDU0NiAxNi44NjI3IDk0LjU5MiAxNy4wMDY4IDkzLjcyOTQgMTcuMDA2OFoiIGZpbGw9IiMwMDUyQ0MiLz4KPHBhdGggaWQ9IlZlY3Rvcl8xMSIgZD0iTTE2Ni45MDUgNC4yMTYwM0gxNjAuOTAyTDE1NC4wNzQgMjMuODE2NkgxNTkuMjg1TDE2MC4yNTUgMjAuNTAxOEMxNjEuNDA2IDIwLjgyNiAxNjIuNjI4IDIxLjA0MjIgMTYzLjkyMSAyMS4wNDIyQzE2NS4xNzkgMjEuMDQyMiAxNjYuNDAxIDIwLjg2MjEgMTY3LjU4NyAyMC41MDE4TDE2OC41NTggMjMuODE2NkgxNzMuNzY5TDE2Ni45MDUgNC4yMTYwM1pNMTYzLjkyMSAxNy4wMDY4QzE2My4wNTkgMTcuMDA2OCAxNjIuMTk2IDE2Ljg2MjcgMTYxLjQwNiAxNi42NDY1TDE2My45MjEgOC4wNzEyOEwxNjYuNDM3IDE2LjY0NjVDMTY1LjYxMSAxNi44NjI3IDE2NC43ODQgMTcuMDA2OCAxNjMuOTIxIDE3LjAwNjhaIiBmaWxsPSIjMDA1MkNDIi8+CjwvZz4KPC9nPgo8L2c+CjwvZz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjEwLjI1MjQiIHkxPSIxMi44MTY4IiB4Mj0iNC4wNzIyMiIgeTI9IjIzLjQ5NDUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzAwNTJDQyIvPgo8c3RvcCBvZmZzZXQ9IjAuOTIyOCIgc3RvcC1jb2xvcj0iIzI2ODRGRiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=",
              },
            },
          ])
        },2000)
      })
    }

  export default data;
  