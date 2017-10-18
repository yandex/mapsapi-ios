#ifdef __OBJC__
#import <UIKit/UIKit.h>
#else
#ifndef FOUNDATION_EXPORT
#if defined(__cplusplus)
#define FOUNDATION_EXPORT extern "C"
#else
#define FOUNDATION_EXPORT extern
#endif
#endif
#endif

#import "CDVWKWebViewEngine.h"
#import "CDVWKWebViewUIDelegate.h"

FOUNDATION_EXPORT double cordova_plugin_wkwebview_engineVersionNumber;
FOUNDATION_EXPORT const unsigned char cordova_plugin_wkwebview_engineVersionString[];

