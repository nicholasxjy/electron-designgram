import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "height": "100%"
    },
    "body": {
        "height": "100%",
        "fontFamily": "'PingFang SC', 'Helvetica Neue', 'Helvetica', 'STHeitiSC-Light', 'Arial', sans-serif"
    },
    "dg-btn": {
        "display": "inline-block",
        "zoom": 1,
        "lineHeight": "normal",
        "whiteSpace": "nowrap",
        "verticalAlign": "middle",
        "textAlign": "center",
        "cursor": "pointer",
        "WebkitUserDrag": "none",
        "WebkitUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none",
        "userSelect": "none",
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box",
        "fontFamily": "inherit",
        "fontSize": "100%",
        "paddingTop": 0.5,
        "paddingRight": 1,
        "paddingBottom": 0.5,
        "paddingLeft": 1,
        "color": "rgba(0, 0, 0, 0.80)",
        "border": "none rgba(0, 0, 0, 0)",
        "backgroundColor": "#E6E6E6",
        "textDecoration": "none",
        "borderRadius": 2
    },
    "dg-btn::-moz-focus-inner": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0
    },
    "dg-btn-hover": {
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#1a000000',GradientType=0)",
        "backgroundImage": "linear-gradient(transparent, rgba(0,0,0, 0.05) 40%, rgba(0,0,0, 0.10))"
    },
    "dg-btn:hover": {
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#1a000000',GradientType=0)",
        "backgroundImage": "linear-gradient(transparent, rgba(0,0,0, 0.05) 40%, rgba(0,0,0, 0.10))"
    },
    "dg-btn:focus": {
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#1a000000',GradientType=0)",
        "backgroundImage": "linear-gradient(transparent, rgba(0,0,0, 0.05) 40%, rgba(0,0,0, 0.10))",
        "outline": 0
    },
    "dg-btn-active": {
        "boxShadow": "0 0 0 1px rgba(0,0,0, 0.15) inset, 0 0 6px rgba(0,0,0, 0.20) inset",
        "borderColor": "#000\\9"
    },
    "dg-btn:active": {
        "boxShadow": "0 0 0 1px rgba(0,0,0, 0.15) inset, 0 0 6px rgba(0,0,0, 0.20) inset",
        "borderColor": "#000\\9"
    },
    "dg-btn[disabled]": {
        "border": "none",
        "backgroundImage": "none",
        "filter": "alpha(opacity=40)",
        "KhtmlOpacity": 0.4,
        "MozOpacity": 0.4,
        "opacity": 0.4,
        "cursor": "not-allowed",
        "boxShadow": "none"
    },
    "dg-btn-disabled": {
        "border": "none",
        "backgroundImage": "none",
        "filter": "alpha(opacity=40)",
        "KhtmlOpacity": 0.4,
        "MozOpacity": 0.4,
        "opacity": 0.4,
        "cursor": "not-allowed",
        "boxShadow": "none"
    },
    "dg-btn-disabled:hover": {
        "border": "none",
        "backgroundImage": "none",
        "filter": "alpha(opacity=40)",
        "KhtmlOpacity": 0.4,
        "MozOpacity": 0.4,
        "opacity": 0.4,
        "cursor": "not-allowed",
        "boxShadow": "none"
    },
    "dg-btn-disabled:focus": {
        "border": "none",
        "backgroundImage": "none",
        "filter": "alpha(opacity=40)",
        "KhtmlOpacity": 0.4,
        "MozOpacity": 0.4,
        "opacity": 0.4,
        "cursor": "not-allowed",
        "boxShadow": "none"
    },
    "dg-btn-disabled:active": {
        "border": "none",
        "backgroundImage": "none",
        "filter": "alpha(opacity=40)",
        "KhtmlOpacity": 0.4,
        "MozOpacity": 0.4,
        "opacity": 0.4,
        "cursor": "not-allowed",
        "boxShadow": "none"
    },
    "dg-btn-hidden": {
        "display": "none"
    },
    "dg-btn-primary": {
        "backgroundColor": "rgb(0, 120, 231)",
        "color": "#fff"
    },
    "dg-btn-selected": {
        "backgroundColor": "rgb(0, 120, 231)",
        "color": "#fff"
    },
    "adg-btn-primary": {
        "backgroundColor": "rgb(0, 120, 231)",
        "color": "#fff"
    },
    "adg-btn-selected": {
        "backgroundColor": "rgb(0, 120, 231)",
        "color": "#fff"
    },
    "a": {
        "textDecoration": "none"
    },
    "ullist-unstyled": {
        "listStyle": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    }
});