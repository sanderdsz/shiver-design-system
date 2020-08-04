var theme = {
    plain: {
      color: "#F8F8F2",
      backgroundColor: "#434c5e"
    },
    styles: [
      {
        types: ["prolog", "constant", "builtin"],
        style: {
          color: "#5E81AC"
        }
      },
      {
        types: ["inserted", "function"],
        style: {
          color: "#88C0D0"
        }
      },
      {
        types: ["deleted"],
        style: {
          color: "#BF616A"
        }
      },
      {
        types: ["changed"],
        style: {
          color: "#D08770"
        }
      },
      {
        types: ["punctuation", "symbol"],
        style: {
          color: "#D8DEE9"
        }
      },
      {
        types: ["string", "char", "tag", "selector"],
        style: {
          color: "#88C0D0"
        }
      },
      {
        types: ["keyword", "variable"],
        style: {
          color: "#81A1C1",
          fontStyle: "italic"
        }
      },
      {
        types: ["comment"],
        style: {
          color: "#c8ccd2"
        }
      },
      {
        types: ["attr-name"],
        style: {
          color: "#8FBCBB"
        }
      },
      {
        types: ["number"],
        style: {
          color: "#B48EAD"
        }
      }
    ]
  };
  
  export default theme;