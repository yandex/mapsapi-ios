# MapsAPI

Allows to easily add Yandex Maps to your existing iOS project using [Yandex.Maps JavaScript API](https://tech.yandex.com/maps/jsapi/).

<img src="./docs/iphone5s.png" height="350" /> 
<img src="./docs/iphone5c.png" height="350" /> 
<img src="./docs/ipad.png" height="350" />

## Example

To run the example project, clone the repo, and run `pod install` from the Example directory first.

## Installation

MapsAPI is available through [CocoaPods](http://cocoapods.org). To install
it, simply add the following line to your Podfile:

```ruby
pod 'MapsAPI'
```

## Usage

1. Create class `MyMapViewController` inherited from `MapsAPIViewController` and add it to any place you want to put the map.

2. Copy the [myMap.js](defaults/myMap.js) to your target resources and use [JavaScript API](https://tech.yandex.com/maps/jsapi/) to modify it and operate with the map.

> *Note.* You can add other controllers and `.js` files keeping convention of matching names for each pair. 

## Author

Alexander Zinchuk, alexander@zinchuk.com

## License

MapsAPI is available under the MIT license. See the LICENSE file for more info.
