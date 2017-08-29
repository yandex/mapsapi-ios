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

#import "CDVConnection.h"
#import "CDVReachability.h"

FOUNDATION_EXPORT double cordova_plugin_network_informationVersionNumber;
FOUNDATION_EXPORT const unsigned char cordova_plugin_network_informationVersionString[];

