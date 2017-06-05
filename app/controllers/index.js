var CGRectMake = require('CoreGraphics').CGRectMake,
    SignatureView = require("SignatureView");
    UIScreen = require('UIKit/UIScreen'),
    UIColor = require('UIKit/UIColor'),
    bounds = UIScreen.mainScreen.bounds;

var signatureView = SignatureView.alloc().initWithFrame(CGRectMake(0, 40, bounds.size.width, 400));

signatureView.foregroundLineColor = UIColor.redColor;
signatureView.backgroundLineColor =UIColor.blueColor;
$.index.add(signatureView);

$.index.open();
